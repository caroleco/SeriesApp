import { View, StyleSheet } from 'react-native'
import React from 'react'


const FormRow = (props) => {
    const {children} = props;
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 20,
        borderColor: '#E2E2EA',
        borderWidth:1
    }
});

export default FormRow;