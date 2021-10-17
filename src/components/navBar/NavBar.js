import { useSelector } from 'react-redux';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import AuthNav from '../authNav/AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './NavBar.module.css'

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <div className={s.container}>
      <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}