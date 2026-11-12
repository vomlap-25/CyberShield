import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { scamCategories } from '../../data/mockAwareness';

export const CategoryFilter = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onClearSearch
}) => {
  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative max-w-xl mx-auto">
        <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search scams, keywords (e.g. UPI, Skype, CBI, Loan, APK)..."
          className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
        />
        {searchQuery && (
          <button
            onClick={onClearSearch}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-1">
        {scamCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 ${
                isActive
                  ? 'bg-navy-950 text-cyan-400 shadow-sm border border-cyan-500/30'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
