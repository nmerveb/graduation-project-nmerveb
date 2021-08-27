import React from 'react';
import Navbar from '../../components/Navbar';
import FormInfo from '../../components/FormInfo';
import QueryCodeInfo from './QueryCodeInfo';
import styles from './Success.module.css';

function Success() {
  return (
    <>
      <Navbar />
      <div className={styles.SuccessFormContainer}>
        <div className={styles.SuccessFormTitle}>İşlem Başarılı</div>
        <div className={styles.SuccessFormContent}>
          <FormInfo />
          <QueryCodeInfo code="hdsbhsdsjfnsb" />
        </div>
      </div>
    </>
  );
}

export default Success;
