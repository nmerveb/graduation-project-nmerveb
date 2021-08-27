import React from 'react';
import styles from '../QueryCode.module.css';

function QueryCodeInputContainer() {
  return (
    <div className={styles.QueryCodeInputContainer}>
      <input className={styles.QueryCodeInput} type="text" placeholder="Kodunuzu girin" />
    </div>
  );
}

export default QueryCodeInputContainer;
