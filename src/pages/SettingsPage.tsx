import { Bell, Moon, Radar, SlidersHorizontal } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { useLocalSettings } from '../hooks/useLocalSettings';

export function SettingsPage() {
  const settings = useLocalSettings();
  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <SettingRow
        icon={Bell}
        title="Notification Preferences"
        description="Send visible alerts for critical and high-risk public Wi-Fi events."
        control={<Toggle checked={settings.notifications} onChange={settings.setNotifications} />}
      />
      <SettingRow
        icon={Radar}
        title="Auto-scan"
        description="Continuously scan SSID, DNS, gateway, and spoofing indicators."
        control={<Toggle checked={settings.autoScan} onChange={settings.setAutoScan} />}
      />
      <SettingRow
        icon={Moon}
        title="Dark Mode"
        description="Keep the cybersecurity operations console in dark visual mode."
        control={<Toggle checked={settings.darkMode} onChange={settings.setDarkMode} />}
      />
      <SettingRow
        icon={SlidersHorizontal}
        title="Scan Frequency"
        description="Choose how often the mock monitor refreshes network telemetry."
        control={
          <select value={settings.scanFrequency} onChange={(event) => settings.setScanFrequency(event.target.value)} className="h-11 rounded-lg border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none focus:border-cyan-300">
            {['5 min', '10 min', '15 min', '30 min', '60 min'].map((item) => <option key={item}>{item}</option>)}
          </select>
        }
      />
    </div>
  );
}

function SettingRow({ icon: Icon, title, description, control }: { icon: LucideIcon; title: string; description: string; control: ReactNode }) {
  return (
    <section className="glass flex flex-col gap-4 rounded-lg p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-4">
        <div className="grid h-11 w-11 flex-none place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-300">{description}</p>
        </div>
      </div>
      {control}
    </section>
  );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative h-8 w-14 flex-none rounded-full border transition ${checked ? 'border-cyan-300 bg-cyan-300/30' : 'border-white/15 bg-white/10'}`}
      aria-pressed={checked}
    >
      <span className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${checked ? 'left-7' : 'left-1'}`} />
    </button>
  );
}
