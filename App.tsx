
import React, { useState, useMemo } from 'react';
import { DIGCOMP_DATA, UI_TRANSLATIONS } from './data';
import FilterBar from './components/FilterBar';
import OutcomeCard from './components/OutcomeCard';
import StatsOverview from './components/StatsOverview';
import { Layers, Info, Languages } from 'lucide-react';
import { Language } from './types';

function App() {
  const [selectedArea, setSelectedArea] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [language, setLanguage] = useState<Language>('es');

  const t = UI_TRANSLATIONS[language];

  const filteredData = useMemo(() => {
    return DIGCOMP_DATA.filter(item => {
      // Filter by Area
      const areaMatches = selectedArea ? item.competenceArea[language] === selectedArea : true;
      
      // Filter by Level
      const levelMatches = selectedLevel ? item.level === selectedLevel : true;
      
      // Filter by Search
      const searchLower = searchQuery.toLowerCase();
      const description = item.description[language].toLowerCase();
      const id = item.id.toLowerCase();
      const subArea = item.competenceSubArea[language].toLowerCase();
      
      const searchMatches = searchQuery 
        ? description.includes(searchLower) || id.includes(searchLower) || subArea.includes(searchLower)
        : true;

      return areaMatches && levelMatches && searchMatches;
    });
  }, [selectedArea, selectedLevel, searchQuery, language]);

  const handleReset = () => {
    setSelectedArea('');
    setSelectedLevel('');
    setSearchQuery('');
  };

  const toggleLanguage = () => {
    setLanguage(prev => {
      // Cycle: es -> eu -> en -> es
      if (prev === 'es') return 'eu';
      if (prev === 'eu') return 'en';
      return 'es';
    });
    // Reset area filter when changing language because the area strings change
    setSelectedArea('');
  };

  const getLanguageLabel = (lang: Language) => {
    switch (lang) {
      case 'es': return 'Español';
      case 'eu': return 'Euskara';
      case 'en': return 'English';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 pb-8 pt-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-brand-500 rounded-xl shadow-lg shadow-brand-500/30">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                  {t.title}
                </h1>
                <p className="text-slate-500 text-sm md:text-base mt-1">
                  {t.subtitle}
                </p>
              </div>
            </div>
            
            <button 
              onClick={toggleLanguage}
              className="self-start flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              <Languages className="w-4 h-4" />
              <span>{getLanguageLabel(language)}</span>
            </button>
          </div>
          
          <p className="max-w-2xl text-slate-600 leading-relaxed">
            {t.description}
          </p>
        </div>
      </header>

      {/* Sticky Filters */}
      <FilterBar 
        selectedArea={selectedArea}
        selectedLevel={selectedLevel}
        searchQuery={searchQuery}
        onAreaChange={setSelectedArea}
        onLevelChange={setSelectedLevel}
        onSearchChange={setSearchQuery}
        onReset={handleReset}
        language={language}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8">
        
        {/* Statistics or Empty State */}
        <StatsOverview data={filteredData} language={language} />

        <div className="mb-4 flex justify-between items-end">
          <h2 className="text-lg font-semibold text-slate-800">
            {t.learningOutcomes} 
            <span className="ml-2 text-sm font-normal text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full">
              {filteredData.length} {t.found}
            </span>
          </h2>
        </div>

        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map(outcome => (
              <OutcomeCard key={outcome.id} outcome={outcome} language={language} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <div className="bg-gray-50 p-4 rounded-full mb-4">
              <Info className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">{t.noResultsTitle}</h3>
            <p className="text-gray-500 mt-1">{t.noResultsDesc}</p>
            <button 
              onClick={handleReset}
              className="mt-6 text-brand-600 font-medium hover:text-brand-700 hover:underline"
            >
              {t.clearFilters}
            </button>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 px-4 text-center">
        <p className="text-slate-400 text-sm">
          {t.footer}
        </p>
      </footer>
    </div>
  );
}

export default App;
