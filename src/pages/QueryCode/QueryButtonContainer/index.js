import React from 'react';
import styles from '../QueryCode.module.css';

function QueryButtonContainer() {
  return (
    <div className={styles.QueryBtnContainer}>
      <button type="button" className={styles.QueryButton}>
        Query
      </button>
    </div>
  );
}

export default QueryButtonContainer;
