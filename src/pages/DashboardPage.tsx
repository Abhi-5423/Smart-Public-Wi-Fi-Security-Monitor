import { KpiCard } from '../components/KpiCard';
import { NetworkCard } from '../components/NetworkCard';
import { SecurityScoreGauge } from '../components/SecurityScoreGauge';
import { kpis, networks } from '../data/mockData';

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => <KpiCard key={kpi.label} kpi={kpi} />)}
      </section>
      <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          {networks.map((network) => <NetworkCard key={network.ssid} network={network} />)}
        </div>
        <SecurityScoreGauge score={86} />
      </section>
    </div>
  );
}
