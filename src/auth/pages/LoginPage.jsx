import { useState } from "react";
import { Button, Grid, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

import { DocumentField, UserTypeSelect } from "../components";
import { AuthLayout } from "../layout/AuthLayout";
import { currencies } from "../../data/Constants";
import { userForm } from "../../hooks";

const formData = {
  userType: "1",
  document: "",
};

export const LoginPage = () => {
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
    <AuthLayout title="Registro de Cuenta Personal">
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
            {/* Boton para ingresar al paso a paso del Onboarding */}
            <Button
              // component={RouterLink}
              type="submit"
              variant="contained"
              endIcon={<NavigateNext />}
              // to="/onboarding/main"
            >
              Siguiente
            </Button>
          </Grid>

          {/* Link '¿Ya Tienes Cuenta?' */}
          <Grid container mt={2} mb={3} direction="row" justifyContent="center">
            <Typography sx={{ mr: 1 }} color="grey">
              ¿Ya tienes una cuenta?
            </Typography>
            <Link
              component={RouterLink}
              color="primary"
              to="/auth/register"
              underline="none"
            >
              Iniciar sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
