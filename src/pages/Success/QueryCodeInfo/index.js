import React from 'react';
import QueryCodeTitle from './QueryCodeTitle';
import QueryCodeDescription from './QueryCodeDescription';
import QueryCode from './QueryCode';
import styles from '../Success.module.css';

function QueryCodeInfo() {
  return (
    <div className={styles.QueryCodeInfo}>
      <QueryCodeTitle />
      <QueryCodeDescription />
      <QueryCode />
    </div>
  );
}

export default QueryCodeInfo;
