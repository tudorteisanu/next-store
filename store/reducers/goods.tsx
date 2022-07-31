import * as types from "../types";
import {updateExistingOrPush} from "../../utils";

const initialBooks = {
  items: [] as Array<any>,
  loading: false,
};

const goodsReducer = (state = initialBooks, action: any) => {
  switch (action.type) {
    case types.LOAD_GOODS:
      state.items = action.payload;
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
