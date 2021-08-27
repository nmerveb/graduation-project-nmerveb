import React from 'react';
import styles from '../FormInfo.module.css';

function FormDescriptionContent({ label, input }) {
  return (
    <div className={styles.FormDescriptionContent}>
      <span className={styles.FormDescriptionLabel}>Başvuru nedeni</span>
      <span className={styles.FormDescriptionInput}>123456789</span>
    </div>
  );
}

export default FormDescriptionContent;
