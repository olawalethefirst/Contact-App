import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactListScreen from './src/screens/ContactListScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import ContactDetailsScreen from './src/screens/ContactDetailsScreen';
import AddContactScreen from './src/screens/AddContactScreen';
import AddContactIcon from './src/components/AddContactIcon';
import HeaderIcon from './src/components/HeaderIcon';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ContactStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const navigateToAddContactScreen = (navigation) => {
    navigation.navigate('AddContact');
};
const styles = StyleSheet.create({
    headerLeft: {
        marginHorizontal: 15,
    },
    addContact: {
        marginHorizontal: 15,
    },
});
let isLoggedIn = true;

function ContactsFlow() {
    return (
        <ContactStack.Navigator initialRouteName="ContactList">
            <ContactStack.Screen
                name="ContactList"
                component={ContactListScreen}
                options={({ navigation }) => ({
                    headerLeft: () => <HeaderIcon />,
                    headerTitle: '',
                    headerRight: () => {
                        return (
                            <AddContactIcon
                                navigateToAddContactScreen={
                                    navigateToAddContactScreen
                                }
                                navigation={navigation}
                            />
                        );
                    },
                })}
            />
            <ContactStack.Screen
                name="AddContact"
                component={AddContactScreen}
            />
            <ContactStack.Screen
                name="ContactDetails"
                component={ContactDetailsScreen}
                options={({
                    route: {
                        params: { contact },
                    },
                }) => ({
                    title: contact.name,
                })}
            />
        </ContactStack.Navigator>
    );
}

function SettingsFlow() {
    return (
        <SettingsStack.Navigator
            screenOptions={{
                headerLeft: () => <HeaderIcon />,
                headerTitle: '',
            }}
        >
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
        </SettingsStack.Navigator>
    );
}

function MainFLow() {
    return (
        <Tab.Navigator initialRouteName="Login">
            <Tab.Screen name="ContactsFlow" component={ContactsFlow} />
            <Tab.Screen name="SettingsFlow" component={SettingsFlow} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                }}
            >
                {isLoggedIn ? (
                    <MainStack.Screen name="MainFlow" component={MainFLow} />
                ) : (
                    <MainStack.Screen name="Login" component={LoginScreen} />
                )}
            </MainStack.Navigator>
        </NavigationContainer>
    );
}
