import * as TYPES from "../types";
import http from "../../services/http";
import {ApiRoutes} from "../../ts/enum";
import {USERS_UPDATE} from "../types";
import {Dispatch} from "redux";
import {UserInterface} from "../../ts/interfaces";

export const fetchUsers = () => async (dispatch: Dispatch) => {
    try {
        const payload = await http.get(ApiRoutes.Users);

        dispatch({
            type: TYPES.USERS_FETCH,
            payload,
        });
    } catch (e) {
        throw e
    }
};

export const fetchUserById = (id: number) => async (dispatch: Dispatch) => {
    try {
        const userByIdUrl = `${ApiRoutes.Users}/${id}`
        const payload = await http.get(userByIdUrl);

        dispatch({
            type: USERS_UPDATE,
            payload,
        });

        return payload
    } catch (e) {
        console.log(e);
    }
};

export const updateUserById = (id: number, data: UserInterface) => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: TYPES.GLOBAL_LOADING,
            payload: true,
        });

        const userByIdUrl = `${ApiRoutes.Users}/${id}`
        const payload = await http.patch(userByIdUrl, data);

        dispatch({
            type: TYPES.USERS_UPDATE,
            payload,
        });
        return payload
    } catch (e: any) {
        throw e
    } finally {
        dispatch({
            type: TYPES.GLOBAL_LOADING,
            payload: false,
        });
    }
};

export const createUser = (data: UserInterface) => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: TYPES.GLOBAL_LOADING,
            payload: true,
        });

        const payload = await http.post(ApiRoutes.Users, data);

        dispatch({
            type: TYPES.USERS_UPDATE,
            payload,
        });
        return payload
    } catch (e: any) {
        throw e
    } finally {
        dispatch({
            type: TYPES.GLOBAL_LOADING,
            payload: false,
        });
    }
};
