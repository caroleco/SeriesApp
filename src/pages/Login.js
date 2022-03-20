import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import FormRow from '../components/FormRow';
import LoginButton from '../components/LoginButton';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
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
        console.log(this.state);
    }

    render() {
        return (
            <View style={styles.container}>
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
                    <LoginButton onPress={() => this.tryLogin()} title="Entrar" />
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
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    loginForm: {
        backgroundColor: '#fff',
        marginTop: '85%',
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
})