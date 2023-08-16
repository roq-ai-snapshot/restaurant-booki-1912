import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  restaurant_id: yup.string().nullable(),
});
