import {UserInterface} from "../../ts/interfaces";
import {UserRepository} from "../repository";

export class UserService {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository()
  }

  async find(where: any = {}): Promise<UserInterface> {
    return  await this.userRepository.find({where})
  }

  async findOne(id: string): Promise<UserInterface> {
    return await this.userRepository.findOne({id})
  }

  async create(data: UserInterface): Promise<UserInterface> {
    return await this.userRepository.create(data)
  }

  async update(id: string, data: UserInterface): Promise<UserInterface> {
    return await this.userRepository.update({id}, data)
  }

  async delete(id: string): Promise<UserInterface> {
    return await this.userRepository.delete({id})
  }
}
