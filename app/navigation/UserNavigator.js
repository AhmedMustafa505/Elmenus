import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth0 } from 'react-native-auth0';

import UserScreen from "../screens/UserScreen";
import colors from '../config/colors';
import WelcomeScreen from '../screens/WelcomeScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';

const Stack = createStackNavigator();

function UserNavigator() {
    const { user } = useAuth0();
    return (
        <Stack.Navigator>
            {!user &&
                <>
                    <Stack.Screen
                        name="Welcome"
                        component={WelcomeScreen}
                        options={{
                            headerShown: false,
                            headerTintColor: colors.primary,
                            headerTitleStyle: styles.title
                        }} />
                    <Stack.Screen
                        name="UserScreen"
                        component={UserScreen}
                        options={{
                            headerShown: false,
                            title: 'Profile',
                            headerTintColor: colors.primary,
                            headerTitleStyle: styles.title
                        }} />
                    <Stack.Screen
                        name="UserDetailsScreen"
                        component={UserDetailsScreen}
                        options={{
                            // headerShown: false,
                            title: 'Profile',
                            headerTintColor: colors.primary,
                            headerTitleStyle: styles.title
                        }} />
                </>}

            {user &&
                <>
                    <Stack.Screen
                        name="UserScreen"
                        component={UserScreen}
                        options={{
                            headerShown: false,
                            title: 'Profile',
                            headerTintColor: colors.primary,
                            headerTitleStyle: styles.title
                        }} />
                    <Stack.Screen
                        name="UserDetailsScreen"
                        component={UserDetailsScreen}
                        options={{
                            // headerShown: false,
                            title: 'Profile',
                            headerTintColor: colors.primary,
                            headerTitleStyle: styles.title
                        }} />
                    <Stack.Screen
                        name="Welcome"
                        component={WelcomeScreen}
                        options={{
                            headerShown: false,
                            headerTintColor: colors.primary,
                            headerTitleStyle: styles.title
                        }} />
                </>}
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})
export default UserNavigator;