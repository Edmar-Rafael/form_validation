import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Nome muito curto')
    .max(50, 'Nome muito longo')
    .required('Campo obrigatório'),
  password: Yup.string()
    .min(2, 'Senha muito curta')
    .max(20, 'Senha muito longa')
    .required('Campo obrigatório'),
});

export default LoginSchema;
