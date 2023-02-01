import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import defaultStyles from "../config/styles";


function FindRestaurant({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <AntDesign
                    name={'search1'}
                    size={30}
                    color={defaultStyles.colors.medium}
                    style={styles.icon}
                />
                <TextInput
                    placeholderTextColor={defaultStyles.colors.medium}
                    style={defaultStyles.text}
                    placeholder='Find a Restaurant or Dish'
                />
            </View>
            <TouchableOpacity style={styles.sort} onPress={() => navigation.goBack()}>
                <Text style={{ fontSize: 17, color: defaultStyles.colors.medium }}> Cancel </Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    inputContainer: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 15,
        flexDirection: "row",
        padding: 2,
        borderWidth: 1,
        borderColor: defaultStyles.colors.light,
        width: wp('70%'),
        height: hp('8%'),

    },
    icon: {
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 2
    },
    sort: {
        width: wp('15%'),
        backgroundColor: defaultStyles.colors.white,
        justifyContent: 'center'
    }
})
export default FindRestaurant;

