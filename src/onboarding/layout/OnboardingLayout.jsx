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
            minHeight: '100vh',
            backgroundColor: 'secondary.main',
            padding: 4,
            marginTop: 6,
          }}
        >
          {children}

          <Footer />
        </Grid>
      </Box>

    </Box>
  )
}
