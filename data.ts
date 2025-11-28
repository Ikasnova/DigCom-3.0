
import { LearningOutcome, ProficiencyLevel, KSA, Language, CurriculumExamples, CurriculumStageDetail } from './types';

export const UI_TRANSLATIONS = {
  en: {
    title: 'DigComp 3.0 Explorer',
    subtitle: 'The Digital Competence Framework for Citizens',
    description: 'Browse and filter the official learning outcomes of the DigComp 3.0 framework. Use the controls below to narrow down by competence area or proficiency level.',
    searchPlaceholder: 'Search learning outcomes...',
    allAreas: 'All Competence Areas',
    allLevels: 'All Proficiency Levels',
    reset: 'Reset',
    resultsDistribution: 'Results Distribution',
    learningOutcomes: 'Learning Outcomes',
    found: 'found',
    noResultsTitle: 'No outcomes found',
    noResultsDesc: 'Try adjusting your filters or search query.',
    clearFilters: 'Clear all filters',
    footer: 'Data based on The Digital Competence Framework for Citizens (DigComp 3.0).',
    viewExamples: 'View Curricular Examples',
    close: 'Close',
    activity: 'Activity / Context',
    genComp: 'Key Competences (General)',
    specComp: 'Specific Competences',
    stages: {
      primaria: 'Primary Education',
      eso: 'Secondary (ESO)',
      bachillerato: 'Baccalaureate'
    },
    levels: {
      [ProficiencyLevel.BASIC]: 'Basic',
      [ProficiencyLevel.INTERMEDIATE]: 'Intermediate',
      [ProficiencyLevel.ADVANCED]: 'Advanced',
      [ProficiencyLevel.HIGHLY_ADVANCED]: 'Highly Advanced'
    },
    ksa: {
      [KSA.KNOWLEDGE]: 'Knowledge',
      [KSA.SKILL]: 'Skill',
      [KSA.ATTITUDE]: 'Attitude'
    }
  },
  es: {
    title: 'Explorador DigComp 3.0',
    subtitle: 'El Marco de Competencias Digitales para la Ciudadanía',
    description: 'Navega y filtra los resultados de aprendizaje oficiales del marco DigComp 3.0. Utiliza los controles siguientes para filtrar por área de competencia o nivel de competencia.',
    searchPlaceholder: 'Buscar resultados de aprendizaje...',
    allAreas: 'Todas las áreas de competencia',
    allLevels: 'Todos los niveles',
    reset: 'Reiniciar',
    resultsDistribution: 'Distribución de resultados',
    learningOutcomes: 'Resultados de aprendizaje',
    found: 'encontrados',
    noResultsTitle: 'No se encontraron resultados',
    noResultsDesc: 'Intenta ajustar tus filtros o la búsqueda.',
    clearFilters: 'Limpiar filtros',
    footer: 'Datos basados en el Marco de Competencias Digitales para la Ciudadanía (DigComp 3.0).',
    viewExamples: 'Ver ejemplos curriculares (Navarra)',
    close: 'Cerrar',
    activity: 'Actividad / Contexto',
    genComp: 'Competencias Clave (General)',
    specComp: 'Competencias Específicas',
    stages: {
      primaria: 'Educación Primaria',
      eso: 'E.S.O.',
      bachillerato: 'Bachillerato'
    },
    levels: {
      [ProficiencyLevel.BASIC]: 'Básico',
      [ProficiencyLevel.INTERMEDIATE]: 'Intermedio',
      [ProficiencyLevel.ADVANCED]: 'Avanzado',
      [ProficiencyLevel.HIGHLY_ADVANCED]: 'Altamente Especializado'
    },
    ksa: {
      [KSA.KNOWLEDGE]: 'Conocimiento',
      [KSA.SKILL]: 'Habilidad',
      [KSA.ATTITUDE]: 'Actitud'
    }
  },
  eu: {
    title: 'DigComp 3.0 Arakatzailea',
    subtitle: 'Hiritarrentzako Gaitasun Digitalen Esparrua',
    description: 'Arakatu eta iragazi DigComp 3.0 esparruko ikaskuntza-emaitza ofizialak. Erabili beheko kontrolak gaitasun-arloaren edo trebetasun-mailaren arabera iragazteko.',
    searchPlaceholder: 'Bilatu ikaskuntza-emaitzak...',
    allAreas: 'Gaitasun-arlo guztiak',
    allLevels: 'Maila guztiak',
    reset: 'Berrezarri',
    resultsDistribution: 'Emaitzen banaketa',
    learningOutcomes: 'Ikaskuntza-emaitzak',
    found: 'aurkituta',
    noResultsTitle: 'Ez da emaitzarik aurkitu',
    noResultsDesc: 'Saiatu iragazkiak edo bilaketa doitzen.',
    clearFilters: 'Garbitu iragazki guztiak',
    footer: 'Hiritarrentzako Gaitasun Digitalen Esparruan (DigComp 3.0) oinarritutako datuak.',
    viewExamples: 'Ikusi curriculum-adibideak (Nafarroa)',
    close: 'Itxi',
    activity: 'Jarduera / Testuingurua',
    genComp: 'Gaitasun Giltzarriak (Orokorra)',
    specComp: 'Gaitasun Espezifikoak',
    stages: {
      primaria: 'Lehen Hezkuntza',
      eso: 'DBH',
      bachillerato: 'Batxilergoa'
    },
    levels: {
      [ProficiencyLevel.BASIC]: 'Oinarrizkoa',
      [ProficiencyLevel.INTERMEDIATE]: 'Ertaina',
      [ProficiencyLevel.ADVANCED]: 'Aurreratua',
      [ProficiencyLevel.HIGHLY_ADVANCED]: 'Oso aurreratua'
    },
    ksa: {
      [KSA.KNOWLEDGE]: 'Ezagutza',
      [KSA.SKILL]: 'Trebetasuna',
      [KSA.ATTITUDE]: 'Jarrera'
    }
  }
};

const AREAS = {
  1: { en: '1. Information Search, Evaluation and Management', es: '1. Búsqueda, evaluación y gestión de información', eu: '1. Informazioaren bilaketa, ebaluazioa eta kudeaketa' },
  2: { en: '2. Communication and Collaboration', es: '2. Comunicación y colaboración', eu: '2. Komunikazioa eta elkarlana' },
  3: { en: '3. Content Creation', es: '3. Creación de contenidos', eu: '3. Edukien sorkuntza' },
  4: { en: '4. Safety, Wellbeing and Responsible Use', es: '4. Seguridad, bienestar y uso responsable', eu: '4. Segurtasuna, ongizatea eta erabilera arduratsua' },
  5: { en: '5. Problem Identification and Solving', es: '5. Identificación y resolución de problemas', eu: '5. Arazoen identifikazioa eta ebazpena' }
};

const SUB_AREAS = {
  '1.1': { en: '1.1 Browsing, searching and filtering', es: '1.1 Navegación, búsqueda y filtrado', eu: '1.1 Nabigazioa, bilaketa eta iragazketa' },
  '1.2': { en: '1.2 Evaluating information', es: '1.2 Evaluación de información', eu: '1.2 Informazioa ebaluatzea' },
  '1.3': { en: '1.3 Managing information', es: '1.3 Gestión de información', eu: '1.3 Informazioa kudeatzea' },
  '2.1': { en: '2.1 Interacting', es: '2.1 Interactuar', eu: '2.1 Elkarreragitea' },
  '2.2': { en: '2.2 Sharing', es: '2.2 Compartir', eu: '2.2 Partekatzea' },
  '2.3': { en: '2.3 Citizenship', es: '2.3 Participación ciudadana', eu: '2.3 Herritartasuna' },
  '2.4': { en: '2.4 Collaborating', es: '2.4 Colaboración', eu: '2.4 Elkarlana' },
  '2.5': { en: '2.5 Netiquette', es: '2.5 Etiqueta digital', eu: '2.5 Netiketa' },
  '2.6': { en: '2.6 Digital Identity', es: '2.6 Identidad digital', eu: '2.6 Identitate digitala' },
  '3.1': { en: '3.1 Developing content', es: '3.1 Desarrollo de contenidos', eu: '3.1 Edukiak garatzea' },
  '3.2': { en: '3.2 Integrating content', es: '3.2 Integración y reelaboración', eu: '3.2 Edukiak integratzea' },
  '3.3': { en: '3.3 Copyright and licenses', es: '3.3 Derechos de autor y licencias', eu: '3.3 Egile-eskubideak' },
  '3.4': { en: '3.4 Programming', es: '3.4 Programación', eu: '3.4 Programazioa' },
  '4.1': { en: '4.1 Protecting devices', es: '4.1 Protección de dispositivos', eu: '4.1 Gailuak babestea' },
  '4.2': { en: '4.2 Personal data', es: '4.2 Datos personales', eu: '4.2 Datu pertsonalak' },
  '4.3': { en: '4.3 Health and well-being', es: '4.3 Salud y bienestar', eu: '4.3 Osasuna eta ongizatea' },
  '4.4': { en: '4.4 Environment', es: '4.4 Medio ambiente', eu: '4.4 Ingurumena' },
  '5.1': { en: '5.1 Technical problems', es: '5.1 Problemas técnicos', eu: '5.1 Arazo teknikoak' },
  '5.2': { en: '5.2 Identifying needs', es: '5.2 Identificación de necesidades', eu: '5.2 Beharrak identifikatzea' },
  '5.3': { en: '5.3 Creative use', es: '5.3 Uso creativo', eu: '5.3 Erabilera sortzailea' },
  '5.4': { en: '5.4 Competence gaps', es: '5.4 Brechas de competencia', eu: '5.4 Gaitasun-hutsuneak' }
};

