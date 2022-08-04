import {NextApiRequest, NextApiResponse} from "next";
import {RequestMethods} from "../../../ts/enum";


function notFound(res: NextApiResponse): void {
  res.status(404).json({message: 'Not found'})
}

import fs from 'fs'
import path from 'path'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case RequestMethods.Get:
      console.log(req.url)

      const filePath = path.resolve('.', `public/${req.url?.replace('/api', '')}`)
      const imageBuffer = fs.readFileSync(filePath)

      res.setHeader('Content-Type', 'image/png')
      res.send(imageBuffer)
      break
    default:
      notFound(res)
  }
}

export default handler;
