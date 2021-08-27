import React from 'react';
import styles from '../AdminApplicationDetails.module.css';

function StatusUpdate() {
  return (
    <div className={styles.StatusUpdate}>
      <div className={styles.StatusUpdateTitle}>Güncel Durum</div>
      <textarea className={styles.StatusUpdateInput} type="text" />
      <div className={styles.UpdateBtnContainer}>
        <button type="button" className={styles.UpdateBtn}>
          Update
        </button>
      </div>
    </div>
  );
}

export default StatusUpdate;
