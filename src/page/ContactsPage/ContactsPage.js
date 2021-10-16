//import { useState, useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/container/Container';
import ContactForm from '../../components/contactForm/ContactForm';
import Filter from '../../components/filter/Filter';
import ContactList from '../../components/contactList/ContactList';
//import { ReactComponent as AddIcon } from '../icons/add.svg';
//import { todosOperations, todosSelectors } from '../redux/todos';

export default function ContactsPage(params) {
  //const dispatch = useDispatch();
  //const isLoadingTodos = useSelector(todosSelectors.getLoading);

  return (
     <Container>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter />
        {/* {loading && <Loader />} */}
        <ContactList/>
     </Container>
  );
}