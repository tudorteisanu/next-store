import {LOAD_GOODS, GOODS_UPDATE, GLOBAL_LOADING} from "../types";
import http from "../../services/http";
import {ApiRoutes} from "../../ts/enum";
import * as TYPES from "../types";
import {Dispatch} from "redux";
import {GoodInterface} from "../../ts/interfaces";
import {PaginationQueryInterface} from "../../ts/interfaces/pagination";
import {DEFAULT_PAGINATION_CONFIG} from "../../ts/consts";

export const fetchGoods = (query: PaginationQueryInterface = {}) => async (dispatch: Dispatch) => {
  try {
    const params = {
      ...DEFAULT_PAGINATION_CONFIG,
      ...query
    }

    const payload = await http.get(ApiRoutes.Goods, {params});

    dispatch({
      type: LOAD_GOODS,
      payload,
    });

    return payload
  } catch (e) {
    console.log(e);
  }
};

export const fetchGoodById = (id: number) => async (dispatch: Dispatch) => {
  try {
    const goodByIdUrl = `${ApiRoutes.Goods}/${id}`
    const payload = await http.get(goodByIdUrl);

    dispatch({
      type: GOODS_UPDATE,
      payload,
    });
    return payload
  } catch (e) {
    console.log(e);
  }
};

export const updateGoodById = (id: number, payload: GoodInterface) => async (dispatch: Dispatch) => {
  try {
    const updateGoodById = `${ApiRoutes.Goods}/${id}`
    const response = await http.patch(updateGoodById, payload);

    dispatch({
      type: GOODS_UPDATE,
      payload: response,
    });
  } catch (e) {
    console.log(e);
  }
};

export const createGood = (payload: GoodInterface) => async (dispatch: Dispatch) => {
  try {
    const response = await http.post(ApiRoutes.Goods, payload);

    dispatch({
      type: GOODS_UPDATE,
      payload: response,
    });
  } catch (e) {
    throw e;
  }
};
