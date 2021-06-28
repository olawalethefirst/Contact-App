import loginUser from '../hooks/useLogin';
//Action Types
export const ADD_CONTACT = 'ADD_CONTACT';
export const SIGN_IN_SUCCESSFUL = 'SIGN_IN_SUCCESSFUL';
export const SIGN_IN_REJECTED = 'SIGN_IN_REJECTED';
export const SIGN_OUT = 'SIGN_IN';

//Action Creators
export const addContact = (update) => ({
    type: ADD_CONTACT,
    payload: update,
});
export const signOut = () => ({
    type: SIGN_OUT,
});

//Async Creators
export const signIn = (username, password) => async (dispatch) => {
    const res = await loginUser(username, password);
    if (res === 200) {
        dispatch({ type: SIGN_IN_SUCCESSFUL });
    } else {
        dispatch({ type: SIGN_IN_REJECTED, payload: res });
    }
};
