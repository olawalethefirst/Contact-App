import React from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import AddContactForm from '../components/AddContactForm';
import { addContact } from '../redux/actions';
import { connect } from 'react-redux';

const AddContactScreen = ({ addContact, navigation }) => {
    return <AddContactForm addContact={addContact} navigation={navigation} />;
};

const styles = StyleSheet.create({});

export default connect(null, { addContact })(AddContactScreen);
