import React from 'react';
import styles from '../../FormInfo.module.css';

function FormDescriptionLabel({ label }) {
  return <span className={styles.FormDescriptionLabel}>{label}</span>;
}

export default FormDescriptionLabel;
