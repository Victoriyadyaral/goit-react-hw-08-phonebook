
import { useEffect, Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Container from './components/container/Container';
import NavBar from './components/navBar/NavBar';
import Loader from './components/Loader/Loader';

import authOperations from './redux/auth/auth-operations';

const HomePage = lazy(() => import('./page/HomePage/HomePage' /* webpackChunkName: "home-page" */)); 
const SignUpPage = lazy(() => import('./page/SignUpPage/SignUpPage' /* webpackChunkName: "signup-page" */));
const LoginPage = lazy(() => import('./page/LoginPage/LoginPage' /* webpackChunkName: "login-page" */));
const ContactsPage = lazy(() => import('./page/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */));
const UploadPage = lazy(() => import('./page/UpLoadPage/UpLoadPage' /* webpackChunkName: "upload-page" */));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
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
        <Suspense fallback={<Loader />}>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/contacts" component={ContactsPage} />
        </Suspense>
      </Switch>
     </Container>
    );
  }

export default App;