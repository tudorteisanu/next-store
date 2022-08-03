import * as types from "../types";
import {updateExistingOrPush} from "../../utils";
import {PayloadAction} from "@reduxjs/toolkit";
import {GoodInterface} from "../../ts/interfaces";

interface GoodsStoreInterface  {
  items: Array<GoodInterface>;
  loading: boolean;
}


const initialBooks: GoodsStoreInterface = {
  items: [],
  loading: false,
};

const goodsReducer = (state = initialBooks, action: PayloadAction<GoodsStoreInterface>) => {
  switch (action.type) {
    case types.LOAD_GOODS:
      return { ...state, items: action.payload };
    case types.GOODS_LOADING:
      return { ...state, loading: action.payload };
    case types.GOODS_UPDATE:
      return { ...state, items: updateExistingOrPush(state.items, action.payload, 'id') };
    default:
      return state;
  }
};

export { goodsReducer };
