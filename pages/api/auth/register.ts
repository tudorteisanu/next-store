/* eslint-disable import/no-anonymous-default-export */
// @ts-ignore
import {sign} from "jsonwebtoken";
import {serialize} from "cookie";
import {NextApiRequest, NextApiResponse} from "next";
import {UserService} from "../../../api/services";
// @ts-ignore
import {compare, hash} from 'bcrypt';

async function hashPassword(password: string, saltRounds=10): Promise<string> {
  return await hash(password, saltRounds)
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const userService = new UserService()

  const {email, password, name} = req.body;

  try {
    const passwordHash = await hashPassword(password);
    await userService.create({email, name, password: passwordHash} as any)

    res.status(200).json({message: "User successful created"});
  } catch (e: any) {
    res.status(401).json({message: e.message});
  }
}
