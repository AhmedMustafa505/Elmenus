import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import AppText from "./Text";

function Restaurant({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <TouchableOpacity>
                    <AppText style={styles.subTitle}>See All</AppText>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: "100%",
        height: 200,
    },
    subTitle: {
        color: colors.primary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 7,
        fontWeight: "bold",

    },
});

export default Restaurant;
