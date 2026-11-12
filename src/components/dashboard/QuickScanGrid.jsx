import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, PhoneOff, FileCode, ArrowRight, Shield } from 'lucide-react';

export const QuickScanGrid = () => {
  const modules = [
    {
      id: 'phishing',
      title: 'Phishing Message Scanner',
      desc: 'Detect bank SMS impersonation, KYC fraud, and urgency coercion tactics.',
      icon: Mail,
      accent: 'from-rose-500 to-red-600',
      lightBg: 'bg-rose-50 border-rose-100 text-rose-600',
      tab: 'phishing'
    },
    {
      id: 'url',
      title: 'Malicious URL Validator',
      desc: 'Analyze typosquatting, disposable TLDs, and fake payment gateways.',
      icon: Globe,
      accent: 'from-orange-500 to-amber-600',
      lightBg: 'bg-orange-50 border-orange-100 text-orange-600',
      tab: 'url'
    },
    {
      id: 'digital-arrest',
      title: 'Digital Arrest Scam Scanner',
      desc: 'Expose bogus police notices, CBI extortion scripts, and Skype confinement.',
      icon: PhoneOff,
      accent: 'from-purple-500 to-indigo-600',
      lightBg: 'bg-purple-50 border-purple-100 text-purple-600',
      tab: 'digital-arrest'
    },
    {
      id: 'application',
      title: 'Application Safety Scanner',
      desc: 'Static inspection of Android APKs for invasive spy permissions.',
      icon: FileCode,
      accent: 'from-pink-500 to-rose-600',
      lightBg: 'bg-pink-50 border-pink-100 text-pink-600',
      tab: 'application'
    },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Shield className="w-4 h-4 text-cyan-600" />
          <span>Launch Immediate Threat Scan</span>
        </h3>
        <Link to="/scan" className="text-xs font-semibold text-cyan-600 hover:text-cyan-700 flex items-center gap-1">
          <span>Go to Scan Centre</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <Link
              key={m.id}
              to={`/scan?tab=${m.tab}`}
              className="group p-5 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-cyan-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl border ${m.lightBg} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-600 group-hover:text-cyan-600">
                <span>Start Scanner</span>
                <span>&rarr;</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
