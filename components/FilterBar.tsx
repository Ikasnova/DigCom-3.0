import React, { useMemo } from 'react';
import { Filter, Search, X } from 'lucide-react';
import { getCompetenceAreas, PROFICIENCY_LEVELS, UI_TRANSLATIONS } from '../data';
import { Language, ProficiencyLevel } from '../types';

interface FilterBarProps {
  selectedArea: string;
  selectedLevel: string;
  searchQuery: string;
  onAreaChange: (area: string) => void;
  onLevelChange: (level: string) => void;
  onSearchChange: (query: string) => void;
  onReset: () => void;
  language: Language;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedArea,
  selectedLevel,
  searchQuery,
  onAreaChange,
  onLevelChange,
  onSearchChange,
  onReset,
  language
}) => {
  const t = UI_TRANSLATIONS[language];
  const competenceAreas = useMemo(() => getCompetenceAreas(language), [language]);

  return (
    <div className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search Input */}
        <div className="relative w-full md:w-1/3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
          
          <div className="relative group min-w-[200px] max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-4 w-4 text-gray-500" />
            </div>
            <select
              className="pl-10 pr-8 py-2 w-full border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-brand-500 outline-none cursor-pointer hover:border-brand-500 transition-colors truncate"
              value={selectedArea}
              onChange={(e) => onAreaChange(e.target.value)}
            >
              <option value="">{t.allAreas}</option>
              {competenceAreas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <div className="relative group min-w-[180px]">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <select
              className="pl-10 pr-8 py-2 w-full border border-gray-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-brand-500 outline-none cursor-pointer hover:border-brand-500 transition-colors"
              value={selectedLevel}
              onChange={(e) => onLevelChange(e.target.value)}
            >
              <option value="">{t.allLevels}</option>
              {PROFICIENCY_LEVELS.map(level => (
                <option key={level} value={level}>{t.levels[level as ProficiencyLevel]}</option>
              ))}
            </select>
             <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          {(selectedArea || selectedLevel || searchQuery) && (
            <button
              onClick={onReset}
              className="px-4 py-2 text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded-lg flex items-center justify-center gap-2 transition-colors border border-red-200"
            >
              <X className="h-4 w-4" />
              {t.reset}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;