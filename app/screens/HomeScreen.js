import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity } from 'react-native';


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
        <View >
            {modalVisible && (
                <DeliveryModal />
            )}
            <TouchableOpacity onPress={() => navigation.navigate('Delivery')}>
                <AddressInput onPress={'sort'} />
            </TouchableOpacity>
            <View style={{ width: '90%', height: 130, backgroundColor: colors.white, flexDirection: 'row', padding: 10 }}>
                <Image style={{ width: 100, height: 100 }} source={require('../assets/first30.jpg')} />
                <Text style={{ marginLeft: 50, marginTop: 20, fontSize: 16 }}>
                    Get 30 EGP discount on your
                    {'\n'}
                    First THREE orders above 80
                    {'\n'}
                    EGP with code THREE30
                </Text>
            </View>
            <Offers />
            <FlatList
                data={list}
                renderItem={({ item }) => (<HomeList />)}
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
    separator: {
        marginVertical: 30,
        height: 1,
        width: "100%",
        marginBottom: 15
    },
});

export default HomeScreen;

