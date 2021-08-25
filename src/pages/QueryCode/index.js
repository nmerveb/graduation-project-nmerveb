import React from "react";
import styles from "./QueryCode.module.css";

function QueryCode() {
  return (
    <>
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
          <button className={styles.LoginButton}>
            <span className={styles.NavbarLoginIcon}></span>Yetkili Girişi
          </button>
        </div>
      </div>
      <div className={styles.QueryContainer}>
        <div className={styles.QueryContainerTitle}>
          <div className={styles.Icon}></div>
          <div className={styles.Title}>Başvuru Sorgula</div>
        </div>
        <div className={styles.QueryCodeInputContainer}>
          <input
            className={styles.QueryCodeInput}
            type="text"
            placeholder="Kodunuzu girin"
          />
        </div>
        <div className={styles.QueryBtnContainer}>
          <button className={styles.QueryButton}>Query</button>
        </div>
      </div>
    </>
  );
}

export default QueryCode;
