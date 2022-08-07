import {UserInterface} from "../../ts/interfaces";
import {UserRepository} from "../repository";

export class UserService {
  async find(where: any = {}): Promise<UserInterface> {
    return  await UserRepository.find({where})
  }

  async findOne(id: string): Promise<UserInterface> {
    return await UserRepository.findOne({id})
  }

  async findByEmail(email: string): Promise<UserInterface> {
    return await UserRepository.findOne({email})
  }

  async create(data: UserInterface): Promise<UserInterface> {
    return await UserRepository.create(data)
  }

  async update(id: string, data: UserInterface): Promise<UserInterface> {
    return await UserRepository.update({id}, data)
  }

  async delete(id: string): Promise<UserInterface> {
    return await UserRepository.delete({id})
  }
}
