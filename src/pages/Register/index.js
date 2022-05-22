import React from 'react';
import { Button, TextField } from '@mui/material';
import Wrapper from '../../components/Wrapper';
import {useFormik} from "formik";
import LoginSchema from "../Login/validation";
import {registerUser} from "../../services/user";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function Register() {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async values => {
      try {
        const {data} = await registerUser(values);
        toast.success(`Usuário ${data.user.name} registrado`);
        navigate('/')
      } catch ({response}) {
        toast.error(response.data.why || 'Ocorreu um erro ao tentar acessar a aplicação');
      }
    },
  });

  const navigate = useNavigate();

  return (
    <form onSubmit={formik.handleSubmit}>
      <Wrapper>
        <TextField
          label="Login"
          variant="outlined"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={!!formik.errors.name}
          helperText={formik.errors.name}
        />
        <TextField
          label="Senha"
          variant="outlined"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={!!formik.errors.password}
          helperText={formik.errors.password}
        />
        <Button loading={true} variant="contained" type="submit">Registrar</Button>
      </Wrapper>
    </form>
  );
}

export default Register;
