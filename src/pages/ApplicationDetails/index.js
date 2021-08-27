import React from 'react';
import Navbar from '../../components/Navbar';
import FormInfo from '../../components/FormInfo';
import ApplicationStatus from './ApplicationStatus';
import styles from './ApplicationDetails.module.css';

function ApplicationDetails() {
  return (
    <>
      <Navbar />
      <div className={styles.ApplicationDetailsContainer}>
        <FormInfo />
        <ApplicationStatus />
      </div>
    </>
  );
}

export default ApplicationDetails;
