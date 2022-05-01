import { getAuth, signInWithEmailAndPassword, loginUserFailed } from "firebase/auth";

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
})

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT,
})

export const try_login = ({ email, password }) => (dispatch) => {

    dispatch(userLogin(user));
    dispatch(userLogout);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            const action = userLoginSuccess(user);
            dispatch(action);
        })
/*         .catch(error => {
            loginUserFailed(error)
        })
        .then(() => this.setState({ isLoading: false }));

    getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            default:
                return 'Erro desconhecido';
        }
    } */
}