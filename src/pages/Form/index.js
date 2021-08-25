import React from "react";
import styles from "./Form.module.css";

function Form() {
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
        <div className={styles.FormFileLabel}>
          Kartınızı özelleştirmek için görsel seçiniz
        </div>
        <div className={styles.FormFileContainer}>
        <label className={styles.FormFileInput}>
          <input type="file" accept="image/png, image/jpeg" hidden/>
          Görsel Seç
        </label>
        </div>
        <div className={styles.ButtonContainer}>
          <button className={styles.SendBtn}>Gönder</button>
        </div>
      </div>
    </>
  );
}

export default Form;
