import React, { useEffect, useState } from 'react';
import { Shield, CheckCircle, Loader2 } from 'lucide-react';

export const ScanProgressModal = ({ isOpen, categoryTitle, currentStep = 0 }) => {
  if (!isOpen) return null;

  const steps = [
    { title: 'Ingesting Content & Normalizing Input', desc: 'Validating format and sanitizing input vectors...' },
    { title: 'Heuristic & Lexical Pattern Analysis', desc: 'Cross-checking urgency triggers, brand abuse, and deception markers...' },
    { title: 'Entropy & Threat Intelligence Verification', desc: 'Evaluating endpoint credibility against simulated threat intelligence...' },
    { title: 'Synthesizing Risk Score & Action Plan', desc: 'Formulating risk classification and protective guidelines...' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6">
        
        {/* Animated Radar Pulse */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-navy-800 text-white shadow-xl shadow-cyan-500/20">
            <Shield className="w-8 h-8 text-cyan-300 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
            </span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Analyzing {categoryTitle || 'Threat'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Applying heuristic pattern detection engines...
            </p>
          </div>
        </div>

        {/* Steps List */}
        <div className="space-y-3.5 pt-2">
          {steps.map((step, idx) => {
            const isCompleted = idx < currentStep;
            const isCurrent = idx === currentStep;

            return (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0">
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  ) : isCurrent ? (
                    <Loader2 className="w-5 h-5 text-cyan-500 animate-spin" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-slate-200" />
                  )}
                </div>
                <div>
                  <h4 className={`text-xs font-semibold ${isCurrent ? 'text-cyan-700' : isCompleted ? 'text-slate-800' : 'text-slate-400'}`}>
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-cyan-500 to-teal-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(((currentStep + 1) / steps.length) * 100, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};
