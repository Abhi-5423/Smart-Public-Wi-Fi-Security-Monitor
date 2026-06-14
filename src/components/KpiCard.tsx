import { motion } from 'framer-motion';
import type { Kpi } from '../types/dashboard';

const tones = {
  cyan: 'from-cyan-400/30 to-blue-500/5 text-cyan-100',
  green: 'from-emerald-400/30 to-cyan-500/5 text-emerald-100',
  yellow: 'from-yellow-300/30 to-cyan-500/5 text-yellow-100',
  red: 'from-rose-400/30 to-cyan-500/5 text-rose-100',
};

export function KpiCard({ kpi }: { kpi: Kpi }) {
  const Icon = kpi.icon;
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      className={`glass rounded-lg bg-gradient-to-br ${tones[kpi.tone]} p-5`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-300">{kpi.label}</p>
          <h3 className="mt-3 text-3xl font-bold tracking-normal text-white">{kpi.value}</h3>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/10 p-3">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-300">{kpi.delta}</p>
    </motion.article>
  );
}
