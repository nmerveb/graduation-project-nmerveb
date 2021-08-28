import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Navbar.module.css';

function NavbarContent({ title, redirect }) {
  return (
    <Link to={redirect} style={{ textDecoration: 'none' }}>
      <div className={styles.NavbarContent}>
        <span className={styles.NavbarTitle}>{title}</span>
      </div>
    </Link>
  );
}

export default NavbarContent;
