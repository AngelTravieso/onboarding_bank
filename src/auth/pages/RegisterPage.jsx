import { NavigateNext } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { currencies } from "../../data/Constants";
import { userForm } from "../../hooks";

import { DocumentField, UserTypeSelect } from "../components";
import { AuthLayout } from "../layout/AuthLayout";

const formData = {
  userType: "1",
  document: "",
};

export const RegisterPage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { formState, userType, document, onInputChange, onResetForm } =
    userForm(formData);

  // Submit del formulario
  const onSubmit = (event) => {
    event.preventDefault();

    setIsFormSubmitted(true);

    onResetForm();

    console.log(formState);
  };

  return (
    <AuthLayout title="Iniciar Sesión">
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container spacing={1}>
          {/* Select Tipo de Usuario */}
          <Grid item xs={4} sx={{ mt: 2 }}>
            <UserTypeSelect
              itemList={currencies}
              initialValue={currencies[0].value}
              value={userType}
              handleChange={onInputChange}
            />
          </Grid>

          {/* TextField Documento de Identidad */}
          <Grid item xs={8} sx={{ mt: 2 }}>
            <DocumentField value={document} handleChange={onInputChange} />
          </Grid>

          {/* Botón Siguiente */}
          <Grid
            item
            xs={12}
            sx={{ mt: 4 }}
            display="flex"
            justifyContent="center"
          >
            <Button variant="contained" endIcon={<NavigateNext />}>
              Siguiente
            </Button>
          </Grid>

          {/* Link '¿Ya Tienes Cuenta?' */}
          <Grid container mt={2} mb={3} direction="row" justifyContent="center">
            <Typography sx={{ mr: 1 }} color="grey">
              ¿No tienes una cuenta?
            </Typography>
            <Link
              component={RouterLink}
              color="primary"
              to="/auth/login"
              underline="none"
            >
              Crear Cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
