import React from 'react';
import styles from '../Login.module.css';

function InputContent({ label, placeholder }) {
  return (
    <div className={styles.LoginContent}>
      <div className={styles.InputLabel}>{label}</div>
      <input className={styles.Input} type="text" placeholder={placeholder} />
    </div>
  );
}

export default InputContent;
