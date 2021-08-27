import React from 'react';
import styles from './Navbar.module.css';
import NavbarContent from './NavbarContent';

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.NavbarContentContainer}>
        <NavbarContent title="Başvuru Formu" />
        <NavbarContent title="Başvuru Sorgula" />
      </div>
      <div className={styles.NavbarLoginButton}>
        <button type="button" className={styles.LoginButton}>
          <div className={styles.NavbarLoginIcon} />
          Yetkili Girişi
        </button>
      </div>
    </div>
  );
}

export default Navbar;
