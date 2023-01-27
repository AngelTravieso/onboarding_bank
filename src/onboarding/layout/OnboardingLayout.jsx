import { Box, Grid } from '@mui/material';
import { Footer, OnboardingNavbar } from '../components';

export const OnboardingLayout = ({ children }) => {
  return (
    <Box>
      {/* NavBar Onboarding */}
      <OnboardingNavbar />

      <Box component='main' sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='start'
          sx={{
            minHeight: '85vh',
            backgroundColor: '#eef5f9',
            padding: 4,
            // Solucionar (si no hay margin no se ve la sombra del appbar)
            marginTop: 1,
          }}
        >
          {children}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};
