import {LOAD_GOODS, GOODS_UPDATE, GLOBAL_LOADING} from "../types";
import http from "../../services/http";
import {ApiRoutes} from "../../ts/enum";
import * as TYPES from "../types";
import {Dispatch} from "redux";
import {GoodInterface} from "../../ts/interfaces";

export const fetchGoods = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GLOBAL_LOADING,
      payload: true,
    });
    const payload = await http.get(ApiRoutes.Goods);

    dispatch({
      type: LOAD_GOODS,
      payload,
    });
  } catch (e) {
    console.log(e);
  } finally {
    dispatch({
      type: GLOBAL_LOADING,
      payload: false,
    });
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
    dispatch({
      type: TYPES.GLOBAL_LOADING,
      payload: true,
    });

    const updateGoodById = `${ApiRoutes.Goods}/${id}`
    const response = await http.patch(updateGoodById, payload);

    dispatch({
      type: GOODS_UPDATE,
      payload: response,
    });
  } catch (e) {
    console.log(e);
  } finally {
    dispatch({
      type: TYPES.GLOBAL_LOADING,
      payload: false,
    });
  }
};

export const createGood = (payload: GoodInterface) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: TYPES.GLOBAL_LOADING,
      payload: true,
    });
    const response = await http.post(ApiRoutes.Goods, payload);

    dispatch({
      type: GOODS_UPDATE,
      payload: response,
    });
  } catch (e) {
    throw e;
  } finally {
    dispatch({
      type: TYPES.GLOBAL_LOADING,
      payload: false,
    });
  }
};
