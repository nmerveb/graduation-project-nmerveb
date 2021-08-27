import React from 'react';
import FormInfoContent from './FormInfoContent';
import styles from './FormInfo.module.css';
import FormDescriptionContent from './FormDescriptionContent';

function FormInfo() {
  return (
    <div className={styles.FormInfo}>
      <div className={styles.FormInfoTitle}>Başvuru Bilgileri</div>
      <FormInfoContent label="Ad" input="Merve" />
      <FormInfoContent label="Soyad" input="Bacak" />
      <FormInfoContent label="TC" input="12345678912" />
      <FormInfoContent label="Yaş" input="12" />
      <FormDescriptionContent label="Başvuru nedeni" input="123456789" />
      <FormDescriptionContent label="Adres" input="123456789" />
      <FormInfoContent label="Secilen Görsel" input="görseladi.jpeg" />
    </div>
  );
}

export default FormInfo;
