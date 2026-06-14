import { Activity, AlertTriangle, Radar, ShieldCheck } from 'lucide-react';
import type { AlertRecord, Kpi, RiskSlice, ThreatDetection, TrendPoint, WifiNetwork } from '../types/dashboard';

export const currentNetwork: WifiNetwork = {
  ssid: 'Airport_Free_WiFi_Terminal_4',
  securityType: 'WPA2',
  signalStrength: 82,
  publicIp: '203.0.113.47',
  dnsServer: '9.9.9.9 / 149.112.112.112',
  connectionStatus: 'Connected',
  location: 'Public Lounge Node A',
};

export const networks: WifiNetwork[] = [
  currentNetwork,
  {
    ssid: 'CoffeeHub_Guest',
    securityType: 'Open',
    signalStrength: 64,
    publicIp: '198.51.100.22',
    dnsServer: '8.8.8.8',
    connectionStatus: 'Scanning',
    location: 'Downtown Cafe',
  },
  {
    ssid: 'MetroLink_Public',
    securityType: 'WPA3',
    signalStrength: 77,
    publicIp: '192.0.2.18',
    dnsServer: '1.1.1.1',
    connectionStatus: 'Connected',
    location: 'Transit Hub',
  },
];

export const kpis: Kpi[] = [
  { label: 'Security Score', value: '86%', delta: '+7 from last scan', tone: 'green', icon: ShieldCheck },
  { label: 'Active Threats', value: '3', delta: '2 high priority', tone: 'red', icon: AlertTriangle },
  { label: 'Alerts Today', value: '18', delta: '-12% vs yesterday', tone: 'yellow', icon: Activity },
  { label: 'Networks Scanned', value: '147', delta: 'Across 9 locations', tone: 'cyan', icon: Radar },
];

export const threats: ThreatDetection[] = [
  {
    name: 'Evil Twin Attack Detection',
    status: 'Detected',
    riskLevel: 'Critical',
    detectionTime: '10:42 AM',
    recommendedAction: 'Disconnect from duplicate SSID and force certificate validation.',
  },
  {
    name: 'Rogue Access Point Detection',
    status: 'Monitoring',
    riskLevel: 'High',
    detectionTime: '10:36 AM',
    recommendedAction: 'Verify BSSID against trusted venue inventory.',
  },
  {
    name: 'DNS Spoofing Detection',
    status: 'Blocked',
    riskLevel: 'High',
    detectionTime: '10:28 AM',
    recommendedAction: 'Keep encrypted DNS enabled and flush cached entries.',
  },
  {
    name: 'ARP Spoofing Detection',
    status: 'Monitoring',
    riskLevel: 'Medium',
    detectionTime: '10:16 AM',
    recommendedAction: 'Continue packet inspection and pin gateway MAC address.',
  },
  {
    name: 'Man-in-the-Middle Detection',
    status: 'Clear',
    riskLevel: 'Low',
    detectionTime: '10:05 AM',
    recommendedAction: 'Maintain VPN tunnel and HTTPS-only browsing.',
  },
];

export const alerts: AlertRecord[] = [
  { id: 'ALT-9201', threatType: 'Evil Twin SSID Match', severity: 'Critical', timestamp: '2026-06-14 10:42', status: 'Open', source: 'Airport_Free_WiFi_Terminal_4' },
  { id: 'ALT-9200', threatType: 'Suspicious Gateway MAC', severity: 'High', timestamp: '2026-06-14 10:36', status: 'Investigating', source: 'CoffeeHub_Guest' },
  { id: 'ALT-9199', threatType: 'DNS Resolver Mismatch', severity: 'High', timestamp: '2026-06-14 10:28', status: 'Resolved', source: 'MetroLink_Public' },
  { id: 'ALT-9198', threatType: 'Captive Portal Injection', severity: 'Medium', timestamp: '2026-06-14 09:57', status: 'Open', source: 'Airport_Free_WiFi_Terminal_4' },
  { id: 'ALT-9197', threatType: 'Weak Open Network', severity: 'Medium', timestamp: '2026-06-14 09:44', status: 'Investigating', source: 'CoffeeHub_Guest' },
  { id: 'ALT-9196', threatType: 'Certificate Downgrade Attempt', severity: 'Critical', timestamp: '2026-06-14 09:31', status: 'Open', source: 'Hotel_Guest_Secure' },
  { id: 'ALT-9195', threatType: 'Beacon Flood Pattern', severity: 'Low', timestamp: '2026-06-14 09:10', status: 'Resolved', source: 'MetroLink_Public' },
  { id: 'ALT-9194', threatType: 'ARP Cache Drift', severity: 'Medium', timestamp: '2026-06-14 08:55', status: 'Resolved', source: 'Library_Public_Access' },
  { id: 'ALT-9193', threatType: 'Unencrypted Login Page', severity: 'High', timestamp: '2026-06-14 08:39', status: 'Investigating', source: 'Mall_Free_WiFi' },
  { id: 'ALT-9192', threatType: 'Rogue DHCP Response', severity: 'Critical', timestamp: '2026-06-14 08:12', status: 'Open', source: 'Convention_Guest' },
];

export const scoreTrend: TrendPoint[] = [
  { name: 'Mon', score: 74 },
  { name: 'Tue', score: 79 },
  { name: 'Wed', score: 76 },
  { name: 'Thu', score: 83 },
  { name: 'Fri', score: 81 },
  { name: 'Sat', score: 88 },
  { name: 'Sun', score: 86 },
];

export const threatFrequency: TrendPoint[] = [
  { name: 'Evil Twin', threats: 8 },
  { name: 'Rogue AP', threats: 12 },
  { name: 'DNS', threats: 7 },
  { name: 'ARP', threats: 10 },
  { name: 'MITM', threats: 5 },
];

export const weeklyAlerts: TrendPoint[] = [
  { name: 'Mon', alerts: 22 },
  { name: 'Tue', alerts: 16 },
  { name: 'Wed', alerts: 28 },
  { name: 'Thu', alerts: 19 },
  { name: 'Fri', alerts: 31 },
  { name: 'Sat', alerts: 13 },
  { name: 'Sun', alerts: 18 },
];

export const riskDistribution: RiskSlice[] = [
  { name: 'Critical', value: 16 },
  { name: 'High', value: 29 },
  { name: 'Medium', value: 37 },
  { name: 'Low', value: 18 },
];
