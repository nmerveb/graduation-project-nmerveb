import React from "react";
import styles from "./Form.module.css";

function Form() {
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
      <div className={styles.FormContainer}>
        <div className={styles.FormTitle}>Başvuru Formu</div>
        <div className={styles.FormInputLabel}>Ad</div>
        <input
          className={styles.FormInput}
          type="text"
          placeholder="Adınızı giriniz"
        />
        <div className={styles.FormInputLabel}>Soyad</div>
        <input
          className={styles.FormInput}
          type="text"
          placeholder="Soyadınızı giriniz"
        />
        <div className={styles.FormInputLabel}>TC</div>
        <input
          className={styles.FormInput}
          type="number"
          placeholder="TC kimlik numaranızı giriniz"
        />
        <div className={styles.FormInputLabel}>Yaş</div>
        <input className={styles.FormInput} type="number" placeholder="Yaş" />
        <div className={styles.InputContainer}>
          <div className={styles.AddressLabel}>Adres</div>
          <textarea className={styles.AddressInput} placeholder="Adres" />
        </div>
        <div className={styles.FormInputLabel}>
          Kartınızı özelleştirmek için görsel seçiniz
        </div>
        <input
          className={styles.FormInput}
          type="file"
          placeholder="Görsel Seç"
          accept="image/png, image/jpeg"
        />
        <div className={styles.ButtonContainer}>
          <button className={styles.SendBtn}>Gönder</button>
        </div>
      </div>
    </>
  );
}

export default Form;
