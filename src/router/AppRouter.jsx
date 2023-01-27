import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { OnboardingRoutes } from '../onboarding/routes/OnboardingRoutes';


export const AppRouter = () => {
  return (
    <Routes>

        {/* Rutas de Autenticación */}
        <Route path='/auth/*' element={ <AuthRoutes />} />

        {/* Ruta OnBoarding (interno) */}
        <Route path='/onboarding/*' element={ <OnboardingRoutes />} />

        {/* Ruta por defecto, si nada coincide va al login */}
        <Route path='/*' element={ <Navigate to='auth/login' /> } />

    </Routes>
  )
}
