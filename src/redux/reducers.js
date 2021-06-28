import { combineReducers } from 'redux';
import {
    ADD_CONTACT,
    SIGN_OUT,
    SIGN_IN_REJECTED,
    SIGN_IN_SUCCESSFUL,
} from './actions';

const contactsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.payload];
        default:
            return state;
    }
};

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESSFUL:
            return { ...state, token: 'aFakeToken', loginError: '' };
        case SIGN_IN_REJECTED:
            return { ...state, loginError: action.payload };
        case SIGN_OUT:
            return { ...state, token: '' };
        default:
            return state;
    }
};

export default mainReducer = combineReducers({
    contacts: contactsReducer,
    user: userReducer,
});
