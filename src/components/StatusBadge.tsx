import type { AlertStatus, Severity, ThreatStatus } from '../types/dashboard';
import { severityTone, statusTone } from '../utils/format';

interface StatusBadgeProps {
  label: AlertStatus | ThreatStatus | Severity | string;
  type?: 'severity' | 'status';
}

export function StatusBadge({ label, type = 'status' }: StatusBadgeProps) {
  const tone = type === 'severity' ? severityTone(label as Severity) : statusTone(label);
  return (
    <span className={`inline-flex min-w-20 items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold ${tone}`}>
      {label}
    </span>
  );
}
