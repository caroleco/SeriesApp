import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
})

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT,
})

export const try_login = ({ email, password }) => dispatch => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            const action = userLoginSuccess(user);
            dispatch(action);
        })
        .catch(error => {
            return new Promise((resolve, reject) => {
                if (error.code === 'auth/user-not-found') {
                    Alert.alert(
                        'Usuário não encontrado',
                        'Deseja criar um cadastro com as informações inseridas?',
                        [{
                            text: 'Não',
                            onPress: () => resolve(),
                        }, {
                            text: 'Sim',
                            onPress: () => {
                                const auth = getAuth();
                                createUserWithEmailAndPassword(auth, email, password)
                                    .then(user => resolve(user))
                                    .catch(reject)
                            }
                        }],
                        { cancelable: false }
                    )
                })
        }
            loginUserFailed(error);
})
}