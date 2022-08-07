import repository from "../database";

export class GoodRepository {
  static async find(params: any={}): Promise<any> {
    try {
       return await  repository.good.findMany(params);
    } catch ( error ) {
      throw error;
    }
  }

  static async create(data: any): Promise<any> {
    try {
       await  repository.good.create({data});
    } catch ( error ) {
      throw error;
    }
  }

  static async findOne(params: any): Promise<any> {
    try {
     return await repository.good.findUniqueOrThrow(params);
    } catch ( error ) {
      throw error;
    }
  }

  static async update(where: any, payload: Partial<any>): Promise<any> {
    try {
      const {photo, ...data} = payload;
     return await repository.good.update({where, data});
    } catch ( error ) {
      throw error;
    }
  }

  static async delete(where: any): Promise<any> {
    try {
     return await repository.good.delete({where});
    } catch ( error ) {
      throw error;
    }
  }

  static  async getCount(): Promise<number> {
    return repository.good.count()
  }
}
