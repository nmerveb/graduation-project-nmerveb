import * as yup from 'yup';

const QuerySchema = yup.object().shape({
  queryCode: yup.string().required('*DoldurulmasÄ± zorunlu alan.'),
});

export default QuerySchema;
