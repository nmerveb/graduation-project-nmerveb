import React from "react";
import styles from "./ApplicationDetails.module.css";

function ApplicationDetails() {
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.NavbarContentContainer}>
          <div className={styles.NavbarContent}>
            <span className={styles.NavbarTitle}>Başvuru Oluştur</span>
          </div>
          <div className={styles.NavbarContent}>
            <span className={styles.NavbarTitle}>Başvuru Sorgula</span>
          </div>
        </div>
        <div className={styles.NavbarLoginButton}>
          
          <button className={styles.LoginButton}>
          <span className={styles.NavbarLoginIcon}></span>
            Yetkili Girişi</button>
        </div>
      </div>
      <div className={styles.ApplicationDetailsContainer}>
          <div className={styles.ApplicationInfo}>
            <div className={styles.ApplicationInfoTitle}>Başvuru Bilgileri</div>
            <div className={styles.ApplicationInfoContent}>
                <span className={styles.InfoLabel}>Ad</span>
                <span className={styles.InfoInput}>Merve</span>
            </div>
            <div className={styles.ApplicationInfoContent}>
                <span className={styles.InfoLabel}>Soyad</span>
                <span className={styles.InfoInput}>Bacak</span>
            </div>
            <div className={styles.ApplicationInfoContent}>
                <span className={styles.InfoLabel}>TC</span>
                <span className={styles.InfoInput}>12345678912</span>
            </div>
            <div className={styles.ApplicationInfoContent}>
                <span className={styles.InfoLabel}>Yaş</span>
                <span className={styles.InfoInput}>12</span>
            </div>
            <div className={styles.InfoDescriptionContent}>
                <span className={styles.InfoDescriptionLabel}>Başvuru Nedeni</span>
                <span className={styles.InfoDescriptionInput}>123456789213456789</span>
            </div>
            <div className={styles.InfoDescriptionContent}>
                <span className={styles.InfoDescriptionLabel}>Address</span>
                <span className={styles.InfoDescriptionInput}>123456789213456789</span>
            </div>
            <div className={styles.ApplicationInfoContent}>
                <span className={styles.InfoLabel}>Seçilen Görsel</span>
                <span className={styles.InfoInput}>Görsel.jpeg</span>
            </div>

          </div>
          <div className={styles.ApplicationStatus}>
            <div className={styles.ApplicationStatusTitle}> Güncel Durum</div>
            <div className={styles.ApplicationStatusInfo}> Başvurunuz dikkate alınmıştır. x tarihine kadar şu işlemler yapılacaktır</div>
          </div>

      </div>
    </>
  );
}

export default ApplicationDetails;
