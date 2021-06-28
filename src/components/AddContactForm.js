import React, { useState, useEffect, useReducer } from 'react';
import { Text, TextInput, View, StyleSheet, Pressable } from 'react-native';

function AddContactForm({ addContact, navigation }) {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ACTIVATE_BUTTON':
                return { ...state, buttonDisabled: false, opacity: 1 };
            case 'DEACTIVATE_BUTTON':
                return { ...state, buttonDisabled: true, opacity: 0.4 };
            case 'BUTTON_PRESSED':
                return { ...state, opacity: 0.4 };
            case 'BUTTON_RELEASED':
                return { ...state, opacity: 1 };
            case 'UPDATE_NAME':
                return { ...state, name: action.payload };
            case 'UPDATE_PHONE':
                return { ...state, phone: action.payload };
            case 'blank':
                return {
                    buttonDisabled: true,
                    opacity: 0.4,
                    name: '',
                    phone: '',
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, {
        buttonDisabled: true,
        opacity: 0.4,
        name: '',
        phone: '',
    });

    const onPressIn = () => {
        dispatch({ type: 'BUTTON_PRESSED' });
        // return;
    };
    const onPressOut = () => {
        dispatch({ type: 'BUTTON_RELEASED' });
        // return;
    };
    const validateButton = () => {
        if (
            state.name.length >= 3 &&
            +state.phone > 0 &&
            state.phone.length >= 7
        ) {
            dispatch({ type: 'ACTIVATE_BUTTON' });
        } else {
            dispatch({ type: 'DEACTIVATE_BUTTON' });
        }
    };

    const updateField = (field, text) => {
        switch (field) {
            case 'name':
                dispatch({ type: 'UPDATE_NAME', payload: text });
                return;
            case 'phone':
                dispatch({ type: 'UPDATE_PHONE', payload: text });
                return;
            default:
            //     return;
        }
    };

    useEffect(() => {
        validateButton();
    }, [state.name, state.phone]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                autoCorrect={false}
                autoCapitalize="none"
                value={state.name}
                onChangeText={(text) => {
                    updateField('name', text);
                }}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="numeric"
                maxLength={11}
                value={state.phone}
                caretHidden
                onChangeText={(text) => {
                    updateField('phone', text);
                }}
            />
            <Pressable
                style={styles.button}
                onPress={() => {
                    addContact({ name: state.name, phone: state.phone });
                    navigation.navigate('ContactList');
                }}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                disabled={state.buttonDisabled}
            >
                <Text
                    style={[
                        styles.buttonText,
                        { color: `rgba(0,0,255,${state.opacity})` },
                    ]}
                >
                    Add Contact
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    input: {
        fontSize: 18,
        marginVertical: 5,
        padding: 5,
    },
    button: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '400',
        padding: 10,
    },
});

export default AddContactForm;
