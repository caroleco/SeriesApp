import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import FormRow from '../components/FormRow';
import Button from '../components/Button';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyDtmHpmBPfqFMGTB7gAehTYl5NJWye-s2o",
            authDomain: "series-86068.firebaseapp.com",
            projectId: "series-86068",
            storageBucket: "series-86068.appspot.com",
            messagingSenderId: "312337930506",
            appId: "1:312337930506:web:62aa9719f72aee80ef02f3",
            measurementId: "G-7YF4EDRPH8"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    }

    tryLogin() {
        this.setState({ isLoading: true, message: '' });
        const { mail, password } = this.state;

        const loginUserFailed = error => {
            this.setState({ message: this.getMessageByErrorCode(error.code) });
        }

        const auth = getAuth();
        signInWithEmailAndPassword(auth, mail, password)
            .then(() => {
                this.setState({ message: 'Sucesso!' });
            })
            .catch(error => {
                loginUserFailed(error)
            })
            .then(() => this.setState({ isLoading: false }));
    }

    getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta'
            case 'auth/user-not-found':
                return 'Usuário não encontrado'
            default:
                return 'Erro desconhecido'
        }
    }

    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator color="#FEBD2F" />;
        return (
            <Button onPress={() => this.tryLogin()} title="Entrar" />
        )
    }

    renderSignUp() {
        return (
            <View style={styles.signUpContainer}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUp') }}>
                    <Text style={styles.signupBtn}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderMessage() {
        const { message } = this.state;

        if (!message)
            return null;

        return (
            <View>
                <Text>{message}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.appName}>Suas Séries!</Text>
                <View style={styles.loginForm}>
                    <Text style={styles.welcome}>Bem vindo de volta!</Text>
                    <FormRow first style={styles.row}>
                        <TextInput style={styles.input}
                            placeholder='E-mail'
                            value={this.state.mail}
                            onChangeText={value => this.onChangeHandler('mail', value)} />
                    </FormRow>
                    <FormRow last style={styles.row}>
                        <TextInput style={styles.input}
                            placeholder='Senha'
                            value={this.state.password}
                            secureTextEntry
                            onChangeText={value => this.onChangeHandler('password', value)} />
                    </FormRow>
                    {this.renderButton()}
                    {this.renderMessage()}
                    {this.renderSignUp()}

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEBD2F',
    },
    appName: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 90
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    loginForm: {
        backgroundColor: '#fff',
        marginTop: '75%',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        height: 450,
        padding: 20
    },
    row: {
        flex: 2,
        width: '60%',
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,

    },
    signUpContainer: {
        marginRight: 10,
        marginTop: 10
    },
    signupBtn: {
        color: '#171725',
        textAlign: 'right',
        fontSize: 15
    }
})