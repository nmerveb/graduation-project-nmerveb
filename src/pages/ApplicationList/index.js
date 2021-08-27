import React from 'react';
import styles from './ApplicationList.module.css';

function ApplicatonList() {
  return (
    <>
      <div className={styles.ApplicationListContainer}>
        <div className={styles.ApplicationListTitleContainer}>
          <span className={styles.ApplicationListTitle}>Başvurular</span>
          <button className={styles.BackBtn} type="button">
            Geri Dön
          </button>
        </div>
        <div className={styles.ApplicatonList}>
          <div className={styles.Application}>
            <span className={styles.Applicant}>Merve Bacak</span>
            <span className={styles.ApplicatonDate}>12.02.1234</span>
            <button className={styles.ViewBtn} type="button">
              Görüntüle
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicatonList;