// Official Navarre Curriculum Database
const NAVARRA_CURRICULUM_DB = {
  primaria: [
    { 
      name: { es: 'Conocimiento del Medio', eu: 'Ingurunearen Ezaguera', en: 'Knowledge of the Environment' },
      keyComp: { es: 'CD, STEM, CPSAA', eu: 'KD, STEM, KPSII', en: 'DC, STEM, PSSC' },
      specComp: { 
        es: 'CE 1. Utilizar dispositivos y recursos digitales de forma segura, responsable y eficiente.', 
        eu: '1. GE. Gailu eta baliabide digitalak modu seguruan, arduratsuan eta eraginkorrean erabiltzea.',
        en: 'SC 1. Use digital devices and resources safely, responsibly, and efficiently.' 
      }
    },
    { 
      name: { es: 'Lengua Castellana y Literatura', eu: 'Gaztelania eta Literatura', en: 'Spanish Language and Literature' },
      keyComp: { es: 'CCL, CD, CPSAA', eu: 'HKK, KD, KPSII', en: 'LC, DC, PSSC' },
      specComp: { 
        es: 'CE 6. Buscar, seleccionar y contrastar información procedente de diferentes fuentes de manera progresivamente autónoma.', 
        eu: '6. GE. Hainbat iturritako informazioa bilatzea, hautatzea eta kontrastatzea, gero eta modu autonomoagoan.',
        en: 'SC 6. Search, select, and contrast information from different sources progressively autonomously.' 
      }
    },
    { 
      name: { es: 'Matemáticas', eu: 'Matematika', en: 'Mathematics' },
      keyComp: { es: 'STEM, CD, CPSAA', eu: 'STEM, KD, KPSII', en: 'STEM, DC, PSSC' },
      specComp: { 
        es: 'CE 5. Reconocer y utilizar algoritmos sencillos y herramientas tecnológicas para resolver problemas.', 
        eu: '5. GE. Algoritmo errazak eta tresna teknologikoak ezagutzea eta erabiltzea arazoak ebazteko.',
        en: 'SC 5. Recognize and use simple algorithms and technological tools to solve problems.' 
      }
    }
  ],
  eso: [
    { 
      name: { es: 'Digitalización', eu: 'Digitalizazioa', en: 'Digitalization' },
      keyComp: { es: 'CD, STEM, CPSAA, CE', eu: 'KD, STEM, KPSII, EK', en: 'DC, STEM, PSSC, CE' },
      specComp: { 
        es: 'CE 2. Gestionar y crear contenidos digitales interaccionando y colaborando en red de forma crítica y segura.', 
        eu: '2. GE. Eduki digitalak kudeatzea eta sortzea, sarean elkarreraginean eta lankidetzan arituz, modu kritiko eta seguruan.',
        en: 'SC 2. Manage and create digital content interacting and collaborating online critically and safely.' 
      }
    },
    { 
      name: { es: 'Geografía e Historia', eu: 'Geografia eta Historia', en: 'Geography and History' },
      keyComp: { es: 'CC, CD, CCL', eu: 'HK, KD, HKK', en: 'CC, DC, LC' },
      specComp: { 
        es: 'CE 1. Buscar, seleccionar, tratar y organizar información sobre temas relevantes del presente y del pasado.', 
        eu: '1. GE. Orainari eta iraganari buruzko gai garrantzitsuei buruzko informazioa bilatzea, hautatzea, tratatzea eta antolatzea.',
        en: 'SC 1. Search, select, process, and organize information on relevant topics of the present and past.' 
      }
    },
    { 
      name: { es: 'Tecnología', eu: 'Teknologia', en: 'Technology' },
      keyComp: { es: 'STEM, CD, CPSAA', eu: 'STEM, KD, KPSII', en: 'STEM, DC, PSSC' },
      specComp: { 
        es: 'CE 4. Aprovechar las posibilidades de las herramientas digitales para la resolución de problemas técnicos.', 
        eu: '4. GE. Tresna digitalen aukerak aprobetxatzea arazo teknikoak konpontzeko.',
        en: 'SC 4. Leverage the possibilities of digital tools for solving technical problems.' 
      }
    }
  ],
  bachillerato: [
    { 
      name: { es: 'Tecnologías Digitales Aplicadas (TDA)', eu: 'Teknologia Digital Aplikatuak', en: 'Applied Digital Technologies' },
      keyComp: { es: 'CD, STEM, CPSAA, CE', eu: 'KD, STEM, KPSII, EK', en: 'DC, STEM, PSSC, CE' },
      specComp: { 
        es: 'CE 3. Desarrollar proyectos de investigación y/o innovación utilizando herramientas digitales avanzadas.', 
        eu: '3. GE. Ikerketa eta/edo berrikuntza proiektuak garatzea tresna digital aurreratuak erabiliz.',
        en: 'SC 3. Develop research and/or innovation projects using advanced digital tools.' 
      }
    },
    { 
      name: { es: 'Ciencias de la Computación', eu: 'Konputazio Zientziak', en: 'Computer Science' },
      keyComp: { es: 'STEM, CD, CE', eu: 'STEM, KD, EK', en: 'STEM, DC, CE' },
      specComp: { 
        es: 'CE 2. Analizar y diseñar algoritmos y programas informáticos para resolver problemas complejos.', 
        eu: '2. GE. Algoritmoak eta programa informatikoak aztertzea eta diseinatzea arazo konplexuak ebazteko.',
        en: 'SC 2. Analyze and design algorithms and computer programs to solve complex problems.' 
      }
    },
    { 
      name: { es: 'Filosofía', eu: 'Filosofia', en: 'Philosophy' },
      keyComp: { es: 'CCL, CD, CC, CPSAA', eu: 'HKK, KD, HK, KPSII', en: 'LC, DC, CC, PSSC' },
      specComp: { 
        es: 'CE 5. Analizar críticamente el impacto de las tecnologías digitales en la sociedad y en el ser humano.', 
        eu: '5. GE. Teknologia digitalek gizartean eta gizakiarengan duten eragina modu kritikoan aztertzea.',
        en: 'SC 5. Critically analyze the impact of digital technologies on society and human beings.' 
      }
    }
  ]
};

const CONTEXTS = {
  primaria: [
    { es: 'un proyecto sobre la flora local', eu: 'tokiko landarediari buruzko proiektu bat', en: 'a project on local flora' },
    { es: 'la creación de un cuento digital', eu: 'ipuin digital baten sorkuntza', en: 'creating a digital story' },
    { es: 'la búsqueda de información segura', eu: 'informazio seguruaren bilaketa', en: 'searching for safe information' },
    { es: 'el uso responsable de la tablet', eu: 'tableta modu arduratsuan erabiltzea', en: 'responsible tablet use' }
  ],
  eso: [
    { es: 'un trabajo sobre los ODS', eu: 'GJH-ei buruzko lan bat', en: 'a project on SDGs' },
    { es: 'el análisis de noticias falsas', eu: 'albiste faltsuen analisia', en: 'fake news analysis' },
    { es: 'la programación de un robot', eu: 'robot baten programazioa', en: 'robot programming' },
    { es: 'la edición de vídeo para una campaña', eu: 'kanpaina baterako bideo-edizioa', en: 'video editing for a campaign' }
  ],
  bachillerato: [
    { es: 'una investigación académica rigurosa', eu: 'ikerketa akademiko zorrotza', en: 'rigorous academic research' },
    { es: 'el desarrollo de un prototipo emprendedor', eu: 'prototipo ekintzaile baten garapena', en: 'developing an entrepreneurial prototype' },
    { es: 'un debate ético sobre IA', eu: 'IAri buruzko eztabaida etikoa', en: 'an ethical debate on AI' },
    { es: 'la gestión de la identidad profesional', eu: 'identitate profesionalaren kudeaketa', en: 'managing professional identity' }
  ]
};

const MANUAL_EXAMPLES: Record<string, CurriculumExamples> = {
  'LO1.1.01': {
    primaria: {
      activity: { es: "Uso de buscadores infantiles (ej. Bunis) vs. buscadores generales.", eu: "Umeentzako bilatzaileak vs. bilatzaile orokorrak erabiltzea.", en: "Using child-friendly search engines vs. general ones." },
      competenciaGeneral: { es: "CD, STEM", eu: "KD, STEM", en: "DC, STEM" },
      competenciasEspecificas: { es: "Conocimiento del Medio - CE 1: Utilizar dispositivos de forma segura.", eu: "Ingurunearen Ezaguera - 1. GE: Gailuak modu seguruan erabiltzea.", en: "Environment - SC 1: Use digital devices safely." }
    },
    eso: {
      activity: { es: "Comparación de resultados entre buscadores académicos y comerciales.", eu: "Bilatzaile akademikoen eta komertzialen arteko emaitzen konparaketa.", en: "Comparison of results between academic and commercial search engines." },
      competenciaGeneral: { es: "CD, STEM, CPSAA", eu: "KD, STEM, KPSII", en: "DC, STEM, PSSC" },
      competenciasEspecificas: { es: "Digitalización - CE 2: Gestionar y crear contenidos digitales.", eu: "Digitalizazioa - 2. GE: Eduki digitalak kudeatzea eta sortzea.", en: "Digitalization - SC 2: Manage and create digital content." }
    },
    bachillerato: {
      activity: { es: "Análisis crítico de los algoritmos de búsqueda y su impacto en la información recibida.", eu: "Bilaketa-algoritmoen analisi kritikoa eta jasotako informazioan duten eragina.", en: "Critical analysis of search algorithms and their impact on received information." },
      competenciaGeneral: { es: "CCL, CD, CC", eu: "HKK, KD, HK", en: "LC, DC, CC" },
      competenciasEspecificas: { es: "Filosofía - CE 5: Analizar el impacto de las tecnologías digitales.", eu: "Filosofia - 5. GE: Teknologia digitalen eragina aztertzea.", en: "Philosophy - SC 5: Analyze the impact of digital technologies." }
    }
  }
};

const generateUniqueNavarraExample = (id: string, enDesc: string, esDesc: string): CurriculumExamples => {
  const idNum = parseInt(id.slice(-2)) || 0;
  const get = (arr: any[]) => arr[idNum % arr.length];
  const lowercaseFirst = (str: string) => str.charAt(0).toLowerCase() + str.slice(1);
  const cleanEsDesc = lowercaseFirst(esDesc.replace(/\.$/, ''));
  const cleanEnDesc = lowercaseFirst(enDesc.replace(/\.$/, ''));
  
  const subjPrim = get(NAVARRA_CURRICULUM_DB.primaria);
  const subjEso = get(NAVARRA_CURRICULUM_DB.eso);
  const subjBach = get(NAVARRA_CURRICULUM_DB.bachillerato);
  const ctxPrim = get(CONTEXTS.primaria);
  const ctxEso = get(CONTEXTS.eso);
  const ctxBach = get(CONTEXTS.bachillerato);

  return {
    primaria: {
      activity: { es: `En el contexto de ${ctxPrim.es}, el alumnado debe ${cleanEsDesc} utilizando herramientas adaptadas.`, eu: `${ctxPrim.eu} testuinguruan, ikasleek ${cleanEsDesc} behar duten, tresna egokituak erabiliz.`, en: `In the context of ${ctxPrim.en}, students must ${cleanEnDesc} using adapted tools.` },
      competenciaGeneral: subjPrim.keyComp,
      competenciasEspecificas: { es: `${subjPrim.name.es} - ${subjPrim.specComp.es}`, eu: `${subjPrim.name.eu} - ${subjPrim.specComp.eu}`, en: `${subjPrim.name.en} - ${subjPrim.specComp.en}` }
    },
    eso: {
      activity: { es: `Durante el desarrollo de ${ctxEso.es}, el alumnado demostrará su capacidad para ${cleanEsDesc} de forma autónoma.`, eu: `${ctxEso.eu} garatzean, ikasleek ${cleanEsDesc} gaitasuna erakutsiko dute modu autonomoan.`, en: `During ${ctxEso.en}, students will demonstrate ability to ${cleanEnDesc} autonomously.` },
      competenciaGeneral: subjEso.keyComp,
      competenciasEspecificas: { es: `${subjEso.name.es} - ${subjEso.specComp.es}`, eu: `${subjEso.name.eu} - ${subjEso.specComp.eu}`, en: `${subjEso.name.en} - ${subjEso.specComp.en}` }
    },
    bachillerato: {
      activity: { es: `En un proyecto sobre ${ctxBach.es}, se requiere que el estudiante sepa ${cleanEsDesc} integrando conocimientos avanzados.`, eu: `${ctxBach.eu}-ri buruzko proiektuan, ikasleak ${cleanEsDesc} jakitea eskatzen da, ezagutza aurreratuak integratuz.`, en: `In a project on ${ctxBach.en}, the student must know how to ${cleanEnDesc} integrating advanced knowledge.` },
      competenciaGeneral: subjBach.keyComp,
      competenciasEspecificas: { es: `${subjBach.name.es} - ${subjBach.specComp.es}`, eu: `${subjBach.name.eu} - ${subjBach.specComp.eu}`, en: `${subjBach.name.en} - ${subjBach.specComp.en}` }
    }
  };
};

