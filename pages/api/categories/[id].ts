import {NextApiRequest, NextApiResponse} from "next";
import {constants} from "http2";
import {RequestMethods} from "../../../ts/enum";
import {CategoryService} from "../../../api/services";


function notFound(res: NextApiResponse): void {
  res.status(404).json({message: 'Not found'})
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const categoryService = new CategoryService()

  switch (req.method) {
    case RequestMethods.Get:
      try {
        const {id} = req.query;
        const body = await categoryService.findOne(Number(id));
        res.status(constants.HTTP_STATUS_OK).json(body)
      } catch (e: any) {
        res.status(404).json({
          message: e.message
        })
      }
         break
    case RequestMethods.Patch:
      try {
        const {id} = req.query
        const data = req.body

        await categoryService.update(Number(id), data)

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
        const {id} = req.query;

        await categoryService.delete(Number(id))

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
