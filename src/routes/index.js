import { Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';
import { Grid } from '@mui/material';
import Home from "../pages/Home";

function Router() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </Grid>
  );
}

export default Router;
