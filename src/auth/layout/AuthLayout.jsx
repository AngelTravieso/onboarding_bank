import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { AuthNavBar } from '../components';

import LibrePagoLogo from '../../assets/img/librepago.png';

const year = new Date().getFullYear();

export const AuthLayout = ({ children, title = ''}) => {
  return (
    <Box>
      {/* NavBar Login */}
      <AuthNavBar />

      {/* Fondo */}
      <Box component='main' sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='start'
          sx={{
            minHeight: '100vh',
            backgroundColor: 'secondary.main',
            padding: 4,
            marginTop: 6,
          }}
        >
          {/* Card Login */}
          <Card variant='outlined' sx={{ width: 525, padding: 2 }}>
            <CardContent>
              {/* Titulo */}
              <Typography
                variant='h5'
                sx={{ mb: 1 }}
                color='primary'
                textAlign='center'
              >
                {title}
              </Typography>

              {children}
            </CardContent>

            <Divider sx={{ width: '100%', backgroundColor: 'primary.main' }} />
            {/* Footer */}
            <CardActions>
              <Grid container mt={2} direction='column' alignItems='center'>
                <Typography sx={{ mr: 1 }} color='grey' variant='caption'>
                  Mi Banco, Banco Microfinanciero, C.A. RIF: J-31594102-3
                </Typography>
                <Typography sx={{ mr: 1 }} color='grey' variant='caption'>
                  Plataforma de <img src={LibrePagoLogo} height='20' />{' '}
                  <span className='fw-bold'>© {year}</span> - Todos los derechos
                  reservados
                </Typography>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
};
