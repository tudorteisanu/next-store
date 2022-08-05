export interface PaginationQueryInterface {
  page?: number;
  itemsPerPage?: number;
}

export interface PaginationInterface<Type> extends PaginationQueryInterface{
  data: Type[];
  lastPage: number;
}

export interface CategoryFiltersInterface {
  price?: number;
  name?: string;
}

export interface GoodsFiltersInterface {
  price?: number;
  name?: string;
}
