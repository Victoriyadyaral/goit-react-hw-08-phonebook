import { useDispatch, useSelector } from 'react-redux';
import  authSelectors  from '../../redux/auth/auth-selectors';
import  authOperations  from '../../redux/auth/auth-operations';
import defaultAvatar from '../../icon/user-avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <img src={defaultAvatar} alt="" width="32"/>
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}