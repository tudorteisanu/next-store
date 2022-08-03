import {NextApiRequest, NextApiResponse} from "next";
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
      try {
        const {id} = req.query as Record<string, string>;
        const body = await userService.findOne(id);
        res.status(constants.HTTP_STATUS_OK).json(body)
      } catch (e: any) {
        res.status(404).json({
          message: e.message
        })
      }
         break
    case RequestMethods.Patch:
      try {
        const {id} = req.query as Record<string, string>
        const data = req.body

        await userService.update(id, data)

        res.status(constants.HTTP_STATUS_OK).json({
          message: 'Success updated'
        })

      } catch (e: any) {
        res.status(404).json({
          message: e.message
        })
      }
      break
    case RequestMethods.Delete:
      try {
        const {id} = req.query as Record<string, string>

        await userService.delete(id)

        res.status(constants.HTTP_STATUS_OK).json({
          message: 'Success Deleted'
        })

      } catch (e: any) {
        res.status(404).json({
          message: e.message
        })
      }
      break
    default:
      notFound(res)
  }
}

export default handler;
