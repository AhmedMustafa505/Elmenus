import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import AddressInput from '../components/AddressInput';
import DeliveryModal from '../components/DeliveryModal';
import HomeList from '../components/HomeList';
import Offers from '../components/Offers';
import colors from '../config/colors';


const list = [
    {
        id: '1',
        title: 'First Restaurant',
    },

];


function HomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(true);
    return (
        <View>
            {modalVisible && (
                <DeliveryModal />
            )}

            <TouchableOpacity onPress={() => navigation.navigate('Delivery')}>
                <AddressInput onPress={'sort'} />
            </TouchableOpacity>
            <View style={styles.firstViewContainer}>
                <View style={styles.boxContainer}>
                    <Image style={styles.image} source={require('../assets/first30.jpg')} />
                    <Text style={styles.text}>
                        Get 30 EGP discount on your
                        {'\n'}
                        First THREE orders above 80
                        {'\n'}
                        EGP with code THREE30
                    </Text>
                </View>
                <Offers />
            </View>

            <FlatList
                data={list}
                renderItem={() => (<HomeList />)}
                keyExtractor={item => item.id}
                pagingEnabled={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
    },
    firstViewContainer: {
        paddingHorizontal: 8
    },
    boxContainer: {
        width: wp('75%'),
        height: hp('20%'),
        backgroundColor: colors.white,
        flexDirection: 'row',
        padding: 15
    },
    image: {
        width: wp('25%'),
        height: hp('12%'),
    },
    text: {
        marginLeft: wp("8%"),
        marginTop: hp('2%'),
        fontSize: 16
    }
});

export default HomeScreen;

