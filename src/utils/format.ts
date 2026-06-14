import type { AlertStatus, Severity, ThreatStatus } from '../types/dashboard';

export function severityTone(severity: Severity) {
  return {
    Critical: 'border-rose-400/40 bg-rose-400/15 text-rose-100',
    High: 'border-orange-300/40 bg-orange-300/15 text-orange-100',
    Medium: 'border-yellow-300/40 bg-yellow-300/15 text-yellow-100',
    Low: 'border-emerald-300/40 bg-emerald-300/15 text-emerald-100',
  }[severity];
}

export function statusTone(status: AlertStatus | ThreatStatus | string) {
  const tones: Record<string, string> = {
    Open: 'border-rose-400/40 bg-rose-400/15 text-rose-100',
    Investigating: 'border-sky-300/40 bg-sky-300/15 text-sky-100',
    Resolved: 'border-emerald-300/40 bg-emerald-300/15 text-emerald-100',
    Clear: 'border-emerald-300/40 bg-emerald-300/15 text-emerald-100',
    Monitoring: 'border-cyan-300/40 bg-cyan-300/15 text-cyan-100',
    Detected: 'border-rose-400/40 bg-rose-400/15 text-rose-100',
    Blocked: 'border-purple-300/40 bg-purple-300/15 text-purple-100',
    Connected: 'border-emerald-300/40 bg-emerald-300/15 text-emerald-100',
    Scanning: 'border-cyan-300/40 bg-cyan-300/15 text-cyan-100',
    Quarantined: 'border-rose-400/40 bg-rose-400/15 text-rose-100',
  };
  return tones[status] ?? 'border-white/15 bg-white/10 text-slate-100';
}
