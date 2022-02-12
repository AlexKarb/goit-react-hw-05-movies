import * as yup from 'yup';

export const schema = yup.object().shape({
  query: yup
    .string()
    .trim()
    .min(2, 'Минимально введите 2 символа')
    .required('Обязательное поле'),
});
