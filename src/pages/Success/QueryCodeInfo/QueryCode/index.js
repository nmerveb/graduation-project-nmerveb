import React, { useContext } from 'react';
import FormInfoContext from '../../../../context/FormInfoContext';
import styles from '../../Success.module.css';

function QueryCode({ code }) {
  const { data } = useContext(FormInfoContext);
  return <div className={styles.QueryCode}> {data.Id}</div>;
}

export default QueryCode;
