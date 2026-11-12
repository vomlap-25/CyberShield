import React from 'react';
import { ShieldCheck, PhoneCall, ExternalLink, CheckCircle2, AlertOctagon } from 'lucide-react';

export const SafetyRecommendations = ({ recommendations = [], score = 0 }) => {
  const isHighRisk = score >= 60;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-5">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Recommended Safety Actions</span>
        </h3>
        <span className="text-xs text-slate-400">Immediate Checklist</span>
      </div>

      {/* Action Checklist */}
      <div className="space-y-3">
        {recommendations.map((rec, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs text-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <span className="leading-relaxed font-medium">{rec}</span>
          </div>
        ))}
      </div>

      {/* Emergency Helpline Box if high risk */}
      {isHighRisk && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-900 space-y-2">
          <div className="flex items-center gap-2 font-bold text-red-800">
            <AlertOctagon className="w-4 h-4 text-red-600" />
            <span>Have you already sent funds or shared banking OTPs?</span>
          </div>
          <p className="text-red-700 leading-relaxed">
            Act within the "Golden Hour" to freeze scammer beneficiary accounts. Call the official National Cyber Crime helpline immediately:
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="tel:1930"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition-colors shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Helpline 1930</span>
            </a>
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-red-300 text-red-800 font-semibold hover:bg-red-100/50 transition-colors"
            >
              <span>Lodge Online Complaint</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
