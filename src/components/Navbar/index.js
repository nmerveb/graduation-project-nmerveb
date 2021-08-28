import React from 'react';
import { useHistory } from 'react-router-dom';
import NavbarContent from './NavbarContent';
import styles from './Navbar.module.css';

function Navbar() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/admin');
  };
  return (
    <div className={styles.Navbar}>
      <div className={styles.NavbarContentContainer}>
        <NavbarContent title="Başvuru Formu" redirect="/basvuru-olustur" />
        <NavbarContent title="Başvuru Sorgula" redirect="/basvuru-sorgula" />
      </div>
      <div className={styles.NavbarLoginButton}>
        <button type="button" className={styles.LoginButton} onClick={handleClick}>
          <div className={styles.NavbarLoginIcon} />
          Yetkili Girişi
        </button>
      </div>
    </div>
  );
}

export default Navbar;
