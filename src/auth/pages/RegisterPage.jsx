import { NavigateNext } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { DocumentField, UserTypeSelect } from '../components';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Iniciar Sesión'>
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
            <Button variant='contained' endIcon={<NavigateNext />}>
              Siguiente
            </Button>
          </Grid>

          {/* Link '¿Ya Tienes Cuenta?' */}
          <Grid container mt={2} mb={3} direction='row' justifyContent='center'>
            <Typography sx={{ mr: 1 }} color='grey'>
              ¿No tienes una cuenta?
            </Typography>
            <Link
              component={RouterLink}
              color='primary'
              to='/auth/login'
              underline='none'
            >
              Crear Cuenta
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};
