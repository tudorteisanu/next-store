import {NextApiRequest, NextApiResponse} from "next";
import {constants} from "http2";
import { UserService} from "../../../api/services";
// @ts-ignore
import {verify} from "jsonwebtoken";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userService = new UserService()

  const {authorization} = req.headers
  try {
    const {userId} = await verify(authorization?.split(' ')[1], process.env.SECRET_KEY)
    await userService.findOne(userId)
    res.status(constants.HTTP_STATUS_OK).send('')
  } catch (e) {
    res.status(constants.HTTP_STATUS_UNAUTHORIZED).json({message: 'Unauthorized'})
  }
}

export default handler;
