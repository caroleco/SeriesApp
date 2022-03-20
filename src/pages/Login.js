import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

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
                    <FormRow style={styles.row}>
                        <TextInput style={styles.input}
                            placeholder='E-mail'
                            value={this.state.mail}
                            onChangeText={value => this.onChangeHandler('mail', value)} />
                    </FormRow>
                    <FormRow style={styles.row}>
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