
export type Language = 'en' | 'es' | 'eu';

export interface LocalizedText {
  en: string;
  es: string;
  eu: string;
}

export enum ProficiencyLevel {
  BASIC = 'Basic',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  HIGHLY_ADVANCED = 'Highly advanced'
}

export enum KSA {
  KNOWLEDGE = 'Knowledge',
  SKILL = 'Skill',
  ATTITUDE = 'Attitude'
}

export interface CurriculumExamples {
  primaria: LocalizedText;
  eso: LocalizedText;
  bachillerato: LocalizedText;
}

export interface LearningOutcome {
  id: string;
  description: LocalizedText;
  level: ProficiencyLevel;
  ksa: KSA;
  aiLabel: string;
  competenceArea: LocalizedText; 
  competenceSubArea: LocalizedText;
  examples?: CurriculumExamples; // Optional field for curricular examples
}
