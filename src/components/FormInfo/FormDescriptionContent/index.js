import React from 'react';
import FormDescriptionLabel from './FormDescriptionLabel';
import FormDescriptionInput from './FormDescriptionInput';
import styles from '../FormInfo.module.css';

function FormDescriptionContent({ label, input }) {
  return (
    <div className={styles.FormDescriptionContent}>
      <FormDescriptionLabel label={label} />
      <FormDescriptionInput input={input} />
    </div>
  );
}

export default FormDescriptionContent;