const RAW_OUTCOMES: string[][] = [
  // 1.1 Browsing
  ['LO1.1.01', 'Acknowledge the benefits of using different digital search tools and methods, depending on one’s purpose.', 'Reconocer los beneficios de usar diferentes herramientas y métodos de búsqueda digital.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO1.1.02', 'Recognise that the results or outputs of a search depend on the digital search tool used and the way that an individual specifies the search.', 'Reconocer que los resultados de una búsqueda dependen de la herramienta utilizada y la forma de especificarla.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.1.03', 'Recognise that search results or outputs can contain information that may not be relevant.', 'Reconocer que los resultados de búsqueda pueden contener información no relevante.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.1.04', 'Identify the main features of commonly-used AI-driven and traditional digital search tools.', 'Identificar las características principales de herramientas de búsqueda tradicionales y basadas en IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO1.1.05', 'Use digital search tools to implement basic information searches.', 'Utilizar herramientas de búsqueda digital para implementar búsquedas básicas.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO1.1.06', 'Use digital search tools to refine or update existing results or outputs.', 'Utilizar herramientas de búsqueda para refinar o actualizar resultados.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO1.1.07', 'Purposefully explore new digital search tools and search functionalities.', 'Explorar intencionadamente nuevas herramientas y funcionalidades de búsqueda.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO1.1.08', 'Identify strategies that provide more relevant digital search results or outputs.', 'Identificar estrategias que proporcionan resultados más relevantes.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.1.09', 'Distinguish between more and less relevant digital search results or outputs.', 'Distinguir entre resultados de búsqueda más y menos relevantes.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.1.10', 'Select appropriate digital search tools based on information needs.', 'Seleccionar herramientas de búsqueda apropiadas según las necesidades.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.1.11', 'Translate information needs into effective digital search queries, commands or statements.', 'Traducir necesidades de información en consultas, comandos o declaraciones efectivas.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.1.12', 'Apply appropriate strategies to refine or filter existing digital results or outputs.', 'Aplicar estrategias apropiadas para refinar o filtrar resultados existentes.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.1.13', 'Continually explore functions and features of familiar and novel digital search tools.', 'Explorar continuamente funciones de herramientas de búsqueda familiares y novedosas.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.1.14', 'Prioritise deepening one’s existing search capabilities.', 'Priorizar la profundización de las capacidades de búsqueda existentes.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.1.15', 'Combine a variety of digital search tools and strategies to address complex information needs.', 'Combinar herramientas y estrategias de búsqueda para necesidades complejas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.16', 'Assist others in developing their digital search capabilities.', 'Ayudar a otros a desarrollar sus capacidades de búsqueda.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.17', 'Stay informed about developments in digital search technologies.', 'Mantenerse informado sobre desarrollos en tecnologías de búsqueda.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.1.18', 'Assess and evaluate developments in digital search technologies in a given context to support decision-making.', 'Evaluar desarrollos en tecnologías de búsqueda para apoyar la toma de decisiones.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.19', 'Combine a variety of digital search tools and strategies to address highly complex or specialised information needs.', 'Combinar herramientas para abordar necesidades de información altamente complejas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.20', 'Assist others to implement and refine complex or specialised searches in digital environments.', 'Ayudar a otros a implementar y refinar búsquedas complejas o especializadas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.21', 'Contribute to improvements in or new solutions for complex or specialised searches in digital environments.', 'Contribuir a mejoras o nuevas soluciones para búsquedas complejas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 1.2 Evaluating
  ['LO1.2.01', 'Acknowledge the benefits of a cautious approach in interpreting information and content in digital environments.', 'Reconocer los beneficios de un enfoque cauteloso al interpretar información.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO1.2.02', 'Distinguish between the source of digital content, and digital content itself.', 'Distinguir entre la fuente del contenido digital y el contenido en sí.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.03', 'Recognise that some digital information sources and systems may not be trustworthy.', 'Reconocer que algunas fuentes de información pueden no ser confiables.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.04', 'Recognise that it can be difficult to distinguish between information and content generated by humans and AI systems.', 'Reconocer la dificultad de distinguir contenido generado por humanos y por IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.05', 'Recognise examples of misinformation, disinformation, and sources of bias.', 'Reconocer ejemplos de desinformación, información errónea y sesgo.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.06', 'Recognise examples of social media influencing and filter bubbles.', 'Reconocer ejemplos de influencia en redes sociales y burbujas de filtro.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.07', 'Make a basic assessment of the reliability and credibility of digital information sources and content.', 'Realizar una evaluación básica de la fiabilidad y credibilidad de fuentes y contenido.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO1.2.08', 'Acknowledge the benefits of questioning the credibility and reliability of information and content and their sources.', 'Reconocer los beneficios de cuestionar la credibilidad y fiabilidad de la información.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO1.2.09', 'Recognise potential consequences of misinformation and disinformation in digital environments for oneself and others.', 'Reconocer consecuencias potenciales de la desinformación para uno mismo y otros.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.10', 'Describe methods to identify the source of information found online.', 'Describir métodos para identificar la fuente de información online.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.11', 'Define the purposes of fact-checking services.', 'Definir los propósitos de los servicios de verificación de hechos.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.12', 'Recognise the concepts and purposes of pre-bunking and de-bunking in digital contexts.', 'Reconocer los conceptos de pre-bunking y de-bunking en contextos digitales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.13', 'Recognise that the data used to train AI systems and how they are trained affects the reliability of the information they provide.', 'Reconocer que los datos de entrenamiento de IA afectan la fiabilidad de la información.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.14', 'Recognise that some digital technologies, such as AI systems, may function like a ‘black box’.', 'Reconocer que sistemas de IA pueden funcionar como una "caja negra".', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.15', 'Identify examples of human (cognitive, affective) bias and AI system (data, training) bias.', 'Identificar ejemplos de sesgo humano y sesgo de sistemas de IA.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.16', 'Recognise that AI systems may produce output which is inaccurate, even if it may seem plausible.', 'Reconocer que la IA puede producir resultados inexactos aunque parezcan plausibles.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.17', 'Recognise that the humans using an AI system are responsible for checking the quality and validity of information.', 'Reconocer que los humanos son responsables de verificar la calidad de la información generada por IA.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.18', 'Recognise the presence of user-directing strategies in digital environments such as clickbait, nudging and gamification.', 'Reconocer estrategias como clickbait, nudging y gamificación.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.19', 'Apply pre-bunking and de-bunking strategies to discard or discredit unreliable sources and content.', 'Aplicar estrategias de pre/de-bunking para descartar fuentes no confiables.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.2.20', 'Respond effectively to user-directing strategies in digital environments such as clickbait, nudging and gamification.', 'Responder eficazmente a estrategias como clickbait y nudging.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.2.21', 'Critically assess the reliability of sources, information and content in digital environments.', 'Evaluar críticamente la fiabilidad de fuentes y contenido en entornos digitales.', 'Intermediate', 'Skill', 'AI-Explicit'],
  ['LO1.2.22', 'Continually scrutinise how AI systems, biases, and various interests shape generation, presentation and interpretation of information.', 'Escrutar continuamente cómo la IA y los sesgos moldean la información.', 'Advanced', 'Attitude', 'AI-Explicit'],
  ['LO1.2.23', 'Describe personal, social and political consequences of misinformation, disinformation, sources of bias.', 'Describir consecuencias personales y sociales de la desinformación y el sesgo.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.24', 'Describe features of trustworthy digital technologies, such as AI systems.', 'Describir características de tecnologías digitales confiables como la IA.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.25', 'Describe methods that can be used to identify deep-fakes.', 'Describir métodos para identificar deep-fakes.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.26', 'Thoroughly assess the reliability and accuracy of a diversity of sources, information and content.', 'Evaluar exhaustivamente la fiabilidad y precisión de diversas fuentes.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.2.27', 'Support others to develop their capabilities to assess the reliability of sources, information and content.', 'Apoyar a otros para evaluar la fiabilidad de fuentes y contenido.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.2.28', 'Promote and support the development of resilience to misinformation and disinformation.', 'Promover la resiliencia ante la desinformación.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.2.29', 'Systematically assess and evaluate sources, information and content to support complex decision-making.', 'Evaluar sistemáticamente fuentes para apoyar decisiones complejas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.2.30', 'Help others to develop capabilities to critically evaluate information and content.', 'Ayudar a otros a evaluar críticamente información y contenido.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.2.31', 'Lead or contribute to initiatives that support accurate interpretation of data, information, and content.', 'Liderar iniciativas para la interpretación precisa de datos e información.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 1.3 Managing Information
  ['LO1.3.01', 'Acknowledge the benefits of managing and organising information in digital environments.', 'Reconocer los beneficios de gestionar y organizar información digital.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO1.3.02', 'Recognise functions of data removal, restoration and backup.', 'Reconocer funciones de eliminación, restauración y copia de seguridad de datos.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.03', 'Identify main properties of digital files and folders.', 'Identificar propiedades principales de archivos y carpetas digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.04', 'Recognise, in general terms, the concept of data.', 'Reconocer, en términos generales, el concepto de datos.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.05', 'Download, save, retrieve, move and delete digital files.', 'Descargar, guardar, recuperar, mover y eliminar archivos digitales.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.06', 'Organise and format simple data in a structured digital environment, such as in spreadsheets.', 'Organizar y formatear datos simples en entornos estructurados como hojas de cálculo.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.07', 'Update one’s contacts, such as on phone, email or social media.', 'Actualizar contactos en teléfono, email o redes sociales.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.08', 'Acknowledge the importance of careful and ethical management of data and information.', 'Reconocer la importancia de la gestión cuidadosa y ética de datos.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO1.3.09', 'Recognise that digital files and folders can be (re-)named and organised in a manner desired by the user.', 'Reconocer que archivos y carpetas pueden ser renombrados y organizados según se desee.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.10', 'Recognise that digital files can be saved to different locations and transferred from one location to another.', 'Reconocer que los archivos pueden guardarse en diferentes ubicaciones y transferirse.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.11', 'Identify common data collection tools and their main functions.', 'Identificar herramientas comunes de recolección de datos y sus funciones.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.12', 'Define responsibilities associated with using data collection tools.', 'Definir responsabilidades asociadas al uso de herramientas de recolección de datos.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.13', 'Identify common types of data and their formats.', 'Identificar tipos comunes de datos y sus formatos.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.14', 'Apply naming conventions to digital files and hierarchies to digital folders.', 'Aplicar convenciones de nomenclatura a archivos y jerarquías a carpetas.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.15', 'Manage, save and delete files on digital devices, external storage, and cloud services.', 'Gestionar, guardar y eliminar archivos en dispositivos, almacenamiento externo y nube.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.16', 'Manage information in one’s digital accounts, such as email.', 'Gestionar información en cuentas digitales, como el correo electrónico.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.17', 'Use data collection tools for simple processing of data and information such as quizzes, polls or surveys.', 'Usar herramientas de recolección para procesamiento simple de datos como encuestas.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.3.18', 'Organise and format data in a structured digital environment, such as in spreadsheets.', 'Organizar y formatear datos en entornos estructurados.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.19', 'Apply basic formulas to data in a structured digital environment, such as in spreadsheets.', 'Aplicar fórmulas básicas a datos en entornos estructurados.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.20', 'Prioritise ethical and transparent management and processing of data and information.', 'Priorizar la gestión ética y transparente de datos e información.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.3.21', 'Take account of potential sources of error or inaccuracy in management and processing of data.', 'Tener en cuenta posibles fuentes de error en la gestión de datos.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.3.22', 'Identify possible sources of error or inaccuracy in information or data in digital environments.', 'Identificar posibles fuentes de error en información o datos.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.23', 'Describe the main steps in managing, processing and analysing information and data.', 'Describir los pasos principales en la gestión y análisis de datos.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.24', 'Describe features of open data (examples, applications, benefits and limitations).', 'Describir características de los datos abiertos.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.25', 'Describe features of big data (examples, applications, benefits and limitations).', 'Describir características del big data.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.26', 'Apply a variety of functions to transfer and manage data and information in digital environments.', 'Aplicar una variedad de funciones para transferir y gestionar datos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.27', 'Use a range of digital tools and methods to collect and process a variety of data and information.', 'Usar una gama de herramientas para recolectar y procesar datos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.28', 'Apply appropriate analysis of information and data to contribute to complex decision-making.', 'Aplicar análisis apropiado de datos para contribuir a la toma de decisiones.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.29', 'Assist others with data and information management, processing and analysis.', 'Ayudar a otros con la gestión y análisis de datos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.30', 'Acknowledge the importance of structuring and documenting data and information for the benefit of others.', 'Reconocer la importancia de estructurar y documentar datos para otros.', 'Highly advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO1.3.31', 'Stay informed about digital technological developments in data and information management and analysis.', 'Mantenerse informado sobre desarrollos en gestión y análisis de datos.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.3.32', 'Develop and implement strategies for complex or specialised data and information management.', 'Desarrollar estrategias para gestión de datos complejos.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.33', 'Use a variety of tools and methods such as big data techniques or simulations to process, manage or analyse complex data.', 'Usar herramientas como big data o simulaciones para analizar datos complejos.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.34', 'Lead or contribute to initiatives that support others in advanced information and data management.', 'Liderar iniciativas que apoyen a otros en gestión avanzada de datos.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.35', 'Contribute to improvements in or new solutions for complex data management, processing or analysis.', 'Contribuir a mejoras o nuevas soluciones para gestión de datos complejos.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 2.1 Interacting
  ['LO2.1.01', 'Acknowledge the importance of taking others’ preferences into account in digital communication.', 'Reconocer la importancia de considerar las preferencias de otros en la comunicación digital.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.1.02', 'Distinguish between synchronous and asynchronous forms of digital communication.', 'Distinguir entre comunicación síncrona y asíncrona.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.1.03', 'Identify differences between digital and non-digital interactions.', 'Identificar diferencias entre interacciones digitales y no digitales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.04', 'Distinguish between physical and virtual realities.', 'Distinguir entre realidades físicas y virtuales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.05', 'Identify basic features and functions of digital communication tools.', 'Identificar características básicas de herramientas de comunicación digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.06', 'Identify basic features of virtual assistants (chatbots) and AI systems used in communication contexts.', 'Identificar características básicas de asistentes virtuales y sistemas de IA en comunicación.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO2.1.07', 'Recognise key differences between human-to-machine and human-to-human interactions.', 'Reconocer diferencias clave entre interacciones humano-máquina y humano-humano.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.08', 'Recognise in general terms what a robot is, including their non-human nature.', 'Reconocer en términos generales qué es un robot.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.1.09', 'Recognise that humans interact with robots in order to carry out tasks.', 'Reconocer que los humanos interactúan con robots para realizar tareas.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.1.10', 'Use basic features of digital communication tools to interact with individuals and groups.', 'Usar características básicas de herramientas de comunicación para interactuar.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO2.1.11', 'Acknowledge the importance of tailoring one’s digital communication to specific contexts.', 'Reconocer la importancia de adaptar la comunicación digital a contextos específicos.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.1.12', 'Recognise that there is a reality-virtuality continuum in digital environments.', 'Reconocer el continuo realidad-virtualidad en entornos digitales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.13', 'Describe main features and functions of a range of digital communication tools.', 'Describir características principales de una gama de herramientas de comunicación.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.14', 'Describe benefits and limitations of virtual assistants (chatbots) and AI systems in digital communication contexts.', 'Describir beneficios y limitaciones de asistentes virtuales y sistemas de IA.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO2.1.15', 'Identify contexts in which asynchronous or synchronous digital communication may work best.', 'Identificar contextos donde la comunicación síncrona o asíncrona funciona mejor.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.1.16', 'Identify key features of robots (such as sensors, software, motion controls and human interface).', 'Identificar características clave de los robots.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.17', 'Define examples of how humans can interact with robots.', 'Definir ejemplos de cómo los humanos pueden interactuar con robots.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.18', 'Recognise that robots can operate with varying degrees of autonomy.', 'Reconocer que los robots pueden operar con distintos grados de autonomía.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.19', 'Select suitable communication means and tools, considering digital and non-digital options.', 'Seleccionar medios de comunicación adecuados considerando opciones digitales y no digitales.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.1.20', 'Develop and refine questions, commands or statements (prompts) for virtual assistants and AI systems.', 'Desarrollar y refinar prompts para asistentes virtuales y sistemas de IA.', 'Intermediate', 'Skill', 'AI-Explicit'],
  ['LO2.1.21', 'Use multiple features of a variety of digital communication tools to interact with and manage individuals.', 'Usar múltiples características de herramientas de comunicación.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.1.22', 'Continually adapt communication in digital environments in response to a variety of contexts.', 'Adaptar continuamente la comunicación en entornos digitales a diversos contextos.', 'Advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.1.23', 'Combine digital communication tools and methods for complex communication tasks.', 'Combinar herramientas y métodos para tareas de comunicación complejas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.24', 'Systematically develop and progressively refine questions, commands or statements (prompts) for AI systems.', 'Desarrollar sistemáticamente prompts para sistemas de IA en interacciones complejas.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO2.1.25', 'Assess benefits and disadvantages of robotic applications in a specific context.', 'Evaluar beneficios y desventajas de aplicaciones robóticas en contextos específicos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.26', 'Assist others to assess and select suitable digital communication tools for a given purpose.', 'Ayudar a otros a seleccionar herramientas de comunicación adecuadas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.27', 'Organise and/or moderate complex digital events.', 'Organizar y/o moderar eventos digitales complejos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.28', 'Stay informed about developments in digital communication and interaction tools and methods.', 'Mantenerse informado sobre desarrollos en comunicación digital.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.1.29', 'Assess and combine digital communication and interaction tools for highly complex or novel tasks.', 'Evaluar y combinar herramientas de comunicación para tareas complejas o novedosas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.30', 'Provide guidance, support or leadership in the advanced use of digital communication and interaction tools.', 'Proporcionar orientación o liderazgo en el uso avanzado de herramientas de comunicación.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.31', 'Lead or contribute to improvements in or new solutions for digital communication or human-machine interaction.', 'Liderar mejoras o nuevas soluciones para la comunicación digital o interacción humano-máquina.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 2.2 Sharing
  ['LO2.2.01', 'Acknowledge the importance of ethical and responsible sharing of information and content in digital environments.', 'Reconocer la importancia de compartir información de forma ética y responsable.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO2.2.02', 'Recognise benefits and risks of sharing information and content in digital environments.', 'Reconocer beneficios y riesgos de compartir información digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.2.03', 'Identify functions and uses of social media, and examples of common social media platforms.', 'Identificar funciones y usos de las redes sociales comunes.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.2.04', 'Recognise that individuals can choose how and what they would like to share through digital technologies.', 'Reconocer que las personas pueden elegir qué compartir y cómo.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.2.05', 'Recognise that information and content - not all of which is true or accurate - can be shared in a variety of ways.', 'Reconocer que la información, cierta o no, puede compartirse de diversas formas.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO2.2.06', 'Identify purpose and target audience of information and content to be shared in digital environments.', 'Identificar el propósito y la audiencia de la información a compartir.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.2.07', 'Use simple processes to share information and content in digital environments appropriately.', 'Usar procesos simples para compartir información adecuadamente.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.2.08', 'Acknowledge the importance of assessing the value and accuracy of information and content prior to sharing.', 'Reconocer la importancia de evaluar el valor y la precisión antes de compartir.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.2.09', 'Define responsibilities associated with sharing information and content in digital environments.', 'Definir responsabilidades asociadas con compartir información digital.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.2.10', 'Describe effective and ethical ways to share information and content in a variety of digital environments.', 'Describir formas efectivas y éticas de compartir información.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.2.11', 'Assess potential risks, benefits and ethical considerations of sharing information and content.', 'Evaluar riesgos, beneficios y consideraciones éticas al compartir.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.2.12', 'Effectively and ethically share information and content in a variety of digital environments.', 'Compartir información de manera efectiva y ética en diversos entornos.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.2.13', 'Report or flag misinformation and disinformation that has been shared in digital environments.', 'Reportar o marcar desinformación compartida en entornos digitales.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.2.14', 'Acknowledge the value of sharing digital information and content to assist others, such as through OER.', 'Reconocer el valor de compartir información para ayudar a otros (ej. REA).', 'Advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.2.15', 'Effectively and ethically share information and content in digital environments to support goals.', 'Compartir información para apoyar objetivos personales o profesionales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.2.16', 'Advise others on effective and ethical ways to share information and content in digital environments.', 'Aconsejar a otros sobre formas éticas de compartir información.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.2.17', 'Explore new and alternative means for complex sharing information and content in digital environments.', 'Explorar medios nuevos para compartir información compleja.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.2.18', 'Facilitate complex sharing of information and content across a variety of digital technologies.', 'Facilitar el intercambio complejo de información entre tecnologías.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.2.19', 'Contribute to complex or specialised initiatives for sharing information and content.', 'Contribuir a iniciativas complejas para compartir información.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.2.20', 'Lead or contribute to improvements in or new solutions for sharing complex information.', 'Liderar mejoras en soluciones para compartir información compleja.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 2.3 Citizenship
  ['LO2.3.01', 'Acknowledge the potential benefits of digital technologies for one’s own and others empowerment and participation.', 'Reconocer beneficios de tecnologías digitales para el empoderamiento y participación.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.3.02', 'Recognise digital citizenship as the ability to participate actively and responsibly in communities.', 'Reconocer la ciudadanía digital como participación activa y responsable.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.3.03', 'Identify examples of civic participation in digital environments.', 'Identificar ejemplos de participación cívica en entornos digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.3.04', 'Recognise that digital technologies can exclude certain groups or individuals.', 'Reconocer que las tecnologías pueden excluir a ciertos grupos.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.3.05', 'Recognise that there are laws and regulations to protect the rights of users of digital platforms.', 'Reconocer leyes que protegen derechos de usuarios digitales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.3.06', 'Identify main purposes and functions of digital platforms and services.', 'Identificar propósitos principales de plataformas digitales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.3.07', 'Recognise that individuals can play an active role in reviewing or improving online products.', 'Reconocer que las personas pueden mejorar productos online.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.3.08', 'Use digital tools to search for and find communities for civic participation.', 'Usar herramientas para encontrar comunidades de participación cívica.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO2.3.09', 'Use digital platforms and services, seeking assistance as needed.', 'Usar plataformas digitales buscando ayuda si es necesario.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO2.3.10', 'Prioritise the exploration of ways that digital technologies can enhance civic participation.', 'Priorizar la exploración de tecnologías para mejorar la participación cívica.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO2.3.11', 'Acknowledge the importance of identifying excluded or marginalised people in digital environments.', 'Reconocer la importancia de identificar personas excluidas digitalmente.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO2.3.12', 'Participate in discussions on digital citizenship topics.', 'Participar en discusiones sobre ciudadanía digital.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO2.3.13', 'Recognise that digital participation is the active involvement in society through digital technologies.', 'Reconocer la participación digital como involucramiento activo en la sociedad.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.3.14', 'Recognise that civic participation occurs along a continuum.', 'Reconocer que la participación cívica ocurre en un continuo.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.3.15', 'Recognise key freedoms, rights and responsibilities of individuals under digital laws.', 'Reconocer libertades, derechos y responsabilidades digitales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.3.16', 'Define how to exercise key rights in digital environments.', 'Definir cómo ejercer derechos clave en entornos digitales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.3.17', 'Describe the concept of the platform economy, including opportunities and risks.', 'Describir la economía de plataformas, oportunidades y riesgos.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.3.18', 'Describe the concept and functions of civic monitoring.', 'Describir el concepto de monitoreo cívico.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.3.19', 'Describe the concept and functions of e-Government.', 'Describir el concepto de e-Gobierno.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.3.20', 'Describe how digital technologies can influence aspects of democracy.', 'Describir cómo la tecnología influye en la democracia.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.3.21', 'Interact autonomously and effectively with digital platforms and services.', 'Interactuar autónomamente con plataformas digitales.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.3.22', 'Assess opportunities, risks, social and ethical implications of the platform economy.', 'Evaluar implicaciones de la economía de plataformas.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.3.23', 'Prioritise the continual exploration of ways digital technologies support empowerment.', 'Priorizar la exploración de tecnologías para el empoderamiento.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.3.24', 'Participate in discussions on digital technologies’ ethical, political and social implications.', 'Participar en discusiones sobre implicaciones éticas de la tecnología.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.3.25', 'Distinguish between high-risk and prohibited AI systems.', 'Distinguir entre sistemas de IA de alto riesgo y prohibidos.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO2.3.26', 'Describe potential societal, political or economic impacts of prohibited and high-risk AI systems.', 'Describir impactos de sistemas de IA prohibidos o de alto riesgo.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO2.3.27', 'Assess the potential of digital technologies for inclusion, exclusion, and civic intervention.', 'Evaluar el potencial tecnológico para inclusión o exclusión.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.3.28', 'Assess a range of ways in which digital technologies can influence democratic processes.', 'Evaluar cómo la tecnología influye en procesos democráticos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.3.29', 'Assist others to identify opportunities and participate in digital environments.', 'Ayudar a otros a identificar oportunidades de participación digital.', 'Advanced', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.3.30', 'Support others to inform themselves about and exercise their rights under digital legislation.', 'Apoyar a otros para ejercer sus derechos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.3.31', 'Stay informed about individuals’ freedoms, rights and responsibilities.', 'Mantenerse informado sobre derechos y libertades digitales.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.3.32', 'Evaluate multiple impacts of digital technologies on society, political processes or the economy.', 'Evaluar impactos múltiples de la tecnología en la sociedad.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.3.33', 'Assist others to comprehend the main provisions of digital legislation.', 'Ayudar a otros a comprender la legislación digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.3.34', 'Lead or design digital citizenship initiatives.', 'Liderar o diseñar iniciativas de ciudadanía digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 2.4 Collaborating
  ['LO2.4.01', 'Acknowledge the importance of effective communication skills for successful collaboration.', 'Reconocer la importancia de la comunicación para la colaboración.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.4.02', 'Recognise main benefits and limitations of digital collaboration tools.', 'Reconocer beneficios y limitaciones de herramientas de colaboración.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.4.03', 'Recognise the presence of AI systems in digital collaboration tools.', 'Reconocer la presencia de IA en herramientas de colaboración.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO2.4.04', 'Participate in collaborative groups via digital collaboration tools.', 'Participar en grupos colaborativos mediante herramientas digitales.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO2.4.05', 'Take account of different perspectives to help achieve a common goal in digital environments.', 'Tener en cuenta diferentes perspectivas para lograr una meta común.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.4.06', 'Identify main features and functions of a variety of digital collaboration tools.', 'Identificar características de herramientas de colaboración.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.4.07', 'Recognise the functions, benefits and limitations of AI system functionalities in collaboration tools.', 'Reconocer funciones y limitaciones de la IA en colaboración.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO2.4.08', 'Identify examples of ethical, responsible and effective human-AI collaboration.', 'Identificar ejemplos de colaboración humano-IA ética.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO2.4.09', 'Select digital collaboration tools that meet collaboration goals.', 'Seleccionar herramientas que cumplan objetivos de colaboración.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.4.10', 'Create and manage simple collaborative tasks using digital collaboration tools.', 'Crear y gestionar tareas colaborativas simples.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.4.11', 'Contribute effectively to simple collaborative tasks in digital environments.', 'Contribuir eficazmente a tareas colaborativas simples.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.4.12', 'Prioritise a good fit between how digital collaboration tools are used and user preferences.', 'Priorizar el ajuste entre herramientas de colaboración y usuarios.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.4.13', 'Ensure appropriate and ethical use of digital technologies including AI systems for collaborative tasks.', 'Asegurar uso ético de tecnologías e IA en colaboración.', 'Advanced', 'Attitude', 'AI-Explicit'],
  ['LO2.4.14', 'Use and combine a variety of digital collaboration tools that meet the needs of projects.', 'Usar y combinar herramientas de colaboración según necesidades.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.4.15', 'Help others to develop their capabilities to collaborate in digital environments.', 'Ayudar a otros a desarrollar capacidades de colaboración.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.4.16', 'Assess ethical and practical aspects of human-AI collaboration techniques.', 'Evaluar aspectos éticos y prácticos de la colaboración humano-IA.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO2.4.17', 'Lead collaboration in digital environments.', 'Liderar la colaboración en entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.4.18', 'Stay informed about developments in collaborative practices in digital environments.', 'Mantenerse informado sobre prácticas colaborativas.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.4.19', 'Promote and support proportionate, ethical and effective use of digital technologies in collaborations.', 'Promover uso ético de tecnologías en colaboraciones.', 'Highly advanced', 'Attitude', 'AI-Explicit'],
  ['LO2.4.20', 'Design complex or specialised strategies for collaboration in digital environments.', 'Diseñar estrategias complejas para colaboración digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.4.21', 'Assist others to develop capabilities to lead collaboration in digital environments.', 'Ayudar a otros a liderar la colaboración digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.4.22', 'Lead or contribute to improvements in or new solutions for human-AI collaboration.', 'Liderar mejoras en colaboración humano-IA.', 'Highly advanced', 'Skill', 'AI-Explicit'],
  // 2.5 Netiquette
  ['LO2.5.01', 'Acknowledge the importance of giving space to the opinions of others in digital environments.', 'Reconocer la importancia de dar espacio a opiniones ajenas.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.5.02', 'Identify differences in verbal and non-verbal behaviours in digital and non-digital environments.', 'Identificar diferencias en comportamiento verbal y no verbal.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.5.03', 'Recognise that there are cultural and contextual differences in verbal and non-verbal communication.', 'Reconocer diferencias culturales en comunicación digital.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.5.04', 'Recognise that some behaviour in digital environments may not be acceptable to others.', 'Reconocer comportamientos digitales no aceptables.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.5.05', 'Use appropriate tone and visual expression such as emoji in formal and non-formal digital environments.', 'Usar tono y expresión visual apropiados (emojis).', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.5.06', 'Prioritise digital behaviours that support inclusion and a positive digital reputation.', 'Priorizar comportamientos que apoyen la inclusión.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.5.07', 'Identify key rights and responsibilities of children and adults in relation to digital behaviour.', 'Identificar derechos y responsabilidades de comportamiento digital.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.5.08', 'Describe the relationship between digital behaviour and digital reputation.', 'Describir relación entre comportamiento y reputación digital.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.5.09', 'Identify key rights and responsibilities of children and adults in relation to digital behaviour.', 'Identificar derechos clave sobre comportamiento digital.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.5.10', 'Use respectful and inclusive tone and visual expression in digital environments.', 'Usar tono respetuoso e inclusivo.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.5.11', 'Promote and support inclusive and respectful behaviour in digital environments.', 'Promover comportamiento inclusivo y respetuoso.', 'Advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.5.12', 'Distinguish between ethical, legal and illegal behaviours in digital environments.', 'Distinguir entre comportamientos éticos, legales e ilegales.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO2.5.13', 'Identify types of abuse that can occur in digital environments.', 'Identificar tipos de abuso en entornos digitales.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO2.5.14', 'Describe ways in which abuse in digital environments can be reported and tackled.', 'Describir formas de reportar abuso digital.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO2.5.15', 'Respond with effective and respective communication to difficult situations.', 'Responder eficazmente a situaciones difíciles.', 'Advanced', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.5.16', 'Assess ethical and legal/illegal aspects of behaviour in digital environments.', 'Evaluar aspectos éticos y legales del comportamiento.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.5.17', 'Analyse patterns and potential impacts of abuse of specific groups.', 'Analizar patrones de abuso a grupos específicos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.5.18', 'Support others to develop their capacities for inclusive and respectful behaviour.', 'Apoyar a otros a desarrollar comportamiento inclusivo.', 'Advanced', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.5.19', 'Stay informed about developments in policies and legislation relating to behaviour.', 'Mantenerse informado sobre políticas de comportamiento digital.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.5.20', 'Assist others to understand key rights and responsibilities under policies and legislation.', 'Ayudar a otros a entender derechos y responsabilidades.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.5.21', 'Lead or contribute to digital behaviour policies or initiatives.', 'Liderar iniciativas de comportamiento digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 2.6 Digital Identity
  ['LO2.6.01', 'Acknowledge the benefits of implementing measures to help manage one’s digital identity.', 'Reconocer beneficios de gestionar la identidad digital.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.6.02', 'Recognise features of physical and digital identities.', 'Reconocer características de identidades físicas y digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.6.03', 'Identify aspects of physical identity that can be linked to digital identity.', 'Identificar vínculos entre identidad física y digital.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.6.04', 'Recognise digital identity as a method to authenticate an individual.', 'Reconocer la identidad digital como método de autenticación.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.05', 'Identify common forms and uses of digital identity.', 'Identificar formas comunes de identidad digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.06', 'Recognise that information on the internet can persist over time.', 'Reconocer que la información en internet persiste.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.07', 'Recognise the concept and components of a digital footprint.', 'Reconocer el concepto de huella digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.08', 'Recognise that digital identity protection laws protect individuals’ data.', 'Reconocer leyes de protección de identidad digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.09', 'Identify simple measures such as limiting tracking to manage digital identity.', 'Identificar medidas simples para gestionar la identidad digital.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.6.10', 'Implement simple measures such as limiting tracking to manage digital identity.', 'Implementar medidas simples para gestionar la identidad digital.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.6.11', 'Acknowledge the importance of one’s own role and rights in the management of digital identity.', 'Reconocer el rol propio en la gestión de identidad digital.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO2.6.12', 'Describe the relationships between digital footprint, digital reputation and digital identity.', 'Describir relaciones entre huella, reputación e identidad digital.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.13', 'Identify examples of actively and passively generated information in relation to digital identity.', 'Identificar información generada activa y pasivamente.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.14', 'Describe ways in which the scope of one’s digital identity can be analysed.', 'Describir formas de analizar la identidad digital propia.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.15', 'Identify features and functions used to manage digital identity.', 'Identificar funciones para gestionar la identidad digital.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.16', 'Use information on the scope of one’s own digital identity to guide actions.', 'Usar información de identidad propia para guiar acciones.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.6.17', 'Adjust settings on devices and apps to help manage one’s digital identity.', 'Ajustar configuraciones para gestionar la identidad digital.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.6.18', 'Curate and manage one or more digital identities using a variety of features.', 'Gestionar identidades digitales usando varias funciones.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.6.19', 'Prioritise the assessment of one’s digital identity on an ongoing basis.', 'Priorizar la evaluación continua de la identidad digital.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.6.20', 'Recognise the relationship between digital technological developments and digital identity management.', 'Reconocer relación entre tecnología y gestión de identidad.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.21', 'Describe ways to exercise rights on issues relating to digital identity.', 'Describir formas de ejercer derechos de identidad digital.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.22', 'Describe ways in which AI systems are used in digital identity management.', 'Describir uso de IA en gestión de identidad digital.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO2.6.23', 'Implement a variety of processes to manage digital identity.', 'Implementar procesos para gestionar la identidad digital.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.6.24', 'Assess benefits, social and ethical implications of the use of AI systems in digital identity management.', 'Evaluar implicaciones de IA en gestión de identidad.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO2.6.25', 'Curate and manage digital identities for personal and professional purposes.', 'Gestionar identidades digitales personales y profesionales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.6.26', 'Assist others with basic digital identity management.', 'Ayudar a otros con gestión básica de identidad digital.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.6.27', 'Stay informed about developments in digital technologies in relation digital identity.', 'Mantenerse informado sobre tecnologías de identidad digital.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.6.28', 'Support others to deepen their capabilities in the management of digital identities.', 'Apoyar a otros a gestionar sus identidades digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.6.29', 'Advise others on complex aspects of digital identity management and rights.', 'Aconsejar a otros sobre aspectos complejos de identidad digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 3.1 Developing Content
  ['LO3.1.01', 'Acknowledge the benefits of exploring a variety of digital content creation tools.', 'Reconocer beneficios de explorar herramientas de creación de contenidos.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO3.1.02', 'Acknowledge the importance of digital content that is accessible and inclusive.', 'Reconocer la importancia del contenido accesible e inclusivo.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO3.1.03', 'Identify common types of digital content and their associated file formats.', 'Identificar tipos comunes de contenido y formatos.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.1.04', 'Identify common operational functions across digital content creation tools.', 'Identificar funciones comunes en herramientas de creación.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO3.1.05', 'Distinguish between accessible digital content and inclusive digital content.', 'Distinguir entre contenido accesible e inclusivo.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.1.06', 'Recognise that while AI systems can generate content, humans are essential to ensure ethical outputs.', 'Reconocer que los humanos son esenciales para asegurar contenido ético generado por IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.1.07', 'Recognise that generative AI is a particular type of AI used to support content creation.', 'Reconocer la IA generativa como herramienta de creación.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.1.08', 'Use basic features of digital content creation tools to create and edit digital content.', 'Usar funciones básicas para crear y editar contenido.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO3.1.09', 'Purposefully explore features and functions of digital content creation tools.', 'Explorar intencionadamente funciones de herramientas de creación.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.1.10', 'Describe benefits, limitations and ethical considerations in the use of AI systems for content creation.', 'Describir beneficios y ética del uso de IA para crear contenido.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.1.11', 'Define strategies such as templates that enable efficient digital content creation.', 'Definir estrategias como plantillas para creación eficiente.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.1.12', 'Use a variety of digital content creation tools to create and edit digital content.', 'Usar variedad de herramientas para crear contenido.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.1.13', 'Assess inclusivity and/or accessibility needs of the audience.', 'Evaluar necesidades de inclusión y accesibilidad de la audiencia.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO3.1.14', 'Edit digital content to enhance accessibility and meet audience needs.', 'Editar contenido para mejorar accesibilidad.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.1.15', 'Apply strategies such as templates that enable efficient digital content creation.', 'Aplicar estrategias para creación eficiente de contenido.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.1.16', 'Interact with AI systems purposefully to support digital content creation.', 'Interactuar con sistemas de IA para apoyar la creación de contenido.', 'Intermediate', 'Skill', 'AI-Explicit'],
  ['LO3.1.17', 'Acknowledge the importance of assessing capabilities and constraints of digital content creation tools.', 'Reconocer importancia de evaluar capacidades de herramientas de creación.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.1.18', 'Select and combine digital content creation tools to meet complex content creation tasks.', 'Seleccionar y combinar herramientas para tareas complejas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.19', 'Create and edit a variety of complex or specialised digital content.', 'Crear y editar contenido complejo o especializado.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.20', 'Support others to develop their capabilities in digital content creation.', 'Apoyar a otros a desarrollar capacidades de creación.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.21', 'Promote and support accessibility and inclusivity in digital content creation initiatives.', 'Promover accesibilidad e inclusión en iniciativas de creación.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.1.22', 'Promote and support the selective and ethical use of AI systems in content creation.', 'Promover uso ético de IA en creación de contenidos.', 'Highly advanced', 'Attitude', 'AI-Explicit'],
  ['LO3.1.23', 'Help others to develop advanced digital content creation capabilities.', 'Ayudar a otros a desarrollar capacidades avanzadas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.24', 'Lead or contribute to complex or specialised digital content creation initiatives.', 'Liderar iniciativas complejas de creación de contenido.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.25', 'Lead or contribute to improvements in or new solutions for complex or specialised digital content.', 'Liderar mejoras en contenido digital complejo.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 3.2 Integrating Content
  ['LO3.2.01', 'Acknowledge the importance of ethical and transparent practices when re-using content.', 'Reconocer importancia de prácticas éticas al reutilizar contenido.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO3.2.02', 'Acknowledge the benefits of exploring digital content integration tools.', 'Reconocer beneficios de explorar herramientas de integración.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO3.2.03', 'Recognise the concept of acknowledgement in re-using existing digital content.', 'Reconocer el concepto de reconocimiento al reutilizar contenido.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO3.2.04', 'Recognise the concept of transparent use of AI systems in digital content integration.', 'Reconocer uso transparente de IA en integración de contenido.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.2.05', 'Distinguish between editable and uneditable digital content.', 'Distinguir entre contenido editable y no editable.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.2.06', 'Identify main functions of content creation tools for editing and integrating digital content.', 'Identificar funciones para editar e integrar contenido.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO3.2.07', 'Make changes to existing digital content using basic editing functions.', 'Realizar cambios a contenido existente usando funciones básicas.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO3.2.08', 'Purposefully explore a variety of ways to integrate and re-elaborate digital content.', 'Explorar formas de integrar y reelaborar contenido.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.2.09', 'Identify structure, format and audience requirements of a digital content integration task.', 'Identificar requisitos de estructura y formato para integración.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.2.10', 'Describe ways in which to acknowledge digital content that is being re-used.', 'Describir formas de reconocer contenido reutilizado.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.2.11', 'Describe ethical and transparent practices in the use of AI systems in digital content integration.', 'Describir prácticas éticas de IA en integración de contenido.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.2.12', 'Adjust or integrate digital content to meet format, structure and audience requirements.', 'Ajustar contenido para cumplir requisitos.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.2.13', 'Modify or transform digital representations to convey meaning.', 'Modificar representaciones digitales para transmitir significado.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.2.14', 'Use digital technologies in a selective way to make enhancements to existing content.', 'Usar tecnología para mejorar contenido existente.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.2.15', 'Prioritise transparent and ethical practices in digital content integration.', 'Priorizar prácticas transparentes en integración de contenido.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.2.16', 'Describe a range of methods for complex digital content integration.', 'Describir métodos para integración compleja de contenido.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO3.2.17', 'Describe appropriate and inappropriate uses of AI systems to enhance digital content.', 'Describir usos apropiados de IA para mejorar contenido.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.2.18', 'Adjust or integrate a variety of digital content to meet complex requirements.', 'Ajustar contenido para cumplir requisitos complejos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.2.19', 'Apply digital technologies in a selective way to apply complex integration.', 'Aplicar tecnologías para integración compleja.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.2.20', 'Support others to develop their capabilities in digital content integration.', 'Apoyar a otros en integración de contenido.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.2.21', 'Promote and support ethical and transparent practices in digital content integration.', 'Promover prácticas éticas en integración de contenido.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.2.22', 'Stay informed about digital technological developments in digital content integration.', 'Mantenerse informado sobre tecnologías de integración.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.2.23', 'Evaluate and apply advanced design and visualisation techniques.', 'Evaluar y aplicar técnicas avanzadas de diseño.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO3.2.24', 'Assist others with complex digital content integration tasks.', 'Ayudar a otros con tareas complejas de integración.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO3.2.25', 'Lead or contribute to complex digital content integration initiatives.', 'Liderar iniciativas de integración compleja.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO3.2.26', 'Lead or contribute to improvements in solutions for complex content integration.', 'Liderar mejoras en soluciones de integración.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 3.3 Copyright and Licenses
  ['LO3.3.01', 'Recognise that the internet is not a fully free space.', 'Reconocer que internet no es un espacio totalmente libre.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.02', 'Recognise, in general terms, the concepts of copyright and licence.', 'Reconocer conceptos de derechos de autor y licencia.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.3.03', 'Recognise that an individual’s original digital content is automatically copyrighted.', 'Reconocer que el contenido original tiene copyright automático.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.3.04', 'Recognise that different kinds of copyright apply to digital content, including AI-generated.', 'Reconocer tipos de copyright, incluido para contenido IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.3.05', 'Recognise that AI-generated content should be labelled as such.', 'Reconocer que el contenido IA debe ser etiquetado.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.3.06', 'Identify digital content that can be used free of charge.', 'Identificar contenido de uso gratuito.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.3.07', 'Use and share digital content in compliance with legal and ethical guidelines.', 'Usar y compartir contenido cumpliendo guías legales.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO3.3.08', 'Prioritise a cautious approach to digital content (check before using).', 'Priorizar enfoque cauteloso al usar contenido.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.3.09', 'Acknowledge the complex nature of copyright and licensing.', 'Reconocer la naturaleza compleja del copyright.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.3.10', 'Define, with examples, the concept of intellectual property.', 'Definir el concepto de propiedad intelectual.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.11', 'Distinguish between copyright, trademark, design and patent.', 'Distinguir entre copyright, marca, diseño y patente.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.12', 'Identify common types of licences including Creative Commons.', 'Identificar licencias comunes como Creative Commons.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.3.13', 'Identify examples of piracy and plagiarism.', 'Identificar ejemplos de piratería y plagio.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.14', 'Identify examples of where copyright applies and does not apply.', 'Identificar dónde aplica y no aplica el copyright.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.15', 'Describe consequences of intellectual property violations.', 'Describir consecuencias de violaciones de propiedad intelectual.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.16', 'Identify examples of challenges relating to copyright in AI training.', 'Identificar desafíos de copyright en entrenamiento de IA.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.3.17', 'Apply legal and ethical guidelines appropriately when using content.', 'Aplicar guías legales y éticas al usar contenido.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.3.18', 'Prioritise a consideration of ethical and legal aspects when using content.', 'Priorizar aspectos éticos y legales al usar contenido.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.3.19', 'Describe key features of current legislation in relation to copyright.', 'Describir legislación actual sobre copyright.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.20', 'Describe examples of where copyright applies and does not apply.', 'Describir ejemplos de aplicación de copyright.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.21', 'Identify differences in how copyright applies to training data for AI systems.', 'Identificar copyright en datos de entrenamiento IA.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.3.22', 'Assess and correctly apply legal and ethical guidelines for using content.', 'Evaluar y aplicar guías legales para usar contenido.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.3.23', 'Assist others to use and share digital content in compliance with guidelines.', 'Ayudar a otros a usar contenido legalmente.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.3.24', 'Stay informed about developments in copyright regulations.', 'Mantenerse informado sobre regulaciones de copyright.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.3.25', 'Promote and support awareness of copyright practices.', 'Promover conciencia sobre prácticas de copyright.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.3.26', 'Apply advanced knowledge of intellectual property rights to inform decision-making.', 'Aplicar conocimiento avanzado de propiedad intelectual.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO3.3.27', 'Lead or contribute to policies or guidelines on copyright.', 'Liderar políticas sobre copyright.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 3.4 Programming
  ['LO3.4.01', 'Acknowledge the essential role of humans in determining how computer programs and AI systems are used.', 'Reconocer el rol humano esencial en el uso de programas e IA.', 'Basic', 'Attitude', 'AI-Explicit'],
  ['LO3.4.02', 'Identify common uses of computer programs and applications.', 'Identificar usos comunes de programas informáticos.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO3.4.03', 'Recognise computational thinking as a human activity.', 'Reconocer el pensamiento computacional como actividad humana.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.04', 'Recognise what AI is in general terms.', 'Reconocer qué es la IA en términos generales.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.05', 'Identify, in a general way, what is and what is not an AI system.', 'Identificar qué es y qué no es un sistema de IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.06', 'Identify common examples of applications of AI systems.', 'Identificar ejemplos comunes de aplicaciones de IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.07', 'Give basic instructions to a computer to perform simple tasks.', 'Dar instrucciones básicas a un ordenador.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO3.4.08', 'Represent simple sequences symbolically.', 'Representar secuencias simples simbólicamente.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO3.4.09', 'Acknowledge the relevance of computational thinking in everyday contexts.', 'Reconocer relevancia del pensamiento computacional diario.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.4.10', 'Acknowledge the importance of ethics and accessibility in programming contexts.', 'Reconocer importancia de ética y accesibilidad en programación.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.4.11', 'Distinguish between a computational model of reality and reality itself.', 'Distinguir entre modelo computacional y realidad.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.4.12', 'Recognise, with examples, the concept of algorithm.', 'Reconocer el concepto de algoritmo.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.13', 'Define differences between a computable and non-computable problem.', 'Definir diferencias entre problemas computables y no computables.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.14', 'Define general steps in computational thinking.', 'Definir pasos generales del pensamiento computacional.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.15', 'Recognise that there are a variety of programming languages.', 'Reconocer variedad de lenguajes de programación.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.16', 'Define foundational programming concepts.', 'Definir conceptos fundamentales de programación.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.17', 'Recognise the role of programming in robotics.', 'Reconocer el rol de la programación en robótica.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.18', 'Recognise that machine learning is a branch of AI.', 'Reconocer que el aprendizaje automático es rama de la IA.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.19', 'Recognise steps to develop, validate and deploy a computer program or AI system.', 'Reconocer pasos para desarrollar programas o IA.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.20', 'Describe examples of machine learning applications.', 'Describir ejemplos de aplicaciones de aprendizaje automático.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.21', 'Describe examples of AI system applications from a range of sectors.', 'Describir aplicaciones de IA en varios sectores.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.22', 'Translate basic information into logical operations.', 'Traducir información básica a operaciones lógicas.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.4.23', 'Develop basic programs with control structures.', 'Desarrollar programas básicos con estructuras de control.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.4.24', 'Create visual representations such as flow diagrams.', 'Crear diagramas de flujo.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.4.25', 'Acknowledge importance of human oversight in AI systems.', 'Reconocer importancia de supervisión humana en IA.', 'Advanced', 'Attitude', 'AI-Explicit'],
  ['LO3.4.26', 'Define concepts of human-centric approaches in programming.', 'Definir enfoques centrados en el humano en programación.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.27', 'Describe steps in developing, validating and deploying a program or AI system.', 'Describir pasos de desarrollo de programas o IA.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.28', 'Distinguish between main types of machine learning.', 'Distinguir tipos de aprendizaje automático.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.29', 'Identify main features of commonly-used machine learning algorithms.', 'Identificar características de algoritmos de ML.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.30', 'Describe the role of user experience (UX) in programming.', 'Describir el rol de UX en programación.', 'Advanced', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.31', 'Describe examples of computational thinking in robotics.', 'Describir ejemplos de pensamiento computacional en robótica.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO3.4.32', 'Identify routine tasks which could be automated.', 'Identificar tareas rutinarias automatizables.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.33', 'Assess ethical and practical aspects of development of AI systems.', 'Evaluar aspectos éticos del desarrollo de IA.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO3.4.34', 'Apply computational thinking to automate routine tasks.', 'Aplicar pensamiento computacional para automatizar tareas.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO3.4.35', 'Apply programming tools to complex tasks.', 'Aplicar herramientas de programación a tareas complejas.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO3.4.36', 'Promote and support ethical programming practices.', 'Promover prácticas éticas de programación.', 'Highly advanced', 'Attitude', 'AI-Explicit'],
  ['LO3.4.37', 'Stay informed about developments in programming and AI.', 'Mantenerse informado sobre programación e IA.', 'Highly advanced', 'Attitude', 'AI-Explicit'],
  ['LO3.4.38', 'Lead or contribute to complex projects on programming or AI.', 'Liderar proyectos complejos de programación o IA.', 'Highly advanced', 'Skill', 'AI-Explicit'],
  ['LO3.4.39', 'Assist others to develop basic programming capabilities.', 'Ayudar a otros a desarrollar capacidades de programación.', 'Highly advanced', 'Skill', 'AI-Explicit'],
  // 4.1 Safety
  ['LO4.1.01', 'Acknowledge the importance of one’s individual role in protecting digital devices and their contents.', 'Reconocer la importancia del rol individual en la protección de dispositivos.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.1.02', 'Recognise the concepts of cybersecurity, cyber threat and cyberattack.', 'Reconocer conceptos de ciberseguridad, ciberamenaza y ciberataque.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.1.03', 'Recognise that individuals’ actions and cybersecurity tools work together to help keep devices secure.', 'Reconocer que las acciones individuales y herramientas trabajan juntas por la seguridad.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.1.04', 'Recognise that there is cybersecurity legislation that helps to ensure the security of products and services.', 'Reconocer que existe legislación de ciberseguridad.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.1.05', 'Identify basic device protection measures and practices, such as antivirus software, screen locking, passwords.', 'Identificar medidas básicas de protección como antivirus y contraseñas.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.1.06', 'Apply basic device protection measures and practices, such as antivirus software, screen locking, passwords.', 'Aplicar medidas básicas de protección de dispositivos.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.1.07', 'Acknowledge the importance of remaining vigilant to and up-to-date with cybersecurity practices.', 'Reconocer la importancia de mantenerse vigilante y actualizado en ciberseguridad.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO4.1.08', 'Describe main features of malware.', 'Describir características principales del malware.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.1.09', 'Recognise that AI systems can be used for both cyberattacks and cybersecurity.', 'Reconocer que la IA se puede usar tanto para ciberataques como para ciberseguridad.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO4.1.10', 'Apply a variety of malware prevention techniques and practices to protect devices and their contents.', 'Aplicar variedad de técnicas de prevención de malware.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO4.1.11', 'Prioritise regular checking and updating of cybersecurity measures that are in place on one’s devices.', 'Priorizar la revisión y actualización regular de medidas de ciberseguridad.', 'Advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.1.12', 'Describe key rights of individuals under current cybersecurity legislation.', 'Describir derechos clave bajo la legislación de ciberseguridad actual.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO4.1.13', 'Identify examples of how recent and emerging technologies such as AI systems are used in cyberattacks and cybersecurity.', 'Identificar ejemplos de uso de IA en ciberataques y ciberseguridad.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO4.1.14', 'Update cybersecurity measures to protect devices and their contents in response to evolving digital threats.', 'Actualizar medidas de ciberseguridad en respuesta a amenazas evolutivas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.1.15', 'Assist others in implementing basic device protection measures.', 'Ayudar a otros a implementar medidas básicas de protección.', 'Advanced', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.1.16', 'Stay informed about digital technological and legislative developments in relation to cybersecurity.', 'Mantenerse informado sobre desarrollos tecnológicos y legislativos en ciberseguridad.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.1.17', 'Assess rights of individuals under relevant provisions of current cybersecurity legislation.', 'Evaluar derechos individuales bajo la legislación de ciberseguridad.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO4.1.18', 'Lead or contribute to citizen-focused cybersecurity initiatives.', 'Liderar iniciativas de ciberseguridad enfocadas al ciudadano.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO4.1.19', 'Support others to build their capabilities in protecting their devices and their contents against digital threats.', 'Apoyar a otros a construir capacidades de protección contra amenazas digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 4.2 Personal Data
  ['LO4.2.01', 'Acknowledge the importance of a cautious approach to the sharing of personal data.', 'Reconocer importancia de cautela al compartir datos personales.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.2.02', 'Recognise that personal data is collected through a large variety of digital sources.', 'Reconocer que los datos personales se recolectan de varias fuentes.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.2.03', 'Identify risks of sharing personal data in digital environments.', 'Identificar riesgos de compartir datos personales.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO4.2.04', 'Recognise that individuals have a right to privacy.', 'Reconocer que los individuos tienen derecho a la privacidad.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.2.05', 'Recognise that manipulative methods can be used to deceive individuals.', 'Reconocer métodos manipulativos para engañar a personas.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.2.06', 'Recognise signs of identity theft.', 'Reconocer signos de robo de identidad.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.2.07', 'Recognise that users can request to block personal information shared inappropriately.', 'Reconocer que se puede solicitar bloqueo de información personal.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.2.08', 'Implement basic security measures for online payments.', 'Implementar medidas de seguridad para pagos online.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.2.09', 'Respond appropriately to signs of identity theft.', 'Responder apropiadamente a signos de robo de identidad.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.2.10', 'Block or flag personal information that has been inappropriately shared online.', 'Bloquear o marcar información compartida inapropiadamente.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.2.11', 'Acknowledge the importance of careful handling of personal data of oneself and others.', 'Reconocer importancia de manejo cuidadoso de datos personales.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.2.12', 'Recognise key concepts of data protection and privacy legislation.', 'Reconocer conceptos clave de protección de datos.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.2.13', 'Identify the purpose of privacy statements.', 'Identificar el propósito de declaraciones de privacidad.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.2.14', 'Define main privacy statement concepts.', 'Definir conceptos de declaraciones de privacidad.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.2.15', 'Describe techniques related to social engineering.', 'Describir técnicas de ingeniería social.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.2.16', 'Define personal data breach under current legislation.', 'Definir brecha de datos personales.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.2.17', 'Recognise that regulation of personal data ownership in AI systems is complex.', 'Reconocer complejidad de propiedad de datos en IA.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO4.2.18', 'Describe privacy implications of content shared online.', 'Describir implicaciones de privacidad de contenido compartido.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO4.2.19', 'Define main features and functions of privacy tools.', 'Definir funciones de herramientas de privacidad.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.2.20', 'Manage personal data and privacy across a variety of digital environments.', 'Gestionar datos personales y privacidad.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO4.2.21', 'Continually explore data ownership and privacy issues.', 'Explorar continuamente temas de propiedad y privacidad.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.2.22', 'Support others to understand their rights under data protection.', 'Apoyar a otros a entender sus derechos de protección de datos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.2.23', 'Assist others to implement basic strategies to protect personal data.', 'Ayudar a otros a proteger datos personales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.2.24', 'Stay informed about developments in personal data legislation.', 'Mantenerse informado sobre legislación de datos personales.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.2.25', 'Advise on policy or regulatory aspects of data protection.', 'Aconsejar sobre políticas de protección de datos.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO4.2.26', 'Lead or contribute to the design of personal data protection strategies.', 'Liderar estrategias de protección de datos.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 4.3 Health and Well-being
  ['LO4.3.01', 'Acknowledge the benefits of balancing online and offline activities.', 'Reconocer beneficios de equilibrar actividades online y offline.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.3.02', 'Acknowledge the importance of daily routines that minimise digital stress.', 'Reconocer importancia de rutinas para minimizar estrés digital.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.3.03', 'Identify main risks and benefits to wellbeing in digital environments.', 'Identificar riesgos y beneficios para el bienestar digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.04', 'Recognise that there is a variety of information to support wellbeing.', 'Reconocer información que apoya el bienestar.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.05', 'Recognise risks and benefits to one\'s own wellbeing.', 'Reconocer riesgos y beneficios para el bienestar propio.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.06', 'Identify features of platforms designed to capture attention.', 'Identificar características diseñadas para captar atención.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.07', 'Identify limitations and risks of using virtual assistants to support wellbeing.', 'Identificar riesgos de asistentes virtuales para el bienestar.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO4.3.08', 'Identify strategies to support wellbeing in digital environments.', 'Identificar estrategias para apoyar el bienestar.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.3.09', 'Recognise signs and potential effects of problematic usage.', 'Reconocer signos de uso problemático.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.3.10', 'Recognise that there are laws to protect wellbeing.', 'Reconocer leyes para proteger el bienestar.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.11', 'Make a basic assessment of one\'s digital habits.', 'Evaluar hábitos digitales propios.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.3.12', 'Apply personalised strategies to support wellbeing.', 'Aplicar estrategias personalizadas para el bienestar.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.3.13', 'Acknowledge the importance of right to disconnect.', 'Reconocer importancia del derecho a desconectar.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.3.14', 'Acknowledge benefits of analysing digital usage patterns.', 'Reconocer beneficios de analizar patrones de uso.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.3.15', 'Identify reliable sources of information that can support wellbeing.', 'Identificar fuentes confiables para apoyar el bienestar.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.16', 'Describe examples of harmful content and behaviour.', 'Describir ejemplos de contenido dañino.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.17', 'Describe ways in which applications augment bias.', 'Describir cómo las aplicaciones aumentan el sesgo.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.18', 'Describe strategies to protect against harmful behaviour.', 'Describir estrategias de protección contra comportamiento dañino.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.19', 'Identify possible ways to flag or intervene if harmful behaviour is encountered.', 'Identificar formas de intervenir ante comportamiento dañino.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.20', 'Describe impacts of harmful behaviour and deceptive design.', 'Describir impactos de comportamiento dañino y diseño engañoso.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.21', 'Analyse and adapt one\'s own digital usage patterns.', 'Analizar y adaptar patrones de uso propios.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.3.22', 'Implement strategies to protect oneself against harmful behaviour.', 'Implementar estrategias de protección personal.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.3.23', 'Adapt to changing digital technological developments to support wellbeing.', 'Adaptarse a cambios tecnológicos para apoyar el bienestar.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.3.24', 'Continually scrutinise the role of digital technologies in augmenting bias.', 'Escrutar rol de tecnología en aumentar sesgos.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.3.25', 'Assist others to review and adapt their usage of digital technologies.', 'Ayudar a otros a revisar su uso de tecnología.', 'Advanced', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.3.26', 'Flag or intervene effectively in instances of harmful behaviour.', 'Intervenir eficazmente ante comportamiento dañino.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.3.27', 'Help others to build capacity to counteract role of technologies in bias.', 'Ayudar a otros a contrarrestar sesgos tecnológicos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.3.28', 'Assist others to understand their rights in relation to wellbeing.', 'Ayudar a otros a entender derechos de bienestar.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.3.29', 'Assist others to develop awareness of harmful behaviour.', 'Ayudar a otros a concienciarse sobre comportamiento dañino.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.3.30', 'Promote actions that support wellbeing and inclusion.', 'Promover acciones de bienestar e inclusión.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.3.31', 'Assess and evaluate evidence on wellbeing to guide decision making.', 'Evaluar evidencia sobre bienestar para tomar decisiones.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO4.3.32', 'Lead or contribute to initiatives that support wellbeing.', 'Liderar iniciativas de bienestar.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO4.3.33', 'Contribute to legal and regulatory decision-making in relation to wellbeing.', 'Contribuir a decisiones legales sobre bienestar.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 4.4 Environment
  ['LO4.4.01', 'Acknowledge the role that individuals can play to reduce environmental impact.', 'Reconocer el rol individual en reducir impacto ambiental.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.4.02', 'Recognise that some digital technologies have large impacts on the environment.', 'Reconocer alto impacto ambiental de algunas tecnologías.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO4.4.03', 'Recognise that environmental impacts are not immediately apparent.', 'Reconocer que impactos ambientales no son aparentes.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.4.04', 'Recognise that digital technologies can support sustainability.', 'Reconocer que la tecnología puede apoyar la sostenibilidad.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.4.05', 'Identify simple strategies to reduce energy consumption.', 'Identificar estrategias simples para reducir energía.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.4.06', 'Apply simple strategies to reduce energy consumption.', 'Aplicar estrategias simples para reducir energía.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO4.4.07', 'Continually assess the environmental impacts of usage.', 'Evaluar continuamente impacto ambiental de uso.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO4.4.08', 'Identify environmental impacts occurring during manufacturing.', 'Identificar impactos ambientales de fabricación.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.4.09', 'Describe environmental impacts of data centres.', 'Describir impactos ambientales de centros de datos.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.4.10', 'Describe examples of how digital tools can support sustainable living.', 'Describir cómo herramientas apoyan vida sostenible.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.4.11', 'Define concepts of sharing economy and circular economy.', 'Definir economía colaborativa y circular.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.4.12', 'Apply a variety of strategies to reduce environmental impact.', 'Aplicar estrategias para reducir impacto ambiental.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO4.4.13', 'Stay informed about environmental impacts of digital technologies.', 'Mantenerse informado sobre impacto ambiental.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.4.14', 'Evaluate environmental impacts to support decision-making.', 'Evaluar impactos ambientales para tomar decisiones.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.4.15', 'Help others to assess their use of digital technologies.', 'Ayudar a otros a evaluar su uso de tecnología.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.4.16', 'Stay informed about sustainability implications across sectors.', 'Mantenerse informado sobre sostenibilidad en sectores.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.4.17', 'Promote and support actions for environmentally sustainable usage.', 'Promover uso sostenible.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.4.18', 'Lead or contribute to digital sustainability initiatives.', 'Liderar iniciativas de sostenibilidad digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO4.4.19', 'Contribute to improvements in solutions for digital sustainability.', 'Contribuir a mejoras en sostenibilidad digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 5.1 Technical Problems
  ['LO5.1.01', 'Acknowledge the commonplace nature of technical problems in digital environments.', 'Reconocer la naturaleza común de los problemas técnicos.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.02', 'Acknowledge the benefits of seeking assistance to help resolve technical problems.', 'Reconocer los beneficios de buscar ayuda para resolver problemas técnicos.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.03', 'Distinguish between operating systems and software.', 'Distinguir entre sistemas operativos y software.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO5.1.04', 'Identify main features of hardware, software, connectivity, and common peripheral devices.', 'Identificar características principales de hardware, software y conectividad.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO5.1.05', 'Recognise signs of common technical problems.', 'Reconocer signos de problemas técnicos comunes.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO5.1.06', 'Follow instructions to solve common technical problems.', 'Seguir instrucciones para resolver problemas técnicos comunes.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO5.1.07', 'Install and update software and applications, as needed.', 'Instalar y actualizar software según sea necesario.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO5.1.08', 'Acknowledge the benefits of building capacity and autonomy in addressing technical issues.', 'Reconocer los beneficios de construir autonomía en temas técnicos.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.09', 'Troubleshoot technical problems in digital environments using a variety of search and problem-solving strategies.', 'Solucionar problemas técnicos usando varias estrategias de búsqueda.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.1.10', 'Update and adjust settings on main and peripheral digital devices to maintain good performance.', 'Actualizar y ajustar configuraciones para mantener buen rendimiento.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO5.1.11', 'Prioritise the development of one’s capacity to diagnose and solve technical issues.', 'Priorizar el desarrollo de la capacidad propia para diagnosticar problemas.', 'Advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.12', 'Assist others to diagnose and solve technical problems in digital environments.', 'Ayudar a otros a diagnosticar y resolver problemas técnicos.', 'Advanced', 'Skill', 'AI not Implicit or Explicit'],
  ['LO5.1.13', 'Use various solution-finding strategies to troubleshoot complex technical problems.', 'Usar varias estrategias para solucionar problemas técnicos complejos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.1.14', 'Help others to develop confidence and autonomy to solve technical problems.', 'Ayudar a otros a desarrollar confianza para resolver problemas técnicos.', 'Highly advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.15', 'Design or deliver training to support the use of digital devices or systems.', 'Diseñar o impartir formación para apoyar el uso de dispositivos.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 5.2 Identifying Needs
  ['LO5.2.01', 'Acknowledge the importance of individual choice in digital environment configurations.', 'Reconocer importancia de elección individual en configuraciones.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.2.02', 'Recognise common ways in which features of digital environments can be adjusted.', 'Reconocer formas de ajustar entornos digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO5.2.03', 'Recognise the concept and purpose of a digital assistance tool.', 'Reconocer concepto de herramienta de asistencia digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.2.04', 'Recognise the presence of AI systems in digital assistance tools.', 'Reconocer presencia de IA en herramientas de asistencia.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO5.2.05', 'Identify common assistive technologies and their purposes.', 'Identificar tecnologías de asistencia comunes.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.2.06', 'Use assistive technologies, if and as required.', 'Usar tecnologías de asistencia si se requiere.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO5.2.07', 'Use digital assistance tools to support simple tasks.', 'Usar herramientas de asistencia para tareas simples.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO5.2.08', 'Acknowledge the benefits of exploring adaptations to digital environment configurations.', 'Reconocer beneficios de explorar adaptaciones.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO5.2.09', 'Adjust features of one\'s digital environment to suit needs.', 'Ajustar características del entorno digital.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.2.10', 'Make informed use of digital assistance tools.', 'Hacer uso informado de herramientas de asistencia.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.2.11', 'Prioritise an ongoing assessment of how digital configurations meet needs.', 'Priorizar evaluación de configuraciones digitales.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO5.2.12', 'Adjust features of one\'s digital environment to suit needs.', 'Ajustar características del entorno digital.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.2.13', 'Assess the accessibility, inclusivity, fairness of digital technologies.', 'Evaluar accesibilidad e inclusión de tecnologías.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.2.14', 'Support others to make informed use of digital assistance tools.', 'Apoyar a otros a usar herramientas de asistencia.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.2.15', 'Promote and support the use of inclusive and accessible digital technologies.', 'Promover tecnologías inclusivas.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO5.2.16', 'Assess complex needs of individuals to identify tailored digital solutions.', 'Evaluar necesidades complejas para soluciones digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO5.2.17', 'Contribute to improvements in digital assistance tools.', 'Contribuir a mejoras en herramientas de asistencia.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 5.3 Creative Use
  ['LO5.3.01', 'Acknowledge that digital technologies can support, but not replace, human creativity.', 'Reconocer que la tecnología apoya la creatividad humana.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO5.3.02', 'Identify examples of how digital technologies are used to solve real-world problems.', 'Identificar ejemplos de tecnología resolviendo problemas reales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.3.03', 'Identify examples of where digital technologies can support or augment human creativity.', 'Identificar ejemplos de tecnología aumentando creatividad.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.3.04', 'Acknowledge the importance of placing human rights at the centre of design.', 'Reconocer importancia de DDHH en diseño tecnológico.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO5.3.05', 'Define the concept of human-centric and its role in development.', 'Definir concepto centrado en humanos.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO5.3.06', 'Identify examples of the interplay between humans and digital technologies in creativity.', 'Identificar interacción humano-tecnología en creatividad.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO5.3.07', 'Describe strengths, weaknesses and ethical considerations of digital technologies.', 'Describir fortalezas y debilidades éticas de la tecnología.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO5.3.08', 'Assess strengths and weaknesses of available digital technologies.', 'Evaluar fortalezas y debilidades de tecnologías.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.3.09', 'Use a variety of digital technologies responsibly to support problem-solving.', 'Usar tecnologías responsablemente para resolver problemas.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.3.10', 'Prioritise human-centric approaches in one\'s own use of digital technologies.', 'Priorizar enfoques centrados en humanos.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO5.3.11', 'Use a variety of digital technologies efficiently to help solve complex problems.', 'Usar tecnologías eficientemente para problemas complejos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.12', 'Contribute to initiatives focused on application of technologies to solve problems.', 'Contribuir a iniciativas de resolución de problemas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.13', 'Support others to develop their confidence in using digital technologies.', 'Apoyar a otros a desarrollar confianza tecnológica.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.14', 'Lead or contribute to initiatives focused on highly complex problem-solving.', 'Liderar iniciativas de resolución de problemas complejos.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.15', 'Lead or contribute to initiatives that help make improvements to solutions.', 'Liderar mejoras en soluciones.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.16', 'Support others to develop their capabilities to use digital technologies for complex tasks.', 'Apoyar a otros en tareas complejas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 5.4 Competence Gaps
  ['LO5.4.01', 'Acknowledge the value of learning about digital technologies.', 'Reconocer valor de aprender sobre tecnologías.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO5.4.02', 'Acknowledge the benefits of seeking support in addressing digital competence needs.', 'Reconocer beneficios de buscar apoyo en competencia digital.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.4.03', 'Recognise that digital competence is much broader than technical skills.', 'Reconocer que la competencia digital es más que técnica.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.4.04', 'Recognise that digital competence requires regular updating.', 'Reconocer que la competencia digital requiere actualización.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.4.05', 'Identify opportunities to improve one\'s digital competences.', 'Identificar oportunidades de mejora digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.4.06', 'Acknowledge the benefits of staying informed about developments in digital technologies.', 'Reconocer beneficios de informarse sobre tecnología.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO5.4.07', 'Prioritise the identification of opportunities to learn about digital technologies.', 'Priorizar aprendizaje sobre tecnología.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO5.4.08', 'Identify relevant learning to meet one\'s digital competence needs.', 'Identificar aprendizaje relevante.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO5.4.09', 'Accurately assess one\'s own digital competences.', 'Evaluar competencias propias con precisión.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.4.10', 'Participate actively in learning to meet one\'s digital competence needs.', 'Participar activamente en aprendizaje digital.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO5.4.11', 'Continually assess digital technological developments.', 'Evaluar continuamente desarrollos tecnológicos.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO5.4.12', 'Engage in ongoing self-development to meet digital competence needs.', 'Comprometerse con el autodesarrollo continuo.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO5.4.13', 'Support others to develop confidence and autonomy in digital environments.', 'Apoyar a otros a desarrollar confianza digital.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.4.14', 'Compile available digital competence learning opportunities.', 'Recopilar oportunidades de aprendizaje digital.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.4.15', 'Engage in ongoing self-development to meet complex needs.', 'Autodesarrollo para necesidades complejas.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO5.4.16', 'Mentor others in identifying and addressing their digital competence needs.', 'Mentorear a otros en necesidades digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO5.4.17', 'Design learning material to help others to meet complex needs.', 'Diseñar material de aprendizaje.', 'Highly advanced', 'Skill', 'AI-Implicit']
];

// Hydrate raw data into full objects
export const DIGCOMP_DATA: LearningOutcome[] = RAW_OUTCOMES.map(item => {
  const [id, enDesc, esDesc, levelKey, ksaKey, aiLabel] = item;
  const areaNum = parseInt(id.charAt(2));
  const subAreaKey = id.substring(2, 5);
  
  const levelMap: Record<string, ProficiencyLevel> = {
    'Basic': ProficiencyLevel.BASIC,
    'Intermediate': ProficiencyLevel.INTERMEDIATE,
    'Advanced': ProficiencyLevel.ADVANCED,
    'Highly advanced': ProficiencyLevel.HIGHLY_ADVANCED
  };

  const ksaMap: Record<string, KSA> = {
    'Knowledge': KSA.KNOWLEDGE,
    'Skill': KSA.SKILL,
    'Attitude': KSA.ATTITUDE
  };

  const examples = MANUAL_EXAMPLES[id] || generateUniqueNavarraExample(id, enDesc, esDesc);

  return {
    id,
    description: { en: enDesc, es: esDesc, eu: esDesc },
    level: levelMap[levelKey],
    ksa: ksaMap[ksaKey],
    aiLabel,
    competenceArea: AREAS[areaNum as keyof typeof AREAS],
    competenceSubArea: SUB_AREAS[subAreaKey as keyof typeof SUB_AREAS] || { en: subAreaKey, es: subAreaKey, eu: subAreaKey },
    examples: examples
  };
});

export const getCompetenceAreas = (lang: Language) => 
  Array.from(new Set(DIGCOMP_DATA.map(d => d.competenceArea[lang]))).sort();

export const PROFICIENCY_LEVELS = Object.values(ProficiencyLevel);
