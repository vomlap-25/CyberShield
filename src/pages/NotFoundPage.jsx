import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
      <div className="p-4 rounded-3xl bg-slate-100 text-slate-500 border border-slate-200">
        <ShieldAlert className="w-12 h-12 text-cyan-600" />
      </div>
      <h1 className="text-3xl font-black text-slate-900 tracking-tight font-mono">
        404 &bull; Page Not Found
      </h1>
      <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
        The destination you navigated to does not exist or has been moved within the CyberShield security network.
      </p>
      <div className="flex items-center gap-3 pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-navy-950 hover:bg-navy-900 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/scan"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-700 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 transition-colors"
        >
          <span>Open Scanner</span>
        </Link>
      </div>
    </div>
  );
};
