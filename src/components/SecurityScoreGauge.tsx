import { motion } from 'framer-motion';

export function SecurityScoreGauge({ score }: { score: number }) {
  const radius = 74;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="glass flex h-full min-h-72 flex-col items-center justify-center rounded-lg p-6">
      <div className="relative h-44 w-44">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="14" fill="none" />
          <motion.circle
            cx="90"
            cy="90"
            r={radius}
            stroke="url(#scoreGradient)"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="scoreGradient">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-black text-white">{score}</span>
          <span className="text-xs uppercase text-cyan-200">score</span>
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">Network Trust Rating</h3>
      <p className="mt-2 max-w-xs text-center text-sm text-slate-300">Strong encryption and clean DNS checks, with one duplicate SSID under review.</p>
    </div>
  );
}
