import React from 'react';
import FormInfoContent from './FormInfoContent';
import FormDescriptionContent from './FormDescriptionContent';
import { useFormInfo } from '../../context/FormInfoContext';
import styles from './FormInfo.module.css';

function FormInfo() {
  const { data } = useFormInfo();

  return (
    <div className={styles.FormInfo}>
      <div className={styles.FormInfoTitle}>Başvuru Bilgileri</div>
      <FormInfoContent label="Ad" input={data.name} />
      <FormInfoContent label="Soyad" input={data.surname} />
      <FormInfoContent label="TC" input={data.TC} />
      <FormInfoContent label="Yaş" input={data.age} />
      <FormDescriptionContent label="Başvuru nedeni" input={data.reason} />
      <FormDescriptionContent label="Adres" input={data.address} />
      <FormInfoContent label="Başvuru Durumu" input={data.status} />
    </div>
  );
}

export default FormInfo;
