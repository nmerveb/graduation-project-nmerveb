import React from 'react';
import styles from '../ApplicationList.module.css';

function Application() {
  return (
    <div className={styles.Application}>
      <span className={styles.Applicant}>Merve Bacak</span>
      <span className={styles.ApplicatonDate}>12.02.1234</span>
      <button className={styles.ViewBtn} type="button">
        Görüntüle
      </button>
    </div>
  );
}

export default Application;
