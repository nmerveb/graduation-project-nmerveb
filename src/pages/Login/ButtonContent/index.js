import React from 'react';
import styles from '../Login.module.css';

function ButtonContent() {
  return (
    <div className={styles.ButtonContent}>
      <button type="button" className={styles.Button}>
        Geri Dön
      </button>
      <button type="button" className={styles.Button}>
        Giriş
      </button>
    </div>
  );
}

export default ButtonContent;
