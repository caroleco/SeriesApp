import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.textBtn}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#FEBD2F',
        borderRadius:15,
        padding:15,
        marginTop: 15
    },
    textBtn: {
        fontWeight: 'bold',
        fontSize:12,
        textAlign: 'center'
    }
})