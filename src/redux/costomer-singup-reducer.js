import * as axios from "axios";
import { API_BASE } from '../config/env';


const POST_TO_SERVER = 'POST_TO_SERVER'



let initialState = {
    fullname: null,
    phone: null,
    login: null,
    password: null,

    token: '',
    type: '',
};

export const customerSingupReducer = (state = initialState, action) => {
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
            payload: axios.post(`${API_BASE}/customer/create.php`,data)
            .then(result => result.data)
                            .then(data => {
                                localStorage.setItem("Token", data.Token)
                                return data
                            })
        })
    }
}

