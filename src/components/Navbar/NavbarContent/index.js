import React from 'react';
import styles from '../Navbar.module.css';

function NavbarContent({ title }) {
  return (
    <div className={styles.NavbarContent}>
      <span className={styles.NavbarTitle}>{title}</span>
    </div>
  );
}

export default NavbarContent;
