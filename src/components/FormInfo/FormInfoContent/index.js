import React from 'react';
import styles from '../FormInfo.module.css';

function FormInfoContent({ label, input }) {
  return (
    <div className={styles.FormInfoContent}>
      <span className={styles.FormLabel}>{label}</span>
      <span className={styles.FormInput}>{input}</span>
    </div>
  );
}

export default FormInfoContent;
