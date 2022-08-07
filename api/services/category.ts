import {CategoryInterface} from "../../ts/interfaces";
import {CategoryRepository} from "../repository";
import {DEFAULT_PAGINATION_CONFIG} from "../../ts/consts";
import {CategoryFiltersInterface, PaginationInterface, PaginationQueryInterface} from "../../ts/interfaces/pagination";

export class CategoryService {
  async find(params: PaginationQueryInterface & CategoryFiltersInterface):
    Promise<PaginationInterface<CategoryInterface>> {
    const pagination = {
      ...DEFAULT_PAGINATION_CONFIG,
      ...params,
    };

    const {page, itemsPerPage} = pagination;
    const skip = (Number(page) - 1) * Number(itemsPerPage);
    const take = Number(itemsPerPage);
    const where = {} as any;

    if (params?.price) {
      where.price = {contains: Number(params.price)};
    }

    if (params?.name) {
      where.name = {contains: params.name};
    }

    const data = await CategoryRepository.find({
      skip,
      take,
      where,
      include: {
        photo: true
      }
    });

    const totalItems = await CategoryRepository.getCount();

    const lastPage = Math.ceil(totalItems / itemsPerPage);

    return {
      data,
      itemsPerPage,
      page: Number(page),
      lastPage,
    };
  }

  async findOne(id: number): Promise<CategoryInterface> {
    return await CategoryRepository.findOne({id})
  }

  async create(data: any): Promise<CategoryInterface> {
    return await CategoryRepository.create(data)
  }

  async update(id: number, data: CategoryInterface): Promise<CategoryInterface> {
    return await CategoryRepository.update({id}, data)
  }

  async delete(id: number): Promise<CategoryInterface> {
    return await CategoryRepository.delete({id})
  }
}
