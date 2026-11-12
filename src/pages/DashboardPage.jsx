import React, { useEffect, useState } from 'react';
import { getDashboardStats, getScanHistory } from '../services/api';
import { StatCards } from '../components/dashboard/StatCards';
import { ThreatDistributionChart } from '../components/dashboard/ThreatDistributionChart';
import { ScanActivityChart } from '../components/dashboard/ScanActivityChart';
import { RecentScansTable } from '../components/dashboard/RecentScansTable';
import { QuickScanGrid } from '../components/dashboard/QuickScanGrid';
import { CardSkeleton, TableSkeleton } from '../components/common/LoadingSkeleton';
import { RefreshCw, Activity, Shield } from 'lucide-react';
import { useToast } from '../hooks/useToast';

export const DashboardPage = () => {
  const [stats, setStats] = useState(null);
  const [scans, setScans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const toast = useToast();

  const loadData = async (isManual = false) => {
    try {
      if (isManual) setRefreshing(true);
      const [statsData, scanData] = await Promise.all([
        getDashboardStats(),
        getScanHistory()
      ]);
      setStats(statsData);
      setScans(scanData);
      if (isManual) toast.success('Dashboard metrics refreshed');
    } catch (err) {
      console.error('Failed to load dashboard data', err);
      toast.error('Could not refresh telemetry data');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="space-y-8 pb-12">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
            <Activity className="w-7 h-7 text-cyan-600" />
            <span>Cyber Threat Intelligence Dashboard</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time heuristic telemetry and community threat detection records.
          </p>
        </div>

        <button
          onClick={() => loadData(true)}
          disabled={refreshing}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-colors self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin text-cyan-600' : 'text-slate-400'}`} />
          <span>{refreshing ? 'Refreshing...' : 'Refresh Metrics'}</span>
        </button>
      </div>

      {loading ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
          <TableSkeleton rows={4} />
        </div>
      ) : (
        <>
          {/* Overview Cards */}
          <StatCards metrics={stats?.metrics} isDemoData={stats?.isDemoData} />

          {/* Quick Scan Action Grid */}
          <QuickScanGrid />

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ThreatDistributionChart data={stats?.threatDistribution} />
            <ScanActivityChart data={stats?.weeklyActivity} />
          </div>

          {/* Recent Scans Table */}
          <RecentScansTable scans={scans} />
        </>
      )}
    </div>
  );
};
