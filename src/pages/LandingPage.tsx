import { motion } from 'framer-motion';
import { ArrowRight, Eye, LockKeyhole, Network, ShieldCheck } from 'lucide-react';
import type { PageId } from '../types/dashboard';

const features = [
  { icon: ShieldCheck, title: 'Security Scoring', text: 'Scores public networks using encryption, DNS, gateway, and anomaly signals.' },
  { icon: Eye, title: 'Threat Visibility', text: 'Surfaces evil twin, rogue AP, spoofing, and MITM indicators in plain language.' },
  { icon: LockKeyhole, title: 'Action Guidance', text: 'Pairs every alert with practical mitigation advice for safer browsing.' },
];

export function LandingPage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <div className="relative overflow-hidden">
      <div className="cyber-grid pointer-events-none absolute inset-0" />
      <section className="relative grid min-h-[calc(100vh-7rem)] items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-semibold uppercase text-cyan-200">
            Public Wi-Fi Risk Intelligence
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl">
            Smart Public Wi-Fi Security Monitor
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A commercial-grade cybersecurity dashboard for understanding whether the network under your laptop, phone, or field team is trustworthy enough to use.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('dashboard')}
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-cyan-300 px-6 py-3 font-bold text-slate-950 shadow-glow"
          >
            Launch Monitor
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
        <NetworkNodes />
      </section>
      <section className="relative grid gap-4 pb-8 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.article key={feature.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass rounded-lg p-5">
              <Icon className="h-7 w-7 text-cyan-200" />
              <h3 className="mt-4 text-lg font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{feature.text}</p>
            </motion.article>
          );
        })}
      </section>
      <section className="relative grid gap-4 pb-10 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ['147', 'Networks Scanned'],
          ['86%', 'Current Trust Score'],
          ['18', 'Alerts Today'],
          ['99.8%', 'Detection Uptime'],
        ].map(([value, label]) => (
          <div key={label} className="glass-soft rounded-lg p-5">
            <div className="text-3xl font-black text-white">{value}</div>
            <div className="mt-1 text-sm text-cyan-200">{label}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

function NetworkNodes() {
  const nodes = [
    ['16%', '26%'], ['34%', '16%'], ['58%', '24%'], ['78%', '16%'], ['24%', '58%'], ['50%', '48%'], ['72%', '62%'], ['40%', '78%'],
  ];
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass relative min-h-[390px] overflow-hidden rounded-lg">
      <Network className="absolute right-6 top-6 h-8 w-8 text-cyan-200" />
      <svg className="absolute inset-0 h-full w-full">
        {nodes.slice(0, -1).map((node, index) => (
          <motion.line
            key={`${node[0]}-${index}`}
            x1={node[0]}
            y1={node[1]}
            x2={nodes[index + 1][0]}
            y2={nodes[index + 1][1]}
            stroke="rgba(34,211,238,0.34)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: index * 0.1, repeat: Infinity, repeatType: 'reverse' }}
          />
        ))}
      </svg>
      {nodes.map((node, index) => (
        <motion.span
          key={index}
          className="absolute h-4 w-4 rounded-full border border-cyan-100 bg-cyan-300 shadow-glow"
          style={{ left: node[0], top: node[1] }}
          animate={{ scale: [1, 1.45, 1], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.18 }}
        />
      ))}
      <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/10 bg-slate-950/65 p-5 backdrop-blur">
        <p className="text-sm text-cyan-200">Live topology simulation</p>
        <p className="mt-2 text-2xl font-bold text-white">8 endpoints, 3 gateways, 1 suspicious SSID cluster</p>
      </div>
    </motion.div>
  );
}
