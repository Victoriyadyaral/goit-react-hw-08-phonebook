
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
//import { isLoading } from './redux/selectors';

import Container from './components/container/Container';
import NavBar from './components/navBar/NavBar';
import HomePage from './page/HomePage/HomePage';
import SignUpPage from './page/SignUpPage/SignUpPage';
import LoginPage from './page/LoginPage/LoginPage';
import ContactsPage from './page/ContactsPage/ContactsPage';
//import Loader from './components/Loader/Loader';
import contactOperations from './redux/contacts/operations';

function App() {
  //const loading = useSelector(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, [dispatch]);

    return (
      <Container>
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
        
        <NavBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/contacts" component={ContactsPage} />
      </Switch>
     </Container>
    );
  }

export default App;