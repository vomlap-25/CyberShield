import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, ShieldAlert, BookOpen } from 'lucide-react';

export const ScamCard = ({ article }) => {
  const getThreatBadge = (level) => {
    switch ((level || '').toLowerCase()) {
      case 'critical':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'high':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'medium':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-cyan-50 text-cyan-700 border-cyan-200';
    }
  };

  return (
    <article className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-cyan-300 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      <div className="p-6 space-y-3">
        {/* Category & Threat Level */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-2.5 py-0.5 rounded-md border border-cyan-100">
            {article.categoryLabel}
          </span>
          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${getThreatBadge(article.threatLevel)}`}>
            {article.threatLevel} Threat
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors leading-snug">
          <Link to={`/awareness/${article.id}`}>
            {article.title}
          </Link>
        </h3>

        {/* Summary */}
        <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
          {article.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {article.tags?.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div className="px-6 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1.5 text-slate-400">
          <Clock className="w-3.5 h-3.5" />
          <span>{article.readTime}</span>
        </div>

        <Link
          to={`/awareness/${article.id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 hover:text-cyan-800 transition-colors"
        >
          <span>Read Guide</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
