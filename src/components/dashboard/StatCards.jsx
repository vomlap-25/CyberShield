import React from 'react';
import { ShieldCheck, ShieldAlert, AlertTriangle, Scan, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const StatCards = ({ metrics, isDemoData }) => {
  const cards = [
    {
      title: 'Total Scans Analyzed',
      value: metrics?.totalScans?.toLocaleString() || '4,892',
      change: '+14% this week',
      icon: Scan,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-100',
      subtext: 'Across all 4 threat modules'
    },
    {
      title: 'Potential Threats Flagged',
      value: metrics?.threatsDetected?.toLocaleString() || '1,423',
      change: `${metrics?.threatRatePercentage || 29.1}% flag rate`,
      icon: ShieldAlert,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-100',
      subtext: 'Flagged for user protection'
    },
    {
      title: 'Verified Safe Items',
      value: metrics?.safeScans?.toLocaleString() || '3,120',
      change: 'Clean reputation',
      icon: ShieldCheck,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
      subtext: 'Passed safety heuristics'
    },
    {
      title: 'High / Critical Threats',
      value: metrics?.highRiskDetections?.toLocaleString() || '349',
      change: 'Urgent attention',
      icon: AlertTriangle,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-100',
      subtext: 'Active coercion/malware'
    },
  ];

  return (
    <div className="space-y-3">
      {isDemoData && (
        <div className="flex items-center justify-between px-3.5 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-semibold">Sample Demonstration Telemetry</span>
            <span className="text-amber-700/80 hidden sm:inline">&mdash; Showing simulated dataset until live FastAPI backend is connected.</span>
          </div>
          <span className="font-mono text-[11px] bg-white px-2 py-0.5 rounded border border-amber-200">
            DEMO MODE
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-slate-300 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {card.title}
                </span>
                <div className={`p-2.5 rounded-xl ${card.bgColor} ${card.color} border ${card.borderColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
                  {card.value}
                </h3>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 mt-2">
                <span className="text-slate-600 font-medium">{card.change}</span>
                <span className="text-[11px] text-slate-400">{card.subtext}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
