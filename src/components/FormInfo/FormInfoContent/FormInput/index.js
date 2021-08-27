import React from 'react';
import styles from '../../FormInfo.module.css';

function FormInput({ input }) {
  return <span className={styles.FormInput}>{input}</span>;
}

export default FormInput;
