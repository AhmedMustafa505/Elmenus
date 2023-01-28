import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, iconz, width = "100%", backgroundcolor, borderRadius, borderColor, ...otherProps }) {
    return (
        <View style={[styles.container, { width }, { backgroundColor: backgroundcolor }]}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={25}
                    color={defaultStyles.colors.primary}
                    style={styles.icon}
                />

            )}
            {iconz && (
                <AntDesign
                    name={iconz}
                    size={25}
                    color={defaultStyles.colors.medium}
                    style={styles.icon}
                />
            )
            }
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={defaultStyles.text}
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 25,
        flexDirection: "row",
        padding: 10,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: defaultStyles.colors.light,
        height: 50,
    },
    icon: {
        marginRight: 10,
    },

});

export default AppTextInput;
