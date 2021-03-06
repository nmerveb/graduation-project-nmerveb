import * as yup from 'yup';

const LoginSchema = yup.object().shape({
  username: yup.string().required('*DoldurulmasÄ± zorunlu alan.'),
  password: yup.string().required('*DoldurulmasÄ± zorunlu alan.'),
});

export default LoginSchema;
