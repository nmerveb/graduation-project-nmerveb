import React, { useEffect, useState } from 'react';
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
  const [loading, setLoading] = useState(true);
  const querycode = location.state.queryCode;
  useEffect(() => {
    getApplicationFields(querycode).then((application) => {
      if (application) {
        setData(application);
        setLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.SuccessFormContainer}>
        {loading ? (
          <div className={styles.Loading}>Loading...</div>
        ) : (
          <>
            <div className={styles.SuccessFormTitle}>İşlem Başarılı</div>
            <div className={styles.SuccessFormContent}>
              <FormInfo />
              <QueryCodeInfo />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Success;
