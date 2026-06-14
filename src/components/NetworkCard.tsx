import { Wifi, Server, Globe2, RadioTower } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { WifiNetwork } from '../types/dashboard';
import { StatusBadge } from './StatusBadge';

export function NetworkCard({ network }: { network: WifiNetwork }) {
  return (
    <article className="glass rounded-lg p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm text-cyan-200">{network.location}</p>
          <h3 className="mt-1 text-xl font-bold text-white">{network.ssid}</h3>
        </div>
        <StatusBadge label={network.connectionStatus} />
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Info icon={Wifi} label="Security Type" value={network.securityType} />
        <Info icon={RadioTower} label="Signal Strength" value={`${network.signalStrength}%`} />
        <Info icon={Globe2} label="Public IP Address" value={network.publicIp} />
        <Info icon={Server} label="DNS Server" value={network.dnsServer} />
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" style={{ width: `${network.signalStrength}%` }} />
      </div>
    </article>
  );
}

function Info({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/15 p-4">
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <Icon className="h-4 w-4 text-cyan-300" />
        {label}
      </div>
      <p className="mt-2 break-words font-semibold text-slate-100">{value}</p>
    </div>
  );
}
