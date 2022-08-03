import {NextApiRequest, NextApiResponse} from "next";
import {UserInterface} from "../../../ts/interfaces";
import {constants} from "http2";
import {RequestMethods} from "../../../ts/enum";
import {UserService} from "../../../api/services";


function notFound(res: NextApiResponse): void {
  res.status(404).json({message: 'Not found'})
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userService = new UserService()

  switch (req.method) {
    case RequestMethods.Get:
      const params = req.query;
      const body = await userService.find(params)
      res.status(200).json(body)
      break
    case RequestMethods.Post:
      const data: UserInterface = req.body;
      await userService.create(data)
      res.status(constants.HTTP_STATUS_CREATED).json({message: 'Success'})
      break
    default:
      notFound(res)
  }
}

export default handler;
