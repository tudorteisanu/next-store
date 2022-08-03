import * as types from "../types";
import { updateExistingOrPush} from "../../utils";
import {PayloadAction} from "@reduxjs/toolkit";


interface UserStoreInterface  {
  items: Array<UserStoreInterface>;
  loading: boolean;
}

const initialData: UserStoreInterface = {
  items: [],
  loading: false,
};

const usersReducer = (state = initialData, action: PayloadAction<UserStoreInterface>) => {
  switch (action.type) {
    case types.USERS_FETCH:
      return { ...state, items: action.payload };
    case types.USERS_LOADING:
      return { ...state, loading: action.payload };
    case types.USERS_UPDATE:
      return { ...state, items: updateExistingOrPush(state.items, action.payload, 'id') };
    default:
      return state;
  }
};

export { usersReducer };
