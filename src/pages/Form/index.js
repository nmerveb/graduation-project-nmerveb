/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../components/Navbar';
import styles from './Form.module.css';

function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.FormContainer}>
        <div className={styles.FormTitle}>Başvuru Formu</div>
        <div className={styles.FormInputLabel}>Ad</div>
        <input
          className={styles.FormInput}
          type="text"
          placeholder="Adınızı giriniz"
          {...register('name')}
        />
        <div className={styles.FormInputLabel}>Soyad</div>
        <input
          className={styles.FormInput}
          type="text"
          placeholder="Soyadınızı giriniz"
          {...register('surname')}
        />
        <div className={styles.FormInputLabel}>TC</div>
        <input
          className={styles.FormInput}
          type="number"
          placeholder="TC kimlik numaranızı giriniz"
          {...register('TC')}
        />
        <div className={styles.FormInputLabel}>Yaş</div>
        <input className={styles.FormInput} type="number" placeholder="Yaş" {...register('age')} />
        <div className={styles.InputDescriptionContainer}>
          <div className={styles.DescriptionLabel}>Adres</div>
          <textarea
            className={styles.DescriptionInput}
            placeholder="Adres"
            {...register('address')}
          />
        </div>
        <div className={styles.InputDescriptionContainer}>
          <div className={styles.DescriptionLabel}>Açıklama</div>
          <textarea
            className={styles.DescriptionInput}
            placeholder="Başvuru nedeninizi yazınız."
            {...register('reason')}
          />
        </div>
        <div className={styles.FormFileLabel}>Kartınızı özelleştirmek için görsel seçiniz</div>
        <div className={styles.FormFileContainer}>
          <label className={styles.FormFileInput} htmlFor="input-file">
            <input
              type="file"
              id="input-file"
              accept="image/png, image/jpeg"
              hidden
              {...register('image')}
            />
            Görsel Seç
          </label>
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
