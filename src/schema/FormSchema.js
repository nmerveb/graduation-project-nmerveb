import * as yup from 'yup';

const FormSchema = yup.object().shape({
  name: yup.string().required('*Doldurulması zorunlu alan.'),
  surname: yup.string().required('*Doldurulması zorunlu alan.'),
  age: yup
    .number()
    .typeError('*Bu alana sadece sayı girebilirsiniz.')
    .required('*Doldurulması zorunlu alan.')
    .min(18, '*18 yaşından küçükler başvuruda bulunamaz.'),
  TC: yup
    .string()
    .matches(/^[0-9]{11}$/, '*Bu alana 11 haneli kimlik numaranızı giriniz.')
    .required('*Doldurulması zorunlu alan.'),
  reason: yup.string().required('*Doldurulması zorunlu alan.'),
  address: yup.string().required('*Doldurulması zorunlu alan.'),
});

export default FormSchema;
