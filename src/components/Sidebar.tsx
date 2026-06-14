import { AlertTriangle, BarChart3, Home, LayoutDashboard, Settings, ShieldAlert, X } from 'lucide-react';
import type { NavItem, PageId } from '../types/dashboard';

const navItems: NavItem[] = [
  { id: 'landing', label: 'Overview', icon: Home },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'threats', label: 'Threats', icon: ShieldAlert },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'alerts', label: 'Alerts', icon: AlertTriangle },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ activePage, onNavigate, open, onClose }: { activePage: PageId; onNavigate: (page: PageId) => void; open: boolean; onClose: () => void }) {
  return (
    <>
      <div className={`fixed inset-0 z-30 bg-black/60 transition lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={onClose} />
      <aside className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-white/10 bg-slate-950/90 p-5 backdrop-blur-xl transition lg:sticky lg:top-0 lg:z-auto lg:h-screen lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between gap-4">
          <button onClick={() => onNavigate('landing')} className="flex items-center gap-3 text-left">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-300 text-slate-950 shadow-glow">
              <ShieldAlert className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-sm font-bold uppercase text-white">Smart Wi-Fi</span>
              <span className="block text-xs text-cyan-200">Security Monitor</span>
            </span>
          </button>
          <button onClick={onClose} className="rounded-lg border border-white/10 p-2 text-slate-300 lg:hidden" aria-label="Close navigation">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-9 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = item.id === activePage;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition ${active ? 'bg-cyan-300 text-slate-950 shadow-glow' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
          <p className="text-sm font-semibold text-white">Live Protection</p>
          <p className="mt-1 text-xs leading-5 text-slate-300">Encrypted DNS, SSID anomaly checks, and gateway monitoring are active.</p>
        </div>
      </aside>
    </>
  );
}
