import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/signup"
        exact
        //style={styles.link}
        //activeStyle={styles.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        exact
        // style={styles.link}
        // activeStyle={styles.activeLink}
      >
        Log in
      </NavLink>
    </div>
  );
}