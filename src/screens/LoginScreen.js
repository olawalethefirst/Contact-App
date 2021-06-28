import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AuthenticateUserForm from '../components/AuthenticateUserForm';
import loginUser from '../hooks/useLogin';
import { connect } from 'react-redux';
import { signIn } from '../redux/actions';

const LoginScreen = ({ signIn, loginError }) => {
    return (
        <AuthenticateUserForm
            authenticateName="Sign In"
            authenticateAction={signIn}
            errorMessage={loginError}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = (state) => ({
    loginError: state.user.loginError,
});

export default connect(mapStateToProps, { signIn })(LoginScreen);
