import React from "react";
import styles from "./Login.module.css";

function Login() {
  return (
    <>
      <div className={styles.LoginContainer}>
        <div className={styles.LoginBox}>
          <div className={styles.LoginIcon}></div>
          <div className={styles.LoginTitle}>Yetkili Girşi</div>
          <div className={styles.LoginContent}>
            <div className={styles.InputLabel}>Kullanıcı Adı</div>
            <input className={styles.Input} type="text" placeholder="Kullanıcı adınızı giriniz."></input>
          </div>
          <div className={styles.LoginContent}>
            <div className={styles.InputLabel}>Şifre</div>
            <input className={styles.Input} type="password" placeholder="Şifrenizi giriniz"></input>
          </div>
          <div className={styles.ButtonContent}>
            <button className={styles.Button}>Back</button>
            <button className={styles.Button}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
