import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function EditButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.white,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 40,
        marginTop: 10,
        borderWidth: 2,
        borderColor: colors.light
    },
    text: {
        color: colors.primary
    }
});

export default EditButton;