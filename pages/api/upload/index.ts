// @ts-ignore
import {IncomingForm} from 'formidable'
import fs from 'fs'
import {NextApiRequest, NextApiResponse} from "next";
import {FileService} from "../../../api/services";
import {join} from 'path'
import axios from 'axios';

// first we need to disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  }
};


function getPubicPath(filename: string, imagesDir = 'images'): string {
  return join('storage/public', filename)
}

const saveFile = async (file: any) => {
  const filename = `${file.newFilename}.${file.mimetype.split('/')[1]}`
  const filePath = getPubicPath(filename)
  const data = fs.readFileSync(file.filepath);

  fs.writeFileSync(filePath, data);
  await fs.unlinkSync(file.filepath);

  return {
    filename,
    originalFilename: file.originalFilename,
    mimetype: file.mimetype,
    size: file.size,
    path: filePath,
    url: `/public/${filename}`
  };
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const fileService = new FileService();

  const data: any = await new Promise((resolve, reject) => {
    const form = new IncomingForm()

    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) return reject(err)
      resolve({fields, files})
    })
  })

  const file = await saveFile(data?.files?.file)

  const savedFile = await fileService.create(file)

  res.status(200).json(savedFile)

}

export default handler;
