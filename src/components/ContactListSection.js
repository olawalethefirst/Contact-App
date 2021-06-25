import React from 'react';
import { Text, View, StyleSheet, SectionList } from 'react-native';
import ContactRow from './ContactRow';

const ContactListSection = ({ contacts, navigateToContactDetails }) => {
    const reduceContacts = (contacts, contact) => {
        //input ([], {key, name, phone})
        let key = contact.name[0].toUpperCase();

        //result = { key1: array1, key2: array2, key3: array3}
        if (contacts[key]) {
            return {
                ...contacts,
                [key]: [...contacts[key], contact],
            };
        } else {
            return {
                ...contacts,
                [key]: [contact],
            };
        }
    };

    const data = contacts.reduce(reduceContacts, {});
    const sections = Object.keys(data)
        .sort()
        .map((key) => ({
            title: key,
            data: data[key],
        }));

    return (
        <SectionList
            style={styles.container}
            stickySectionHeadersEnabled
            sections={sections}
            keyExtractor={(item) => item.name + item.phone}
            renderItem={({ item }) => (
                <ContactRow
                    contact={item}
                    navigateToContactDetails={navigateToContactDetails}
                />
            )}
            renderSectionHeader={({ section: { title } }) => (
                <Text>{title}</Text>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    },
});

export default ContactListSection;
