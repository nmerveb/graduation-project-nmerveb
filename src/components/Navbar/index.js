import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.NavbarContentContainer}>
        <div className={styles.NavbarContent}>
          <span className={styles.NavbarTitle}>Başvuru Formu</span>
        </div>
        <div className={styles.NavbarContent}>
          <span className={styles.NavbarTitle}>Başvuru Sorgula</span>
        </div>
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
