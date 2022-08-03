import {NextApiRequest, NextApiResponse} from "next";
import {CategoryInterface} from "../../../ts/interfaces";
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
      const params = req.query;
      const body = await categoryService.find(params)
      res.status(200).json(body)
      break
    case RequestMethods.Post:
      const data: CategoryInterface = req.body;
      await categoryService.create(data)
      res.status(constants.HTTP_STATUS_CREATED).json({message: 'Success'})
      break
    default:
      notFound(res)
  }
}

export default handler;
