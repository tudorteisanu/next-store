import {LOAD_GOODS, GOODS_LOADING, GOODS_UPDATE} from "../types";
import http from "../../services/http";
import { ApiRoutes } from "../../ts/enum";

export const fetchGoods = () => async (dispatch: any) => {
  try {
    dispatch({
      type: GOODS_LOADING,
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
      type: GOODS_LOADING,
      payload: false,
    });
  }
};

export const fetchGoodById = (id: number) => async (dispatch: any) => {
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

export const updateGoodById = (id: number, payload: any) => async (dispatch: any) => {
  try {
    const updateGoodById = `${ApiRoutes.Goods}/${id}`
    const response =  await http.patch(updateGoodById, payload);

    dispatch({
      type: GOODS_UPDATE,
      payload: response,
    });
  } catch (e) {
    console.log(e);
  }
};


export const createGood = (payload: any) => async (dispatch: any) => {
  try {
    const response =  await http.post(ApiRoutes.Goods, payload);

    dispatch({
      type: GOODS_UPDATE,
      payload: response,
    });
  } catch (e) {
    throw e;
  }
};
