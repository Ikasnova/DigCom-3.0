import React, { useState, useMemo } from 'react';
import { DIGCOMP_DATA, UI_TRANSLATIONS } from './data';
import FilterBar from './components/FilterBar';
import OutcomeCard from './components/OutcomeCard';
import StatsOverview from './components/StatsOverview';
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
    setSelectedArea('');
  };

  const getLanguageLabel = (lang: Language) => {
    switch (lang) {
      case 'es': return 'ESP';
      case 'eu': return 'EUS';
      case 'en': return 'ENG';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Modern Minimalist */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-row items-center justify-between">
            <div>
              <div className="flex items-baseline gap-3">
                <h1 className="text-2xl font-black text-slate-800 tracking-tighter uppercase">
                  {t.title}
                </h1>
                <span className="hidden md:inline-block px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold tracking-widest uppercase rounded">
                  Navarra Ed.
                </span>
              </div>
              <p className="text-slate-500 text-xs md:text-sm font-medium tracking-wide mt-0.5">
                {t.subtitle}
              </p>
            </div>
            
            <button 
              onClick={toggleLanguage}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-bold tracking-widest hover:bg-slate-800 transition-all rounded shadow-lg shadow-slate-300/50 uppercase"
            >
              {getLanguageLabel(language)}
            </button>
          </div>
        </div>
      </header>

      {/* Filter Section - Separate from sticky header for visual break */}
      <div className="bg-white border-b border-slate-200 py-6 px-6">
        <div className="max-w-7xl mx-auto">
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
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-6 md:p-8 space-y-8">
        
        {/* Statistics or Empty State */}
        <StatsOverview data={filteredData} language={language} />

        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-xl font-bold text-slate-800">
            {t.learningOutcomes} 
          </h2>
          <span className="text-sm font-bold text-slate-500">
            {filteredData.length} <span className="font-normal opacity-70">{t.found}</span>
          </span>
        </div>

        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map(outcome => (
              <OutcomeCard key={outcome.id} outcome={outcome} language={language} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 bg-white/50 rounded-lg border-2 border-dashed border-slate-200">
            <h3 className="text-xl font-bold text-slate-400">{t.noResultsTitle}</h3>
            <p className="text-slate-400 mt-2">{t.noResultsDesc}</p>
            <button 
              onClick={handleReset}
              className="mt-6 text-slate-800 font-bold border-b-2 border-slate-800 hover:text-brand-600 hover:border-brand-600 transition-colors"
            >
              {t.clearFilters}
            </button>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 py-10 px-4 text-center mt-12">
        <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
          {t.footer}
        </p>
      </footer>
    </div>
  );
}

export default App;