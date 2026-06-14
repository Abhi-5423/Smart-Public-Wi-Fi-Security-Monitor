import { useState } from 'react';
import { AppLayout } from './layouts/AppLayout';
import { AlertsPage } from './pages/AlertsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { DashboardPage } from './pages/DashboardPage';
import { LandingPage } from './pages/LandingPage';
import { SettingsPage } from './pages/SettingsPage';
import { ThreatsPage } from './pages/ThreatsPage';
import type { PageId } from './types/dashboard';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('landing');

  return (
    <AppLayout activePage={activePage} onNavigate={setActivePage}>
      {activePage === 'landing' && <LandingPage onNavigate={setActivePage} />}
      {activePage === 'dashboard' && <DashboardPage />}
      {activePage === 'threats' && <ThreatsPage />}
      {activePage === 'analytics' && <AnalyticsPage />}
      {activePage === 'alerts' && <AlertsPage />}
      {activePage === 'settings' && <SettingsPage />}
    </AppLayout>
  );
}
