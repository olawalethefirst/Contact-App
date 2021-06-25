import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HeaderIcon = () => (
    <View style={styles.container}>
        <FontAwesome
            style={styles.header}
            name="address-book-o"
            size={30}
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
        marginHorizontal: 15,
    },
});

export default HeaderIcon;
