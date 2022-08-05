import {CategoryInterface, GoodInterface} from "../../ts/interfaces";
import {GoodRepository} from "../repository";
import {
  CategoryFiltersInterface,
  GoodsFiltersInterface,
  PaginationInterface,
  PaginationQueryInterface
} from "../../ts/interfaces/pagination";
import {DEFAULT_PAGINATION_CONFIG} from "../../ts/consts";

export class GoodService {
  goodRepository: GoodRepository;

  constructor() {
    this.goodRepository = new GoodRepository()
  }

  async find(params: PaginationQueryInterface & GoodsFiltersInterface):
    Promise<PaginationInterface<GoodInterface>> {

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

    const data = await this.goodRepository.find({
      skip,
      take,
      where,
      include: {
        photo: true
      }
    });

    const totalItems = await this.goodRepository.getCount();

    const lastPage = Math.ceil(totalItems / itemsPerPage);

    return {
      data,
      itemsPerPage,
      page: Number(page),
      lastPage,
    };
  }

  async findOne(id: number): Promise<GoodInterface> {
    return await this.goodRepository.findOne({where: {id}, include: {photo: true}})
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
