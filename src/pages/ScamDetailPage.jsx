import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { awarenessArticles } from '../data/mockAwareness';
import { 
  ArrowLeft, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  PhoneCall, 
  ExternalLink,
  Zap,
  Info,
  Share2
} from 'lucide-react';
import { useToast } from '../hooks/useToast';

export const ScamDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const article = awarenessArticles.find((a) => a.id === id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Article link copied to clipboard');
    }
  };

  if (!article) {
    return (
      <div className="py-20 text-center space-y-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold text-slate-900">Article Not Found</h2>
        <p className="text-xs text-slate-500">The requested scam awareness guide does not exist.</p>
        <Link
          to="/awareness"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 text-white"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Awareness Hub</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-20">
      
      {/* Top Controls */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <Link
          to="/awareness"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-cyan-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Awareness Hub</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 text-slate-400" />
            <span>Share Guide</span>
          </button>
        </div>
      </div>

      {/* Article Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-md border border-cyan-100">
            {article.categoryLabel}
          </span>
          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{article.readTime}</span>
          </span>
          <span className="text-xs text-slate-400">&bull;</span>
          <span className="text-xs text-slate-500">Updated {article.updatedAt}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {article.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {article.tags.map((tag, i) => (
            <span key={i} className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Section 1: What the Scam Is */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-3">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
          <Info className="w-5 h-5 text-cyan-600" />
          <span>What is this Scam?</span>
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          {article.whatIsIt}
        </p>
      </section>

      {/* Section 2: How It Works (Step-by-Step) */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-5">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
          <Zap className="w-5 h-5 text-amber-500" />
          <span>How the Scam Unfolds (Step-by-Step)</span>
        </h2>
        <div className="space-y-4">
          {article.howItWorks.map((st, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60">
              <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-cyan-600 text-white font-mono text-xs font-bold shrink-0">
                {idx + 1}
              </span>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">
                  {st.step}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Warning Signs */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <span>Crucial Red Flags & Warning Signs</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {article.warningSigns.map((sign, i) => (
            <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50/50 border border-red-100 text-xs text-slate-800">
              <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
              <span className="leading-relaxed">{sign}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Real-World Style Example (Clearly Labelled Illustrative) */}
      <section className="bg-amber-50/70 rounded-3xl p-6 sm:p-8 border border-amber-200 space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-amber-200/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-200 text-amber-900 px-2 py-0.5 rounded">
              ILLUSTRATIVE CASE EXAMPLE
            </span>
          </div>
          <span className="text-[11px] font-mono text-amber-800">
            [Sample Educational Scenario]
          </span>
        </div>
        <h3 className="text-base font-bold text-slate-900">
          {article.illustrativeExample.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed italic bg-white/70 p-4 rounded-2xl border border-amber-200/60">
          "{article.illustrativeExample.scenario}"
        </p>
      </section>

      {/* Section 5: How to Protect Yourself */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span>How to Protect Yourself</span>
        </h2>
        <div className="space-y-2.5">
          {article.howToProtect.map((tip, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/40 border border-emerald-100 text-xs text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-medium">{tip}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: What to Do If Targeted */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
          <PhoneCall className="w-5 h-5 text-purple-600" />
          <span>What to Do If Targeted (Emergency Protocol)</span>
        </h2>
        <div className="space-y-3">
          {article.whatToDoIfTargeted.map((action, i) => (
            <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-50/50 border border-purple-100 text-xs text-slate-800">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-600 text-white font-mono text-[10px] font-bold shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="leading-relaxed font-medium">{action}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Action: Test in Scanner */}
      <div className="p-6 rounded-3xl bg-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-navy-800">
        <div>
          <h3 className="text-base font-bold text-white">Have a message or call matching this scam?</h3>
          <p className="text-xs text-slate-400 mt-0.5">Run an immediate risk analysis in CyberShield Scan Centre.</p>
        </div>
        <Link
          to={`/scan?tab=${article.category}`}
          className="px-5 py-2.5 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-colors shadow-md shrink-0"
        >
          Scan Suspicious Content Now
        </Link>
      </div>

    </div>
  );
};
