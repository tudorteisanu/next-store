import * as TYPES from "../types";
import {Dispatch} from "redux";

export const showLoading = () => async (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.GLOBAL_LOADING,
    payload: true,
  });
};

export const hideLoading = () => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.GLOBAL_LOADING,
    payload: false,
  });
};
