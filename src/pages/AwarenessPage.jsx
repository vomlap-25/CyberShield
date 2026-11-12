import React, { useState, useMemo } from 'react';
import { awarenessArticles } from '../data/mockAwareness';
import { ScamCard } from '../components/awareness/ScamCard';
import { CategoryFilter } from '../components/awareness/CategoryFilter';
import { BookOpen, ShieldAlert, Sparkles, AlertCircle } from 'lucide-react';

export const AwarenessPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return awarenessArticles.filter((article) => {
      const matchesCategory = 
        activeCategory === 'all' || article.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        article.whatIsIt.toLowerCase().includes(query) ||
        article.tags.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-8 pb-16">
      {/* Awareness Hub Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-cyan-600" />
          <span>Educational Knowledge Repository</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Cyber Safety & Scam Awareness Hub
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          Comprehensive, actionable guides to decipher modern cyber extortion, payment traps, and deceptive fraud schemes.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <CategoryFilter
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onClearSearch={() => setSearchQuery('')}
      />

      {/* Articles Count & Status */}
      <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-3 pt-2">
        <span>
          Showing <strong>{filteredArticles.length}</strong> scam awareness guides
        </span>
        {searchQuery && (
          <span className="text-cyan-600 font-medium">
            Filtering by keyword: "{searchQuery}"
          </span>
        )}
      </div>

      {/* Cards Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ScamCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center space-y-3 bg-white rounded-2xl border border-slate-200">
          <AlertCircle className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-sm font-bold text-slate-800">No Matching Articles Found</h3>
          <p className="text-xs text-slate-500 max-w-xs mx-auto">
            Try adjusting your search query or reset the category filter to view all scam topics.
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="px-3.5 py-1.5 text-xs font-semibold text-cyan-700 bg-cyan-50 rounded-lg hover:bg-cyan-100"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Community Helpline Banner */}
      <div className="p-6 rounded-3xl bg-navy-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-navy-800">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <span>Spotted a novel scam vector?</span>
          </h3>
          <p className="text-xs text-slate-400">
            Report it to your local police cyber cell and contribute to the community security knowledge base.
          </p>
        </div>
        <a
          href="https://cybercrime.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-navy-950 font-bold text-xs hover:from-cyan-300 hover:to-teal-300 transition-colors shadow-md shrink-0"
        >
          National Cyber Reporting Portal
        </a>
      </div>
    </div>
  );
};
