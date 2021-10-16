import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact>
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      exact
    //   style={styles.link}
    //   activeStyle={styles.activeLink}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;