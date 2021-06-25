import React from 'react';
import { StyleSheet, View } from 'react-native';
import contacts from '../assets/contacts';
import ContactListSection from '../components/ContactListSection';
// import Constants from 'expo-constants';

const ContactList = ({ navigation }) => {
    const navigateToContactDetails = (contact) => {
        navigation.navigate('ContactDetails', { contact: contact });
    };
    return (
        <View style={styles.container}>
            <ContactListSection
                contacts={contacts}
                navigateToContactDetails={navigateToContactDetails}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Constants.statusBarHeight,
    },
});

export default ContactList;
