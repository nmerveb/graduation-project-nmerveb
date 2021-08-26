import React from "react";
import styles from "./Success.module.css";

function Success() {
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
            <span className={styles.NavbarLoginIcon}></span>
            Yetkili Girişi
          </button>
        </div>
      </div>
      <div className={styles.SuccessFormContainer}>
        <div className={styles.SuccessFormTitle}>İşlem Başarılı</div>
        <div className={styles.SuccessFormContent}>
          <div className={styles.FormInfo}>
            <div className={styles.FormInfoTitle}>Başvuru Bilgileri</div>
            <div className={styles.FormInfoContent}>
              <span className={styles.FormLabel}>Ad</span>
              <span className={styles.FormInput}>Merve</span>
            </div>
            <div className={styles.FormInfoContent}>
              <span className={styles.FormLabel}>Soyad</span>
              <span className={styles.FormInput}>Bacak</span>
            </div>
            <div className={styles.FormInfoContent}>
              <span className={styles.FormLabel}>TC</span>
              <span className={styles.FormInput}>12345678912</span>
            </div>
            <div className={styles.FormInfoContent}>
              <span className={styles.FormLabel}>Yaş</span>
              <span className={styles.FormInput}>12</span>
            </div>
            <div className={styles.FormDescriptionContent}>
              <span className={styles.FormDescriptionLabel}>
                Başvuru nedeni
              </span>
              <span className={styles.FormDescriptionInput}>123456789</span>
            </div>
            <div className={styles.FormDescriptionContent}>
              <span className={styles.FormDescriptionLabel}>Address</span>
              <span className={styles.FormDescriptionInput}>123456789</span>
            </div>
            <div className={styles.FormInfoContent}>
              <span className={styles.FormLabel}>Secilen Görsel</span>
              <span className={styles.FormInput}>görseladi.jpeg</span>
            </div>
          </div>
          <div className={styles.QueryCodeInfo}>
            <div className={styles.QueryCodeTitle}>Teşekkürler</div>
            <div className={styles.QueryCodeDescription}>
              Başvurunuz alınmıştır.
              <br />
              <br />
              Aşağıda belitirlen kod ile başvurunuzun durumunu kontrol
              edebilirsiniz
            </div>
            <div className={styles.QueryCode}> ndsmfbsdhs</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
