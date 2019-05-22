import { GET_CONTACTS, GET_CONTACT, DELETE_CONTACT, ADD_CONTACT, UPDATE_CONTACT } from './types';
import Axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getContacts = () => async dispatch => {
    const res = await Axios.get(`${baseUrl}/users`);

    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    })
}

export const getContact = (id) => async dispatch => {
    const res = await Axios.get(`${baseUrl}/users/${id}`);

    dispatch({
        type: GET_CONTACT,
        payload: res.data
    })
}

export const deleteContact = (id) => async dispatch => {
    try {
        await Axios.delete(`${baseUrl}/users/${id}`);
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        });
    }
}

export const addContact = (contact) => async dispatch => {
    const res = await Axios.post(`${baseUrl}/users`, contact);

    dispatch({
        type: ADD_CONTACT,
        payload: res.data
    })
}

export const updateContact = (contact) => async dispatch => {
    const res = await Axios.put(`${baseUrl}/users`, contact);

    dispatch({
        type: UPDATE_CONTACT,
        payload: res.data
    })
}