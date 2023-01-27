import { Routes, Route, Navigate } from 'react-router-dom';

import { OnboardingPage } from '../pages';

export const OnboardingRoutes = () => {
    return (
        <Routes>

            {/* Vista Principal (y unica) del Onboarding */}
            <Route path='main' element={<OnboardingPage />} />

            {/* Ruta que no coincida */}
            <Route path='/*' element={<Navigate to='main' />} />

        </Routes>
    )
}
