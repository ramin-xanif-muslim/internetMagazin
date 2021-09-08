import { API_BASE } from '../config/env';
import axios from "axios";

const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART = 'GET_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'


let initialState =
{
    cartShow: false,
    showAlert: null
}




export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            console.log(action.payload)
            return {
                ...state,
            }
        case REMOVE_FROM_CART:
            console.log(action.payload)
            return {
                ...state,
            }
        case GET_CART:
            console.log(action.payload)
            return {
                ...state,
            }
        case 'GET_CART_PENDING':
                console.log(action.payload)
                return {
                    ...state,
                    cartShow: false
                }
        case 'GET_CART_FULFILLED':
            console.log(action.payload)
            return {
                ...state,
                list: action.payload,
                cartShow: true
            }

        case 'CLOSE_CART':
            return {
                ...state,
                cartShow: false
            }
        case 'SHOW_ALERT':
            console.log(action.payload)
            return {
                ...state,
                showAlert: action.payload
            }

        default:
            return state;
    }
}

export function addToCart(data) {
    let Token = localStorage.getItem("Token")
    const instance = axios.create({ headers:     { "Token": `${Token}`}});
    return dispatch => {
        dispatch({
            type: ADD_TO_CART,
            payload: instance.post(`${API_BASE}/cart/add.php`, data )
                .then(result => result.data)
                .then(data => data)
        })
    }
}

export function closeModal() {
    return dispatch => {
        dispatch({
            type: 'CLOSE_CART',
        })
    }
}
export function setShowAlert(name) {
    return dispatch => {
        dispatch({
            type: 'SHOW_ALERT',
            payload: name
        })
    }
}
export function getCart(data) {
    let Token = localStorage.getItem("Token")
    const instance = axios.create({ headers:     { "Token": `${Token}`}});
    return dispatch => {
        dispatch({
            type: GET_CART,
            payload: instance.post(`${API_BASE}/cart/show.php`, data)
                .then(result => result.data)
                .then(res => res.Body)
        })
    }
}


