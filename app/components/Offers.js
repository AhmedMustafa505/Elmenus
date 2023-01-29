import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5, Entypo } from "@expo/vector-icons";

import colors from '../config/colors';

function Offers(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.drawer}>
                <FontAwesome5 name={'route'}
                    size={30}
                    color={colors.primary}
                    style={styles.icon}
                />
                <Text style={styles.text}> Live Tracking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawer}>
                <FontAwesome5 name={'credit-card'}
                    size={30}
                    color={colors.primary}
                    style={styles.icon}
                />
                <Text style={styles.text}> Online Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawer}>
                <FontAwesome5 name={'gift'}
                    size={30}
                    color={colors.primary}
                    style={styles.icon}
                />
                <Text style={styles.text}> Gifts</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '70%',
        height: 130,
        paddingHorizontal: 5,
        backgroundColor: colors.white,
        justifyContent: 'space-between'
    },
    drawer: {
        borderRadius: 2,
        borderColor: colors.black,
        width: 110,
        height: 70,
        borderWidth: 2,
        borderColor: colors.light,
        borderRadius: 15,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: '400'
    }

});

export default Offers;