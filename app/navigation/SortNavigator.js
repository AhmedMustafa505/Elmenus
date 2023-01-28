import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';

import Screen from '../components/Screen';
import colors from '../config/colors';
// import FilterScreen from '../screens/FilterScreen';
import SortScreen from '../screens/SortScreen';


const Dishes = () =>
    <Screen><Text>Dishes</Text></Screen>

const FilterScreen = () =>
    <Screen><Text>Filter</Text></Screen>


const Tab = createMaterialTopTabNavigator();

function SortNavigator() {
    const navigation = useNavigation();
    return (
        <Screen>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveBackgroundColor: 'white',
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveBackgroundColor: '#eee',
                    tabBarInactiveTintColor: 'black',
                }}
            >
                <Tab.Screen
                    name='Sort'
                    component={SortScreen}
                    options={{
                        headerShown: false,
                        tabBarLabelStyle: {
                            fontSize: 15,
                            color: colors.primary,
                            fontWeight: "bold",
                        },
                    }} />
                <Tab.Screen
                    name='Filter'
                    component={FilterScreen}
                    options={{
                        headerShown: false,
                        tabBarLabelStyle: {
                            fontSize: 15,
                            color: colors.primary,
                            fontWeight: "bold",
                        },
                    }} />
                <Tab.Screen
                    name='Dishes'
                    component={Dishes}
                    options={{
                        headerShown: false,
                        tabBarLabelStyle: {
                            fontSize: 15,
                            color: colors.primary,
                            fontWeight: "bold",
                        },
                    }} />
            </Tab.Navigator>
        </Screen>
    );
}

export default SortNavigator;