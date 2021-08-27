import React from 'react';
import styles from '../Form.module.css';

function FormInputContainer({ label, placeholder }) {
  return (
    <>
      <div className={styles.FormInputLabel}>{label}</div>
      <input className={styles.FormInput} type="text" placeholder={placeholder} />
    </>
  );
}

export default FormInputContainer;
