
import React, { useState } from 'react';
import { LearningOutcome, KSA, Language } from '../types';
import { Brain, Wrench, Heart, BookOpen } from 'lucide-react';
import { UI_TRANSLATIONS } from '../data';
import ExampleModal from './ExampleModal';

interface OutcomeCardProps {
  outcome: LearningOutcome;
  language: Language;
}

const OutcomeCard: React.FC<OutcomeCardProps> = ({ outcome, language }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = UI_TRANSLATIONS[language];
  
  // Generate background color based on the Competence Area number (1-5)
  // Range: #6080a3 to #3eb7ae
  const getBaseColor = (id: string) => {
    // Extract the area number from ID (e.g., "LO1..." -> 1)
    const areaNum = parseInt(id.charAt(2)) || 1;
    
    const colors: Record<number, string> = {
      1: '#6080a3', // Start
      2: '#578da6', // 25% mix
      3: '#4f9ba8', // 50% mix
      4: '#46a9ab', // 75% mix
      5: '#3eb7ae', // End
    };

    return colors[areaNum] || colors[1];
  };

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const baseColor = getBaseColor(outcome.id);
  // Using 0.12 opacity for "muy clarito" (very light) background
  const backgroundColor = hexToRgba(baseColor, 0.12);
  const textColor = '#454242';

  const getKsaIcon = (ksa: KSA) => {
    switch (ksa) {
      case KSA.KNOWLEDGE: return <Brain className="w-3 h-3 mr-1 text-sky-700" />;
      case KSA.SKILL: return <Wrench className="w-3 h-3 mr-1 text-emerald-700" />;
      case KSA.ATTITUDE: return <Heart className="w-3 h-3 mr-1 text-rose-700" />;
      default: return null;
    }
  };

  const isAiExplicit = outcome.aiLabel.toLowerCase().includes('explicit');

  return (
    <>
      <div 
        className="group rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full relative overflow-hidden border border-transparent"
        style={{ backgroundColor: backgroundColor }}
      >
        {/* AI Indicator Strip if Explicit - Only shown here (once) */}
        {isAiExplicit && (
          <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden z-10">
            <div 
              className="absolute top-[10px] right-[-24px] rotate-45 text-white text-[9px] font-bold py-1 w-[90px] text-center shadow-md tracking-wider"
              style={{ backgroundColor: '#7e4d99' }}
            >
              AI EXPLICIT
            </div>
          </div>
        )}

        <div className="flex justify-between items-start mb-3">
          <span 
            className="text-sm font-bold font-mono px-2 py-1 rounded backdrop-blur-sm"
            style={{ 
              color: '#2d3748', // Dark slate for good contrast
              backgroundColor: 'rgba(255,255,255,0.7)' 
            }}
          >
            {outcome.id}
          </span>
        </div>

        <div className="mb-4 flex-grow">
          <h4 
            className="text-xs font-bold uppercase tracking-wider mb-2 text-slate-600"
          >
            {outcome.competenceSubArea[language]}
          </h4>
          <p 
            className="text-lg font-normal leading-snug"
            style={{ color: textColor }}
          >
            {outcome.description[language]}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-200/50 flex flex-col gap-3">
          <div className="flex flex-wrap gap-2 items-center">
            {/* Proficiency Level Badge */}
            <span className="text-xs px-3 py-1 rounded-full font-bold bg-white text-slate-700 shadow-sm border border-slate-200/50">
              {t.levels[outcome.level]}
            </span>
            
            {/* KSA Badge */}
            <span className="flex items-center text-xs px-3 py-1 rounded-full font-bold bg-white text-slate-800 shadow-sm border border-slate-200/50">
              {getKsaIcon(outcome.ksa)}
              {t.ksa[outcome.ksa]}
            </span>
          </div>

          {outcome.examples && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-2 text-sm font-medium text-brand-700 bg-white hover:bg-brand-50 border border-brand-200 rounded-lg transition-colors shadow-sm group-hover:border-brand-300"
            >
              <BookOpen className="w-4 h-4" />
              {t.viewExamples}
            </button>
          )}
        </div>
      </div>

      {outcome.examples && (
        <ExampleModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          examples={outcome.examples}
          language={language}
          title={outcome.description[language]}
        />
      )}
    </>
  );
};

export default OutcomeCard;
