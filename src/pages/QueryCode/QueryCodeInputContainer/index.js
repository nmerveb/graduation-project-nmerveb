/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from '../QueryCode.module.css';

function QueryCodeInputContainer({ registerName }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles.QueryCodeInputContainer}>
      <input
        className={styles.QueryCodeInput}
        type="text"
        placeholder="Kodunuzu giriniz."
        {...register(registerName)}
      />
      <p className={styles.ValidationError}>{errors[registerName]?.message}</p>
    </div>
  );
}

export default QueryCodeInputContainer;
