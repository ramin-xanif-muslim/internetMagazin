import { API_BASE } from '../config/env';
// import {productsAPI} from "../api/api";
import * as axios from "axios";


const GET_PRODUCT = 'GET_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
const SHOW_MORE = 'SHOW_MORE'
const GET_TOKEN = 'GET_TOKEN'
const GET_TYPE = 'GET_TYPE'
const SAVE_PHOTO = 'SAVE_PHOTO'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const CREATE_PRODUCT = 'CREATE_PRODUCT'
const SEARCH_PRODUCT = 'SEARCH_PRODUCT'


let initialState =
{
    fetching: false,
    error: null,
    photos: []
}


export const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_PRODUCT_PENDING':
            console.log(action.payload)
            return {
                ...state,
                fetching: true,
            }
        case 'GET_PRODUCT_FULFILLED':
            console.log(action.payload)
            return {
                ...state,
                fetching: false,
                List: action.payload.Body.List,
            }
        case 'GET_PRODUCT_REJECTED':
            console.log(action.payload)
            return {
                ...state,
                fetching: false,
				error: action.payload
            }
        case 'SEARCH_PRODUCT_PENDING':
            console.log(action.payload)
            return {
                ...state,
                fetching: true,
            }
        case 'SEARCH_PRODUCT_FULFILLED':
            console.log(action.payload)
            return {
                ...state,
                fetching: false,
                List: action.payload.Body.List,
            }
        case 'SEARCH_PRODUCT_REJECTED':
            console.log(action.payload)
            return {
                ...state,
                fetching: false,
				error: action.payload
            }
        case UPDATE_PRODUCT:
            console.log(action.payload)
            return {
                ...state,
            }
        case SHOW_MORE:
            console.log(action.payload)
            return {
                ...state,
            }
        case "SHOW_MORE_FULFILLED":
            console.log(action.payload)
            return {
                ...state,
                data: action.payload,
                fetching: false
            }
        case "SHOW_MORE_PENDING":
            console.log(action.payload)
            return {
                ...state,
                fetching: true
            }
        case GET_TOKEN:
            console.log(action.payload)
            return {
                ...state,
                Token: action.payload
            }
        case GET_TYPE:
            console.log(action.payload)
            return {
                ...state,
                Type: action.payload
            }
        case SAVE_PHOTO:
            return {
                ...state,
                photos: action.payload
            }
        case 'SAVE_PHOTO_PENDING':
            return {
                ...state,
                fetching: true
            }
        case 'SAVE_PHOTO_FULFILLED':
            return {
                ...state,
                fetching: false,
                photos: action.payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
            }
        case CREATE_PRODUCT:
            return {
                ...state,
            }

        default:
            return state;
    }
}

export function getProduct() {
    let Token = localStorage.getItem("Token")
    const instance = axios.create({ headers:     { "Token": `${Token}`}});
    return dispatch => {
        dispatch({
            type: GET_PRODUCT,
            payload: instance.post(`${API_BASE}/product/read.php`, {})
                .then(result => result.data)
                .then(data => data)
        })
    }
}
export function searchProduct(body) {
    // let obj = body ? body : {}
    let Token = localStorage.getItem("Token")
    const instance = axios.create({ headers:     { "Token": `${Token}`}});
    return dispatch => {
        dispatch({
            type: SEARCH_PRODUCT,
            payload: instance.post(`${API_BASE}/product/read.php`, body )
                .then(result => result.data)
                .then(data => data)
        })
    }
}
export function createProduct(data) {
    let Token = localStorage.getItem("Token")
    const instance = axios.create({ headers:     { "Token": `${Token}`}});
    return dispatch => {
        dispatch({
            type: CREATE_PRODUCT,
            payload: instance.post(`${API_BASE}/product/create.php`, data)
                .then(result => result.data)
                .then(data => data)
        })
    }
}
export function updateProduct(data) {
    let Token = localStorage.getItem("Token")
    const instance = axios.create({ headers:     { "Token": `${Token}`}});
    return dispatch => {
        dispatch({
            type: UPDATE_PRODUCT,
            payload: instance.post(`${API_BASE}/product/update.php`, data)
                .then(result => result.data)
                .then(data => data.Body)
        })
    }
}
export function showMore(data) {
    let Token = localStorage.getItem("Token")
    const instance = axios.create({ headers:     { "Token": `${Token}`}});
    return dispatch => {
        dispatch({
            type: SHOW_MORE,
            payload: instance.post(`${API_BASE}/product/read.php`, data)
                .then(result => result.data)
                .then(data => data.Body.List)
        })
    }
}
export function savePhoto(data) {
    console.log(data)
    let Token = localStorage.getItem("Token")
    const instance = axios.create({ headers:     { "Token": `${Token}`}});
    return dispatch => {
        dispatch({
            type: SAVE_PHOTO,
            payload: instance.post(`http://ovz2.mucuna.me2jm.vps.myjino.ru/put.php`, data)
                .then(result => result.data)
                .then(data => data)
        })
    }
}
export function getToken() {
    return {
        type: GET_TOKEN,
        payload: localStorage.getItem("Token")
    }
}
export function getType() {
    return {
        type: GET_TYPE,
        payload: localStorage.getItem("Type")   
    }
}


