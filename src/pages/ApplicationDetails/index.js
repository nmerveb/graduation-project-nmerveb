import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFormInfo } from '../../context/FormInfoContext';
import { getApplicationFields } from '../../services/fireStore';
import Navbar from '../../components/Navbar';
import ApplicationContainer from './ApplicationContainer';
import NotFound from './NotFound';
import styles from './ApplicationDetails.module.css';

function ApplicationDetails() {
  const { appId } = useParams();
  const { setData } = useFormInfo();
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getApplicationFields(appId).then((application) => {
      if (application) {
        setData(application);
        setLoading(false);
      } else {
        setNotFound(true);
        setLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.ApplicationDetailsContainer}>
        {loading && <div className={styles.Loading}>Loading...</div>}
        {!loading && (
          <>
            {!notFound && (
              <>
                <ApplicationContainer />
              </>
            )}
            {notFound && <NotFound />}
          </>
        )}
      </div>
    </>
  );
}

export default ApplicationDetails;
