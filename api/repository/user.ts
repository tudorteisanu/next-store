import db from "../database";
import {UserInterface} from "../../ts/interfaces";

export class UserRepository {
   static async find(options: any={}): Promise<any> {
    try {
      return  await  db.user.findMany(options);
    } catch ( error ) {
      console.log( error );
    }
  }

  static async create(data: UserInterface): Promise<any> {
    try {
       await  db.user.create({data});
    } catch ( error ) {
      console.log( error );
    }
  }

  static async findOne(where: any): Promise<any> {
    try {
     return await db.user.findUniqueOrThrow({where});
    } catch ( error ) {
      throw error;
    }
  }

  static async update(where: any, data: Partial<UserInterface>): Promise<any> {
    try {
     return await db.user.update({where, data});
    } catch ( error ) {
      throw error;
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
