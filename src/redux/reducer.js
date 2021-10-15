import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import phonebookActions from './actions';

const contacts = createReducer([], {
  [phonebookActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [phonebookActions.addContactSuccess]: (state, { payload }) => {
    //toast.success('Contact has been added to your phonebook!');
    return [...state, payload]
  },
  [phonebookActions.deleteContactSuccess]: (state, { payload }) => {
    toast.warn("Contact deleted from your phonebook!");
      return state.filter(({ id }) => id !== payload);
  },
});

const loading = createReducer(false, {
  [phonebookActions.fetchContactsRequest]: () => true,
  [phonebookActions.fetchContactsSuccess]: () => false,
  [phonebookActions.fetchContactsError]: () => false,
  [phonebookActions.addContactRequest]: () => true,
  [phonebookActions.addContactSuccess]: () => false,
  [phonebookActions.addContactError]: () => false,
  [phonebookActions.deleteContactRequest]: () => true,
  [phonebookActions.deleteContactSuccess]: () => false,
  [phonebookActions.deleteContactError]: () => false,
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});