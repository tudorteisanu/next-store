import db from "../database";
import {UserInterface} from "../../ts/interfaces";

export class UserRepository {
  repository;

  constructor() {
    this.repository = (db  as any).user
  }

  async find(options: any={}): Promise<any> {
    try {
      return  await  this.repository.findMany(options);
    } catch ( error ) {
      console.log( error );
    }
  }

  async create(data: UserInterface): Promise<any> {
    try {
       await  this.repository.create({data});
    } catch ( error ) {
      console.log( error );
    }
  }

  async findOne(where: any): Promise<any> {
    try {
     return await this.repository.findUniqueOrThrow({where});
    } catch ( error ) {
      throw error;
    }
  }

  async update(where: any, data: Partial<UserInterface>): Promise<any> {
    try {
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
}
