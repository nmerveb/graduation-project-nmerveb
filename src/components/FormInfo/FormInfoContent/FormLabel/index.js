import React from 'react';
import styles from '../../FormInfo.module.css';

function FormLabel({ label }) {
  return <span className={styles.FormLabel}>{label}</span>;
}

export default FormLabel;
