import React from "react";
import styles from "./QueryCode.module.css";

function QueryCode() {
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.NavbarContentContainer}>
          <div className={styles.NavbarContent}>
            <span className={styles.NavbarIcon}>Icon</span>
            <span className={styles.NavbarTitle}>Title</span>
          </div>
          <div className={styles.NavbarContent}>
            <span className={styles.NavbarIcon}>Icon</span>
            <span className={styles.NavbarTitle}>Title</span>
          </div>
        </div>
        <div className={styles.NavbarLoginButton}>
          <span className={styles.NavbarIcon}>Icon</span>
          <button className={styles.LoginButton}>Yetkili Girişi</button>
        </div>
      </div>
      <div className={styles.QueryContainer}>
        <div className={styles.QueryContainerTitle}>
          <div className={styles.Icon}></div>
          <div className={styles.Title}>Başvuru sorgula</div>
        </div>
        <div className={styles.QueryCodeInputContainer}>
          <input className={styles.QueryCodeInput} type="text" placeholder="Kodunuzu girin"/>
        </div>
        <div className={styles.QueryBtnContainer}>
          <button className={styles.QueryButton}>Query</button>
        </div>
      </div>
    </>
  );
}

export default QueryCode;
