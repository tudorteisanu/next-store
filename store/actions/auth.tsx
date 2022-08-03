import {LOGIN, SET_TOKEN} from "../types";
import { PageRoutes } from "../../ts/enum";
import {Dispatch} from "redux";
import {LoginInterface} from "../../ts/interfaces";

export const login = (payload: LoginInterface) => async (dispatch: Dispatch) => {
  dispatch({
    type: LOGIN,
    payload,
  });

  window.location.href = PageRoutes.Home;
};

export const setToken = (token: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: SET_TOKEN,
    payload: {token},
  });
};
