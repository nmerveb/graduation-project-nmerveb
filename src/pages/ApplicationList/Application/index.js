import React from 'react';
import styles from '../ApplicationList.module.css';

function Application({ name, surname, divKey, date }) {
  const formattedDate = date.toDate().toLocaleDateString('tr-TR');
  console.log();

  return (
    <div key={divKey} className={styles.Application}>
      <div className={styles.Applicant}>{`${name} ${surname}`}</div>
      <span className={styles.ApplicatonDate}>{formattedDate}</span>
      <button className={styles.ViewBtn} type="button">
        Görüntüle
      </button>
    </div>
  );
}

export default Application;
