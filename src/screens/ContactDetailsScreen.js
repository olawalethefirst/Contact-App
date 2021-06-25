import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactsDetails = ({
    route: {
        params: { contact },
    },
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{contact.phone}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    text: {
        fontSize: 25,
    },
});

export default ContactsDetails;
