import React, { useState } from 'react';
import { PhoneOff, Sparkles, Trash2, ArrowRight, AlertCircle, ShieldAlert } from 'lucide-react';
import { useToast } from '../../hooks/useToast';

const sampleNotices = [
  {
    label: 'CBI Mumbai Narcotics Parcel (High Coercion)',
    text: 'Urgent notice from Cyber Crime Division, CBI Central HQ. A courier seized at Mumbai Airport contained 150g MDMA narcotics and 5 fake passports booked under your Aadhaar. You are placed under Digital Arrest immediately. Connect to Skype ID "cbi.cybercell.hq" for interrogation within 2 hours or police team will raid your residence.'
  },
  {
    label: 'Supreme Court & RBI Escrow Threat',
    text: 'Order from Special Magistrate: Your bank accounts have been implicated in a money laundering fraud of 48 Crores. You must stay on video call alone. Transfer your liquid funds of Rs 5 Lakhs to Reserve Bank of India verification escrow account to receive clearance certificate.'
  },
  {
    label: 'Genuine Courier SMS (Safe)',
    text: 'Your BlueDart shipment with tracking number 729104829 has been dispatched from Delhi hub and will be delivered by tomorrow evening.'
  }
];

export const DigitalArrestScanner = ({ onScan, isScanning }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const toast = useToast();

  const handleApplySample = (sampleNotice) => {
    setContent(sampleNotice);
    setError('');
    toast.info('Loaded sample Digital Arrest transcript');
  };

  const handleClear = () => {
    setContent('');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      setError('Please provide call conversation details or text notice for analysis.');
      return;
    }
    if (content.trim().length < 15) {
      setError('Please enter a more detailed description or transcript (at least 15 characters).');
      return;
    }
    setError('');
    onScan(content.trim(), 'Digital Arrest Scam');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Educational Banner */}
      <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-900 flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
        <div>
          <strong className="font-semibold">What is a Digital Arrest Scam?</strong> Fraudsters pose as CBI, ED, Police, or Customs officers over video calls (Skype/WhatsApp) to confine victims through threats of arrest and coerce money transfers.
        </div>
      </div>

      {/* Sample Quick-Picks */}
      <div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          <span>Quick Test Presets (Click to load sample transcript):</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {sampleNotices.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleApplySample(s.text)}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-200 border border-slate-200 transition-colors text-slate-700"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Text Area */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="digital-arrest-input" className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
            <PhoneOff className="w-4 h-4 text-cyan-600" />
            <span>Call Transcript, Letter Content, or WhatsApp Notice</span>
          </label>
          <span className="text-xs text-slate-400 font-mono">
            {content.length} characters
          </span>
        </div>

        <div className="relative">
          <textarea
            id="digital-arrest-input"
            rows={6}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              if (error) setError('');
            }}
            placeholder="Type or paste what the caller claimed or what the notice says... (e.g. 'A FedEx courier containing drugs was caught with my Aadhaar. Officer told me I am under digital arrest on Skype and must wire money to an RBI escrow...')"
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
          disabled={!content || isScanning}
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
          <span>Analyse Transcript</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};
