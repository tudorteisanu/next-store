import * as TYPES from "../types";

export const showLoading = () => async (dispatch: any) => {
  dispatch({
    type: TYPES.GLOBAL_LOADING,
    payload: true,
  });
};

export const hideLoading = () => (dispatch: any) => {
  dispatch({
    type: TYPES.GLOBAL_LOADING,
    payload: false,
  });
};
