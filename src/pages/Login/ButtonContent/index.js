import React from 'react';
import styles from '../Login.module.css';

function ButtonContent() {
  return (
    <div className={styles.ButtonContent}>
      <button type="button" className={styles.Button}>
        Back
      </button>
      <button type="button" className={styles.Button}>
        Login
      </button>
    </div>
  );
}

export default ButtonContent;
