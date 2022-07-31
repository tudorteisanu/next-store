import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import { goodsReducer } from "./reducers/goods";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth";
import {createWrapper} from "next-redux-wrapper";
import {categoriesReducer} from "./reducers/categories";
import {usersReducer} from "./reducers/users";
import {loadingReducer} from "./reducers/loading";

const reducers = combineReducers({
  goods: goodsReducer,
  auth: authReducer,
  categories: categoriesReducer,
  users: usersReducer,
  loading: loadingReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export { store };
