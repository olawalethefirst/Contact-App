import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

function ContactListTabIcon({ focused }) {
    const color = focused ? 'blue' : 'rgba(0,0,255,0.5)';

    return (
        <View style={styles.container}>
            <FontAwesome5 name="list" style={[styles.icon, { color: color }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    icon: {
        fontSize: 25,
    },
});

export default ContactListTabIcon;
