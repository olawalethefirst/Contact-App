import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ContactRow = ({ contact, navigateToContactDetails }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                // console.log(navigateToContactDetails);
                navigateToContactDetails(contact);
            }}
        >
            <Text style={styles.text}>{contact.name}</Text>
            <Text style={styles.text}>{contact.phone}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    text: {
        marginVertical: 5,
    },
});

export default ContactRow;
