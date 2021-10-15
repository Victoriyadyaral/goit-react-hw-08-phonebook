
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
//import { isLoading } from './redux/selectors';
import contactOperations from './redux/operations';
import Container from './components/container/Container';
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';
import ContactList from './components/contactList/ContactList';
//import Loader from './components/Loader/Loader';

function App() {
  //const loading = useSelector(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        <h2>Contacts</h2>
        <Filter />
        {/* {loading && <Loader />} */}
        <ContactList/>
     </Container>
    );
  }

export default App;