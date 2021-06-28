import React from 'react';
import { StyleSheet, View } from 'react-native';
import ContactListSection from '../components/ContactListSection';
import { connect } from 'react-redux';

const ContactList = ({ contacts, navigation }) => {
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

const mapStateToProps = ({ contacts }) => ({
    contacts,
});

export default connect(mapStateToProps)(ContactList);
