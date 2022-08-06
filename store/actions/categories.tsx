import { LOAD_CATEGORIES, UPDATE_CATEGORIES} from "../types";
import http from "../../services/http";
import {ApiRoutes} from "../../ts/enum";
import * as TYPES from "../types";
import {Dispatch} from "redux";
import {CategoryInterface} from "../../ts/interfaces";
import {DEFAULT_PAGINATION_CONFIG} from "../../ts/consts";
import {PaginationQueryInterface} from "../../ts/interfaces/pagination";

export const fetchCategories = (query: PaginationQueryInterface) => async (dispatch: Dispatch) => {
  try {

    const params = {
      ...DEFAULT_PAGINATION_CONFIG,
      ...query
    }
    const payload = await http.get(ApiRoutes.Categories, {params});

    dispatch({
      type: LOAD_CATEGORIES,
      payload,
    });
  } catch (e) {
    console.log(e);
  }
};

export const fetchCategoryById = (id: number) => async (dispatch: Dispatch) => {
  try {
    const categoryByIdUrl = `${ApiRoutes.Categories}/${id}`
    const payload = await http.get(categoryByIdUrl);

    dispatch({
      type: UPDATE_CATEGORIES,
      payload,
    });
    return payload
  } catch (e) {
    console.log(e);
  }
};

export const updateCategoryById = (id: number, data: CategoryInterface) => async (dispatch: Dispatch) => {
  try {
    const categoryByIdUrl = `${ApiRoutes.Categories}/${id}`
    const payload = await http.patch(categoryByIdUrl, data);

    dispatch({
      type: UPDATE_CATEGORIES,
      payload,
    });
    return payload
  } catch (e: any) {
    throw e
  }
};
