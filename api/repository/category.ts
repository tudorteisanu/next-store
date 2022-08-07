import db from "../database";

export  class CategoryRepository {
  static async find(params: any = {}): Promise<any> {
    try {
      return  await db.category.findMany(params);
    } catch (error) {
      throw error;
    }
  }

  static async getCount(): Promise<number> {
    return await db.category.count()
  }

  static async create(data: any): Promise<any> {
    try {
      await db.category.create({data});
    } catch (error) {
      throw error;
    }
  }

  static async findOne(where: any): Promise<any> {
    try {
      return await db.category.findUniqueOrThrow({where, include: {photo: true}});
    } catch (error) {
      throw error;
    }
  }

  static async update(where: any, payload: any): Promise<any> {
    try {
      const {photo, ...data} = payload;
      return await db.category.update({where, data});
    } catch (error) {
      throw error;
    }
  }

  static async delete(where: any): Promise<any> {
    try {
      return await db.category.delete({where});
    } catch (error) {
      throw error;
    }
  }
}
