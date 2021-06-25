import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const AddContactIcon = ({ navigateToAddContactScreen, navigation }) => (
    <TouchableOpacity
        style={styles.addContact}
        onPress={() => {
            navigateToAddContactScreen(navigation);
        }}
    >
        <Entypo name="plus" size={25} color="blue" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    addContact: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 15,
    },
});

export default AddContactIcon;
