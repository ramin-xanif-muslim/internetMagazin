import { applyMiddleware, combineReducers, createStore } from 'redux';
import {loginReducer} from './login-reducer';
import thunkMiddleware from "redux-thunk";
import { storeSingupReducer } from './store-singup-reducer';
import { customerSingupReducer } from './costomer-singup-reducer';
import reduxPromise from 'redux-promise-middleware'
import { productReducer } from './product';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './cart';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    login: loginReducer,
    store: storeSingupReducer,
    customer: customerSingupReducer,
    products: productReducer,
    cart: cartReducer,
    form: formReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxPromise,thunkMiddleware,logger)));


export default store