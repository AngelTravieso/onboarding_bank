import { Box, Grid, Typography } from '@mui/material';

import LibrePagoLogo from '../../assets/img/librepago.png';
import { APP_NAME, APP_RIF, YEAR } from '../../data/Constants';

export const Footer = () => {
  return (
    <Box
      textAlign='center'
      alignItems='center'
      sx={{
        height: 150,
        backgroundColor: '#fff '
      }}
    >
      <Grid container mt={2} direction='column' alignItems='center'>
        <Typography sx={{ mr: 1 }} color='grey' variant='caption'>
          {APP_NAME}. RIF: {APP_RIF}
        </Typography>
        <Typography sx={{ mr: 1 }} color='grey' variant='caption'>
          Plataforma de <img src={LibrePagoLogo} height='20' />{' '}
          <span className='fw-bold'>© {YEAR}</span> - Todos los derechos
          reservados
        </Typography>
      </Grid>
    </Box>
  );
};
