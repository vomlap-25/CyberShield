import React from 'react';
import { getRiskStyles } from '../../utils/helpers';
import { AlertOctagon, AlertTriangle, AlertCircle, ShieldCheck } from 'lucide-react';

export const RiskBadge = ({ classification, score, size = 'md', showIcon = true }) => {
  const styles = getRiskStyles(classification || score);

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs font-semibold',
    lg: 'px-3.5 py-1.5 text-sm font-bold'
  }[size] || 'px-2.5 py-1 text-xs';

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4'
  }[size] || 'w-3.5 h-3.5';

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border ${styles.badgeBg} ${sizeClasses} shadow-sm transition-colors`}>
      {showIcon && (
        <>
          {styles.label.includes('Critical') && <AlertOctagon className={iconSizes} />}
          {styles.label.includes('High') && <AlertTriangle className={iconSizes} />}
          {styles.label.includes('Medium') && <AlertCircle className={iconSizes} />}
          {styles.label.includes('Low') && <ShieldCheck className={iconSizes} />}
        </>
      )}
      <span>{styles.label}</span>
      {score !== undefined && <span className="opacity-75">({score}/100)</span>}
    </span>
  );
};

export const StatusPill = ({ variant = 'default', children, icon: Icon }) => {
  const variants = {
    default: 'bg-slate-100 text-slate-700 border-slate-200',
    cyan: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    navy: 'bg-navy-800 text-cyan-300 border-navy-700',
    demo: 'bg-amber-50 text-amber-800 border-amber-300',
    live: 'bg-emerald-50 text-emerald-800 border-emerald-300'
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant] || variants.default}`}>
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  );
};
