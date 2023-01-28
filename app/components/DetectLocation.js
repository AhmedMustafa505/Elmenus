import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function DetectLocation({ icon, placeholder, onPress }) {
    return (

        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon && (
                <FontAwesome
                    name={icon}
                    size={25}
                    color={defaultStyles.colors.primary}
                    style={styles.icon}
                />
            )}
            <Text style={styles.text}>
                {placeholder}
            </Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 25,
        flexDirection: "row",
        padding: 10,
        marginVertical: 10,
        borderColor: '#E5E4E2',
        height: 50
    },
    icon: {
        marginRight: 10,
    },
    text: {
        fontSize: 18,
        color: defaultStyles.colors.medium
    }
});

export default DetectLocation;