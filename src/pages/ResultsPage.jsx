import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getScanById } from '../services/api';
import { RiskGauge } from '../components/results/RiskGauge';
import { SuspiciousIndicators } from '../components/results/SuspiciousIndicators';
import { SafetyRecommendations } from '../components/results/SafetyRecommendations';
import { RiskBadge, StatusPill } from '../components/common/Badge';
import { formatDate, getRiskStyles } from '../utils/helpers';
import { 
  Shield, 
  ArrowLeft, 
  RotateCcw, 
  Printer, 
  Download, 
  Clock, 
  Hash, 
  Layers, 
  FileText,
  AlertCircle,
  Share2,
  CheckCircle2
} from 'lucide-react';
import { useToast } from '../hooks/useToast';

export const ResultsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [scan, setScan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      setLoading(true);
      try {
        const data = await getScanById(id);
        setScan(data);
      } catch (err) {
        console.error('Failed to load scan report', err);
        toast.error('Scan report could not be retrieved');
      } finally {
        setLoading(false);
      }
    };
    fetchResult();
  }, [id]);

  const handlePrint = () => {
    toast.info('Preparing printable PDF security report...');
    setTimeout(() => {
      window.print();
    }, 300);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Report URL copied to clipboard');
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center space-y-4">
        <div className="inline-block w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-semibold text-slate-600">Retrieving security audit report...</p>
      </div>
    );
  }

  if (!scan) {
    return (
      <div className="py-16 text-center space-y-4 max-w-md mx-auto">
        <AlertCircle className="w-12 h-12 text-slate-300 mx-auto" />
        <h2 className="text-xl font-bold text-slate-900">Scan Report Not Found</h2>
        <p className="text-xs text-slate-500">The requested scan ID does not exist or has expired from the session.</p>
        <Link
          to="/scan"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-white"
        >
          <span>Run a New Threat Scan</span>
        </Link>
      </div>
    );
  }

  const styles = getRiskStyles(scan.riskClassification || scan.riskScore);

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Action Bar (hidden in print) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </button>
          <span className="text-slate-300">/</span>
          <span className="text-xs font-mono text-slate-500">{scan.id}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors"
            title="Copy Report Link"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-cyan-600" />
            <span>Download Report (PDF)</span>
          </button>

          <Link
            to="/scan"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold text-navy-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-sm transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Scan Another Item</span>
          </Link>
        </div>
      </div>

      {/* Mandatory Demo Data Label as specified in prompt */}
      <div className={`p-3.5 rounded-2xl border text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
        scan.isDemo 
          ? 'bg-amber-50/80 border-amber-200 text-amber-900' 
          : 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
      }`}>
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${scan.isDemo ? 'bg-amber-500' : 'bg-emerald-500'} animate-pulse`} />
          <span className="font-bold">
            {scan.isDemo ? 'DEMONSTRATION SCAN RESULT (HEURISTIC ENGINE)' : 'LIVE FASTAPI BACKEND SCAN REPORT'}
          </span>
          <span className="text-slate-500 hidden md:inline">
            &bull; {scan.isDemo ? 'Generated by local pattern heuristics for demonstration' : 'Verified by live backend detection services'}
          </span>
        </div>
        <span className="font-mono text-[11px] bg-white px-2 py-0.5 rounded border border-slate-200 self-start sm:self-auto">
          {scan.isDemo ? 'SIMULATION' : 'PRODUCTION API'}
        </span>
      </div>

      {/* Primary Report Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-8 print-card">
        
        {/* Report Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-2.5 py-0.5 rounded-md border border-cyan-100">
                {scan.category}
              </span>
              <RiskBadge classification={scan.riskClassification} score={scan.riskScore} size="sm" />
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Threat Assessment & Risk Telemetry Report
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-1.5">
              <Hash className="w-3.5 h-3.5 text-slate-400" />
              <span>{scan.id}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{formatDate(scan.timestamp)}</span>
            </div>
          </div>
        </div>

        {/* Input Target Snippet */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Evaluated Content / Input Payload:
          </span>
          <div className="font-mono text-xs text-slate-800 break-all leading-relaxed bg-white p-3 rounded-xl border border-slate-200">
            {scan.inputSnippet}
          </div>
        </div>

        {/* Main Score & Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Risk Gauge Visual (Left) */}
          <div className="lg:col-span-5">
            <RiskGauge score={scan.riskScore} classification={scan.riskClassification} />
          </div>

          {/* Analysis Executive Summary (Right) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-600" />
                <span>Executive Analysis Summary</span>
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {scan.summary}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400 block text-[11px]">Primary Threat Vector</span>
                <span className="font-bold text-slate-900 mt-0.5 block">{scan.category}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400 block text-[11px]">Risk Classification</span>
                <span className={`font-bold mt-0.5 block ${styles.text}`}>{scan.riskClassification}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown of Suspicious Indicators & Reasons */}
        <SuspiciousIndicators 
          indicators={scan.indicators} 
          reasons={scan.reasons} 
        />

        {/* Safety Actions Checklist */}
        <SafetyRecommendations 
          recommendations={scan.recommendations} 
          score={scan.riskScore} 
        />

        {/* Footer of the Report */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-600" />
            <span>CyberShield Heuristic Security Engine</span>
          </div>
          <p className="text-center sm:text-right">
            Confidential security evaluation for awareness & educational defense.
          </p>
        </div>

      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 shadow-sm no-print">
        <Link
          to="/dashboard"
          className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Dashboard</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/scan"
            className="px-4 py-2 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-cyan-400 to-teal-400 shadow-sm hover:from-cyan-300 hover:to-teal-300 transition-colors"
          >
            Scan Another Item
          </Link>
        </div>
      </div>
    </div>
  );
};
