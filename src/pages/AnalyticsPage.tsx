import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { AnalyticsCard } from '../components/AnalyticsCard';
import { riskDistribution, scoreTrend, threatFrequency, weeklyAlerts } from '../data/mockData';

const colors = ['#fb7185', '#fb923c', '#facc15', '#34d399'];

export function AnalyticsPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <AnalyticsCard title="Security Score Trend">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={scoreTrend}>
            <defs>
              <linearGradient id="score" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.55} />
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" domain={[60, 100]} />
            <Tooltip contentStyle={{ background: '#07111f', border: '1px solid rgba(255,255,255,.12)', borderRadius: 8 }} />
            <Area type="monotone" dataKey="score" stroke="#22d3ee" fill="url(#score)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </AnalyticsCard>
      <AnalyticsCard title="Threat Frequency Chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={threatFrequency}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="name" stroke="#94a3b8" tick={{ fontSize: 12 }} />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ background: '#07111f', border: '1px solid rgba(255,255,255,.12)', borderRadius: 8 }} />
            <Bar dataKey="threats" fill="#38bdf8" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </AnalyticsCard>
      <AnalyticsCard title="Risk Distribution Pie Chart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={riskDistribution} dataKey="value" nameKey="name" outerRadius={92} innerRadius={54} paddingAngle={4}>
              {riskDistribution.map((slice, index) => <Cell key={slice.name} fill={colors[index]} />)}
            </Pie>
            <Tooltip contentStyle={{ background: '#07111f', border: '1px solid rgba(255,255,255,.12)', borderRadius: 8 }} />
          </PieChart>
        </ResponsiveContainer>
      </AnalyticsCard>
      <AnalyticsCard title="Weekly Alert Statistics">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={weeklyAlerts}>
            <defs>
              <linearGradient id="alerts" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fb7185" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#fb7185" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ background: '#07111f', border: '1px solid rgba(255,255,255,.12)', borderRadius: 8 }} />
            <Area type="monotone" dataKey="alerts" stroke="#fb7185" fill="url(#alerts)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </AnalyticsCard>
    </div>
  );
}
