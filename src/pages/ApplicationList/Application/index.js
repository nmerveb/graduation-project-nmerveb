import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../ApplicationList.module.css';

function Application({ name, surname, divKey, date }) {
  const formattedDate = date.toDate().toLocaleDateString('tr-TR');
  const history = useHistory();
  const handleClick = () => {
    console.log(divKey);
    history.push({ pathname: `/admin/basvuru/${divKey}`, state: { appId: divKey } });
  };

  return (
    <div key={divKey} className={styles.Application}>
      <div className={styles.Applicant}>{`${name} ${surname}`}</div>
      <span className={styles.ApplicatonDate}>{formattedDate}</span>
      <button className={styles.ViewBtn} onClick={handleClick} type="button">
        Görüntüle
      </button>
    </div>
  );
}

export default Application;
