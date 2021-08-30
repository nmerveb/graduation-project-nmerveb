/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../context/AuthContext';
import LoginSchema from '../../schema/LoginSchema';
import LoginIcon from './LoginIcon';
import LoginTitle from './LoginTitle';
import InputContent from './InputContent';
import ButtonContent from './ButtonContent';
import styles from './Login.module.css';

function Login() {
  const methods = useForm({ resolver: yupResolver(LoginSchema) });
  const { login, isAuthenticated } = useAuth();
  const [error, setError] = useState(false);
  const history = useHistory();
  const onSubmit = (data) => {
    login(data) ? history.push('/admin/basvuru-listesi') : setError(true);
  };
  useEffect(() => {
    isAuthenticated && history.push('/basvuru-olustur');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          {error && <div className={styles.ValidationError}> Hatalı kullanıcı adı veya şifre.</div>}

          <ButtonContent buttonType="submit" />
        </form>
      </div>
    </FormProvider>
  );
}

export default Login;
