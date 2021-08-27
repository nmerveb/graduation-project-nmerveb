import React from 'react';
import FormInfo from '../../components/FormInfo';
import StatusUpdate from './StatusUpdate';
import styles from './AdminApplicationDetails.module.css';

function AdminApplicationDetails() {
  return (
    <>
      <div className={styles.ApplicationDetailsContainer}>
        <FormInfo />
        <StatusUpdate />
      </div>
    </>
  );
}

export default AdminApplicationDetails;
