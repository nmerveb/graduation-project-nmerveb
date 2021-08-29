/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from '../Login.module.css';

function InputContent({ label, placeholder, registerName }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles.LoginContent}>
      <div className={styles.InputLabel}>{label}</div>
      <input
        className={styles.Input}
        type="text"
        placeholder={placeholder}
        {...register(registerName)}
      />
      <p className={styles.ValidationError}>{errors[registerName]?.message}</p>
    </div>
  );
}

export default InputContent;
