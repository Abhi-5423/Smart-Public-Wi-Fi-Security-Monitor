import { Bell, Menu, Radar } from 'lucide-react';
import type { PageId } from '../types/dashboard';

const titles: Record<PageId, string> = {
  landing: 'Smart Public Wi-Fi Security Monitor',
  dashboard: 'Wi-Fi Security Dashboard',
  threats: 'Threat Detection',
  analytics: 'Analytics',
  alerts: 'Alert Center',
  settings: 'Settings',
};

export function Navbar({ activePage, onMenu }: { activePage: PageId; onMenu: () => void }) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/55 px-4 py-4 backdrop-blur-xl sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <button onClick={onMenu} className="rounded-lg border border-white/10 p-2 text-slate-200 lg:hidden" aria-label="Open navigation">
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold text-white sm:text-2xl">{titles[activePage]}</h1>
            <p className="hidden text-sm text-slate-400 sm:block">Real-time public network risk intelligence</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100 sm:flex">
            <Radar className="h-4 w-4" />
            Live Scan
          </div>
          <button className="relative rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200" aria-label="Notifications">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-rose-400" />
          </button>
        </div>
      </div>
    </header>
  );
}
