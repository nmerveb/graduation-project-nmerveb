import React from 'react';
import Navbar from '../../components/Navbar';
import QueryContainerTitle from './QueryContainerTitle';
import QueryCodeInputContainer from './QueryCodeInputContainer';
import QueryButtonContainer from './QueryButtonContainer';
import styles from './QueryCode.module.css';

function QueryCode() {
  return (
    <>
      <Navbar />
      <div className={styles.QueryContainer}>
        <QueryContainerTitle />
        <QueryCodeInputContainer />
        <QueryButtonContainer />
      </div>
    </>
  );
}

export default QueryCode;
