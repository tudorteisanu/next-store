import {GoodInterface} from "../../ts/interfaces";
import {GoodRepository} from "../repository";

export class GoodService {
  goodRepository: GoodRepository;

  constructor() {
    this.goodRepository = new GoodRepository()
  }

  async find(where: any = {}): Promise<GoodInterface> {
    return  await this.goodRepository.find(where)
  }

  async findOne(id: number): Promise<GoodInterface> {
    return await this.goodRepository.findOne({id})
  }

  async create(data: GoodInterface): Promise<GoodInterface> {
    return await this.goodRepository.create(data)
  }

  async update(id: number, data: GoodInterface): Promise<GoodInterface> {
    return await this.goodRepository.update({id}, data)
  }

  async delete(id: number): Promise<GoodInterface> {
    return await this.goodRepository.delete({id})
  }
}
