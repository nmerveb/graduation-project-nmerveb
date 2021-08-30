import * as yup from 'yup';

const QuerySchema = yup.object().shape({
  queryCode: yup.string().required('*Doldurulması zorunlu alan.'),
});

export default QuerySchema;
