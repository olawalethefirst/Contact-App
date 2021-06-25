import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AuthenticateUserForm from '../components/AuthenticateUserForm';

const LoginScreen = ({ navigation }) => {
    const loginUser = () => {};

    return (
        <AuthenticateUserForm
            authenticateName="Login"
            authenticateAction={loginUser}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default LoginScreen;
