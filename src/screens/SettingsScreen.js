import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { signOut } from '../redux/actions';

const SettingsScreen = ({ signOut }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => signOut()}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        alignSelf: 'center',
    },
    buttonText: {
        padding: 25,
        color: 'blue',
        fontSize: 20,
        fontWeight: '400',
    },
});

export default connect(null, { signOut })(SettingsScreen);
