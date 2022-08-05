import * as types from "../types";
import {updateExistingOrPush} from "../../utils";
import {PayloadAction} from "@reduxjs/toolkit";
import {CategoryInterface} from "../../ts/interfaces";


interface CategoriesStoreInterface {
  data: Array<CategoryInterface>;
  loading: boolean;
  page: number;
  itemsPerPage?: number;
}

const initialData: CategoriesStoreInterface = {
  data: [],
  page: 1,
  itemsPerPage: 10,
  loading: false,
};

const categoriesReducer = (state = initialData, action: PayloadAction<CategoriesStoreInterface>) => {
  switch (action.type) {
    case types.LOAD_CATEGORIES:
      return {
        ...state,
        ...action.payload,
      };
    case types.CATEGORIES_LOADING:
      return {...state, loading: action.payload};
    case types.UPDATE_CATEGORIES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export {categoriesReducer};
