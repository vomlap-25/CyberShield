import React from 'react';
import { getRiskStyles } from '../../utils/helpers';
import { ShieldAlert, ShieldCheck, AlertTriangle, AlertOctagon } from 'lucide-react';

export const RiskGauge = ({ score = 0, classification = 'LOW' }) => {
  const styles = getRiskStyles(classification || score);

  // Calculate arc stroke for circular gauge (radius 70 -> circumference 2 * PI * 70 = 439.82)
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  // We show an arc of 240 degrees (leaving 120 deg open at the bottom)
  const arcLength = circumference * (240 / 360); // approx 293.2
  const offset = arcLength - (arcLength * Math.min(Math.max(score, 0), 100)) / 100;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden">
      {/* Background ambient glow matching risk level */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none transition-colors duration-500"
        style={{ backgroundColor: styles.stroke }}
      />

      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full transform rotate-[150deg]" viewBox="0 0 180 180">
          {/* Background Track Arc */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#E2E8F0"
            strokeWidth="14"
            fill="none"
            strokeDasharray={arcLength}
            strokeDashoffset="0"
            strokeLinecap="round"
          />
          {/* Active Value Arc */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke={styles.stroke}
            strokeWidth="14"
            fill="none"
            strokeDasharray={arcLength}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-slate-900">
            {score}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 -mt-1">
            out of 100
          </span>
        </div>
      </div>

      {/* Classification Pill */}
      <div className="mt-2 text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-sm transition-all"
             style={{ 
               backgroundColor: `${styles.stroke}15`, 
               borderColor: `${styles.stroke}40`,
               color: styles.stroke
             }}>
          {styles.label.includes('Critical') && <AlertOctagon className="w-4 h-4" />}
          {styles.label.includes('High') && <AlertTriangle className="w-4 h-4" />}
          {styles.label.includes('Medium') && <AlertTriangle className="w-4 h-4" />}
          {styles.label.includes('Low') && <ShieldCheck className="w-4 h-4" />}
          <span>{classification} RISK DETECTED</span>
        </div>
        <p className="text-xs text-slate-500 font-medium">
          {score >= 80 ? 'Immediate malicious threat vectors identified' :
           score >= 60 ? 'Strong indicators of deceptive social engineering' :
           score >= 35 ? 'Moderate warning signs present' :
           'Safe communication pattern evaluated'}
        </p>
      </div>
    </div>
  );
};
