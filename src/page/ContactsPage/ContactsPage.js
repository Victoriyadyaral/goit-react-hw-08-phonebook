import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/container/Container';
import ContactForm from '../../components/contactForm/ContactForm';
import Filter from '../../components/filter/Filter';
import ContactList from '../../components/contactList/ContactList';
import Loader from '../../components/Loader/Loader';
import contactOperations from '../../redux/contacts/operations';
import { isLoading } from '../../redux/contacts/selectors';

export default function ContactsPage(params) {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  useEffect(() => dispatch(contactOperations.fetchContacts()), [dispatch]);
   
  return (
     <Container>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter />
        {loading && <Loader />}
        <ContactList/>
     </Container>
  );
}