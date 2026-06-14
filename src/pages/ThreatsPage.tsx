import { ThreatCard } from '../components/ThreatCard';
import { threats } from '../data/mockData';

export function ThreatsPage() {
  return (
    <div className="space-y-6">
      <section className="glass rounded-lg p-5">
        <p className="text-sm font-semibold uppercase text-cyan-200">Detection Matrix</p>
        <h2 className="mt-2 text-2xl font-bold text-white">Threat monitoring across public Wi-Fi attack vectors</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
          Mock telemetry combines SSID similarity, gateway behavior, DNS integrity, packet anomalies, and captive portal checks.
        </p>
      </section>
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {threats.map((threat) => <ThreatCard key={threat.name} threat={threat} />)}
      </section>
    </div>
  );
}
