import React from 'react';
import FormLabel from './FormLabel';
import FormInput from './FormInput';
import styles from '../FormInfo.module.css';

function FormInfoContent({ label, input }) {
  return (
    <div className={styles.FormInfoContent}>
      <FormLabel label={label} />
      <FormInput input={input} />
    </div>
  );
}

export default FormInfoContent;
