import React from 'react';
import { useFormInfo } from '../../../../context/FormInfoContext';
import styles from '../../Success.module.css';

function QueryCode() {
  const { data } = useFormInfo();
  return <div className={styles.QueryCode}> {data.Id}</div>;
}

export default QueryCode;
