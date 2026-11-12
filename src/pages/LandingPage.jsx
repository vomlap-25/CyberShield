import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  ShieldAlert, 
  Globe, 
  Mail, 
  PhoneOff, 
  FileCode, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Activity, 
  Eye, 
  Compass, 
  AlertTriangle,
  Zap,
  BookOpen
} from 'lucide-react';
import { sampleTelemetryStats } from '../data/mockStats';
import { awarenessArticles } from '../data/mockAwareness';
import { ScamCard } from '../components/awareness/ScamCard';

export const LandingPage = () => {
  const threatCategories = [
    {
      title: 'Phishing Attacks',
      desc: 'Detect deceptive SMS, emails, and WhatsApp bank alerts aiming to harvest your net banking credentials and OTPs.',
      icon: Mail,
      accent: 'text-red-500',
      bg: 'bg-red-500/10 border-red-500/20',
      badge: 'High Frequency',
      tab: 'phishing'
    },
    {
      title: 'Malicious URLs',
      desc: 'Expose typosquatting domains, fake payment gateways, and freshly spawned domains masquerading as trusted brands.',
      icon: Globe,
      accent: 'text-orange-500',
      bg: 'bg-orange-500/10 border-orange-500/20',
      badge: 'Zero-Day Vectors',
      tab: 'url'
    },
    {
      title: 'Digital Arrest Scams',
      desc: 'Identify fake police notices, CBI extortion scripts, and Skype confinement tactics designed to psychologically coerce victims.',
      icon: PhoneOff,
      accent: 'text-purple-500',
      bg: 'bg-purple-500/10 border-purple-500/20',
      badge: 'Critical Threat',
      tab: 'digital-arrest'
    },
    {
      title: 'Malicious Applications',
      desc: 'Safely inspect Android APK packages statically to uncover invasive SMS listeners, predatory loan hooks, and hidden droppers.',
      icon: FileCode,
      accent: 'text-pink-500',
      bg: 'bg-pink-500/10 border-pink-500/20',
      badge: 'Static Analysis',
      tab: 'application'
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Submit Suspicious Content',
      desc: 'Paste a suspicious SMS, web address, intimidation call transcript, or upload an Android APK.',
      icon: Zap
    },
    {
      step: '02',
      title: 'Analyse Potential Threats',
      desc: 'Our heuristic engine evaluates linguistic triggers, brand spoofing, and permission profiles.',
      icon: Activity
    },
    {
      step: '03',
      title: 'Understand Your Risk Score',
      desc: 'Receive an instant 0–100 risk score breakdown with clear visual indicators and justifications.',
      icon: Eye
    },
    {
      step: '04',
      title: 'Follow Recommended Safety Actions',
      desc: 'Take immediate defensive steps, freeze vulnerable channels, and alert official cyber helplines.',
      icon: Shield
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-950 text-white pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-navy-800">
        {/* Subtle mesh background overlay */}
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 border border-cyan-500/30 text-xs text-cyan-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-semibold">Cyber Security Awareness & Threat Detection Platform</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Stay One Step Ahead of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200">Cyber Scams.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Protect yourself and your community from deceptive phishing texts, malicious links, "digital arrest" extortion calls, and invasive Android apps. Instant heuristic analysis with actionable defensive playbooks.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/scan"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all duration-200 transform hover:-translate-y-0.5 text-sm"
                >
                  <span>Start Scanning</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/awareness"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-navy-900 hover:bg-navy-850 hover:text-white border border-navy-700 transition-colors text-sm"
                >
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Explore Safety Tips</span>
                </Link>
              </div>

              {/* Trust & Ethics notes */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero Data Logging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Static APK Decompilation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Open Academic Initiative</span>
                </div>
              </div>
            </div>

            {/* Hero Cybersecurity Visual Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Visual Glassmorphism Terminal Card */}
                <div className="rounded-3xl bg-gradient-to-b from-navy-900/90 to-navy-950/95 border border-cyan-500/20 p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                  
                  {/* Decorative Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-navy-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="text-xs font-mono text-slate-400 ml-2">cybershield-engine v1.0</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                      <Shield className="w-3 h-3" />
                      <span>ARMED</span>
                    </div>
                  </div>

                  {/* Simulated Radar Visual */}
                  <div className="py-6 flex flex-col items-center justify-center relative">
                    <div className="relative w-44 h-44 rounded-full border border-cyan-500/30 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border border-cyan-500/20 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border border-cyan-500/40 bg-cyan-950/40 flex items-center justify-center">
                          <Shield className="w-8 h-8 text-cyan-400 animate-pulse" />
                        </div>
                      </div>
                      {/* Simulated Sweeping Beam */}
                      <div className="absolute inset-0 rounded-full border-t-2 border-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
                    </div>

                    {/* Threat Tags floating */}
                    <div className="w-full space-y-2.5 mt-6 font-mono text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-navy-900/80 border border-red-500/30 text-red-300">
                        <span className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-red-400" />
                          <span>SMS: Bank KYC Suspended</span>
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-950 text-red-400 border border-red-800">92% SMISHING</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-navy-900/80 border border-purple-500/30 text-purple-300">
                        <span className="flex items-center gap-2">
                          <PhoneOff className="w-3.5 h-3.5 text-purple-400" />
                          <span>Video: CBI Warrant Notice</span>
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-800">98% EXTORTION</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-2 border-t border-navy-800/80">
                    <Link to="/scan" className="text-xs text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1">
                      <span>Launch live scanner demo</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Threat Categories Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
              Core Threat Vectors
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Four Pillars of Scam Detection
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Targeting the four most prevalent social engineering and digital malware techniques confronting citizens in 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threatCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-cyan-300 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl border ${cat.bg} ${cat.accent}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {cat.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to={`/scan?tab=${cat.tab}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 group-hover:text-cyan-800 transition-colors"
                    >
                      <span>Scan this category</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
              Transparent Heuristics
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How CyberShield Works
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              From raw suspicious input to an actionable defense plan in four simplified phases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative">
                  <div className="text-3xl font-black font-mono text-slate-200 mb-4">
                    {st.step}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-cyan-600" />
                    <h3 className="text-sm font-bold text-slate-900">
                      {st.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cyber Safety Statistics Section (Clearly Labeled Demo/Sample as required) */}
      <section className="py-16 bg-navy-950 text-white border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Clearly Labeled Demo / Sample Telemetry</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
              Demonstration Metrics
            </h2>
            <p className="text-xs text-slate-400">
              Sample statistics for academic demonstration. Not presented as real-world figures.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {sampleTelemetryStats.map((stat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-navy-900/80 border border-navy-800 text-center space-y-1">
                <span className="text-2xl sm:text-4xl font-extrabold font-mono text-cyan-400">
                  {stat.value}
                </span>
                <p className="text-xs font-semibold text-slate-200">
                  {stat.label}
                </p>
                <span className="text-[10px] text-slate-400 font-mono block">
                  [{stat.note}]
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awareness Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                Community Knowledge Base
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Trending Scam Breakdown Articles
              </h2>
              <p className="text-sm text-slate-500 max-w-xl">
                Comprehensive breakdowns detailing modus operandi, warning signs, and official response steps.
              </p>
            </div>

            <Link
              to="/awareness"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 hover:text-cyan-800 shrink-0"
            >
              <span>View All 6 Scam Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awarenessArticles.slice(0, 3).map((article) => (
              <ScamCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 text-white border-t border-navy-800">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Verify Suspicious Content?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Test a message, URL, or call notice in the CyberShield Scan Centre right now. Fast, private, and fully transparent.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/scan"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-xl shadow-cyan-500/25 transition-all duration-200 transform hover:-translate-y-0.5 text-sm"
            >
              <span>Open Scan Centre</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-navy-800 hover:bg-navy-700 border border-navy-700 transition-colors text-sm"
            >
              <span>View Community Dashboard</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
