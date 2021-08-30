/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { updateStatus } from '../../../services/fireStore';
import styles from '../AdminApplicationDetails.module.css';

function StatusUpdate({ id }) {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = (formData) => {
    updateStatus(id, formData);
    setSuccess(true);
  };
  const handleClick = () => {
    history.push('/admin/basvuru-listesi');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.StatusUpdate}>
      <div className={styles.StatusUpdateTitle}>Güncel Durum</div>
      <textarea
        className={styles.DescriptionUpdateInput}
        placeholder="Kullanıcıyı bilgilendirmek için kullanabilirsiniz.Zorunlu değildir."
        type="text"
        {...register('description')}
      />
      <div className={styles.SelectContainer}>
        <select className={styles.StatusUpdateSelect} {...register('status')}>
          <option value="pending">İnceleniyor</option>
          <option value="approve">Onaylandı</option>
          <option value="reject">Reddedildi</option>
        </select>
      </div>
      <div className={styles.UpdateBtnContainer}>
        <button type="button" onClick={handleClick} className={styles.UpdateBtn}>
          Geri Dön
        </button>
        <button type="submit" className={styles.UpdateBtn}>
          Gönder
        </button>
      </div>
      {success && <div className={styles.Success}>İşlem Başarılı</div>}
    </form>
  );
}

export default StatusUpdate;
