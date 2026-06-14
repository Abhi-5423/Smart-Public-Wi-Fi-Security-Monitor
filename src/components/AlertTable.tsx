import { ArrowDownUp, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { alerts } from '../data/mockData';
import type { AlertRecord, AlertStatus, Severity } from '../types/dashboard';
import { StatusBadge } from './StatusBadge';

type SortKey = keyof Pick<AlertRecord, 'id' | 'threatType' | 'severity' | 'timestamp' | 'status'>;

const severityRank: Record<Severity, number> = { Critical: 4, High: 3, Medium: 2, Low: 1 };

export function AlertTable() {
  const [query, setQuery] = useState('');
  const [severity, setSeverity] = useState<'All' | Severity>('All');
  const [status, setStatus] = useState<'All' | AlertStatus>('All');
  const [sortKey, setSortKey] = useState<SortKey>('timestamp');
  const [sortAsc, setSortAsc] = useState(false);

  const filteredAlerts = useMemo(() => {
    return alerts
      .filter((alert) => {
        const matchesQuery = `${alert.id} ${alert.threatType} ${alert.source}`.toLowerCase().includes(query.toLowerCase());
        const matchesSeverity = severity === 'All' || alert.severity === severity;
        const matchesStatus = status === 'All' || alert.status === status;
        return matchesQuery && matchesSeverity && matchesStatus;
      })
      .sort((a, b) => {
        const dir = sortAsc ? 1 : -1;
        if (sortKey === 'severity') return (severityRank[a.severity] - severityRank[b.severity]) * dir;
        return String(a[sortKey]).localeCompare(String(b[sortKey])) * dir;
      });
  }, [query, severity, status, sortKey, sortAsc]);

  function sortBy(key: SortKey) {
    if (key === sortKey) {
      setSortAsc((current) => !current);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  }

  return (
    <section className="glass rounded-lg p-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Alert Center</h2>
          <p className="mt-1 text-sm text-slate-400">{filteredAlerts.length} events match the current view</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-11 w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-3 text-sm text-white outline-none transition focus:border-cyan-300 sm:w-64"
              placeholder="Search alerts"
            />
          </label>
          <select value={severity} onChange={(event) => setSeverity(event.target.value as 'All' | Severity)} className="h-11 rounded-lg border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none focus:border-cyan-300">
            {['All', 'Critical', 'High', 'Medium', 'Low'].map((item) => <option key={item}>{item}</option>)}
          </select>
          <select value={status} onChange={(event) => setStatus(event.target.value as 'All' | AlertStatus)} className="h-11 rounded-lg border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none focus:border-cyan-300">
            {['All', 'Open', 'Investigating', 'Resolved'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
      </div>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[760px] border-separate border-spacing-y-2 text-left text-sm">
          <thead className="text-xs uppercase text-slate-400">
            <tr>
              {[
                ['id', 'Alert ID'],
                ['threatType', 'Threat Type'],
                ['severity', 'Severity'],
                ['timestamp', 'Timestamp'],
                ['status', 'Status'],
              ].map(([key, label]) => (
                <th key={key} className="px-4 py-2">
                  <button onClick={() => sortBy(key as SortKey)} className="inline-flex items-center gap-2 text-left transition hover:text-cyan-200">
                    {label}
                    <ArrowDownUp className="h-3.5 w-3.5" />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredAlerts.map((alert) => (
              <tr key={alert.id} className="bg-white/[0.045] text-slate-200">
                <td className="rounded-l-lg px-4 py-4 font-semibold text-cyan-100">{alert.id}</td>
                <td className="px-4 py-4">
                  <div className="font-medium text-white">{alert.threatType}</div>
                  <div className="text-xs text-slate-400">{alert.source}</div>
                </td>
                <td className="px-4 py-4"><StatusBadge label={alert.severity} type="severity" /></td>
                <td className="px-4 py-4 text-slate-300">{alert.timestamp}</td>
                <td className="rounded-r-lg px-4 py-4"><StatusBadge label={alert.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
