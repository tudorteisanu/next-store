import db from "../database";

export class FileRepository {
  static async create(data: any): Promise<any> {
    try {
       return await  db.file.create({data});
    } catch ( error ) {
      throw error
    }
  }

  static async delete(where: any): Promise<any> {
    try {
     return await db.user.delete({where});
    } catch ( error ) {
      throw error;
    }
  }
}
