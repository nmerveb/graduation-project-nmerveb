import React from "react";
import styles from "./AdminApplicationDetails.module.css";

function AdminApplicationDetails() {
  return (
    <>
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
            <span className={styles.InfoDescriptionInput}>
              123456789213456789
            </span>
          </div>
          <div className={styles.InfoDescriptionContent}>
            <span className={styles.InfoDescriptionLabel}>Address</span>
            <span className={styles.InfoDescriptionInput}>
              123456789213456789
            </span>
          </div>
          <div className={styles.InfoDescriptionContent}>
            <span className={styles.InfoDescriptionLabel}>
              Başvuru Son Durum
            </span>
            <span className={styles.InfoDescriptionInput}>
              123456789213456789
            </span>
          </div>
          <div className={styles.ApplicationInfoContent}>
            <span className={styles.InfoLabel}>Seçilen Görsel</span>
            <span className={styles.InfoInput}>Görsel.jpeg</span>
          </div>
        </div>
        <div className={styles.StatusUpdate}>
          <div className={styles.StatusUpdateTitle}>Güncel Durum</div>
          <textarea className={styles.StatusUpdateInput} type="text" />
          <div className={styles.UpdateBtnContainer}>
            <button className={styles.UpdateBtn}>Update</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminApplicationDetails;
