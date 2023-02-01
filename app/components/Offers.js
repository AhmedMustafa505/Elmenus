import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
        width: wp('95%'),
        height: hp('13%'),
        paddingHorizontal: 5,
        backgroundColor: colors.white,
        justifyContent: 'space-around'
    },
    drawer: {
        borderRadius: 2,
        borderColor: colors.black,
        width: wp('20%'),
        height: hp('10%'),
        borderWidth: 2,
        borderColor: colors.light,
        borderRadius: 15,
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