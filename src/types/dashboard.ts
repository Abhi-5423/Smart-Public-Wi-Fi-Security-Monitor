import type { LucideIcon } from 'lucide-react';

export type PageId = 'landing' | 'dashboard' | 'threats' | 'analytics' | 'alerts' | 'settings';
export type Severity = 'Critical' | 'High' | 'Medium' | 'Low';
export type AlertStatus = 'Open' | 'Investigating' | 'Resolved';
export type ThreatStatus = 'Clear' | 'Monitoring' | 'Detected' | 'Blocked';

export interface NavItem {
  id: PageId;
  label: string;
  icon: LucideIcon;
}

export interface WifiNetwork {
  ssid: string;
  securityType: 'Open' | 'WPA2' | 'WPA3';
  signalStrength: number;
  publicIp: string;
  dnsServer: string;
  connectionStatus: 'Connected' | 'Scanning' | 'Quarantined';
  location: string;
}

export interface Kpi {
  label: string;
  value: string;
  delta: string;
  tone: 'cyan' | 'green' | 'yellow' | 'red';
  icon: LucideIcon;
}

export interface ThreatDetection {
  name: string;
  status: ThreatStatus;
  riskLevel: Severity;
  detectionTime: string;
  recommendedAction: string;
}

export interface AlertRecord {
  id: string;
  threatType: string;
  severity: Severity;
  timestamp: string;
  status: AlertStatus;
  source: string;
}

export interface TrendPoint {
  name: string;
  score?: number;
  alerts?: number;
  threats?: number;
}

export interface RiskSlice {
  name: Severity;
  value: number;
}
