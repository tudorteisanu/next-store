import db from "../database";
import {UserInterface} from "../../ts/interfaces";

export class UserRepository {
  async find(options: any={}): Promise<any> {
    try {
      return  await  db.user.findMany(options);
    } catch ( error ) {
      console.log( error );
    }
  }

  async create(data: UserInterface): Promise<any> {
    try {
       await  db.user.create({data});
    } catch ( error ) {
      console.log( error );
    }
  }

  async findOne(where: any): Promise<any> {
    try {
     return await db.user.findUniqueOrThrow({where});
    } catch ( error ) {
      throw error;
    }
  }

  async update(where: any, data: Partial<UserInterface>): Promise<any> {
    try {
     return await db.user.update({where, data});
    } catch ( error ) {
      throw error;
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
