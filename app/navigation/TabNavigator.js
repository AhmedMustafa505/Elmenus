import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import UserNavigator from './UserNavigator';
import FindRestaurant from '../screens/FindRestaurant';
import SortNavigator from './SortNavigator';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: 'white',
            tabBarActiveTintColor: 'white',
            tabBarInactiveBackgroundColor: '#eee',
            tabBarInactiveTintColor: 'black',
        }}
    >
        <Tab.Screen
            name='Home'
            component={HomeNavigator}
            options={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 12,
                    color: colors.medium,
                    fontWeight: "bold",
                },
                tabBarIcon: ({ size }) => <MaterialIcons name='menu-book' size={25} color={colors.medium} />
            }} />
        <Tab.Screen
            name='Delivery'
            component={FindRestaurant}
            options={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 12,
                    color: colors.medium,
                    fontWeight: "bold",
                },
                tabBarIcon: ({ size }) => <MaterialIcons name='delivery-dining' size={25} color={colors.medium} />
            }} />
        <Tab.Screen
            name='Dine Out'
            component={SortNavigator}
            options={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 12,
                    color: colors.medium,
                    fontWeight: "bold"
                },
                tabBarIcon: ({ size }) => <MaterialCommunityIcons name='silverware-fork-knife' size={25} color={colors.medium} />
            }} />

        <Tab.Screen
            name='Me'
            component={UserNavigator}
            options={{
                tabBarLabelStyle: {
                    fontSize: 12,
                    color: colors.medium,
                    fontWeight: "bold"
                },
                headerShown: false,
                tabBarIcon: ({ size }) => <SimpleLineIcons name='user' size={25} color={colors.medium}

                />
            }} />


    </Tab.Navigator>
)

export default TabNavigator;