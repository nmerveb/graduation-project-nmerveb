/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from '../../schema/LoginSchema';
import LoginIcon from './LoginIcon';
import LoginTitle from './LoginTitle';
import InputContent from './InputContent';
import ButtonContent from './ButtonContent';
import styles from './Login.module.css';

function Login() {
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <div className={styles.LoginContainer}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.LoginBox}>
          <LoginIcon />
          <LoginTitle />
          <InputContent
            label="Kullanıcı Adı"
            placeholder="Kullanıcı adınızı giriniz."
            registerName="username"
            type="text"
          />

          <InputContent
            label="Şifre"
            placeholder="Şifrenizi giriniz."
            registerName="password"
            type="password"
          />
          <ButtonContent buttonType="submit" />
        </form>
      </div>
    </FormProvider>
  );
}

export default Login;
