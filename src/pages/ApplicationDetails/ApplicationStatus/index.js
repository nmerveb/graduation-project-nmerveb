import React from 'react';
import styles from '../ApplicationDetails.module.css';

function ApplicationStatus() {
  return (
    <div className={styles.ApplicationStatus}>
      <div className={styles.ApplicationStatusTitle}> Güncel Durum</div>
      <div className={styles.ApplicationStatusInfo}>
        {' '}
        Başvurunuz dikkate alınmıştır. x tarihine kadar şu işlemler yapılacaktır
      </div>
    </div>
  );
}

export default ApplicationStatus;
