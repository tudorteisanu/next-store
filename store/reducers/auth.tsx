import * as types from "../types";

const initialBooks = {
  credentials: null as any,
};

const authReducer = (state = initialBooks, action: any) => {
  switch (action.type) {
    case types.LOGIN:
      state.credentials = action.payload;

      return { ...state, credentials: action.payload };
    case types.LOGOUT:
      state.credentials = null;
      return { ...state, credentials: null };
    case types.SET_TOKEN:
      state.credentials = action.payload;
      return { ...state, credentials: state.credentials };
    default:
      return state;
  }
};

export { authReducer };
