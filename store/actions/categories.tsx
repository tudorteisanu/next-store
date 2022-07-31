import {CATEGORIES_LOADING, LOAD_CATEGORIES, UPDATE_CATEGORIES} from "../types";
import http from "../../services/http";
import {ApiRoutes} from "../../ts/enum";

export const fetchCategories = () => async (dispatch: any) => {
    try {
        dispatch({
            type: CATEGORIES_LOADING,
            payload: true,
        });
        const payload = await http.get(ApiRoutes.Categories);
        dispatch({
            type: LOAD_CATEGORIES,
            payload,
        });
    } catch (e) {
        console.log(e);
    } finally {
        dispatch({
            type: CATEGORIES_LOADING,
            payload: false,
        });
    }
};

export const fetchCategoryById = (id: number) => async (dispatch: any) => {
    try {
        dispatch({
            type: CATEGORIES_LOADING,
            payload: true,
        });

        const categoryByIdUrl = `${ApiRoutes.Categories}/${id}`
        const payload = await http.get(categoryByIdUrl);

        dispatch({
            type: UPDATE_CATEGORIES,
            payload,
        });
        return payload
    } catch (e) {
        console.log(e);
    } finally {
        dispatch({
            type: CATEGORIES_LOADING,
            payload: false,
        });
    }
};

export const updateCategoryById = (id: number, data: any) => async (dispatch: any) => {
    try {
        const categoryByIdUrl = `${ApiRoutes.Categories}/${id}`
        const payload = await http.patch(categoryByIdUrl, data);

        dispatch({
            type: UPDATE_CATEGORIES,
            payload,
        });
        return payload
    } catch (e: any) {
        throw e
    }
};
