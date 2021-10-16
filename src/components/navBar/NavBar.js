import { useSelector } from 'react-redux';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import AuthNav from '../authNav/AuthNav';
import  authSelectors  from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
      <header>
      <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          {/* <UserMenu />
          <AuthNav /> */}
    </header>
  );
}