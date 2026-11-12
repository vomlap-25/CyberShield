import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, ShieldAlert, Menu, X, ArrowRight, Activity, Radio } from 'lucide-react';
import { checkBackendStatus } from '../../services/api';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBackendOnline, setIsBackendOnline] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check backend health periodically
    const verifyHealth = async () => {
      const online = await checkBackendStatus();
      setIsBackendOnline(online);
    };
    verifyHealth();
    const interval = setInterval(verifyHealth, 15000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Scan Centre', path: '/scan' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Awareness Hub', path: '/awareness' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-navy-950/95 backdrop-blur-md border-b border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-navy-700 shadow-md border border-cyan-500/30 group-hover:border-cyan-400 transition-all">
              <Shield className="w-5 h-5 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  Cyber<span className="text-cyan-400">Shield</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-md">
                  Community Ed.
                </span>
              </div>
              <p className="text-[10px] text-slate-400 -mt-0.5 tracking-wide hidden sm:block">
                Cyber Security Awareness Platform
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-navy-800 text-cyan-400 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-navy-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Backend Status Indicator + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Backend connectivity indicator */}
            <div 
              title={isBackendOnline ? 'FastAPI Backend Connected (Live Mode)' : 'FastAPI Backend Offline (Demonstration Engine Active)'}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border ${
                isBackendOnline
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80'
                  : 'bg-navy-900/80 text-amber-300/90 border-navy-700'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isBackendOnline ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="text-[11px] font-sans">
                {isBackendOnline ? 'API: Live' : 'Demo Mode'}
              </span>
            </div>

            <Link
              to="/scan"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-navy-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <span>Start Scanning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <div 
              className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono border ${
                isBackendOnline
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80'
                  : 'bg-navy-900 text-amber-300 border-navy-700'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isBackendOnline ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              <span>{isBackendOnline ? 'Live' : 'Demo'}</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-navy-800 bg-navy-950 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  active
                    ? 'bg-navy-800 text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-navy-900'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-navy-800">
            <Link
              to="/scan"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-base font-semibold text-navy-950 bg-gradient-to-r from-cyan-400 to-teal-400 shadow-md"
            >
              <span>Start Scanning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
