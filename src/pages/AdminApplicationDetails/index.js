import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormInfo } from '../../context/FormInfoContext';
import { getApplicationFields } from '../../services/fireStore';
import FormInfo from '../../components/FormInfo';
import StatusUpdate from './StatusUpdate';
import styles from './AdminApplicationDetails.module.css';

function AdminApplicationDetails() {
  const { appId } = useLocation().state;
  const [loading, setLoading] = useState(true);
  const { data, setData } = useFormInfo();
  useEffect(() => {
    getApplicationFields(appId).then((application) => {
      if (application) {
        setData(application);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, []);
  console.log(data);
  return (
    <>
      <div className={styles.ApplicationDetailsContainer}>
        {loading ? (
          <div className={styles.Loading}>Loading...</div>
        ) : (
          <>
            <FormInfo />
            <StatusUpdate />
          </>
        )}
      </div>
    </>
  );
}

export default AdminApplicationDetails;
