import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import  authSelectors from '../../redux/auth/auth-selectors';

const Navigation = () => {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>

      {isLoggedIn && (
          <NavLink
            to="/contacts"
            exact
          //   style={styles.link}
          //   activeStyle={styles.activeLink}
          >
            Contacts
          </NavLink>
      )}
    </nav>
  );
};

export default Navigation;