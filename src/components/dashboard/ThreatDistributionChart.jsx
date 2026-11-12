import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PieChart as PieIcon } from 'lucide-react';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-navy-950 text-white p-3 rounded-xl shadow-xl border border-navy-800 text-xs">
        <p className="font-semibold text-cyan-300">{data.name}</p>
        <p className="text-slate-300 mt-1">
          Detections: <span className="font-mono font-bold text-white">{data.value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export const ThreatDistributionChart = ({ data }) => {
  const chartData = data && data.length > 0 ? data : [
    { name: 'Phishing Messages', value: 580, color: '#EF4444' },
    { name: 'Malicious URLs', value: 432, color: '#F97316' },
    { name: 'Digital Arrest Scams', value: 247, color: '#8B5CF6' },
    { name: 'Malicious APKs', value: 164, color: '#EC4899' },
  ];

  const total = chartData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <PieIcon className="w-4 h-4 text-cyan-600" />
            <span>Threat Distribution by Category</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Proportion of threats intercepted across vectors
          </p>
        </div>
        <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
          {total} Threats Total
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={4}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => <span className="text-xs text-slate-600 font-medium">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
