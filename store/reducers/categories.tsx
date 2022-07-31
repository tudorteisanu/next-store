import * as types from "../types";
import {updateExistingOrPush} from "../../utils";

const initialData = {
  items: [] as Array<any>,
  loading: false,
};

const categoriesReducer = (state = initialData, action: any) => {
  switch (action.type) {
    case types.LOAD_CATEGORIES:
      state.items = action.payload;
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
