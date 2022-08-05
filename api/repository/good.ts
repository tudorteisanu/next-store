import db from "../database";
import {PrismaClient} from "@prisma/client";

export class GoodRepository {
  repository: any;

  constructor() {
    this.repository = db.good;
  }

  async find(params: any={}): Promise<any> {
    try {
       return await  this.repository.findMany(params);
    } catch ( error ) {
      throw error;
    }
  }

  async create(data: any): Promise<any> {
    try {
       await  this.repository.create({data});
    } catch ( error ) {
      throw error;
    }
  }

  async findOne(params: any): Promise<any> {
    try {
     return await this.repository.findUniqueOrThrow(params);
    } catch ( error ) {
      throw error;
    }
  }

  async update(where: any, payload: Partial<any>): Promise<any> {
    try {
      const {photo, ...data} = payload;
     return await this.repository.update({where, data});
    } catch ( error ) {
      throw error;
    }
  }

  async delete(where: any): Promise<any> {
    try {
     return await this.repository.delete({where});
    } catch ( error ) {
      throw error;
    }
  }

  public  async getCount(): Promise<number> {
    return this.repository.count()
  }
}
