import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../config/colors';
import Screen from '../components/Screen';

const restaurants = [
    {
        id: 1, title: "Bazooka", deliveryTime: '25', rating: '7',
    },
    {
        id: 2, title: "Will'y Kitchen", deliveryTime: '35', rating: '6',
    },
    {
        id: 3, title: "Ibn Elsham", deliveryTime: '45', rating: '2',
    },
    {
        id: 4, title: "KFC", deliveryTime: '15', rating: '1',
    },
    {
        id: 5, title: "McDonalds", deliveryTime: '10', rating: '3',
    },
    {
        id: 6, title: "Hardees", deliveryTime: '20', rating: '4',
    },
    {
        id: 7, title: "Burger King", deliveryTime: '30', rating: '5',
    },
    {
        id: 8, title: "Pizza Hut", deliveryTime: '40', rating: '8',
    },

]
function sortRate(restaurants) {
    return restaurants.sort((a, b) => a.rating - b.rating);
}
function sortDelivery(restaurants) {
    return restaurants.sort((a, b) => a.deliveryTime - b.deliveryTime);
}


const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
);


const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? colors.primary : colors.light;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
        <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={backgroundColor}
            textColor={color}
        />
    );
};

function SortScreen(props) {
    const [isDeliverySelected, setIsDeliverySelected] = useState(false);
    const [isRatingSelected, setIsRatingSelected] = useState(false);
    const [selectedId, setSelectedId] = useState();
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? colors.primary : colors.light;
        const color = item.id === selectedId ? 'white' : 'black';


        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };

    return (
        <Screen>

            <View style={styles.headerContainer}>

                <TouchableOpacity
                    onPress={() => { setIsDeliverySelected(false), setIsRatingSelected(false) }}>
                    <Text style={styles.closeButton}> Close </Text>
                </TouchableOpacity>
                <View style={styles.showResultsContainer}>
                    <Text style={styles.showResultsText}>
                        Show {restaurants.length} results
                    </Text>
                </View>
            </View>
            {(!isDeliverySelected && !isRatingSelected) && (

                <View style={styles.container}>
                    <Text style={{ fontSize: 18, paddingBottom: 10 }}> Sort by</Text>
                    <TouchableOpacity style={styles.select} onPress={() => setIsDeliverySelected(true)}>
                        <Entypo
                            size={25}
                            name={'circle'}
                            color={colors.medium} />
                        <Text style={{ fontSize: 18, paddingLeft: 15 }}> Delivery Time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.select} onPress={() => setIsRatingSelected(true)}>
                        <Entypo
                            size={25}
                            name={'circle'}
                            color={colors.medium} />
                        <Text style={{ fontSize: 18, paddingLeft: 15 }}> Rating</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.select}>
                        <Entypo
                            size={25}
                            name={'circle'}
                            color={colors.medium} />
                        <Text style={{ fontSize: 18, paddingLeft: 15 }}> Popular</Text>
                    </TouchableOpacity>

                </View>
            )}

            {isDeliverySelected && (<FlatList
                data={sortDelivery(restaurants)}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                extraData={selectedId}
            />)}
            {isRatingSelected && (<FlatList
                data={sortRate(restaurants)}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                extraData={selectedId}
            />)}


        </Screen>

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: 15,
    },
    select: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        marginRight: 15
    },
    item: {
        padding: 20,
        marginVertical: 4,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 18,
    },
    headerContainer: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    closeButton: {
        fontSize: 18,
        color: 'tomato'
    },
    showResultsContainer: {
        alignSelf: 'flex-end',
        borderWidth: 1,
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        width: '50%',
        height: 40,
        borderRadius: 10,
        marginRight: 12
    },
    showResultsText: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    }
});

export default SortScreen;

