import React, { useState } from 'react';
import {
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Text,
} from 'react-native';

const AuthenticateUserForm = ({ authenticateName, authenticateAction }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                onSubmitEditing={() => console.log('submit')}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={authenticateAction}
            >
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
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'blue',
        fontSize: 20,
        fontWeight: '400',
    },
});

export default AuthenticateUserForm;
