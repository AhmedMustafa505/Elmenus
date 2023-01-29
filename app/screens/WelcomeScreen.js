import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useAuth0 } from 'react-native-auth0';

import Button from "../components/Button";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
    const { authorize, user } = useAuth0();

    const login = async () => {
        await authorize();
        // await authorize();
        navigation.navigate('UserScreen');


    };

    return (
        <View style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.jpg")} />
                <Text style={styles.tagline}>elmenus</Text>
            </View>
            {!user && <View style={styles.buttonsContainer}>
                <Button title="Login" onPress={login} />
            </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
        paddingBottom: 100,
        width: "100%",
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagline: {
        fontSize: 35,
        fontWeight: "800",
        paddingVertical: 15,
        color: colors.primary,
        textShadowColor: colors.light,
        textShadowOffset: { height: 4 },
        textShadowRadius: 5,
    },

});

export default WelcomeScreen;
