import React from 'react';
import { AlertCircle, AlertTriangle, AlertOctagon, CheckCircle2, HelpCircle } from 'lucide-react';

export const SuspiciousIndicators = ({ indicators = [], reasons = [] }) => {
  const getSeverityBadge = (severity = 'medium') => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return {
          bg: 'bg-red-50 text-red-700 border-red-200',
          icon: AlertOctagon,
          label: 'Critical Flag'
        };
      case 'high':
        return {
          bg: 'bg-orange-50 text-orange-700 border-orange-200',
          icon: AlertTriangle,
          label: 'High Risk'
        };
      case 'medium':
        return {
          bg: 'bg-amber-50 text-amber-700 border-amber-200',
          icon: AlertCircle,
          label: 'Moderate'
        };
      case 'low':
      default:
        return {
          bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          icon: CheckCircle2,
          label: 'Informational'
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Detected Indicators */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-orange-500" />
            <span>Detected Suspicious Indicators ({indicators.length})</span>
          </h3>
          <span className="text-xs text-slate-400">Heuristic breakdown</span>
        </div>

        <div className="space-y-3">
          {indicators.length > 0 ? (
            indicators.map((ind, idx) => {
              const badge = getSeverityBadge(ind.severity);
              const Icon = badge.icon;

              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">
                        {ind.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border shrink-0 ${badge.bg}`}>
                    <Icon className="w-3.5 h-3.5" />
                    <span>{badge.label}</span>
                  </span>
                </div>
              );
            })
          ) : (
            <p className="text-xs text-slate-500 py-3">No suspicious patterns detected.</p>
          )}
        </div>
      </div>

      {/* Reasons Behind Risk Score */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-3">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-3">
          <HelpCircle className="w-4 h-4 text-cyan-600" />
          <span>Detailed Risk Score Justification</span>
        </h3>

        <ul className="space-y-2.5 text-xs text-slate-700">
          {reasons && reasons.length > 0 ? (
            reasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                <span className="leading-relaxed">{reason}</span>
              </li>
            ))
          ) : (
            <li className="text-slate-500">Evaluated according to standard security rules.</li>
          )}
        </ul>
      </div>
    </div>
  );
};
