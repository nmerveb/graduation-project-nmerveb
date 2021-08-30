import React from 'react';
import styles from '../AdminApplicationDetails.module.css';

function StatusUpdate() {
  return (
    <div className={styles.StatusUpdate}>
      <div className={styles.StatusUpdateTitle}>Güncel Durum</div>
      <textarea className={styles.DescriptionUpdateInput} type="text" />
      <div className={styles.SelectContainer}>
        <select className={styles.StatusUpdateSelect}>
          <option value="pending">İnceleniyor</option>
          <option value="resolve">Onaylandı</option>
          <option value="reject">Reddedildi</option>
        </select>
      </div>
      <div className={styles.UpdateBtnContainer}>
        <button type="button" className={styles.UpdateBtn}>
          Gönder
        </button>
      </div>
    </div>
  );
}

export default StatusUpdate;
