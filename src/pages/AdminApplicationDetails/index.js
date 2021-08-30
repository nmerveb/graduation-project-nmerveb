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
  const { setData } = useFormInfo();
  useEffect(() => {
    getApplicationFields(appId).then((application) => {
      if (application) {
        setData(application);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className={styles.ApplicationDetailsContainer}>
        {loading ? (
          <div className={styles.Loading}>Loading...</div>
        ) : (
          <>
            <FormInfo />
            <StatusUpdate id={appId} />
          </>
        )}
      </div>
    </>
  );
}

export default AdminApplicationDetails;
