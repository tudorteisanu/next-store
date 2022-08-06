/* eslint-disable import/no-anonymous-default-export */
// @ts-ignore
import {sign} from "jsonwebtoken";
import {NextApiRequest, NextApiResponse} from "next";
import {UserService} from "../../../api/services";
// @ts-ignore
import {compare} from 'bcrypt';

const secret = process.env.SECRET_KEY;

async function checkPassword(password: string, passwordHash: string): Promise<void> {
  const validPassword = await compare(password, passwordHash)

  if (!validPassword) {
    throw new Error('Invalid password')
  }
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const userService = new UserService()

  const {email, password} = req.body;

  try {
    const user: any = await userService.findByEmail(email);

    await checkPassword(password, user.password)

    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
        email,
        userId: user.id
      },
      secret
    );

    res.status(200).json({token, user});
  } catch (e: any) {
    res.status(401).json({message: e.message});
  }
}
