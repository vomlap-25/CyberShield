import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Mail, Globe, PhoneOff, FileCode, Shield, Sparkles } from 'lucide-react';
import { PhishingScanner } from '../components/scanner/PhishingScanner';
import { UrlScanner } from '../components/scanner/UrlScanner';
import { DigitalArrestScanner } from '../components/scanner/DigitalArrestScanner';
import { ApkScanner } from '../components/scanner/ApkScanner';
import { ScanProgressModal } from '../components/scanner/ScanProgressModal';
import { 
  scanPhishing, 
  scanUrl, 
  scanDigitalArrest, 
  scanApplication 
} from '../services/api';
import { useToast } from '../hooks/useToast';

export const ScanPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const toast = useToast();

  const tabParam = searchParams.get('tab') || 'phishing';
  const [activeTab, setActiveTab] = useState(tabParam);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [currentScanningTitle, setCurrentScanningTitle] = useState('');

  // Keep state in sync with URL search parameter
  useEffect(() => {
    if (tabParam && ['phishing', 'url', 'digital-arrest', 'application'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams({ tab: tabId });
  };

  const tabs = [
    { id: 'phishing', label: 'Phishing Message', icon: Mail, subtitle: 'SMS & WhatsApp Fraud' },
    { id: 'url', label: 'Malicious URL', icon: Globe, subtitle: 'Typosquatting & Fake Portals' },
    { id: 'digital-arrest', label: 'Digital Arrest', icon: PhoneOff, subtitle: 'CBI & Police Extortion' },
    { id: 'application', label: 'Android APK Safety', icon: FileCode, subtitle: 'Static Malware Inspection' },
  ];

  // Animated Scan Sequence Simulator
  const executeScan = async (scanFn, inputArg, categoryTitle) => {
    setIsScanning(true);
    setScanStep(0);
    setCurrentScanningTitle(categoryTitle);

    // Step 1: Ingest
    await new Promise(r => setTimeout(r, 400));
    setScanStep(1);

    // Step 2: Heuristics
    await new Promise(r => setTimeout(r, 600));
    setScanStep(2);

    // Step 3: Reputation / API call
    try {
      const scanPromise = scanFn(inputArg);
      await new Promise(r => setTimeout(r, 500));
      setScanStep(3);
      
      const result = await scanPromise;
      await new Promise(r => setTimeout(r, 400));

      setIsScanning(false);
      toast.success(`${categoryTitle} analysis complete`);
      
      // Navigate to results page with scan ID
      navigate(`/results/${result.id}`);
    } catch (err) {
      setIsScanning(false);
      toast.error(`Scanning error: ${err.message || 'Please try again'}`);
    }
  };

  const handleScanPhishing = (text, categoryTitle) => {
    executeScan(scanPhishing, text, categoryTitle);
  };

  const handleScanUrl = (url, categoryTitle) => {
    executeScan(scanUrl, url, categoryTitle);
  };

  const handleScanDigitalArrest = (content, categoryTitle) => {
    executeScan(scanDigitalArrest, content, categoryTitle);
  };

  const handleScanApplication = (file, categoryTitle) => {
    executeScan(scanApplication, file, categoryTitle);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold mb-2">
          <Shield className="w-3.5 h-3.5 text-cyan-600" />
          <span>Unified Cyber Threat Scanner</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Scan Centre
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
          Choose a threat category below, submit suspicious text or links, and receive an instant heuristic safety report.
        </p>
      </div>

      {/* Unified Tab Selector */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 p-1.5 bg-slate-200/70 rounded-2xl">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`
                p-3 sm:p-4 rounded-xl text-left transition-all duration-200 flex flex-col justify-between
                ${
                  isActive
                    ? 'bg-white shadow-md text-slate-900 border border-slate-200/80 scale-[1.01]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }
              `}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg ${isActive ? 'bg-cyan-50 text-cyan-600 border border-cyan-100' : 'bg-slate-100 text-slate-500'}`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                )}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold truncate">
                  {tab.label}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-400 truncate mt-0.5">
                  {tab.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Scanner Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm transition-all">
        {activeTab === 'phishing' && (
          <PhishingScanner onScan={handleScanPhishing} isScanning={isScanning} />
        )}

        {activeTab === 'url' && (
          <UrlScanner onScan={handleScanUrl} isScanning={isScanning} />
        )}

        {activeTab === 'digital-arrest' && (
          <DigitalArrestScanner onScan={handleScanDigitalArrest} isScanning={isScanning} />
        )}

        {activeTab === 'application' && (
          <ApkScanner onScan={handleScanApplication} isScanning={isScanning} />
        )}
      </div>

      {/* Scan Progress Modal */}
      <ScanProgressModal
        isOpen={isScanning}
        categoryTitle={currentScanningTitle}
        currentStep={scanStep}
      />
    </div>
  );
};
