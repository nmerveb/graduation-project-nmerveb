import React from 'react';
import styles from './FormInfo.module.css';

function FormInfo() {
  return (
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
        <span className={styles.FormDescriptionLabel}>Başvuru nedeni</span>
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
  );
}

export default FormInfo;
