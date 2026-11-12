import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './hooks/useToast';
import { AppLayout } from './components/layout/AppLayout';
import { DashboardLayout } from './components/layout/DashboardLayout';

import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { ScanPage } from './pages/ScanPage';
import { ResultsPage } from './pages/ResultsPage';
import { AwarenessPage } from './pages/AwarenessPage';
import { ScamDetailPage } from './pages/ScamDetailPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            {/* Top-Level Marketing & Educational Pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/awareness" element={<AwarenessPage />} />
            <Route path="/awareness/:id" element={<ScamDetailPage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Dashboard & Scanner Center with Responsive Operational Sidebar */}
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/scan" element={<ScanPage />} />
              <Route path="/results/:id" element={<ResultsPage />} />
              <Route path="/results" element={<ResultsPage />} />
            </Route>

            {/* Fallback 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
