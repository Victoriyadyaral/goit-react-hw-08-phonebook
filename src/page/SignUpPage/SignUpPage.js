import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import s from './SignUpPage.module.css';

export default function SignUpPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Please, sign up</h1>

          <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className={s.form}
          >
        <label className={s.label}>
          Name
           <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            />
        </label>

        <label className={s.label}>
          E-mail
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label  className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.button}>Sign up</button>
      </form>
    </div>
  );
}