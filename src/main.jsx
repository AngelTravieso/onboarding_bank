import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { OnboardingApp } from './OnboardingApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter */}
    <BrowserRouter>
      {/* App */}
      <OnboardingApp />
    </BrowserRouter>
  </React.StrictMode>,
)
