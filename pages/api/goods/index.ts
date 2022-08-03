import {NextApiRequest, NextApiResponse} from "next";
import {GoodInterface} from "../../../ts/interfaces";
import {constants} from "http2";
import {RequestMethods} from "../../../ts/enum";
import {GoodService} from "../../../api/services";


function notFound(res: NextApiResponse): void {
  res.status(404).json({message: 'Not found'})
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const goodsService = new GoodService()

  switch (req.method) {
    case RequestMethods.Get:
      const params = req.query;
      const body = await goodsService.find(params)
      res.status(200).json(body)
      break
    case RequestMethods.Post:
      const data: GoodInterface = req.body;
      await goodsService.create(data)
      res.status(constants.HTTP_STATUS_CREATED).json({message: 'Success'})
      break
    default:
      notFound(res)
  }
}

export default handler;
