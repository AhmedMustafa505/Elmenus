import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';

import Bazooka from '../assets/data/Bazooka';
import Restaurant from '../components/Restaurant';


const listings = [
    {
        id: 1,
        title: "Tasty Offers",
        image: require("../assets/logo.jpg"),
    },
    {
        id: 2,
        title: "Trending Now",
        image: require("../assets/logo.jpg"),
    },
    {
        id: 3,
        title: "Burger Time",
        image: require("../assets/logo.jpg"),
    },
    {
        id: 4,
        title: "Top Rated",
        image: require("../assets/logo.jpg"),
    },
];
const list = [
    {
        id: '1',
        title: 'First Restaurant',
    },

];
function HomeList(props) {
    return (
        <>
            <FlatListSlider style={{ paddingBottm: 20 }}
                data={Bazooka}
                imageKey={Bazooka.image}
                local
                width={300}
                height={200}
                indicatorActiveWidth={8}
                contentContainerStyle={{ paddingHorizontal: 2 }}
                indicatorWidth={0}
            />

            <FlatList style={{ paddingTop: 10 }}
                data={listings}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Restaurant
                        title={item.title}
                        // subTitle={"$" + item.price}
                        image={item.image}
                    />
                )}>
            </FlatList>
        </>
    );
}



export default HomeList;