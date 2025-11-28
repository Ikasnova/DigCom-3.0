
import React, { useState } from 'react';
import { X, BookOpen, GraduationCap, School, Book } from 'lucide-react';
import { Language, CurriculumExamples } from '../types';
import { UI_TRANSLATIONS } from '../data';

interface ExampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  examples: CurriculumExamples;
  language: Language;
  title: string;
}

const ExampleModal: React.FC<ExampleModalProps> = ({ isOpen, onClose, examples, language, title }) => {
  const [activeTab, setActiveTab] = useState<'primaria' | 'eso' | 'bachillerato'>('primaria');
  const t = UI_TRANSLATIONS[language];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative z-10 animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-50 border-b border-gray-100 p-6 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 text-brand-600 mb-1">
              <BookOpen className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">{t.learningOutcomes}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 leading-snug">{title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-white px-6 pt-2">
          <button
            onClick={() => setActiveTab('primaria')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'primaria' 
                ? 'border-brand-500 text-brand-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <School className="w-4 h-4" />
            {t.stages.primaria}
          </button>
          <button
            onClick={() => setActiveTab('eso')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'eso' 
                ? 'border-brand-500 text-brand-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Book className="w-4 h-4" />
            {t.stages.eso}
          </button>
          <button
            onClick={() => setActiveTab('bachillerato')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'bachillerato' 
                ? 'border-brand-500 text-brand-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            {t.stages.bachillerato}
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto bg-white flex-1">
          <div className="prose prose-slate max-w-none">
            <div className="bg-brand-50/50 p-5 rounded-xl border border-brand-100">
              <p className="whitespace-pre-line text-slate-700 leading-relaxed">
                {examples[activeTab][language]}
              </p>
            </div>
            <p className="text-xs text-gray-400 mt-4 italic text-right">
              * Ejemplos adaptados al currículo oficial de la Comunidad Foral de Navarra (LOMLOE).
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
          >
            {t.close}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ExampleModal;
