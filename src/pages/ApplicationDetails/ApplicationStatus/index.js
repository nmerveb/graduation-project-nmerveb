import React from 'react';
import { useFormInfo } from '../../../context/FormInfoContext';
import styles from '../ApplicationDetails.module.css';

function ApplicationStatus() {
  const { data } = useFormInfo();
  return (
    <div className={styles.ApplicationStatus}>
      <div className={styles.ApplicationStatusTitle}> Güncel Durum</div>
      <div className={styles.ApplicationStatusInfo}>{data.description}</div>
    </div>
  );
}

export default ApplicationStatus;
