import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { TrendingUp } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-navy-950 text-white p-3.5 rounded-xl shadow-xl border border-navy-800 text-xs space-y-1">
        <p className="font-bold text-slate-200 border-b border-navy-800 pb-1">{label} Telemetry</p>
        <p className="text-cyan-400">
          Total Scans: <span className="font-mono font-bold text-white">{payload[0]?.value}</span>
        </p>
        <p className="text-red-400">
          Threats Flagged: <span className="font-mono font-bold text-white">{payload[1]?.value}</span>
        </p>
        <p className="text-emerald-400">
          Safe Scans: <span className="font-mono font-bold text-white">{payload[2]?.value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export const ScanActivityChart = ({ data }) => {
  const chartData = data && data.length > 0 ? data : [
    { day: 'Mon', total: 640, threats: 180, safe: 460 },
    { day: 'Tue', total: 720, threats: 210, safe: 510 },
    { day: 'Wed', total: 850, threats: 260, safe: 590 },
    { day: 'Thu', total: 790, threats: 225, safe: 565 },
    { day: 'Fri', total: 910, threats: 290, safe: 620 },
    { day: 'Sat', total: 540, threats: 140, safe: 400 },
    { day: 'Sun', total: 442, threats: 118, safe: 324 },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-600" />
            <span>Weekly Scanning Velocity & Threats</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Comparison of total community scans vs flagged threats
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-slate-600">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
            <span>Total</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span>Threats</span>
          </div>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="total" stroke="#06B6D4" strokeWidth={2} fillOpacity={1} fill="url(#colorTotal)" />
            <Area type="monotone" dataKey="threats" stroke="#EF4444" strokeWidth={2} fillOpacity={1} fill="url(#colorThreats)" />
            <Area type="monotone" dataKey="safe" stroke="#10B981" strokeWidth={0} fillOpacity={0} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
