import { GET_API, POST_API, PUT_API, DELETE_API } from "../middleware/symbols";

import {
    GET_FORM_REQUEST, GET_FORM_SUCCESS, GET_FORM_FAILURE,

    GET_FORM_REQUEST_FOR_EDIT, GET_FORM_SUCCESS_FOR_EDIT, GET_FORM_FAILURE_FOR_EDIT,

    POST_FORM_REQUEST, POST_FORM_SUCCESS, POST_FORM_ERROR,

    PUT_FORM_REQUEST, PUT_FORM_SUCCESS, PUT_FORM_ERROR,

    DELETE_FORM_REQUEST, DELETE_FORM_SUCCESS, DELETE_FORM_ERROR
} from '../constants/imageConstant';

import { SHOW_LOADER, HIDE_LOADER } from '../constants/Index';

import { baseApi } from "./ApiActions";

const BASE_URL = baseApi()

export function getData() {
    return {
        [GET_API]: {
            endpoint: 'https://jsonplaceholder.typicode.com' + "/photos",
            authenticated: true,
            types: [GET_FORM_REQUEST, GET_FORM_SUCCESS, GET_FORM_FAILURE],
        }
    }
}

export function getDataWithId(id, dataWithId) {
    return {
        [GET_API]: {
            endpoint: 'https://jsonplaceholder.typicode.com' + "/photos/" + id,
            authenticated: true,
            types: [GET_FORM_REQUEST_FOR_EDIT, GET_FORM_SUCCESS_FOR_EDIT, GET_FORM_FAILURE_FOR_EDIT],
            body: dataWithId
        }
    }
}

export function postData(data) {
    console.log('post action')
    return {
        [POST_API]: {
            endpoint:'https://jsonplaceholder.typicode.com' + "/photos" ,
            authenticated: true,
            types: [POST_FORM_REQUEST, POST_FORM_SUCCESS, POST_FORM_ERROR],
            body: data
        }
    }
}

export function putData(item, data) {
    console.log('edit action')
    return {
        [PUT_API]: {
            endpoint: 'https://jsonplaceholder.typicode.com' + "/photos/${item.id}",
            authenticated: true,
            types: [PUT_FORM_REQUEST, PUT_FORM_SUCCESS, PUT_FORM_ERROR],
            body: data
        }
    }
}

export function deleteData(id) {
    console.log('delete')
    return {

        [DELETE_API]: {
            endpoint: 'https://jsonplaceholder.typicode.com' + "/photos/" + id,
            authenticated: true,
            types: [DELETE_FORM_REQUEST, DELETE_FORM_SUCCESS, DELETE_FORM_ERROR],
        }
    }
}

export function showLoader() {
    return {
        type: "SHOW_LOADER"
    }
}

export function hideLoader() {
    return {
        type: "HIDE_LOADER"
    }
}