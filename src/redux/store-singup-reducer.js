import * as axios from "axios";
import { API_BASE } from '../config/env';


const POST_TO_SERVER = 'POST_TO_SERVER'



let initialState = {
    title: null,
    phone: null,
    login: null,
    password: null,
};

export const storeSingupReducer = (state = initialState, action) => {
    switch (action.type) {
            case 'POST_TO_SERVER_PENDING':

                return {
                    ...state,
                    
                }
            case 'POST_TO_SERVER_FULFILLED':
                    console.log(action.payload)
                    return {
                        ...state,
                        Token: action.payload.Body.Token,
                        CustomerId: action.payload.Body.CustomerId
                    }    

        default:
            return state;
    }
}

export  function postToServer(data) {
    return dispatch => {
        dispatch({
            type: POST_TO_SERVER,
            payload: axios.post(API_BASE + '/store/create.php',data)
            .then(result => result.data)
            .then(data => {
                localStorage.setItem("Token", data.Body.Token)
                return data
            })
        })
    }
}

