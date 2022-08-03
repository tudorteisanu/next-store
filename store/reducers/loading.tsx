import * as types from "../types";
import {PayloadAction} from "@reduxjs/toolkit";

const initialData: boolean = false;

const loadingReducer = (state = initialData, action: PayloadAction<boolean>) => {
  switch (action.type) {
    case types.GLOBAL_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export { loadingReducer };
