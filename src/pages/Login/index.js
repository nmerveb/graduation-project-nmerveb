import React from 'react';
import LoginIcon from './LoginIcon';
import LoginTitle from './LoginTitle';
import InputContent from './InputContent';
import ButtonContent from './ButtonContent';
import styles from './Login.module.css';

function Login() {
  return (
    <>
      <div className={styles.LoginContainer}>
        <div className={styles.LoginBox}>
          <LoginIcon />
          <LoginTitle />
          <InputContent label="Kullanıcı Adı" placeholder="Kullanıcı adınızı giriniz." />
          <InputContent label="Şifre" placeholder="Şifrenizi giriniz." />
          <ButtonContent />
        </div>
      </div>
    </>
  );
}

export default Login;
