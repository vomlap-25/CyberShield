import React, { useState } from 'react';
import { Globe, Sparkles, Trash2, ArrowRight, AlertCircle, ExternalLink } from 'lucide-react';
import { isValidUrl } from '../../utils/helpers';
import { useToast } from '../../hooks/useToast';

const sampleUrls = [
  {
    label: 'Paytm Reward Typosquatting (Malicious)',
    url: 'https://paytm-kyc-reward-claim982.top/login'
  },
  {
    label: 'Fake Traffic E-Challan Portal (Fraud)',
    url: 'http://echallan-parivahan-pay.vip/challan-fine'
  },
  {
    label: 'Official Google Domain (Verified Safe)',
    url: 'https://www.google.com'
  }
];

export const UrlScanner = ({ onScan, isScanning }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const toast = useToast();

  const handleApplySample = (sampleUrl) => {
    setUrl(sampleUrl);
    setError('');
    toast.info('Loaded sample URL for validation');
  };

  const handleClear = () => {
    setUrl('');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) {
      setError('Please enter a web address or domain to analyze.');
      return;
    }
    if (!isValidUrl(trimmed)) {
      setError('Please provide a valid URL format (e.g., https://example.com or domain.xyz).');
      return;
    }
    setError('');
    onScan(trimmed, 'Malicious URL');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Sample Quick-Picks */}
      <div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          <span>Quick Test Presets (Click to load sample URL):</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {sampleUrls.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleApplySample(s.url)}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-200 border border-slate-200 transition-colors text-slate-700"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* URL Input Field */}
      <div className="space-y-2">
        <label htmlFor="url-input" className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
          <Globe className="w-4 h-4 text-cyan-600" />
          <span>Website URL or Domain</span>
        </label>

        <div className="relative">
          <input
            id="url-input"
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (error) setError('');
            }}
            placeholder="https://suspicious-domain-name.xyz/login or http://paytm-reward.top"
            className={`w-full px-4 py-3.5 rounded-xl text-sm bg-slate-50/70 border ${
              error ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:ring-cyan-500'
            } text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all font-mono`}
          />
        </div>

        {error && (
          <div className="flex items-center gap-1.5 text-xs text-red-600 font-medium">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <p className="text-xs text-slate-400">
          CyberShield checks domain age, typosquatting patterns, top-level domain risk, and simulated threat intelligence databases.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={handleClear}
          disabled={!url || isScanning}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-red-600 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear Input</span>
        </button>

        <button
          type="submit"
          disabled={isScanning}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-semibold text-navy-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-md shadow-cyan-500/20 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>Scan URL</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};
