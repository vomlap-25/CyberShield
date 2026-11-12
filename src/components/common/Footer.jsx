import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, PhoneCall, ExternalLink, Heart, AlertTriangle, Lock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-800 transition-colors">
      {/* Awareness Emergency Bar */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border-b border-navy-800/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-300">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Targeted by a cyber scam or extortion call right now? Don't panic.</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-medium">
            <a
              href="tel:1930"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>National Cyber Helpline: <strong>1930</strong> (Toll Free)</span>
            </a>
            <span className="text-navy-700 hidden sm:inline">|</span>
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <span>cybercrime.gov.in</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Platform Overview */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Cyber<span className="text-cyan-400">Shield</span></span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              An open-access cyber safety initiative dedicated to empowering citizens and students against modern social engineering, phishing vectors, and digital arrest coercion.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-cyan-400 font-mono">
              <Lock className="w-3 h-3" />
              <span>Static analysis only &bull; Zero execution</span>
            </div>
          </div>

          {/* Col 2: Threat Detection Modules */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Detection Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/scan?tab=phishing" className="hover:text-cyan-400 transition-colors">
                  Phishing Message Scanner
                </Link>
              </li>
              <li>
                <Link to="/scan?tab=url" className="hover:text-cyan-400 transition-colors">
                  Malicious URL Validator
                </Link>
              </li>
              <li>
                <Link to="/scan?tab=digital-arrest" className="hover:text-cyan-400 transition-colors">
                  Digital Arrest Call/Notice Scanner
                </Link>
              </li>
              <li>
                <Link to="/scan?tab=application" className="hover:text-cyan-400 transition-colors">
                  Android APK Static Inspector
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Awareness Hub */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Awareness Guides
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/awareness/digital-arrest-fraud" className="hover:text-cyan-400 transition-colors">
                  Digital Arrest Modus Operandi
                </Link>
              </li>
              <li>
                <Link to="/awareness/upi-and-payment-scams" className="hover:text-cyan-400 transition-colors">
                  UPI & Payment PIN Scams
                </Link>
              </li>
              <li>
                <Link to="/awareness/malicious-apks-malware" className="hover:text-cyan-400 transition-colors">
                  Predatory Loan Apps
                </Link>
              </li>
              <li>
                <Link to="/awareness/otp-and-identity-theft" className="hover:text-cyan-400 transition-colors">
                  SIM Swap & OTP Theft
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Academic Project & Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Project Context
            </h4>
            <p className="text-xs leading-relaxed text-slate-400">
              Developed as a College Community Cyber Security Demonstration Project. Built with React.js, Tailwind CSS, and designed for FastAPI backend integration.
            </p>
            <div className="p-2.5 rounded-lg bg-navy-900 border border-navy-800 text-[11px] leading-tight text-slate-400">
              <strong className="text-slate-300">Disclaimer:</strong> Analysis scores are heuristic indicators for educational awareness. Always consult official bank branches and law enforcement for official disputes.
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} CyberShield Awareness Platform. Open Academic Project.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-slate-300 transition-colors">About Project</Link>
            <span>&bull;</span>
            <Link to="/scan" className="hover:text-slate-300 transition-colors">Scan Center</Link>
            <span>&bull;</span>
            <Link to="/dashboard" className="hover:text-slate-300 transition-colors">Telemetry</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
