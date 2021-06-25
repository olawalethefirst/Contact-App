import React, { useState, useEffect, useReducer } from 'react';
import { Text, TextInput, View, StyleSheet, Pressable } from 'react-native';

function AddContactForm() {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ACTIVATE_BUTTON':
                return { ...state, buttonDisabled: false, opacity: 1 };
            case 'DEACTIVATE_BUTTON':
                return { ...state, buttonDisabled: true, opacity: 0.5 };
            case 'BUTTON_PRESSED':
                return { ...state, opacity: 0.5 };
            case 'BUTTON_RELEASED':
                return { ...state, opacity: 1 };
            case 'UPDATE_NAME':
                return { ...state, name: action.payload };
            case 'UPDATE_PHONE':
                return { ...state, phone: action.payload };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, {
        buttonDisabled: true,
        opacity: 0.5,
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
    const validateButton = (state) => {
        if (true) {
            console.log(state);
        }
    };

    const updateField = (field, text) => {
        switch (field) {
            case 'name':
                console.log('name', field);
                dispatch({ type: 'UPDATE_NAME', payload: text });
                return;
            case 'phone':
                console.log('phone', field);
                dispatch({ type: 'UPDATE_PHONE', payload: text });
                return;
            default:
            //     return;
        }
        console.log(state);
    };

    useEffect(() => {
        validateButton(state);
        // console.log(state.phone.length >= 7);
    }, [state]);

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
                    console.log('submit');
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
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '400',
    },
});

export default AddContactForm;
