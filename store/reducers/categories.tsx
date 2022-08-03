import * as types from "../types";
import {updateExistingOrPush} from "../../utils";
import {PayloadAction} from "@reduxjs/toolkit";
import {CategoryInterface} from "../../ts/interfaces";


interface CategoriesStoreInterface  {
  items: Array<CategoryInterface>;
  loading: boolean;
}

const initialData: CategoriesStoreInterface = {
  items: [],
  loading: false,
};

const categoriesReducer = (state = initialData, action: PayloadAction<CategoriesStoreInterface>) => {
  switch (action.type) {
    case types.LOAD_CATEGORIES:
      return { ...state, items: action.payload };
    case types.CATEGORIES_LOADING:
      return { ...state, loading: action.payload };
    case types.UPDATE_CATEGORIES:
      return { ...state, items: updateExistingOrPush(state.items, action.payload, 'id') };
    default:
      return state;
  }
};

export { categoriesReducer };
