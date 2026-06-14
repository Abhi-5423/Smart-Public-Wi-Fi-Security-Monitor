import { motion } from 'framer-motion';
import { Clock, ShieldAlert } from 'lucide-react';
import type { ThreatDetection } from '../types/dashboard';
import { StatusBadge } from './StatusBadge';

export function ThreatCard({ threat }: { threat: ThreatDetection }) {
  return (
    <motion.article whileHover={{ y: -4 }} className="glass rounded-lg p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
          <ShieldAlert className="h-5 w-5" />
        </div>
        <StatusBadge label={threat.status} />
      </div>
      <h3 className="mt-5 text-lg font-bold text-white">{threat.name}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        <StatusBadge label={threat.riskLevel} type="severity" />
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          <Clock className="h-3.5 w-3.5 text-cyan-300" />
          {threat.detectionTime}
        </span>
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-300">{threat.recommendedAction}</p>
    </motion.article>
  );
}
