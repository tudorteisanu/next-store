import db from "../database";
import { CreateCategoryInterface} from "../../ts/interfaces";
import {PrismaClient} from "@prisma/client";

export class CategoryRepository {
  db: PrismaClient;

  constructor() {
    this.db = db;
  }

  async find(where: any = {}): Promise<any> {
    try {
      return  await this.db.category.findMany({where, include: {photo: true}});
    } catch (error) {
      throw error;
    }
  }

  async create(data: CreateCategoryInterface): Promise<any> {
    try {
      await db.category.create({data});
    } catch (error) {
      throw error;
    }
  }

  async findOne(where: any): Promise<any> {
    try {
      return await db.category.findUniqueOrThrow({where, include: {photo: true}});
    } catch (error) {
      throw error;
    }
  }

  async update(where: any, payload: any): Promise<any> {
    try {
      const {photo, ...data} = payload;
      return await db.category.update({where, data});
    } catch (error) {
      throw error;
    }
  }

  async delete(where: any): Promise<any> {
    try {
      return await db.category.delete({where});
    } catch (error) {
      throw error;
    }
  }
}
