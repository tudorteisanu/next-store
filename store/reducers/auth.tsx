import * as types from "../types";
import {PayloadAction} from "@reduxjs/toolkit";

function getInitialData(): any {
  if (typeof window !== 'undefined') {
    const credentials = localStorage.getItem('credentials')

    if (credentials)
    return JSON.parse(credentials)
  }
  return null
}

const isAuthUser = () => {
  if (typeof window !== "undefined") {
    return !!localStorage.getItem('credentials')
  }
  return  false
}

const initialBooks = {
  credentials: getInitialData(),
  loggedIn: isAuthUser()
};

const authReducer = (state = initialBooks, action: PayloadAction) => {
  switch (action.type) {
    case types.LOGIN:
      state.credentials = action.payload;

      return {...state, credentials: action.payload, loggedIn: true};
    case types.LOGOUT:
      state.credentials = null;
      return {...state, credentials: null, loggedIn: false};
    case types.SET_TOKEN:
      state.credentials = action.payload;
      return {...state, credentials: state.credentials};
    default:
      return state;
  }
};

export {authReducer};
