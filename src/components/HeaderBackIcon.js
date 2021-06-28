import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderBackIcon = () => (
    <View style={styles.container}>
        <Ionicons
            style={styles.header}
            name="chevron-back-outline"
            size={40}
            color="blue"
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        marginHorizontal: 5,
    },
});

export default HeaderBackIcon;
