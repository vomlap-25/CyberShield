import React, { useState } from 'react';
import { Mail, Sparkles, Trash2, ArrowRight, AlertCircle } from 'lucide-react';
import { useToast } from '../../hooks/useToast';

const sampleMessages = [
  {
    label: 'Bank Account Blocked (SBI Smishing)',
    text: 'Dear customer, your SBI YONO account will be blocked today due to pending KYC. Update your PAN card immediately at bit.ly/sbi-pan-kyc to avoid account suspension.'
  },
  {
    label: 'Electricity Bill Disconnection Notice',
    text: 'Dear consumer, your electricity bill payment was not updated. Power supply will be disconnected at 9:30 PM tonight from Mumbai EB sub-station. Immediately call Officer on 98123-45678 to update.'
  },
  {
    label: 'Authentic Bank Transaction (Safe)',
    text: 'Dear Customer, your A/C ending with 4821 is credited with INR 3,500.00 on 12-Nov-2026 by UPI. Avail balance: INR 24,190.00. - HDFC Bank'
  }
];

export const PhishingScanner = ({ onScan, isScanning }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const toast = useToast();

  const handleClear = () => {
    setMessage('');
    setError('');
  };

  const handleApplySample = (sampleText) => {
    setMessage(sampleText);
    setError('');
    toast.info('Loaded sample message for testing');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError('Please paste or type a suspicious SMS or email message to analyze.');
      return;
    }
    if (message.trim().length < 10) {
      setError('Please provide a meaningful message snippet (at least 10 characters).');
      return;
    }
    setError('');
    onScan(message.trim(), 'Phishing Message');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Sample Quick-Pick Buttons */}
      <div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          <span>Quick Test Presets (Click to load sample):</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {sampleMessages.map((sample, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleApplySample(sample.text)}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-200 border border-slate-200 transition-colors text-slate-700"
            >
              {sample.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Text Area */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="phishing-message-input" className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-cyan-600" />
            <span>Message Content / SMS Body</span>
          </label>
          <span className="text-xs text-slate-400 font-mono">
            {message.length} characters
          </span>
        </div>

        <div className="relative">
          <textarea
            id="phishing-message-input"
            rows={6}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (error) setError('');
            }}
            placeholder="Paste suspicious SMS, WhatsApp text, lottery notification, or email content here... (e.g. 'Your bank account will be closed today. Update KYC at bit.ly/...')"
            className={`w-full p-4 rounded-xl text-sm bg-slate-50/70 border ${
              error ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:ring-cyan-500'
            } text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all leading-relaxed font-sans`}
          />
        </div>

        {error && (
          <div className="flex items-center gap-1.5 text-xs text-red-600 font-medium">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={handleClear}
          disabled={!message || isScanning}
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
          <span>Analyse Message</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};
