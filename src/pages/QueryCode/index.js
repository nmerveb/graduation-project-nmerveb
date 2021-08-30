/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import QuerySchema from '../../schema/QuerySchema';
import Navbar from '../../components/Navbar';
import QueryContainerTitle from './QueryContainerTitle';
import QueryCodeInputContainer from './QueryCodeInputContainer';
import QueryButtonContainer from './QueryButtonContainer';
import styles from './QueryCode.module.css';

function QueryCode() {
  const methods = useForm({ resolver: yupResolver(QuerySchema) });
  const history = useHistory();
  const onSubmit = (data) => {
    history.push(`/basvuru/${data.queryCode}`);
  };
  return (
    <>
      <Navbar />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.QueryContainer}>
          <QueryContainerTitle />
          <QueryCodeInputContainer registerName="queryCode" />
          <QueryButtonContainer />
        </form>
      </FormProvider>
    </>
  );
}

export default QueryCode;
