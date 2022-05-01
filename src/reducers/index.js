import {combineReducers} from 'redux';

import { useReducer } from './userReducer';


export default combineReducers({
    user: useReducer
})