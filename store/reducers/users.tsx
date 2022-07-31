import * as types from "../types";
import { updateExistingOrPush} from "../../utils";

const initialData = {
  items: [] as Array<any>,
  loading: false,
};

const usersReducer = (state = initialData, action: any) => {
  switch (action.type) {
    case types.USERS_FETCH:
      state.items = action.payload;
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
