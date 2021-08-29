import * as yup from 'yup';

const LoginSchema = yup.object().shape({
  username: yup.string().required('*Doldurulması zorunlu alan.'),
  password: yup.string().required('*Doldurulması zorunlu alan.'),
});

export default LoginSchema;
