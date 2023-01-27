import { Box, AppBar, Toolbar, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import R4LogoBlanco from '../../assets/img/logo_r4_completo_blanco.png';
import MBLogoBlanco from '../../assets/img/logo_mb_blanco.png';

export const OnboardingNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='primary'>
        <Toolbar sx={{ justifyContent: 'space-between', padding: 0.75 }}>
          {/* Logo R4Conecta */}
          <Link component={RouterLink} to='/onboarding/main'>
            <img src={R4LogoBlanco} height='50' />
          </Link>

          {/* Logo MiBanco Gris */}
          <Link component={RouterLink} to='/onboarding/main'>
            <img src={MBLogoBlanco} height='50' />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
