import React from 'react';
import { Button, TextField } from '@mui/material';
import Wrapper from '../../components/Wrapper';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import LoginSchema from "./validation";
import {login} from "../../services/user";
import {toast} from "react-toastify";

function Login() {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async values => {
      try {
        const {data} = await login(values);
        toast.success(`Logado com ${data.login}`);
        navigate('/home')
      } catch ({response}) {
        toast.error(response.data.why);
      }
    },
  });

  const navigate = useNavigate();

  function goToRegister() {
    navigate('/register')
  }

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
        <Button variant="contained" type="submit">Login</Button>
        <Button variant="text" onClick={goToRegister}>Registrar</Button>
      </Wrapper>
    </form>
  );
}

export default Login;
