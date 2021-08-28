/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import FormSchema from '../../schema/FormSchema';
import { AddApplication } from '../../services/fireStore';
import Navbar from '../../components/Navbar';
import styles from './Form.module.css';

function Form() {
  let querycode = '';
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });
  const onSubmit = (formData) => {
    querycode = AddApplication(formData);
    history.push({
      pathname: '/basvuru-basarili',
      state: { queryCode: querycode },
    });
  };
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.FormContainer}>
        <div className={styles.FormTitle}>Başvuru Formu</div>
        <div className={styles.FormInputLabel}>Ad</div>
        <input className={styles.FormInput} placeholder="Adınızı giriniz" {...register('name')} />
        <p className={styles.FormValidationError}>{errors.name?.message}</p>
        <div className={styles.FormInputLabel}>Soyad</div>
        <input
          className={styles.FormInput}
          placeholder="Soyadınızı giriniz"
          {...register('surname')}
        />
        <p className={styles.FormValidationError}>{errors.surname?.message}</p>
        <div className={styles.FormInputLabel}>TC</div>
        <input
          className={styles.FormInput}
          type="number"
          placeholder="TC kimlik numaranızı giriniz"
          {...register('TC')}
        />
        <p className={styles.FormValidationError}>{errors.TC?.message}</p>
        <div className={styles.FormInputLabel}>Yaş</div>
        <input className={styles.FormInput} type="number" placeholder="Yaş" {...register('age')} />
        <p className={styles.FormValidationError}>{errors.age?.message}</p>
        <div className={styles.InputDescriptionContainer}>
          <div className={styles.DescriptionLabel}>Adres</div>
          <textarea
            className={styles.DescriptionInput}
            placeholder="Adres"
            {...register('address')}
          />
          <p className={styles.FormValidationError}>{errors.address?.message}</p>
        </div>
        <div className={styles.InputDescriptionContainer}>
          <div className={styles.DescriptionLabel}>Açıklama</div>
          <textarea
            className={styles.DescriptionInput}
            placeholder="Başvuru nedeninizi yazınız."
            {...register('reason')}
          />
          <p className={styles.FormValidationError}>{errors.reason?.message}</p>
        </div>
        <div className={styles.ButtonContainer}>
          <button type="submit" className={styles.SendBtn}>
            Gönder
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
