import thunk from "redux-thunk";

import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";

import {
  goodsReducer,
  authReducer,
  categoriesReducer,
  usersReducer,
  loadingReducer
} from "./reducers";

const reducers = combineReducers({
  goods: goodsReducer,
  auth: authReducer,
  categories: categoriesReducer,
  users: usersReducer,
  loading: loadingReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export { store };
