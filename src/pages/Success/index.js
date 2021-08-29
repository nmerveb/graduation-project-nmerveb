import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import FormInfo from '../../components/FormInfo';
import QueryCodeInfo from './QueryCodeInfo';
import { useFormInfo } from '../../context/FormInfoContext';
import { getApplicationFields } from '../../services/fireStore';
import styles from './Success.module.css';

function Success() {
  const location = useLocation();
  const { setData } = useFormInfo();
  const querycode = location.state.queryCode;
  useEffect(() => {
    getApplicationFields(querycode).then((application) => {
      if (application) setData(application);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.SuccessFormContainer}>
        <div className={styles.SuccessFormTitle}>İşlem Başarılı</div>
        <div className={styles.SuccessFormContent}>
          <FormInfo />
          <QueryCodeInfo />
        </div>
      </div>
    </>
  );
}

export default Success;
