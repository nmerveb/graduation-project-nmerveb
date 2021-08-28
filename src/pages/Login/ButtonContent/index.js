import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../Login.module.css';

function ButtonContent() {
  const history = useHistory();
  const handleGoBack = () => {
    history.push('/');
  };
  const handleLogin = () => {
    history.push('/admin/basvuru-listesi');
  };
  return (
    <div className={styles.ButtonContent}>
      <button type="button" className={styles.Button} onClick={handleGoBack}>
        Geri Dön
      </button>
      <button type="button" className={styles.Button} onClick={handleLogin}>
        Giriş
      </button>
    </div>
  );
}

export default ButtonContent;
