import React from 'react';
import styles from '../QueryCode.module.css';

function QueryContainerTitle() {
  return (
    <div className={styles.QueryContainerTitle}>
      <div className={styles.Icon} />
      <div className={styles.Title}>Başvuru Sorgula</div>
    </div>
  );
}

export default QueryContainerTitle;
