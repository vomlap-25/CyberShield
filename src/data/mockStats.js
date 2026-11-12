export const mockDashboardStats = {
  isDemoData: true,
  lastUpdated: new Date().toISOString(),
  metrics: {
    totalScans: 4892,
    threatsDetected: 1423,
    safeScans: 3120,
    highRiskDetections: 349,
    threatRatePercentage: 29.1,
    averageScanTimeMs: 420
  },
  threatDistribution: [
    { name: 'Phishing Messages', value: 580, color: '#EF4444' },
    { name: 'Malicious URLs', value: 432, color: '#F97316' },
    { name: 'Digital Arrest Scams', value: 247, color: '#8B5CF6' },
    { name: 'Malicious APKs', value: 164, color: '#EC4899' },
  ],
  weeklyActivity: [
    { day: 'Mon', total: 640, threats: 180, safe: 460 },
    { day: 'Tue', total: 720, threats: 210, safe: 510 },
    { day: 'Wed', total: 850, threats: 260, safe: 590 },
    { day: 'Thu', total: 790, threats: 225, safe: 565 },
    { day: 'Fri', total: 910, threats: 290, safe: 620 },
    { day: 'Sat', total: 540, threats: 140, safe: 400 },
    { day: 'Sun', total: 442, threats: 118, safe: 324 },
  ]
};

export const sampleTelemetryStats = [
  { label: 'Community Scans Analyzed', value: '4,800+', note: 'Simulated Demo Telemetry' },
  { label: 'Phishing Patterns Mapped', value: '1,250+', note: 'Known Heuristic Signatures' },
  { label: 'Detection Accuracy Rate', value: '96.4%', note: 'Lab Evaluation Metric' },
  { label: 'Target Scam Types', value: '4 Pillars', note: 'SMS, URL, Arrest & APK' },
];
