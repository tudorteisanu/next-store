import {CategoryInterface} from "../../ts/interfaces";
import {CategoryRepository} from "../repository";

export class CategoryService {
  categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository()
  }

  async find(where: any = {}): Promise<CategoryInterface> {
    return  await this.categoryRepository.find(where)
  }

  async findOne(id: number): Promise<CategoryInterface> {
    return await this.categoryRepository.findOne({id})
  }

  async create(data: any): Promise<CategoryInterface> {
    return await this.categoryRepository.create(data)
  }

  async update(id: number, data: CategoryInterface): Promise<CategoryInterface> {
    return await this.categoryRepository.update({id}, data)
  }

  async delete(id: number): Promise<CategoryInterface> {
    return await this.categoryRepository.delete({id})
  }
}
