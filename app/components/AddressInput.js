import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import defaultStyles from "../config/styles";



function AddressInput(props) {
    const navigation = useNavigation();

    return (


        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <AntDesign
                    name={'search1'}
                    size={25}
                    color={defaultStyles.colors.medium}
                    style={styles.icon}
                />

                <TextInput
                    placeholderTextColor={defaultStyles.colors.medium}
                    style={defaultStyles.text}
                    placeholder='Find a Restaurant or Dish'
                />
            </View>
            <View>

                <TouchableOpacity style={styles.sort} onPress={() => navigation.navigate('Dine Out')}>
                    <Entypo
                        name={'sound-mix'}
                        size={35}
                        color={defaultStyles.colors.primary}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    inputContainer: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 15,
        flexDirection: "row",
        padding: 8,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: defaultStyles.colors.light,
        width: wp('70.5%'),
        height: hp('8%'),
    },
    icon: {
        marginRight: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    sort: {
        width: wp('11%'),
        height: hp('5.5%'),
        borderRadius: 8,
        backgroundColor: defaultStyles.colors.light,
    }

});

export default AddressInput;
