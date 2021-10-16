
import { useEffect, Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Container from './components/container/Container';
import NavBar from './components/navBar/NavBar';
import Loader from './components/Loader/Loader';

import authOperations from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() => import('./page/HomePage/HomePage' /* webpackChunkName: "home-page" */)); 
const SignUpPage = lazy(() => import('./page/SignUpPage/SignUpPage' /* webpackChunkName: "signup-page" */));
const LoginPage = lazy(() => import('./page/LoginPage/LoginPage' /* webpackChunkName: "login-page" */));
const ContactsPage = lazy(() => import('./page/ContactsPage/ContactsPage' /* webpackChunkName: "contacts-page" */));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);


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
        
        {isFetchingCurrentUser ? (
          <h1>Refreshing...</h1>
         ) : (
        <>
        <NavBar />

        <Switch>
          <Suspense fallback={<Loader />}>
             <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>
              <PublicRoute exact path="/signup" restricted>
                <SignUpPage />
              </PublicRoute>
              <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
          </Suspense>
         </Switch>
        </>
      )}  
     </Container>
    );
  }

export default App;