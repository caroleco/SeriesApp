import { USER_LOGIN_SUCESS, USER_LOGOUT } from '../actions'

export default function userReducer(state = null, action) {
    switch (key) {
        case USER_LOGIN_SUCESS:
            return action.user;
        case USER_LOGOUT:
            return null;
        default:
            return state;
    }
}