import type { ReactNode } from 'react';

export function AnalyticsCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="glass rounded-lg p-5">
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      <div className="h-72">{children}</div>
    </section>
  );
}
