import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const pathNameMap = {
  scan: 'Scan Centre',
  dashboard: 'Main Dashboard',
  awareness: 'Awareness Hub',
  results: 'Scan Results',
  about: 'About CyberShield',
  'digital-arrest-fraud': 'Digital Arrest Scam',
  'phishing-and-smishing-scams': 'Phishing Awareness',
  'upi-and-payment-scams': 'UPI & Payment Scams',
  'fake-websites-typosquatting': 'Fake Websites',
  'malicious-apks-malware': 'Malicious APKs',
  'otp-and-identity-theft': 'OTP Theft'
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-2.5 mb-4">
      <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-cyan-600 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {pathnames.map((segment, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = pathNameMap[segment] || segment.replace(/-/g, ' ');

          return (
            <li key={to} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {isLast ? (
                <span className="font-semibold text-slate-800 capitalize truncate max-w-[200px]">
                  {label}
                </span>
              ) : (
                <Link to={to} className="hover:text-cyan-600 transition-colors capitalize">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
