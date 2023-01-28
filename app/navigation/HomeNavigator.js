import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/HomeScreen';
import SortNavigator from './SortNavigator';
import FindRestaurant from '../screens/FindRestaurant';

const Stack = createStackNavigator();

const HomeNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen"
            component={HomeScreen}
            options={{
                headerShown: false,
                headerTitle: 'Back',
                headerTintColor: 'tomato',
            }} />
        <Stack.Screen name="Dine Out"
            component={SortNavigator}
            options={{
                headerShown: false,
                headerTitle: 'Back',
                headerTintColor: 'tomato',
            }} />
        <Stack.Screen name="Delivery"
            component={FindRestaurant}
            options={{
                headerShown: false,
                headerTitle: 'Back',
                headerTintColor: 'tomato',
            }} />
    </Stack.Navigator>
)


export default HomeNavigator;