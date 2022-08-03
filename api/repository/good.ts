import db from "../database";
import {PrismaClient} from "@prisma/client";

export class GoodRepository {
  db: PrismaClient;

  constructor() {
    this.db = db;
  }

  async find(where: any={}): Promise<any> {
    try {
       return await  db.good.findMany({where, include: {photo: true}});
    } catch ( error ) {
      throw error;
    }
  }

  async create(data: any): Promise<any> {
    try {
       await  this.db.good.create({data});
    } catch ( error ) {
      throw error;
    }
  }

  async findOne(where: any): Promise<any> {
    try {
     return await this.db.good.findUniqueOrThrow({where, include: {photo: true}});
    } catch ( error ) {
      throw error;
    }
  }

  async update(where: any, payload: Partial<any>): Promise<any> {
    try {
      const {photo, ...data} = payload;
     return await this.db.good.update({where, data});
    } catch ( error ) {
      throw error;
    }
  }

  async delete(where: any): Promise<any> {
    try {
     return await this.db.good.delete({where});
    } catch ( error ) {
      throw error;
    }
  }
}
