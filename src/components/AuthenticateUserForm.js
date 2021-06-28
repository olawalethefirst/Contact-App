import React, { useState } from 'react';
import {
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';

const AuthenticateUserForm = ({
    authenticateName,
    authenticateAction,
    errorMessage,
}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const useAuthentication = () => {
        authenticateAction(username, password);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                value={username}
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text) => setUsername(text)}
                keyboardType="email-address"
            />
            <TextInput
                value={password}
                style={styles.input}
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                returnKeyType="done"
                onSubmitEditing={useAuthentication}
            />
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TouchableOpacity style={styles.button} onPress={useAuthentication}>
                <Text style={styles.buttonText}>{authenticateName}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        justifyContent: 'center',
    },
    input: {
        fontSize: 20,
        marginVertical: 5,
        padding: 5,
    },
    button: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'blue',
        fontSize: 20,
        fontWeight: '400',
        padding: 10,
    },
    errorMessage: {
        color: 'red',
        padding: 5,
    },
});

export default AuthenticateUserForm;
