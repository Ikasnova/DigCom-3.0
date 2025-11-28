
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { LearningOutcome, ProficiencyLevel, Language } from '../types';
import { UI_TRANSLATIONS } from '../data';

interface StatsProps {
  data: LearningOutcome[];
  language: Language;
}

const StatsOverview: React.FC<StatsProps> = ({ data, language }) => {
  const t = UI_TRANSLATIONS[language];

  // Aggregate data for the chart
  const stats = Object.values(ProficiencyLevel).map(levelKey => {
    return {
      id: levelKey,
      name: t.levels[levelKey as ProficiencyLevel],
      count: data.filter(d => d.level === levelKey).length
    };
  });

  const COLORS = {
    [ProficiencyLevel.BASIC]: '#3eb7ae', // Specific teal requested
    [ProficiencyLevel.INTERMEDIATE]: '#3b82f6', // blue-500
    [ProficiencyLevel.ADVANCED]: '#a855f7', // purple-500
    [ProficiencyLevel.HIGHLY_ADVANCED]: '#6080a3', // Specific slate blue requested
  };

  if (data.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{t.resultsDistribution}</h3>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={stats}>
            <XAxis 
              dataKey="name" 
              tick={{fontSize: 12}} 
              tickLine={false}
              axisLine={false}
              interval={0}
            />
            <YAxis hide />
            <Tooltip 
              cursor={{fill: 'transparent'}}
              contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
            />
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {stats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.id as ProficiencyLevel] || '#94a3b8'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsOverview;
