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
import HeaderBackIcon from './src/components/HeaderBackIcon';
import { persistor, store } from './src/redux/store';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ContactListTabIcon from './src/components/ContactListTabIcon';
import SettingsTabIcon from './src/components/SettingsTabIcon';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ContactStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const navigateToAddContactScreen = (navigation) => {
    navigation.navigate('AddContact');
};

function ContactsFlow() {
    return (
        <ContactStack.Navigator
            initialRouteName="ContactList"
            screenOptions={{
                headerBackTitleVisible: false,
                headerBackImage: () => <HeaderBackIcon />,
            }}
        >
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
                    headerTitleStyle: {
                        color: 'blue',
                        fontSize: 25,
                    },
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
        <Tab.Navigator
            initialRouteName="Login"
            tabBarOptions={{
                showLabel: false,
            }}
        >
            <Tab.Screen
                name="ContactsFlow"
                component={ContactsFlow}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <ContactListTabIcon focused={focused} />
                    ),
                }}
            />
            <Tab.Screen
                name="SettingsFlow"
                component={SettingsFlow}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SettingsTabIcon focused={focused} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function App() {
    const token = useSelector(({ user }) => user.token);
    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                }}
            >
                {token ? (
                    <MainStack.Screen name="MainFlow" component={MainFLow} />
                ) : (
                    <MainStack.Screen name="Login" component={LoginScreen} />
                )}
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export default () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);
