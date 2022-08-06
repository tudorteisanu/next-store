import {LOGIN, LOGOUT, SET_TOKEN} from "../types";
import { PageRoutes } from "../../ts/enum";
import {Dispatch} from "redux";
import {LoginInterface} from "../../ts/interfaces";
import router from "next/router";

export const login = (payload: LoginInterface) => async (dispatch: Dispatch) => {
  dispatch({
    type: LOGIN,
    payload,
  })

  localStorage.setItem('credentials', JSON.stringify(payload) )

  await router.push(PageRoutes.Home)

};

export const logout = () => async (dispatch: Dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: {credentials: null},
  })

  localStorage.removeItem('credentials' )

  await router.push(PageRoutes.Login)

};

export const setToken = (token: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: SET_TOKEN,
    payload: {token},
  });
};
