import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useAuth0 } from 'react-native-auth0';

import Screen from '../components/Screen';
import colors from '../config/colors';
import EditButton from '../components/EditButton';


function UserScreen({ navigation }) {
    const { clearSession, user } = useAuth0();

    const logout = async () => {
        await clearSession();
        // await clearSession();
        navigation.navigate('Welcome');
    };

    return (
        <Screen>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/blank-profile.png')} />
                <View style={styles.detailsContainer}>
                    {user && <Text style={styles.title} >
                        Name : {user.nickname}
                    </Text>}
                    <View style={styles.priceContainer}>
                        <AntDesign name='wallet' size={20} color={'tomato'} />
                        <Text style={styles.price}>
                            {'0.00 EGP'}
                        </Text>
                    </View>
                    <EditButton title={'Edit Profile'} onPress={() => navigation.navigate('UserDetailsScreen')} />
                    {user && <EditButton title={'Log out'} onPress={logout} />}

                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    priceContainer: {
        flexDirection: 'row',
    },
    price: {
        fontSize: 15,
        color: 'tomato',
        marginLeft: 10
    },
    title: {
        fontWeight: "500",
        fontSize: 20,
        textTransform: 'capitalize',
        color: colors.primary
    },
});

export default UserScreen;