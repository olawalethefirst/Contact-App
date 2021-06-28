import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function SettingsTabIcon({ focused }) {
    console.log(focused);
    const color = focused ? 'blue' : 'rgba(0,0,255,0.5)';
    return (
        <View style={styles.container}>
            <FontAwesome name="gears" style={[styles.icon, { color: color }]} />
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

export default SettingsTabIcon;
