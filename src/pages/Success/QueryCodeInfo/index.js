import React from 'react';
import styles from '../Success.module.css';

function QueryCodeInfo() {
  return (
    <div className={styles.QueryCodeInfo}>
      <div className={styles.QueryCodeTitle}>Teşekkürler</div>
      <div className={styles.QueryCodeDescription}>
        Başvurunuz alınmıştır.
        <br />
        <br />
        Aşağıda belitirlen kod ile başvurunuzun durumunu kontrol edebilirsiniz
      </div>
      <div className={styles.QueryCode}> ndsmfbsdhs</div>
    </div>
  );
}

export default QueryCodeInfo;
