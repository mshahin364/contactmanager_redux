import { GET_CONTACTS, GET_CONTACT, ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from '../actions/types';

const initialState = {
    contacts: [],
    contact: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };
        case GET_CONTACT:
            return {
                ...state,
                contact: action.payload
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state;
    }
}