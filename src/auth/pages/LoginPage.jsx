import { Box, Button, Grid, Link, Typography } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

import { DocumentField, UserTypeSelect } from '../components';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {

  return (
    <AuthLayout title='Registro de Cuenta Personal'>
      <Box component='form' noValidate autoComplete='off' className='animate__animated animate__fadeIn animate__faster'>
        <Grid container spacing={1}>
          {/* Select Tipo de Usuario */}
          <Grid item xs={5} sx={{ mt: 2 }}>
            <UserTypeSelect />
          </Grid>

          {/* TextField Documento de Identidad */}
          <Grid item xs={7} sx={{ mt: 2 }}>
            <DocumentField />
          </Grid>

          {/* Botón Siguiente */}
          <Grid
            item
            xs={12}
            sx={{ mt: 4 }}
            display='flex'
            justifyContent='center'
          >
            {/* Boton para ingresar al paso a paso del Onboarding */}
            <Button component={RouterLink} variant='contained' endIcon={<NavigateNext />} to='/onboarding/main'>
              Siguiente
            </Button>
          </Grid>

          {/* Link '¿Ya Tienes Cuenta?' */}
          <Grid container mt={2} mb={3} direction='row' justifyContent='center'>
            <Typography sx={{ mr: 1 }} color='grey'>
              ¿Ya tienes una cuenta?
            </Typography>
            <Link
              component={RouterLink}
              color='primary'
              to='/auth/register'
              underline='none'
            >
              Iniciar sesión
            </Link>
          </Grid>

        </Grid>
      </Box>
    </AuthLayout>
  );
};
