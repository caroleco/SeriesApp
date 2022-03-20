import { View, StyleSheet } from 'react-native'
import React from 'react'


const FormRow = (props) => {
    const {children, first, last} = props;
    return (
        <View style={[styles.container, first ? styles.first : null,
        last ? styles.last : null]}>
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
    },
    first: {
        marginTop: 10,
    },
    last: {
        marginBottom: 10,
    }
});

export default FormRow;