import axios from 'axios';
import shortid from 'shortid';
import phonebookActions from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(phonebookActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(phonebookActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(phonebookActions.fetchContactsError(error));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    id: shortid.generate(),
    name,
    number,
  };

    dispatch(phonebookActions.addContactRequest());

    try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(phonebookActions.addContactSuccess(data));
  } catch (error) {
    dispatch(phonebookActions.addContactError(error));
  }

//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(phonebookActions.addContactSuccess(data)))
//     .catch(error => dispatch(phonebookActions.addContactError(error)));
};

const deleteContact = contactId => async dispatch => {
  dispatch(phonebookActions.deleteContactRequest());

    
  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(phonebookActions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(phonebookActions.deleteContactError(error));
  }
//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(phonebookActions.deleteContactSuccess(contactId)))
//     .catch(error => dispatch(phonebookActions.deleteContactError(error)));
};

const contactOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactOperations;