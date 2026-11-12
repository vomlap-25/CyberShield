import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Globe, 
  PhoneOff, 
  FileCode, 
  ArrowUpRight, 
  Search, 
  Filter, 
  ExternalLink,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import { RiskBadge } from '../common/Badge';
import { formatDate, truncateText } from '../../utils/helpers';

export const RecentScansTable = ({ scans = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const getTypeIcon = (type) => {
    switch (type) {
      case 'phishing': return <Mail className="w-4 h-4 text-rose-500" />;
      case 'url': return <Globe className="w-4 h-4 text-orange-500" />;
      case 'digital-arrest': return <PhoneOff className="w-4 h-4 text-purple-500" />;
      case 'application': return <FileCode className="w-4 h-4 text-pink-500" />;
      default: return <ShieldCheck className="w-4 h-4 text-cyan-500" />;
    }
  };

  const filteredScans = scans.filter((scan) => {
    const matchesSearch = 
      (scan.inputSnippet || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (scan.category || '').toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === 'all' || scan.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Table Header & Controls */}
      <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Recent Security Scans</h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Audit history of suspicious inputs evaluated by CyberShield
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search scan snippet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-44 sm:w-56"
            />
          </div>

          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
          >
            <option value="all">All Categories</option>
            <option value="phishing">Phishing Messages</option>
            <option value="url">Malicious URLs</option>
            <option value="digital-arrest">Digital Arrest</option>
            <option value="application">Android APKs</option>
          </select>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-50/75 border-b border-slate-200/80 text-slate-500 font-semibold uppercase text-[11px] tracking-wider">
              <th className="py-3 px-4">Threat Category</th>
              <th className="py-3 px-4">Evaluated Content / Target</th>
              <th className="py-3 px-4">Risk Level</th>
              <th className="py-3 px-4">Timestamp</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredScans.length > 0 ? (
              filteredScans.map((scan) => (
                <tr key={scan.id} className="hover:bg-slate-50/70 transition-colors group">
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 group-hover:bg-white transition-colors">
                        {getTypeIcon(scan.type)}
                      </div>
                      <span className="font-semibold text-slate-800 text-xs">
                        {scan.category}
                      </span>
                    </div>
                  </td>

                  <td className="py-3.5 px-4">
                    <span 
                      title={scan.inputSnippet}
                      className="font-mono text-xs text-slate-700 max-w-xs sm:max-w-md truncate block"
                    >
                      {truncateText(scan.inputSnippet, 65)}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <RiskBadge classification={scan.riskClassification} score={scan.riskScore} size="sm" />
                  </td>

                  <td className="py-3.5 px-4 text-xs text-slate-500 whitespace-nowrap font-mono">
                    {formatDate(scan.timestamp)}
                  </td>

                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <Link
                      to={`/results/${scan.id}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-700 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 transition-colors"
                    >
                      <span>View Report</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-12 text-center text-slate-400">
                  <AlertTriangle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-600">No matching scan records found</p>
                  <p className="text-xs text-slate-400 mt-1">Try clearing filters or perform a new scan.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
