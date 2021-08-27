import React from 'react';
import styles from '../ApplicationList.module.css';

function ApplicationListTitleContainer() {
  return (
    <div className={styles.ApplicationListTitleContainer}>
      <span className={styles.ApplicationListTitle}>Başvurular</span>
      <button className={styles.BackBtn} type="button">
        Geri Dön
      </button>
    </div>
  );
}

export default ApplicationListTitleContainer;
