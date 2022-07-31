import * as types from "../types";

const initialData: boolean = false;

const loadingReducer = (state = initialData, action: any) => {
  switch (action.type) {
    case types.GLOBAL_LOADING:
      state = action.payload;
      return action.payload;
    default:
      return state;
  }
};

export { loadingReducer };
