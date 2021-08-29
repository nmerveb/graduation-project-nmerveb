import React, { useContext } from 'react';
import FormInfoContext from '../../../../context/FormInfoContext';
import styles from '../../Success.module.css';

function QueryCodeDescription() {
  const { data } = useContext(FormInfoContext);
  return (
    <div className={styles.QueryCodeDescription}>
      {data.description}
      <br />
      <br />
      Aşağıda belitirlen kod ile başvurunuzun durumunu kontrol edebilirsiniz.
    </div>
  );
}

export default QueryCodeDescription;
