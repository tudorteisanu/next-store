import db from "../database";

export class FileRepository {
  async create(data: any): Promise<any> {
    try {
       return await  db.file.create({data});
    } catch ( error ) {
      throw error
    }
  }

  async delete(where: any): Promise<any> {
    try {
     return await db.user.delete({where});
    } catch ( error ) {
      throw error;
    }
  }
}
