import {LOGIN, SET_TOKEN} from "../types";
import { PageRoutes } from "../../ts/enum";
// @ts-ignore
import cookieCutter from 'cookie-cutter'

export const login = (payload: any) => async (dispatch: any) => {
  cookieCutter.set('token', payload.token, {path: '/'})
  dispatch({
    type: LOGIN,
    payload,
  });

  window.location.href = PageRoutes.Home;
};

export const setToken = (token: any) => async (dispatch: any) => {
  dispatch({
    type: SET_TOKEN,
    payload: {token},
  });
};
