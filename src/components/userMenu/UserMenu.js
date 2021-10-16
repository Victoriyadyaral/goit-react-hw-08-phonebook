import { useDispatch, useSelector } from 'react-redux';
import  authSelectors  from '../../redux/auth/auth-selectors';
import  authOperations  from '../../redux/auth/auth-operations';
import defaultAvatar from '../../icon/user-avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUseremail);

  return (
    <div className={s.UserMenuWrap}>
      <img src={defaultAvatar} alt="" width="32" className={s.avatar}/>
      <span className={s.email}>E-mail: {email}</span>
      <button type="button" className={s.button} onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}