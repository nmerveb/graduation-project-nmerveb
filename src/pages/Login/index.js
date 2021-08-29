/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from '../../schema/LoginSchema';
import LoginIcon from './LoginIcon';
import LoginTitle from './LoginTitle';
import InputContent from './InputContent';
import ButtonContent from './ButtonContent';
import styles from './Login.module.css';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className={styles.LoginContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.LoginBox}>
          <LoginIcon />
          <LoginTitle />
          <InputContent
            label="Kullanıcı Adı"
            placeholder="Kullanıcı adınızı giriniz."
            {...register('username')}
          />
          <p className={styles.ValidationError}>{errors.username?.message}</p>
          <InputContent label="Şifre" placeholder="Şifrenizi giriniz." {...register('password')} />
          <p className={styles.ValidationError}>{errors.password?.message}</p>
          <ButtonContent buttonType="submit" />
        </form>
      </div>
    </>
  );
}

export default Login;
