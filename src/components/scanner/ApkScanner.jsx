import React, { useState, useRef } from 'react';
import { FileCode, UploadCloud, Trash2, ArrowRight, AlertCircle, ShieldAlert, CheckCircle, File } from 'lucide-react';
import { formatFileSize } from '../../utils/helpers';
import { useToast } from '../../hooks/useToast';

const sampleApkPresets = [
  {
    name: 'CashRupee_InstantLoan_v2.4.apk',
    size: 14.8 * 1024 * 1024,
    label: 'Predatory Loan App (High Risk)'
  },
  {
    name: 'FreeCricket_LiveStream_Mod.apk',
    size: 3.2 * 1024 * 1024,
    label: 'Trojan Dropper (Malicious)'
  },
  {
    name: 'Calculator_Official_v1.0.apk',
    size: 8.5 * 1024 * 1024,
    label: 'Clean Utility APK (Sample)'
  }
];

export const ApkScanner = ({ onScan, isScanning }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const toast = useToast();

  const handleValidateFile = (file) => {
    if (!file) return;

    if (!file.name.toLowerCase().endsWith('.apk')) {
      setError('Invalid file format. Only Android Package (.apk) files are supported.');
      setSelectedFile(null);
      return;
    }

    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      setError('File size exceeds the 100MB limit for static analysis.');
      setSelectedFile(null);
      return;
    }

    setError('');
    setSelectedFile(file);
    toast.info(`Selected ${file.name} (${formatFileSize(file.size)})`);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleValidateFile(e.target.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleValidateFile(e.dataTransfer.files[0]);
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleApplyPreset = (preset) => {
    const fakeFile = new File(['dummy content for static simulation'], preset.name, {
      type: 'application/vnd.android.package-archive',
    });
    // Override size property for presentation
    Object.defineProperty(fakeFile, 'size', { value: preset.size });
    setSelectedFile(fakeFile);
    setError('');
    toast.info(`Loaded test package: ${preset.name}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Please select or drop an .apk package file to proceed.');
      return;
    }
    setError('');
    onScan(selectedFile, 'Application Safety');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Sample Presets for Testing */}
      <div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
          <span>Quick Demo Presets (Test without uploading a physical file):</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {sampleApkPresets.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleApplyPreset(p)}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-200 border border-slate-200 transition-colors text-slate-700"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Drag & Drop File Zone */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
          <FileCode className="w-4 h-4 text-cyan-600" />
          <span>Android APK File Upload</span>
        </label>

        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`
            border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200
            ${dragActive ? 'border-cyan-500 bg-cyan-50/50' : 'border-slate-300 hover:border-cyan-400 bg-slate-50/60 hover:bg-slate-50'}
            ${selectedFile ? 'border-cyan-500 bg-cyan-50/20' : ''}
          `}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".apk,application/vnd.android.package-archive"
            onChange={handleFileChange}
            className="hidden"
          />

          {selectedFile ? (
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-cyan-100 text-cyan-700 rounded-2xl">
                <FileCode className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-mono">
                {selectedFile.name}
              </h4>
              <p className="text-xs text-slate-500">
                Package Size: <span className="font-semibold text-slate-700">{formatFileSize(selectedFile.size)}</span>
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Ready for static disassembly</span>
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-slate-200/70 text-slate-600 rounded-2xl group-hover:bg-cyan-100 group-hover:text-cyan-600 transition-colors">
                <UploadCloud className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Click to browse or drag and drop APK here
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Supports Android Package (.apk) files up to 100MB
                </p>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="flex items-center gap-1.5 text-xs text-red-600 font-medium">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Crucial Static Analysis Disclaimer as required */}
      <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
        <div>
          <strong className="text-slate-800 font-semibold">Security Isolation Notice:</strong> All uploaded APK packages undergo safe static heuristic decompilation and manifest permission inspection. 
          <span className="text-cyan-800 font-medium"> Files are NEVER executed or run in any live environment.</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={handleClear}
          disabled={!selectedFile || isScanning}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-red-600 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear Package</span>
        </button>

        <button
          type="submit"
          disabled={!selectedFile || isScanning}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-semibold text-navy-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-md shadow-cyan-500/20 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span>Upload and Analyse APK</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};
