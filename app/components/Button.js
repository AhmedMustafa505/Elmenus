import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, userButtonStyle, userButtonTextStyle }) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={[styles.text, userButtonTextStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10,
        borderWidth: 3,
        borderColor: colors.white
    },
    text: {
        color: colors.white,
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "600",
        textShadowColor: colors.light,
        textShadowOffset: { height: 1 },
        textShadowRadius: 3,
    },
});

export default AppButton;
