import * as types from "../types";
import {PayloadAction} from "@reduxjs/toolkit";
import {GoodInterface} from "../../ts/interfaces";

export interface GoodsStoreInterface  {
  data: Array<GoodInterface>;
  loading: boolean;
}


const initialBooks: GoodsStoreInterface = {
  data: [],
  loading: false,
};

const goodsReducer = (state = initialBooks, action: PayloadAction<GoodsStoreInterface>) => {
  switch (action.type) {
    case types.LOAD_GOODS:
      return { ...state, ...action.payload };
    case types.GOODS_LOADING:
      return { ...state, loading: action.payload };
    case types.GOODS_UPDATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export { goodsReducer };
