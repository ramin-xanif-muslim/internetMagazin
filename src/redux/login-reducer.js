import * as axios from "axios";
import { API_BASE } from '../config/env';

const LOGIN = 'LOGIN'




let initialState = {
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:

            return {
                ...state,
            }
        case 'LOGIN_FULFILLED':
                console.log(action.payload)
                return {
                    ...state,
                    data: action.payload,
                    Token: action.payload.Body.Token,
                    Type: action.payload.Body.Type
                }

        default:
            return state;
    }
}

export  function postToServer(data) {
    return dispatch => {
        dispatch({
        type: LOGIN,
        payload:  axios.post(`${API_BASE}/login/login.php`,data)
            .then(result => result.data)
            .then(data => {
                localStorage.setItem("Token", data.Body.Token)
                localStorage.setItem("Type", data.Body.Type)
                console.log(data.Body)
                return data
            })
        })
    }
}

