import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Target, 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  Code2, 
  BookOpen, 
  Mail, 
  Globe, 
  PhoneOff, 
  FileCode,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const AboutPage = () => {
  const modules = [
    {
      title: 'Phishing Message Scanner',
      icon: Mail,
      desc: 'Parses incoming SMS, WhatsApp, and email snippets for artificial urgency, financial lure triggers, and obfuscated redirect links.'
    },
    {
      title: 'Malicious URL Validator',
      icon: Globe,
      desc: 'Performs lexical and structural inspections on web domains, detecting brand typosquatting, raw IP hosts, and disposable top-level domains.'
    },
    {
      title: 'Digital Arrest Scam Scanner',
      icon: PhoneOff,
      desc: 'Analyzes call transcripts and fake notices for illegal digital arrest coercion, CBI/police impersonation, and bogus verification escrow demands.'
    },
    {
      title: 'Android APK Safety Inspector',
      icon: FileCode,
      desc: 'Performs static manifest decompilation to identify predatory permission profiles (READ_SMS, READ_CONTACTS) without executing code.'
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold">
          <Shield className="w-3.5 h-3.5 text-cyan-600" />
          <span>College Community Cybersecurity Project</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          About CyberShield
        </h1>
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
          An open cybersecurity awareness and threat detection platform engineered to protect students, senior citizens, and digital consumers from pervasive cyber extortion.
        </p>
      </div>

      {/* 1. Problem Statement */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
          <Target className="w-5 h-5 text-red-500" />
          <span>The Problem We Are Addressing</span>
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            In recent years, cybercrime vectors in India and worldwide have shifted aggressively from traditional malware attacks toward <strong>hyper-targeted psychological social engineering</strong>. 
          </p>
          <p>
            Fraud rings exploit fear, authority, and financial urgency through tactics like the infamous <strong>"Digital Arrest"</strong> scam (where citizens are coerced over video calls by fake CBI or police officers), predatory loan APKs that blackmail victims using harvested contact lists, and deceptive bank KYC smishing texts.
          </p>
          <p>
            Many victims, particularly students and elderly citizens, lack immediate access to verification tools before succumbing to panic and transferring life savings.
          </p>
        </div>
      </section>

      {/* 2. Project Objectives */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
          <CheckCircle2 className="w-5 h-5 text-cyan-600" />
          <span>Project Objectives</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5">
            <h3 className="text-xs font-bold text-slate-900">Accessible Scam Detection</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Provide a unified, simple web platform where users can paste suspicious content and get an immediate heuristic risk appraisal.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5">
            <h3 className="text-xs font-bold text-slate-900">Demystify Cyber Fraud</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equip citizens with in-depth knowledge of attacker modus operandi, warning signs, and official response protocols.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5">
            <h3 className="text-xs font-bold text-slate-900">Zero Execution Safety</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Safely inspect APKs and URLs through static parsing without running dangerous code on client or server devices.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5">
            <h3 className="text-xs font-bold text-slate-900">FastAPI Architecture Ready</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Engineered with a clean service layer ready for high-performance Python FastAPI backend integration.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Four Detection Modules */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
          <Code2 className="w-5 h-5 text-purple-600" />
          <span>Detection Engine Modules</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                  <Icon className="w-4 h-4 text-cyan-600" />
                  <span>{m.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Community Impact */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
          <Users className="w-5 h-5 text-emerald-600" />
          <span>Community Impact & College Context</span>
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            CyberShield was conceived as a <strong>College Community Project</strong> to bridge the gap between academic cybersecurity theory and everyday digital survival.
          </p>
          <p>
            By designing a frictionless interface that works seamlessly on desktop and mobile devices, we enable college students to conduct awareness workshops for peer groups, campus staff, and local community members.
          </p>
        </div>
      </section>

      {/* 5. Limitations & Responsible-Use Disclaimer */}
      <section className="bg-amber-50/80 rounded-3xl p-6 sm:p-8 border border-amber-200 space-y-4">
        <h2 className="text-base font-bold text-amber-900 flex items-center gap-2 border-b border-amber-200 pb-3">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <span>Platform Limitations & Responsible-Use Disclaimer</span>
        </h2>
        <div className="space-y-2.5 text-xs text-amber-900 leading-relaxed">
          <p>
            <strong>Heuristic Nature:</strong> Risk scores (0–100) generated by CyberShield represent automated probabilistic pattern evaluations. They are intended for educational awareness and defensive screening, not as certified forensic legal evidence.
          </p>
          <p>
            <strong>Emergency Incidents:</strong> If you have already fallen victim to monetary extortion or unauthorized banking debits, disconnect communication with the perpetrator immediately and contact the <strong>National Cyber Crime Helpline at 1930</strong> or register a grievance at <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-bold">cybercrime.gov.in</a>.
          </p>
          <p>
            <strong>Zero Warranty:</strong> CyberShield is provided as an open academic demonstration tool. Users must always verify transactions with official bank branches.
          </p>
        </div>
      </section>

      {/* CTA to Scan */}
      <div className="text-center pt-4">
        <Link
          to="/scan"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-md text-sm transition-all"
        >
          <span>Try the Cyber Threat Scanner</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
