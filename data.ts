
import { LearningOutcome, ProficiencyLevel, KSA, Language, CurriculumExamples } from './types';

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

// Helper to define area names
const AREAS = {
  1: { en: '1. Information Search', es: '1. Búsqueda de información', eu: '1. Informazioaren bilaketa' },
  2: { en: '2. Communication', es: '2. Comunicación', eu: '2. Komunikazioa' },
  3: { en: '3. Content Creation', es: '3. Creación de contenidos', eu: '3. Eduki digitalen sorkuntza' },
  4: { en: '4. Safety', es: '4. Seguridad', eu: '4. Segurtasuna' },
  5: { en: '5. Problem Solving', es: '5. Resolución de problemas', eu: '5. Arazoen ebazpena' }
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

// Curriculum Templates by Sub-Area
// This map ensures that EVERY card gets a rigorous, stage-appropriate example based on its sub-area.
const AREA_EXAMPLES_TEMPLATES: Record<string, CurriculumExamples> = {
  '1.1': {
    primaria: {
      es: "Área: Conocimiento del Medio. Uso de buscadores adaptados (ej. Bunis) y palabras clave sencillas para localizar información sobre flora y fauna local.",
      eu: "Arloa: Ingurunearen Ezaguera. Bilatzaile egokituak (adib. Bunis) eta gako-hitz errazak erabiltzea tokiko flora eta faunari buruzko informazioa aurkitzeko.",
      en: "Area: Knowledge of the Environment. Use of adapted search engines (e.g. Bunis) and simple keywords to locate information on local flora and fauna."
    },
    eso: {
      es: "Materia: Digitalización. Comparación de resultados entre motores de búsqueda generalistas y académicos. Uso de operadores booleanos básicos.",
      eu: "Ikasgaia: Digitalizazioa. Bilatzaile orokorren eta akademikoen arteko emaitzen konparaketa. Oinarrizko operadore boolearren erabilera.",
      en: "Subject: Digitalization. Comparison of results between general and academic search engines. Use of basic Boolean operators."
    },
    bachillerato: {
      es: "Materia: Tecnologías Digitales Aplicadas. Estrategias avanzadas de recuperación de información en bases de datos especializadas y repositorios científicos.",
      eu: "Ikasgaia: Teknologia Digital Aplikatuak. Informazioa berreskuratzeko estrategia aurreratuak datu-base espezializatuetan eta biltegi zientifikoetan.",
      en: "Subject: Applied Digital Technologies. Advanced information retrieval strategies in specialized databases and scientific repositories."
    }
  },
  '1.2': {
    primaria: {
      es: "Área: Lengua Castellana. Distinción entre hechos y opiniones en textos digitales sencillos. Identificación de la autoría en páginas web.",
      eu: "Arloa: Gaztelania. Gertakarien eta iritzien arteko bereizketa testu digital errazetan. Web orrietako egiletza identifikatzea.",
      en: "Area: Spanish Language. Distinction between facts and opinions in simple digital texts. Identification of authorship on web pages."
    },
    eso: {
      es: "Materia: Geografía e Historia. Análisis crítico de noticias (Fake News) y verificación de fuentes digitales. Evaluación de la fiabilidad.",
      eu: "Ikasgaia: Geografia eta Historia. Albisteen analisi kritikoa (Fake News) eta iturri digitalen egiaztapena. Fidagarritasunaren ebaluazioa.",
      en: "Subject: Geography and History. Critical analysis of news (Fake News) and verification of digital sources. Evaluation of reliability."
    },
    bachillerato: {
      es: "Materia: Filosofía. Análisis de sesgos cognitivos y algorítmicos en la recepción de información. Evaluación crítica de deepfakes y contenido sintético.",
      eu: "Ikasgaia: Filosofia. Informazioa jasotzean dauden alborapen kognitibo eta algoritmikoen analisia. Deepfake eta eduki sintetikoen ebaluazio kritikoa.",
      en: "Subject: Philosophy. Analysis of cognitive and algorithmic biases in information reception. Critical evaluation of deepfakes and synthetic content."
    }
  },
  '1.3': {
    primaria: {
      es: "Área: Competencia Digital. Guardado y recuperación de archivos en carpetas locales con nombres descriptivos.",
      eu: "Arloa: Gaitasun Digitala. Fitxategiak tokiko karpetetan gordetzea eta berreskuratzea izen deskriptiboekin.",
      en: "Area: Digital Competence. Saving and retrieving files in local folders with descriptive names."
    },
    eso: {
      es: "Materia: Tecnología. Gestión de almacenamiento en la nube, control de versiones y copias de seguridad de trabajos escolares.",
      eu: "Ikasgaia: Teknologia. Hodeiko biltegiratzearen kudeaketa, bertsioen kontrola eta eskola-lanen segurtasun-kopiak.",
      en: "Subject: Technology. Cloud storage management, version control, and backups of school work."
    },
    bachillerato: {
      es: "Materia: TDA. Gestión avanzada de datos masivos, taxonomías de archivos y uso de metadatos para la organización documental.",
      eu: "Ikasgaia: TDA. Datu masiboen kudeaketa aurreratua, fitxategien taxonomiak eta metadatuen erabilera dokumentuak antolatzeko.",
      en: "Subject: ADT. Advanced management of big data, file taxonomies, and use of metadata for document organization."
    }
  },
  '2.1': {
    primaria: {
      es: "Área: Tutoría. Uso del correo electrónico corporativo escolar para comunicarse con docentes respetando normas básicas.",
      eu: "Arloa: Tutoretza. Eskolako posta elektroniko korporatiboa erabiltzea irakasleekin komunikatzeko, oinarrizko arauak errespetatuz.",
      en: "Area: Tutorial. Use of school corporate email to communicate with teachers respecting basic rules."
    },
    eso: {
      es: "Materia: Digitalización. Uso de plataformas colaborativas (Teams/Google Classroom) y distinción entre comunicación síncrona y asíncrona.",
      eu: "Ikasgaia: Digitalizazioa. Plataforma kolaboratiboen erabilera (Teams/Google Classroom) eta komunikazio sinkrono eta asinkronoaren arteko bereizketa.",
      en: "Subject: Digitalization. Use of collaborative platforms (Teams/Google Classroom) and distinction between synchronous and asynchronous communication."
    },
    bachillerato: {
      es: "Materia: Economía. Gestión de la comunicación corporativa y profesional. Videoconferencias avanzadas y etiqueta profesional.",
      eu: "Ikasgaia: Ekonomia. Komunikazio korporatibo eta profesionalaren kudeaketa. Bideokonferentzia aurreratuak eta etiketa profesionala.",
      en: "Subject: Economics. Management of corporate and professional communication. Advanced video conferencing and professional etiquette."
    }
  },
  '2.2': {
    primaria: {
      es: "Área: Educación Artística. Compartir dibujos digitales en el entorno virtual de aprendizaje del centro, entendiendo quién puede verlos.",
      eu: "Arloa: Arte Hezkuntza. Marrazki digitalak ikastetxeko ikaskuntza-ingurune birtualean partekatzea, nork ikus ditzakeen ulertuz.",
      en: "Area: Arts Education. Sharing digital drawings in the school's virtual learning environment, understanding who can view them."
    },
    eso: {
      es: "Materia: Tecnología. Publicación de contenidos respetando licencias Creative Commons y citando fuentes originales.",
      eu: "Ikasgaia: Teknologia. Edukiak argitaratzea Creative Commons lizentziak errespetatuz eta jatorrizko iturriak aipatuz.",
      en: "Subject: Technology. Publishing content respecting Creative Commons licenses and citing original sources."
    },
    bachillerato: {
      es: "Materia: Proyectos. Difusión de trabajos de investigación en repositorios abiertos y redes profesionales (LinkedIn), gestionando la privacidad.",
      eu: "Ikasgaia: Proiektuak. Ikerketa-lanen zabalkundea biltegi irekietan eta sare profesionaletan (LinkedIn), pribatutasuna kudeatuz.",
      en: "Subject: Projects. Dissemination of research work in open repositories and professional networks (LinkedIn), managing privacy."
    }
  },
  '2.3': {
    primaria: {
      es: "Área: Valores Cívicos. Comprensión de las normas de convivencia en entornos digitales escolares.",
      eu: "Arloa: Balio Zibikoak. Eskolako ingurune digitaletako bizikidetza-arauak ulertzea.",
      en: "Area: Civic Values. Understanding rules of coexistence in school digital environments."
    },
    eso: {
      es: "Materia: Geografía e Historia. Participación ciudadana a través de medios digitales. Activismo online responsable.",
      eu: "Ikasgaia: Geografia eta Historia. Herritarren parte-hartzea bitarteko digitalen bidez. Lineako aktibismo arduratsua.",
      en: "Subject: Geography and History. Civic participation through digital means. Responsible online activism."
    },
    bachillerato: {
      es: "Materia: Ciudadanía Digital. Uso de la administración electrónica (Certificado Digital, Cl@ve) y comprensión de derechos digitales.",
      eu: "Ikasgaia: Herritartasun Digitala. Administrazio elektronikoaren erabilera (Ziurtagiri Digitala, Cl@ve) eta eskubide digitalen ulermena.",
      en: "Subject: Digital Citizenship. Use of e-government (Digital Certificate, Cl@ve) and understanding of digital rights."
    }
  },
  '2.4': {
    primaria: {
      es: "Área: Proyectos. Trabajo en grupo utilizando documentos compartidos sencillos para escribir una historia conjunta.",
      eu: "Arloa: Proiektuak. Talde-lana partekatutako dokumentu errazak erabiliz istorio bateratu bat idazteko.",
      en: "Area: Projects. Group work using simple shared documents to write a joint story."
    },
    eso: {
      es: "Materia: Tecnología. Edición simultánea de documentos y gestión de comentarios/revisiones en trabajos grupales.",
      eu: "Ikasgaia: Teknologia. Dokumentuen aldibereko edizioa eta iruzkinen/berrikuspenen kudeaketa talde-lanetan.",
      en: "Subject: Technology. Simultaneous editing of documents and management of comments/revisions in group work."
    },
    bachillerato: {
      es: "Materia: TDA. Gestión de proyectos colaborativos complejos usando herramientas como Kanban digital o diagramas de Gantt.",
      eu: "Ikasgaia: TDA. Lankidetza-proiektu konplexuen kudeaketa Kanban digitala edo Gantt diagramak bezalako tresnak erabiliz.",
      en: "Subject: ADT. Management of complex collaborative projects using tools like digital Kanban or Gantt charts."
    }
  },
  '2.5': {
    primaria: {
      es: "Área: Lengua. Redacción de mensajes respetuosos y uso adecuado de emoticonos en foros escolares.",
      eu: "Arloa: Hizkuntza. Mezu errespetuzkoak idaztea eta emotikonoen erabilera egokia eskolako foroetan.",
      en: "Area: Language. Writing respectful messages and appropriate use of emoticons in school forums."
    },
    eso: {
      es: "Materia: Tutoría. Prevención del ciberacoso. Análisis del tono y la empatía en la comunicación digital escrita.",
      eu: "Ikasgaia: Tutoretza. Ziberjazarpenaren prebentzioa. Tonoaren eta enpatiaren analisia idatzizko komunikazio digitalean.",
      en: "Subject: Tutorial. Prevention of cyberbullying. Analysis of tone and empathy in written digital communication."
    },
    bachillerato: {
      es: "Materia: Comunicación. Adaptación de la netiqueta a contextos interculturales y profesionales diversos.",
      eu: "Ikasgaia: Komunikazioa. Netiketaren egokitzapena kulturarteko eta lanbide-testuinguru anitzetara.",
      en: "Subject: Communication. Adaptation of netiquette to diverse intercultural and professional contexts."
    }
  },
  '2.6': {
    primaria: {
      es: "Área: Tutoría. Cuidado de las credenciales de acceso (usuario y contraseña) a las plataformas educativas.",
      eu: "Arloa: Tutoretza. Hezkuntza-plataformetarako sarbide-kredentzialak (erabiltzailea eta pasahitza) zaintzea.",
      en: "Area: Tutorial. Care of access credentials (username and password) to educational platforms."
    },
    eso: {
      es: "Materia: Digitalización. Gestión de la identidad digital en redes sociales. Configuración de privacidad en perfiles.",
      eu: "Ikasgaia: Digitalizazioa. Identitate digitalaren kudeaketa sare sozialetan. Profilen pribatutasun-konfigurazioa.",
      en: "Subject: Digitalization. Management of digital identity on social networks. Privacy configuration in profiles."
    },
    bachillerato: {
      es: "Materia: Formación y Orientación Laboral. Construcción de una marca personal profesional y gestión de la reputación online.",
      eu: "Ikasgaia: Laneko Prestakuntza eta Orientabidea. Marka pertsonal profesionala eraikitzea eta lineako ospearen kudeaketa.",
      en: "Subject: FOL. Building a professional personal brand and managing online reputation."
    }
  },
  '3.1': {
    primaria: {
      es: "Área: Lengua. Creación de textos sencillos con procesadores de texto, incluyendo imágenes básicas.",
      eu: "Arloa: Hizkuntza. Testu errazak sortzea testu-prozesadoreekin, oinarrizko irudiak barne.",
      en: "Area: Language. Creating simple texts with word processors, including basic images."
    },
    eso: {
      es: "Materia: Digitalización. Producción de contenidos multimedia (presentaciones, infografías, podcast) con herramientas de autor.",
      eu: "Ikasgaia: Digitalizazioa. Multimedia-edukien ekoizpena (aurkezpenak, infografiak, podcast-ak) egile-tresnekin.",
      en: "Subject: Digitalization. Production of multimedia content (presentations, infographics, podcasts) with authoring tools."
    },
    bachillerato: {
      es: "Materia: TDA. Creación de contenidos digitales complejos (webs, apps) y uso ético de IA generativa para la producción.",
      eu: "Ikasgaia: TDA. Eduki digital konplexuen sorkuntza (webguneak, app-ak) eta IA sortzailearen erabilera etikoa ekoizpenerako.",
      en: "Subject: ADT. Creation of complex digital content (webs, apps) and ethical use of generative AI for production."
    }
  },
  '3.2': {
    primaria: {
      es: "Área: Educación Artística. Realización de collages digitales combinando textos e imágenes de bancos de recursos escolares.",
      eu: "Arloa: Arte Hezkuntza. Collage digitalak egitea eskolako baliabide-bankuetako testuak eta irudiak konbinatuz.",
      en: "Area: Arts Education. Making digital collages combining texts and images from school resource banks."
    },
    eso: {
      es: "Materia: Música/Plástica. Edición y remezcla de obras (mashups) citando procedencia y respetando derechos.",
      eu: "Ikasgaia: Musika/Plastika. Obren edizioa eta nahasketa (mashups) jatorria aipatuz eta eskubideak errespetatuz.",
      en: "Subject: Music/Arts. Editing and remixing works (mashups) citing provenance and respecting rights."
    },
    bachillerato: {
      es: "Materia: Ciencias de la Computación. Integración de librerías de código y APIs de terceros en proyectos de desarrollo propios.",
      eu: "Ikasgaia: Konputazio Zientziak. Kode-liburutegien eta hirugarrenen APIen integrazioa garapen-proiektu propioetan.",
      en: "Subject: Computer Science. Integration of code libraries and third-party APIs into own development projects."
    }
  },
  '3.3': {
    primaria: {
      es: "Área: Educación Artística. Entender que los dibujos y textos de internet tienen dueños y autores.",
      eu: "Arloa: Arte Hezkuntza. Interneteko marrazkiek eta testuek jabeak eta egileak dituztela ulertzea.",
      en: "Area: Arts Education. Understanding that drawings and texts on the internet have owners and authors."
    },
    eso: {
      es: "Materia: Digitalización. Tipos de licencias (Copyright, Copyleft, Creative Commons) y uso de bancos de imágenes libres.",
      eu: "Ikasgaia: Digitalizazioa. Lizentzia motak (Copyright, Copyleft, Creative Commons) eta irudi-banku askeen erabilera.",
      en: "Subject: Digitalization. Types of licenses (Copyright, Copyleft, Creative Commons) and use of free image banks."
    },
    bachillerato: {
      es: "Materia: Economía. Propiedad intelectual en el software, patentes y regulación sobre contenidos generados por IA.",
      eu: "Ikasgaia: Ekonomia. Jabetza intelektuala softwarean, patenteak eta IA bidez sortutako edukiei buruzko erregulazioa.",
      en: "Subject: Economics. Intellectual property in software, patents, and regulation on AI-generated content."
    }
  },
  '3.4': {
    primaria: {
      es: "Área: Matemáticas. Iniciación a la programación por bloques (Scratch) para resolver retos lógicos sencillos.",
      eu: "Arloa: Matematika. Bloke bidezko programazioan hastapena (Scratch) erronka logiko errazak ebazteko.",
      en: "Area: Math. Introduction to block programming (Scratch) to solve simple logic challenges."
    },
    eso: {
      es: "Materia: Tecnología y Digitalización. Programación estructurada (Python) y robótica educativa (Arduino/Micro:bit).",
      eu: "Ikasgaia: Teknologia eta Digitalizazioa. Programazio egituratua (Python) eta hezkuntza-robotika (Arduino/Micro:bit).",
      en: "Subject: Technology. Structured programming (Python) and educational robotics (Arduino/Micro:bit)."
    },
    bachillerato: {
      es: "Materia: Ciencias de la Computación. Desarrollo de algoritmos complejos, introducción a la Inteligencia Artificial y Machine Learning.",
      eu: "Ikasgaia: Konputazio Zientziak. Algoritmo konplexuen garapena, Adimen Artifizialera eta Machine Learning-era sarrera.",
      en: "Subject: Computer Science. Development of complex algorithms, introduction to Artificial Intelligence and Machine Learning."
    }
  },
  '4.1': {
    primaria: {
      es: "Área: Tutoría. Hábitos básicos de seguridad: bloquear la tablet al terminar y no compartir contraseñas.",
      eu: "Arloa: Tutoretza. Oinarrizko segurtasun-ohiturak: tableta blokeatu amaitzean eta pasahitzik ez partekatu.",
      en: "Area: Tutorial. Basic security habits: lock the tablet when finished and do not share passwords."
    },
    eso: {
      es: "Materia: Digitalización. Protección contra malware, phishing y configuración de autenticación en dos pasos.",
      eu: "Ikasgaia: Digitalizazioa. Malware eta phishing-aren aurkako babesa eta bi urratseko autentifikazioaren konfigurazioa.",
      en: "Subject: Digitalization. Protection against malware, phishing, and two-step authentication configuration."
    },
    bachillerato: {
      es: "Materia: TDA. Criptografía básica, seguridad en redes y auditoría de seguridad de dispositivos personales.",
      eu: "Ikasgaia: TDA. Oinarrizko kriptografia, sare-segurtasuna eta gailu pertsonalen segurtasun-auditoria.",
      en: "Subject: ADT. Basic cryptography, network security, and security audit of personal devices."
    }
  },
  '4.2': {
    primaria: {
      es: "Área: Tutoría. No compartir datos sensibles (dirección, teléfono) en aplicaciones o juegos online.",
      eu: "Arloa: Tutoretza. Datu sentikorrik (helbidea, telefonoa) ez partekatu lineako aplikazio edo jokoetan.",
      en: "Area: Tutorial. Do not share sensitive data (address, phone) in online apps or games."
    },
    eso: {
      es: "Materia: Valores Cívicos. Gestión de la privacidad en redes sociales, rastreo digital y gestión de cookies.",
      eu: "Ikasgaia: Balio Zibikoak. Pribatutasunaren kudeaketa sare sozialetan, aztarna digitala eta cookie-en kudeaketa.",
      en: "Subject: Civic Values. Privacy management on social networks, digital tracking, and cookie management."
    },
    bachillerato: {
      es: "Materia: Ciudadanía Digital. Normativa RGPD, soberanía digital y derechos sobre los propios datos frente a grandes corporaciones.",
      eu: "Ikasgaia: Herritartasun Digitala. DBEO araudia, burujabetza digitala eta norberaren datuen gaineko eskubideak korporazio handien aurrean.",
      en: "Subject: Digital Citizenship. GDPR regulations, digital sovereignty, and rights over own data against large corporations."
    }
  },
  '4.3': {
    primaria: {
      es: "Área: Educación Física. Higiene postural al usar dispositivos y control del tiempo de pantalla.",
      eu: "Arloa: Gorputz Hezkuntza. Jarrera-higienea gailuak erabiltzean eta pantaila-denboraren kontrola.",
      en: "Area: PE. Postural hygiene when using devices and screen time control."
    },
    eso: {
      es: "Materia: Tutoría. Prevención de la adicción tecnológica, riesgos de las apuestas online y bienestar emocional digital.",
      eu: "Ikasgaia: Tutoretza. Mendekotasun teknologikoaren prebentzioa, lineako apustuen arriskuak eta ongizate emozional digitala.",
      en: "Subject: Tutorial. Prevention of technological addiction, risks of online betting, and digital emotional well-being."
    },
    bachillerato: {
      es: "Materia: Psicología. Impacto psicológico de las redes sociales (FOMO, imagen corporal) y estrategias de desconexión digital.",
      eu: "Ikasgaia: Psikologia. Sare sozialen inpaktu psikologikoa (FOMO, gorputz-irudia) eta deskonexio digitaleko estrategiak.",
      en: "Subject: Psychology. Psychological impact of social networks (FOMO, body image) and digital disconnection strategies."
    }
  },
  '4.4': {
    primaria: {
      es: "Área: Conocimiento del Medio. Reciclaje de pilas y dispositivos electrónicos. Apagar equipos al terminar.",
      eu: "Arloa: Ingurunearen Ezaguera. Pilak eta gailu elektronikoak birziklatzea. Ekipoak itzali amaitzean.",
      en: "Area: Environment. Recycling batteries and electronic devices. Turn off equipment when finished."
    },
    eso: {
      es: "Materia: Geografía e Historia / Tecnología. Impacto medioambiental de la basura electrónica y consumo energético de los centros de datos.",
      eu: "Ikasgaia: Geografia eta Historia / Teknologia. Zabor elektronikoaren ingurumen-inpaktua eta datu-zentroen energia-kontsumoa.",
      en: "Subject: Geography / Technology. Environmental impact of e-waste and energy consumption of data centers."
    },
    bachillerato: {
      es: "Materia: Ciencias de la Tierra. Obsolescencia programada, Green IT y sostenibilidad en el diseño tecnológico.",
      eu: "Ikasgaia: Lurraren Zientziak. Zaharkitze programatua, Green IT eta jasangarritasuna diseinu teknologikoan.",
      en: "Subject: Earth Sciences. Planned obsolescence, Green IT, and sustainability in technological design."
    }
  },
  '5.1': {
    primaria: {
      es: "Área: Competencia Digital. Solución de problemas básicos: encender, reiniciar, comprobar conexión a internet.",
      eu: "Arloa: Gaitasun Digitala. Oinarrizko arazoak konpontzea: piztu, berrabiarazi, interneteko konexioa egiaztatu.",
      en: "Area: Digital Competence. Solving basic problems: turn on, restart, check internet connection."
    },
    eso: {
      es: "Materia: Tecnología. Resolución de problemas de conectividad, configuración de periféricos y búsqueda de soluciones en foros.",
      eu: "Ikasgaia: Teknologia. Konektibitate-arazoak konpontzea, periferikoen konfigurazioa eta foroetan irtenbideak bilatzea.",
      en: "Subject: Technology. Solving connectivity problems, peripheral configuration, and searching for solutions in forums."
    },
    bachillerato: {
      es: "Materia: TDA. Diagnóstico de averías hardware/software, virtualización y mantenimiento avanzado de sistemas.",
      eu: "Ikasgaia: TDA. Hardware/software matxuren diagnostikoa, birtualizazioa eta sistemen mantentze-lan aurreratuak.",
      en: "Subject: ADT. Hardware/software fault diagnosis, virtualization, and advanced system maintenance."
    }
  },
  '5.2': {
    primaria: {
      es: "Área: Educación Artística. Elección de la herramienta de dibujo más adecuada para una tarea sencilla.",
      eu: "Arloa: Arte Hezkuntza. Zeregin erraz baterako marrazketa-tresnarik egokiena aukeratzea.",
      en: "Area: Arts Education. Choosing the most suitable drawing tool for a simple task."
    },
    eso: {
      es: "Materia: Digitalización. Configuración del entorno personal de aprendizaje y herramientas de accesibilidad.",
      eu: "Ikasgaia: Digitalizazioa. Ikaskuntza-ingurune pertsonalaren eta irisgarritasun-tresnen konfigurazioa.",
      en: "Subject: Digitalization. Configuration of Personal Learning Environment and accessibility tools."
    },
    bachillerato: {
      es: "Materia: TDA. Evaluación comparativa de software para necesidades profesionales y decisiones de compra tecnológica.",
      eu: "Ikasgaia: TDA. Softwarearen ebaluazio konparatiboa behar profesionaletarako eta erosketa teknologikoko erabakietarako.",
      en: "Subject: ADT. Comparative software evaluation for professional needs and technological purchase decisions."
    }
  },
  '5.3': {
    primaria: {
      es: "Área: Educación Artística. Uso creativo de tablets para crear historias visuales o stop-motion básico.",
      eu: "Arloa: Arte Hezkuntza. Tableten erabilera sortzailea istorio bisualak edo oinarrizko stop-motion-a sortzeko.",
      en: "Area: Arts Education. Creative use of tablets to create visual stories or basic stop-motion."
    },
    eso: {
      es: "Materia: Tecnología. Diseño e impresión 3D, edición de vídeo artístico y proyectos STEAM.",
      eu: "Ikasgaia: Teknologia. 3D diseinua eta inprimaketa, bideo artistikoaren edizioa eta STEAM proiektuak.",
      en: "Subject: Technology. 3D design and printing, artistic video editing, and STEAM projects."
    },
    bachillerato: {
      es: "Materia: Proyectos. Innovación tecnológica, cultura Maker y desarrollo de prototipos para problemas sociales.",
      eu: "Ikasgaia: Proiektuak. Berrikuntza teknologikoa, Maker kultura eta arazo sozialetarako prototipoen garapena.",
      en: "Subject: Projects. Technological innovation, Maker culture, and prototype development for social problems."
    }
  },
  '5.4': {
    primaria: {
      es: "Área: Tutoría. Identificar qué no se sabe hacer con el ordenador y pedir ayuda al docente o compañeros.",
      eu: "Arloa: Tutoretza. Ordenagailuarekin zer egiten ez dakigun identifikatzea eta irakasleari edo ikaskideei laguntza eskatzea.",
      en: "Area: Tutorial. Identify what cannot be done with the computer and ask the teacher or peers for help."
    },
    eso: {
      es: "Materia: Digitalización. Uso de tutoriales online y MOOCs básicos para autoformación en nuevas herramientas.",
      eu: "Ikasgaia: Digitalizazioa. Lineako tutorialen eta oinarrizko MOOCen erabilera tresna berrietan autoformaziorako.",
      en: "Subject: Digitalization. Use of online tutorials and basic MOOCs for self-training in new tools."
    },
    bachillerato: {
      es: "Materia: Orientación. Diseño de un Entorno Personal de Aprendizaje (PLE) para la actualización profesional continua.",
      eu: "Ikasgaia: Orientabidea. Ikaskuntza Ingurune Pertsonalaren (PLE) diseinua etengabeko eguneratze profesionalerako.",
      en: "Subject: Guidance. Design of a Personal Learning Environment (PLE) for continuous professional update."
    }
  }
};

// Map of manually crafted specific examples
const SPECIFIC_EXAMPLES_MAP: Record<string, CurriculumExamples> = {
  // ... (keeping existing examples for LO1.1.01, LO1.1.02, etc.)
  'LO1.1.01': {
    primaria: {
        es: "Área: Conocimiento del Medio.\nUso de buscadores infantiles (ej. Bunis) vs. buscadores generales para localizar imágenes de flora local. El alumnado distingue que un buscador visual es mejor para identificar plantas que uno puramente textual.",
        eu: "Arloa: Ingurunearen Ezaguera.\nUmeentzako bilatzaileak (adib. Bunis) vs. bilatzaile orokorrak erabiltzea tokiko landarediaren irudiak aurkitzeko. Ikasleek bereizten dute bilatzaile bisual bat hobea dela landareak identifikatzeko testu hutsezkoa baino.",
        en: "Area: Knowledge of the Environment.\nUsing child-friendly search engines vs. general ones to locate local flora images. Students distinguish that a visual search engine is better for identifying plants than a purely textual one."
    },
    eso: {
        es: "Materia: Digitalización (1º-3º ESO).\nComparativa entre resultados de Google Scholar vs. Wikipedia para un trabajo de Historia. Se analiza la fiabilidad y el propósito: Wikipedia para una visión general, Scholar para citas académicas rigurosas.",
        eu: "Ikasgaia: Digitalizazioa (DBH 1-3).\nGoogle Scholar eta Wikipediaren arteko emaitzen konparaketa Historia lan baterako. Fidagarritasuna eta helburua aztertzen dira: Wikipedia ikuspegi orokor baterako, Scholar aipu akademiko zorrotzetarako.",
        en: "Subject: Digitalization.\nComparison between Google Scholar vs. Wikipedia results for a History project. Reliability and purpose are analyzed: Wikipedia for an overview, Scholar for rigorous academic citations."
    },
    bachillerato: {
        es: "Materia: Tecnologías Digitales Aplicadas.\nUso de operadores booleanos en bases de datos especializadas (ej. PubMed o bases jurídicas) frente a búsquedas en lenguaje natural en motores con IA, evaluando la precisión técnica requerida para un proyecto de investigación.",
        eu: "Ikasgaia: Teknologia Digital Aplikatuak.\nOperadore boolearren erabilera datu-base espezializatuetan (adib. PubMed) vs. hizkuntza naturaleko bilaketak IA duten motorretan, ikerketa-proiektu baterako behar den zehaztasun teknikoa ebaluatuz.",
        en: "Subject: Applied Digital Technologies.\nUsing Boolean operators in specialized databases vs. natural language searches in AI-driven engines, evaluating the technical precision required for a research project."
    }
  },
  'LO1.1.02': {
    primaria: {
        es: "Área: Lengua Castellana y Literatura.\nEjercicio práctico: Buscar 'banco' en Google Imágenes y analizar por qué salen tanto asientos como entidades financieras. Refinar la búsqueda a 'banco de sentarse' para ver cómo cambia el resultado.",
        eu: "Arloa: Gaztelania eta Literatura.\nAriketa praktikoa: Google Irudietan 'banco' bilatu eta aztertu zergatik agertzen diren bai eserlekuak bai finantza-erakundeak. Bilaketa 'banco de sentarse'-ra zehaztu emaitza nola aldatzen den ikusteko.",
        en: "Area: Language.\nPractical exercise: Search 'bank' in Google Images and analyze why both seats and financial entities appear. Refine search to 'park bench' to see how the result changes."
    },
    eso: {
        es: "Materia: Geografía e Historia.\nAnálisis de 'Burbujas de filtro'. Dos alumnos buscan el mismo término político polémico en sus dispositivos personales y comparan cómo el algoritmo personaliza los resultados según su historial.",
        eu: "Ikasgaia: Geografia eta Historia.\n'Iragazki-burbuilen' analisia. Bi ikaslek termino politiko polemiko bera bilatzen dute beren gailu pertsonaletan eta algoritmoak emaitzak beren historialaren arabera nola pertsonalizatzen dituen konparatzen dute.",
        en: "Subject: Geography and History.\nAnalysis of 'Filter Bubbles'. Two students search for the same controversial political term on their personal devices and compare how the algorithm customizes results based on history."
    },
    bachillerato: {
        es: "Materia: Filosofía / TIC.\nInvestigación sobre sesgos algorítmicos. Modificar los 'prompts' en herramientas de IA Generativa para ver cómo ligeras variaciones semánticas alteran drásticamente el tono o la veracidad del texto generado.",
        eu: "Ikasgaia: Filosofia / IKT.\nAlborapen algoritmikoei buruzko ikerketa. IA Sortzaileko tresnetan 'prompt'-ak aldatu, aldaketa semantiko txikiek sortutako testuaren tonua edo egiazkotasuna nola aldatzen duten ikusteko.",
        en: "Subject: Philosophy / ICT.\nResearch on algorithmic biases. Modifying prompts in Generative AI tools to see how slight semantic variations drastically alter the tone or veracity of the generated text."
    }
  },
  'LO1.1.04': {
    primaria: {
        es: "Área: Educación Artística.\nComparar cómo busca canciones un asistente de voz (Siri/Alexa) frente a escribir el título en una barra de búsqueda. Identificar que uno 'escucha' y el otro 'lee'.",
        eu: "Arloa: Arte Hezkuntza.\nKonparatu ahots-laguntzaile batek (Siri/Alexa) abestiak nola bilatzen dituen eta izenburua bilaketa-barra batean idaztearekin. Bata 'entzuten' duela eta bestea 'irakurtzen' duela identifikatzea.",
        en: "Area: Arts Education.\nCompare how a voice assistant (Siri/Alexa) searches for songs vs. typing the title in a search bar. Identify that one 'listens' and the other 'reads'."
    },
    eso: {
        es: "Materia: Tecnología y Digitalización.\nCreación de una tabla comparativa entre un motor de búsqueda tradicional (indexación web) y un modelo de lenguaje (ChatGPT/Gemini). Diferenciar entre 'recuperar información existente' y 'generar respuesta probabilística'.",
        eu: "Ikasgaia: Teknologia eta Digitalizazioa.\nBilatzaile tradizional baten (web indexazioa) eta hizkuntza-eredu baten (ChatGPT/Gemini) arteko konparaketa-taula sortzea. 'Dagoen informazioa berreskuratzea' eta 'erantzun probabilistikoa sortzea' bereiztea.",
        en: "Subject: Technology.\nCreating a comparison table between a traditional search engine (web indexing) and a language model (LLM). Differentiate between 'retrieving existing info' and 'generating probabilistic response'."
    },
    bachillerato: {
        es: "Materia: Ciencias de la Computación.\nAnálisis técnico de cómo funcionan los sistemas de recomendación (Netflix/TikTok) frente a los motores de búsqueda semántica. Estudio de los metadatos vs. vectores de características en IA.",
        eu: "Ikasgaia: Konputazio Zientziak.\nGomendio-sistemek (Netflix/TikTok) eta bilatzaile semantikoek nola funtzionatzen duten azterketa teknikoa. Metadatuen vs. ezaugarri-bektoreen azterketa IAn.",
        en: "Subject: Computer Science.\nTechnical analysis of how recommendation systems work vs. semantic search engines. Study of metadata vs. feature vectors in AI."
    }
  },
  'LO1.2.10': {
    primaria: {
        es: "Área: Lengua / Conocimiento del Medio (5º-6º Primaria).\nInvestigación guiada: Ante una noticia viral, identificar quién la firma y buscar el apartado 'Quiénes somos' en la web. Distinguir entre un blog personal y una web oficial de una institución (ej. NASA, Gobierno de Navarra).",
        eu: "Arloa: Hizkuntza / Ingurunearen Ezaguera (LMH 5-6).\nIkerketa gidatua: Albiste biral baten aurrean, sinatzailea identifikatu eta webguneko 'Nortzuk gara' atala bilatu. Blog pertsonal baten eta erakunde baten webgune ofizialaren artean bereizi.",
        en: "Area: Language / Environment (5th-6th Grade).\nGuided research: Given a viral news story, identify the author and check the 'About Us' section. Distinguish between a personal blog and an official institution website."
    },
    eso: {
        es: "Materia: Digitalización (3º ESO).\nPráctica de 'Lectura Lateral' (Lateral Reading). En lugar de leer verticalmente una web desconocida, abrir nuevas pestañas para buscar qué dicen otras fuentes reputadas sobre ese sitio web. Uso de herramientas 'Whois' para ver quién registró el dominio.",
        eu: "Ikasgaia: Digitalizazioa (DBH 3).\n'Zeharkako Irakurketa' praktika. Webgune ezezagun bat bertikalki irakurri beharrean, fitxa berriak ireki beste iturri fidagarriek webgune horri buruz zer dioten bilatzeko. 'Whois' tresnen erabilera domeinua nork erregistratu zuen ikusteko.",
        en: "Subject: Digitalization (8th-9th Grade).\n'Lateral Reading' practice. Instead of reading an unknown site vertically, open tabs to search what trusted sources say about it. Use 'Whois' tools to check domain registration."
    },
    bachillerato: {
        es: "Materia: Mundo Contemporáneo / TDA.\nAnálisis crítico de fuentes académicas vs. divulgativas. Evaluación de artículos científicos rastreando su DOI, filiación de los autores y posibles conflictos de interés (financiación). Diferenciar un 'preprint' de un artículo revisado por pares.",
        eu: "Ikasgaia: Mundu Garaikidea / TDA.\nIturri akademiko vs. dibulgatzaileen analisi kritikoa. Artikulu zientifikoak ebaluatzea DOI, egileen afiliazioa eta interes-gatazka posibleak (finantzaketa) arakatuz. 'Preprint' bat eta parekideek berrikusitako artikulu bat bereiztea.",
        en: "Subject: Contemporary World.\nCritical analysis of academic vs. popular sources. Evaluate scientific papers by tracking DOI, author affiliation, and conflicts of interest. Differentiate preprint from peer-reviewed."
    }
  },
  'LO2.1.06': {
    primaria: {
        es: "Área: Lenguas Extranjeras.\nInteracción guiada con un chatbot educativo para practicar vocabulario básico en inglés. Identificar que la máquina responde a palabras clave específicas y no 'entiende' como un humano.",
        eu: "Arloa: Atzerriko Hizkuntzak.\nInterakzio gidatua hezkuntza-chatbot batekin ingelesezko oinarrizko hiztegia lantzeko. Makinak gako-hitz zehatzei erantzuten diela eta ez duela gizaki batek bezala 'ulertzen' identifikatzea.",
        en: "Area: Foreign Languages.\nGuided interaction with an educational chatbot to practice basic English vocabulary. Identify that the machine responds to specific keywords and doesn't 'understand' like a human."
    },
    eso: {
        es: "Materia: Atención Educativa / Valores Cívicos.\nAnálisis de chatbots de atención al cliente. Identificar patrones repetitivos y limitaciones en la empatía. Discusión sobre cuándo es preferible un humano vs. una IA.",
        eu: "Ikasgaia: Hezkuntza Arreta / Balio Zibikoak.\nBezeroarentzako arretarako chatbot-en analisia. Patroi errepikakorrak eta enpatiaren mugak identifikatzea. Gizaki bat vs. IA bat noiz den hobea eztabaidatzea.",
        en: "Subject: Civic Values.\nAnalysis of customer service chatbots. Identify repetitive patterns and limitations in empathy. Discussion on when a human vs. AI is preferable."
    },
    bachillerato: {
        es: "Materia: Economía / Empresa.\nEstudio de caso sobre la implementación de asistentes virtuales en la banca online. Análisis de reducción de costes vs. experiencia de usuario y exclusión digital de personas mayores.",
        eu: "Ikasgaia: Ekonomia / Enpresa.\nLineako bankan laguntzaile birtualen ezarpenari buruzko kasu-azterketa. Kostuen murrizketa vs. erabiltzailearen esperientzia eta adinekoen bazterketa digitala aztertzea.",
        en: "Subject: Economics.\nCase study on the implementation of virtual assistants in online banking. Analysis of cost reduction vs. user experience and digital exclusion of the elderly."
    }
  },
  'LO2.1.24': {
    primaria: {
        es: "Área: Matemáticas / Robótica (Adaptación al nivel).\nPensamiento Computacional: El alumnado debe dar instrucciones orales precisas a un compañero (que actúa como 'IA') para dibujar una figura geométrica compleja sin que este la vea. Aprenden que la ambigüedad en la instrucción ('dibuja una línea grande') lleva a errores, introduciendo la necesidad de precisión semántica.",
        eu: "Arloa: Matematika / Robotika.\nPentsamendu Konputazionala: Ikasleek ahozko argibide zehatzak eman behar dizkiote ikaskide bati ('IA' gisa) irudi geometriko konplexu bat marrazteko, hark ikusi gabe. Argibideetako anbiguotasunak erroreak dakarzkiela ikasten dute.",
        en: "Area: Math / Robotics.\nComputational Thinking: Students give precise oral instructions to a peer (acting as 'AI') to draw a geometric shape. They learn that ambiguity leads to errors, introducing semantic precision."
    },
    eso: {
        es: "Materia: Tecnología y Digitalización (4º ESO).\nIngeniería de Prompts Básica: Taller de generación de imágenes o texto. Comparar el resultado de 'Un perro en el espacio' vs. 'Fotografía realista de un Golden Retriever con traje de astronauta flotando en la ISS, iluminación cinemática, 4k'. Iterar el prompt para ajustar el estilo y contenido.",
        eu: "Ikasgaia: Teknologia eta Digitalizazioa (DBH 4).\nOinarrizko Prompt Ingeniaritza: Irudi edo testu sorkuntza tailerra. 'Txakur bat espazioan' eta 'Golden Retriever baten argazki errealista astronauta jantziarekin ISS-n flotatzen, argiztapen zinematikoa, 4k' konparatu. Prompt-a findu emaitza doitzeko.",
        en: "Subject: Technology.\nBasic Prompt Engineering: Compare 'A dog in space' vs 'Realistic photo of a Golden Retriever in astronaut suit floating in ISS, cinematic lighting, 4k'. Iterate prompt to adjust style."
    },
    bachillerato: {
        es: "Materia: Ciencias de la Computación / Proyectos.\nPrompt Chaining (Encadenamiento): Diseñar un flujo de trabajo complejo donde la salida de la IA se usa como entrada para el siguiente paso. Ejemplo: 1. Resumir un texto técnico complejo. 2. Extraer los 5 conceptos clave del resumen. 3. Generar preguntas de examen tipo test basadas solo en esos conceptos. Documentar y refinar las alucinaciones en cada paso.",
        eu: "Ikasgaia: Konputazio Zientziak.\nPrompt Chaining (Kateatzea): Lan-fluxu konplexu bat diseinatu, non IAren irteera hurrengo urratsaren sarrera den. Adib: 1. Testu tekniko bat laburtu. 2. Gako-kontzeptuak atera. 3. Test motako galderak sortu kontzeptu horietan oinarrituta.",
        en: "Subject: Computer Science.\nPrompt Chaining: Design a workflow where AI output serves as input for the next step. Ex: 1. Summarize text. 2. Extract keywords. 3. Generate quiz questions based on keywords."
    }
  },
  'LO3.1.06': {
    primaria: {
        es: "Área: Lengua y Literatura.\nEscritura creativa: Usar una herramienta de IA para generar el inicio de un cuento y que los alumnos lo terminen, corrigiendo incoherencias o elementos que no tengan sentido en su contexto cultural.",
        eu: "Arloa: Hizkuntza eta Literatura.\nIdazketa sortzailea: IA tresna bat erabili ipuin baten hasiera sortzeko eta ikasleek amaitu dezatela, inkoherentziak edo beren kultur testuinguruan zentzurik ez duten elementuak zuzenduz.",
        en: "Area: Language.\nCreative writing: Use an AI tool to generate a story starter and have students finish it, correcting inconsistencies or elements that make no sense in their cultural context."
    },
    eso: {
        es: "Materia: Plástica, Visual y Audiovisual.\nGeneración de imágenes con IA para un cartel escolar. Los alumnos deben editar el resultado para asegurar que cumple con las normas de convivencia del centro (ej. diversidad, no violencia) que la IA podría haber pasado por alto.",
        eu: "Ikasgaia: Plastika, Ikus-entzunezkoak.\nEskolako kartel baterako irudiak IA bidez sortzea. Ikasleek emaitza editatu behar dute ikastetxeko bizikidetza-arauak betetzen dituela ziurtatzeko (adib. aniztasuna, indarkeriarik eza).",
        en: "Subject: Visual Arts.\nAI image generation for a school poster. Students must edit the result to ensure it complies with school coexistence rules (e.g., diversity, non-violence) that AI might have missed."
    },
    bachillerato: {
        es: "Materia: Filosofía / Proyectos Artísticos.\nDebate y ensayo sobre la autoría y la ética. Generar un ensayo filosófico con IA y realizar una 'corrección crítica' identificando sesgos culturales anglocéntricos o falta de profundidad ética en los argumentos.",
        eu: "Ikasgaia: Filosofia / Proiektu Artistikoak.\nEgiletzari eta etikari buruzko eztabaida eta saiakera. IA bidez saiakera filosofiko bat sortu eta 'zuzenketa kritikoa' egin, alborapen kultural anglozentrikoak edo argudioetan sakontasun etikorik eza identifikatuz.",
        en: "Subject: Philosophy.\nDebate and essay on authorship and ethics. Generate a philosophical essay with AI and perform a 'critical correction' identifying Anglocentric cultural biases or lack of ethical depth."
    }
  },
  'LO4.2.03': {
    primaria: {
        es: "Área: Tutoría / Convivencia.\nTaller sobre 'Huella Digital'. Explicar que subir una foto a una app de 'envejecer caras' implica dar datos biométricos a una empresa desconocida.",
        eu: "Arloa: Tutoretza / Bizikidetza.\n'Aztarna Digitalari' buruzko tailerra. Azaldu 'aurpegiak zahartzeko' aplikazio batera argazki bat igotzeak datu biometrikoak enpresa ezezagun bati ematea dakarrela.",
        en: "Area: Tutorial.\nWorkshop on 'Digital Footprint'. Explain that uploading a photo to a 'face aging' app implies giving biometric data to an unknown company."
    },
    eso: {
        es: "Materia: Digitalización.\nAnálisis de los Términos de Servicio de redes sociales populares (TikTok/Instagram). Identificar cláusulas sobre cómo la IA usa sus datos para entrenar algoritmos de recomendación y publicidad.",
        eu: "Ikasgaia: Digitalizazioa.\nSare sozial ezagunen (TikTok/Instagram) Zerbitzu-baldintzen analisia. IAk beren datuak gomendio-algoritmoak eta publizitatea entrenatzeko nola erabiltzen dituen buruzko klausulak identifikatzea.",
        en: "Subject: Digitalization.\nAnalysis of Terms of Service of popular social networks. Identify clauses on how AI uses their data to train recommendation and advertising algorithms."
    },
    bachillerato: {
        es: "Materia: Ciudadanía Digital (Transversal).\nInvestigación sobre 'Deepfakes' y suplantación de identidad. Riesgos de compartir grabaciones de voz o vídeo de alta calidad que puedan ser usados para entrenar modelos de suplantación.",
        eu: "Ikasgaia: Herritartasun Digitala.\n'Deepfake'-ei eta identitate-ordezkapenari buruzko ikerketa. Ordezkapen-ereduak entrenatzeko erabil daitezkeen kalitate handiko ahots- edo bideo-grabazioak partekatzearen arriskuak.",
        en: "Subject: Digital Citizenship.\nResearch on 'Deepfakes' and identity theft. Risks of sharing high-quality voice or video recordings that can be used to train impersonation models."
    }
  },
  'LO5.1.01': {
    primaria: {
        es: "Área: Competencia Digital (Transversal).\nNormalización del error: Cuando la pizarra digital no funciona o el Chromebook no conecta, mantener la calma y seguir un protocolo sencillo (verificar cables, reiniciar) antes de llamar al docente.",
        eu: "Arloa: Gaitasun Digitala.\nErrorearen normalizazioa: Arbel digitalak funtzionatzen ez duenean edo Chromebook-a konektatzen ez denean, lasaitasuna mantendu eta protokolo erraz bat jarraitu (kableak egiaztatu, berrabiarazi) irakasleari deitu aurretik.",
        en: "Area: Digital Competence.\nNormalizing errors: When the smartboard doesn't work or the Chromebook doesn't connect, stay calm and follow a simple protocol (check cables, restart) before calling the teacher."
    },
    eso: {
        es: "Materia: Tecnología.\nResolución de problemas de conectividad en el aula. Crear un diagrama de flujo para diagnosticar por qué no carga una página web (¿es el WiFi? ¿el servidor? ¿el navegador?).",
        eu: "Ikasgaia: Teknologia.\nIkasgelako konektibitate-arazoen ebazpena. Fluxu-diagrama bat sortzea webgune bat zergatik ez den kargatzen diagnostikatzeko (WiFi-a da? zerbitzaria? arakatzailea?).",
        en: "Subject: Technology.\nResolving connectivity problems in the classroom. Create a flow chart to diagnose why a web page isn't loading (is it WiFi? Server? Browser?)."
    },
    bachillerato: {
        es: "Materia: TIC.\nGestión de incidencias en proyectos colaborativos. Si un archivo compartido se corrompe o se pierden versiones, utilizar el historial de versiones de la nube para restaurar el trabajo sin frustración.",
        eu: "Ikasgaia: IKT.\nIntzidentzien kudeaketa lankidetza-proiektuetan. Partekatutako fitxategi bat hondatzen bada edo bertsioak galtzen badira, hodeiko bertsio-historia erabili lana berreskuratzeko frustraziorik gabe.",
        en: "Subject: ICT.\nIncident management in collaborative projects. If a shared file gets corrupted or versions are lost, use the cloud version history to restore work without frustration."
    }
  },
  'LO5.3.14': {
    primaria: {
        es: "Área: Proyectos Transversales (Precursor).\nAprendizaje Servicio: Liderar (con ayuda docente) una campaña sencilla de reciclaje en el centro, utilizando herramientas digitales para crear carteles (Canva) y explicar a los compañeros más pequeños cómo clasificar residuos.",
        eu: "Arloa: Zeharkako Proiektuak.\nZerbitzu-ikaskuntza: Birziklapen-kanpaina erraz bat gidatu ikastetxeko, tresna digitalak erabiliz kartelak sortzeko eta ikaskide txikiagoei hondakinak nola sailkatu azaltzeko.",
        en: "Area: Service Learning.\nLead a simple recycling campaign at school using digital tools to create posters and explain waste sorting to younger peers."
    },
    eso: {
        es: "Materia: Tecnología y Digitalización (Proyectos STEAM).\nIdentificar una barrera arquitectónica en el barrio. Liderar un grupo para mapearla, diseñar una solución 3D o una app de denuncia (ej. App Inventor) y presentarla telemáticamente al Ayuntamiento.",
        eu: "Ikasgaia: Teknologia (STEAM).\nAuzoko oztopo arkitektoniko bat identifikatu. Talde bat gidatu hori mapeatzeko, 3D irtenbide bat edo salaketa-aplikazio bat diseinatzeko eta Udalari telematikoki aurkezteko.",
        en: "Subject: STEAM Projects.\nIdentify an architectural barrier. Lead a group to map it, design a 3D solution or reporting app, and present it to the City Council."
    },
    bachillerato: {
        es: "Materia: Proyectos de Investigación / Tecnología Industrial.\nLiderazgo en Innovación: Coordinar un proyecto complejo (ej. automatización del riego del huerto escolar con Arduino/IoT). Gestionar roles del equipo, cronograma (Gantt digital), presupuesto y resolución de incidencias técnicas imprevistas.",
        eu: "Ikasgaia: Ikerketa Proiektuak.\nBerrikuntzan Lidergoa: Proiektu konplexu bat koordinatu (adib. eskolako baratzearen ureztatze automatizatua Arduino/IoT bidez). Taldearen rolak, egutegia eta aurrekontua kudeatu.",
        en: "Subject: Research Projects.\nLeadership in Innovation: Coordinate a complex project (e.g., school garden automation with IoT). Manage team roles, schedule, budget, and unforeseen technical issues."
    }
  }
};

// Raw data format: [ID, English Desc, Spanish Desc, Level, KSA, AI Label]
// This list contains all items from DigComp 3.0
const RAW_OUTCOMES: string[][] = [
  // 1.1 Browsing
  ['LO1.1.01', 'Acknowledge the benefits of using different digital search tools and methods, depending on one’s purpose.', 'Reconocer los beneficios de usar diferentes herramientas y métodos de búsqueda digital, dependiendo del propósito.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO1.1.02', 'Recognise that the results or outputs of a search depend on the digital search tool used and the way that an individual specifies the search.', 'Reconocer que los resultados o salidas de una búsqueda dependen de la herramienta de búsqueda digital utilizada y la forma en que el individuo especifica la búsqueda.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.1.03', 'Recognise that search results or outputs can contain information that may not be relevant.', 'Reconocer que los resultados o salidas de búsqueda pueden contener información que puede no ser relevante.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.1.04', 'Identify the main features of commonly-used AI-driven and traditional digital search tools.', 'Identificar las características principales de las herramientas de búsqueda digital tradicionales y basadas en IA de uso común.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO1.1.05', 'Use digital search tools to implement basic information searches.', 'Utilizar herramientas de búsqueda digital para implementar búsquedas de información básicas.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO1.1.06', 'Use digital search tools to refine or update existing results or outputs.', 'Utilizar herramientas de búsqueda digital para refinar o actualizar resultados o salidas existentes.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO1.1.07', 'Purposefully explore new digital search tools and search functionalities.', 'Explorar intencionadamente nuevas herramientas de búsqueda digital y funcionalidades de búsqueda.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO1.1.08', 'Identify strategies that provide more relevant digital search results or outputs.', 'Identificar estrategias que proporcionan resultados o salidas de búsqueda digital más relevantes.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.1.09', 'Distinguish between more and less relevant digital search results or outputs.', 'Distinguir entre resultados o salidas de búsqueda digital más y menos relevantes.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.1.10', 'Select appropriate digital search tools based on information needs.', 'Seleccionar herramientas de búsqueda digital apropiadas según las necesidades de información.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.1.11', 'Translate information needs into effective digital search queries, commands or statements.', 'Traducir las necesidades de información en consultas, comandos o declaraciones de búsqueda digital efectivas.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.1.12', 'Apply appropriate strategies to refine or filter existing digital results or outputs.', 'Aplicar estrategias apropiadas para refinar o filtrar resultados o salidas digitales existentes.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.1.13', 'Continually explore functions and features of familiar and novel digital search tools.', 'Explorar continuamente funciones y características de herramientas de búsqueda digital familiares y novedosas.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.1.14', 'Prioritise deepening one’s existing search capabilities.', 'Priorizar la profundización de las capacidades de búsqueda existentes.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.1.15', 'Combine a variety of digital search tools and strategies to address complex information needs.', 'Combinar una variedad de herramientas y estrategias de búsqueda digital para abordar necesidades de información complejas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.16', 'Assist others in developing their digital search capabilities.', 'Ayudar a otros a desarrollar sus capacidades de búsqueda digital.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.17', 'Stay informed about developments in digital search technologies.', 'Mantenerse informado sobre los desarrollos en tecnologías de búsqueda digital.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.1.18', 'Assess and evaluate developments in digital search technologies in a given context to support decision-making.', 'Valorar y evaluar los desarrollos en tecnologías de búsqueda digital en un contexto dado para apoyar la toma de decisiones.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.19', 'Combine a variety of digital search tools and strategies to address highly complex or specialised information needs.', 'Combinar una variedad de herramientas y estrategias de búsqueda digital para abordar necesidades de información altamente complejas o especializadas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.20', 'Assist others to implement and refine complex or specialised searches in digital environments.', 'Ayudar a otros a implementar y refinar búsquedas complejas o especializadas en entornos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.21', 'Contribute to improvements in or new solutions for complex or specialised searches in digital environments.', 'Contribuir a mejoras o nuevas soluciones para búsquedas complejas o especializadas en entornos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 1.2 Evaluating
  ['LO1.2.01', 'Acknowledge the benefits of a cautious approach in interpreting information and content in digital environments.', 'Reconocer los beneficios de un enfoque cauteloso al interpretar información y contenido en entornos digitales.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO1.2.02', 'Distinguish between the source of digital content, and digital content itself.', 'Distinguir entre la fuente del contenido digital y el contenido digital en sí.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.03', 'Recognise that some digital information sources and systems may not be trustworthy.', 'Reconocer que algunas fuentes y sistemas de información digital pueden no ser confiables.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.04', 'Recognise that it can be difficult to distinguish between information and content generated by humans and AI systems.', 'Reconocer que puede ser difícil distinguir entre información y contenido generado por humanos y sistemas de IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.05', 'Recognise examples of misinformation, disinformation, and sources of bias.', 'Reconocer ejemplos de desinformación, información errónea y fuentes de sesgo.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.06', 'Recognise examples of social media influencing and filter bubbles.', 'Reconocer ejemplos de influencia en redes sociales y burbujas de filtro.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.07', 'Make a basic assessment of the reliability and credibility of digital information sources and content.', 'Realizar una evaluación básica de la fiabilidad y credibilidad de las fuentes y el contenido de información digital.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO1.2.08', 'Acknowledge the benefits of questioning the credibility and reliability of information and content and their sources in digital environments.', 'Reconocer los beneficios de cuestionar la credibilidad y fiabilidad de la información y el contenido y sus fuentes en entornos digitales.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO1.2.09', 'Recognise potential consequences of misinformation and disinformation in digital environments for oneself and others.', 'Reconocer las posibles consecuencias de la desinformación y la información errónea en entornos digitales para uno mismo y para los demás.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.10', 'Describe methods to identify the source of information found online.', 'Describir métodos para identificar la fuente de información encontrada en línea.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.11', 'Define the purposes of fact-checking services.', 'Definir los propósitos de los servicios de verificación de hechos.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.12', 'Recognise the concepts and purposes of pre-bunking and de-bunking in digital contexts.', 'Reconocer los conceptos y propósitos del pre-bunking (pre-desmentido) y de-bunking (desmentido) en contextos digitales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.13', 'Recognise that the data used to train AI systems and how they are trained affects the reliability of the information they provide.', 'Reconocer que los datos utilizados para entrenar sistemas de IA y cómo se entrenan afectan la fiabilidad de la información que proporcionan.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.14', 'Recognise that some digital technologies, such as AI systems, may function like a ‘black box’, making it difficult to explain why or how an output has been produced.', 'Reconocer que algunas tecnologías digitales, como los sistemas de IA, pueden funcionar como una "caja negra", dificultando explicar por qué o cómo se ha producido una salida.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.15', 'Identify examples of human (cognitive, affective) bias and AI system (data, training) bias in relation to the generation and interpretation of information.', 'Identificar ejemplos de sesgo humano (cognitivo, afectivo) y sesgo del sistema de IA (datos, entrenamiento) en relación con la generación e interpretación de información.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.16', 'Recognise that AI systems may produce output which is inaccurate, even if it may seem plausible.', 'Reconocer que los sistemas de IA pueden producir resultados inexactos, incluso si parecen plausibles.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.17', 'Recognise that the humans using an AI system are responsible for checking the quality and validity of information and content generated.', 'Reconocer que los humanos que utilizan un sistema de IA son responsables de verificar la calidad y validez de la información y el contenido generado.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.18', 'Recognise the presence of user-directing strategies in digital environments such as clickbait, nudging and gamification.', 'Reconocer la presencia de estrategias dirigidas al usuario en entornos digitales, como clickbait, nudging (empujoncitos) y gamificación.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.19', 'Apply pre-bunking and de-bunking strategies to discard or discredit unreliable sources and content in digital environments.', 'Aplicar estrategias de pre-bunking y de-bunking para descartar o desacreditar fuentes y contenidos no confiables en entornos digitales.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.2.20', 'Respond effectively to user-directing strategies in digital environments such as clickbait, nudging and gamification.', 'Responder eficazmente a estrategias dirigidas al usuario en entornos digitales, como clickbait, nudging y gamificación.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.2.21', 'Critically assess the reliability of sources, information and content in digital environments, considering the role of AI systems, personalisation effects, and commercial or other interests.', 'Evaluar críticamente la fiabilidad de fuentes, información y contenido en entornos digitales, considerando el papel de los sistemas de IA, los efectos de personalización e intereses comerciales u otros.', 'Intermediate', 'Skill', 'AI-Explicit'],
  ['LO1.2.22', 'Continually scrutinise how AI systems, biases, and various interests shape generation, presentation and interpretation of information and content in digital environments.', 'Escrutar continuamente cómo los sistemas de IA, los sesgos y diversos intereses moldean la generación, presentación e interpretación de información y contenido en entornos digitales.', 'Advanced', 'Attitude', 'AI-Explicit'],
  ['LO1.2.23', 'Describe personal, social and political consequences of misinformation, disinformation, sources of bias, social media influencing and filter bubbles.', 'Describir las consecuencias personales, sociales y políticas de la desinformación, la información errónea, las fuentes de sesgo, la influencia en redes sociales y las burbujas de filtro.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.24', 'Describe features of trustworthy digital technologies, such as AI systems.', 'Describir características de tecnologías digitales confiables, como los sistemas de IA.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.25', 'Describe methods that can be used to identify deep-fakes.', 'Describir métodos que se pueden utilizar para identificar deep-fakes.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.26', 'Thoroughly assess the reliability and accuracy of a diversity of sources, information and content in digital environments, considering a range of potential influencing factors.', 'Evaluar exhaustivamente la fiabilidad y precisión de una diversidad de fuentes, información y contenido en entornos digitales, considerando una gama de posibles factores de influencia.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.2.27', 'Support others to develop their capabilities to assess the reliability of sources, information and content in digital environments.', 'Apoyar a otros para desarrollar sus capacidades para evaluar la fiabilidad de fuentes, información y contenido en entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.2.28', 'Promote and support the development of resilience to misinformation and disinformation in digital environments among individuals and/or groups.', 'Promover y apoyar el desarrollo de resiliencia ante la desinformación y la información errónea en entornos digitales entre individuos y/o grupos.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.2.29', 'Systematically assess and evaluate sources, information and content in digital environments to support complex decision-making.', 'Valorar y evaluar sistemáticamente fuentes, información y contenido en entornos digitales para apoyar la toma de decisiones complejas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.2.30', 'Help others to develop capabilities to critically evaluate information and content in digital environments.', 'Ayudar a otros a desarrollar capacidades para evaluar críticamente información y contenido en entornos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.2.31', 'Lead or contribute to initiatives that support accurate interpretation of data, information, and content in digital environments.', 'Liderar o contribuir a iniciativas que apoyen la interpretación precisa de datos, información y contenido en entornos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 1.3 Managing
  ['LO1.3.01', 'Acknowledge the benefits of managing and organising information in digital environments.', 'Reconocer los beneficios de gestionar y organizar información en entornos digitales.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO1.3.02', 'Recognise functions of data removal, restoration and backup.', 'Reconocer las funciones de eliminación, restauración y copia de seguridad de datos.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.03', 'Identify main properties of digital files and folders.', 'Identificar las propiedades principales de archivos y carpetas digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.04', 'Recognise, in general terms, the concept of data.', 'Reconocer, en términos generales, el concepto de datos.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.05', 'Download, save, retrieve, move and delete digital files.', 'Descargar, guardar, recuperar, mover y eliminar archivos digitales.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.06', 'Organise and format simple data in a structured digital environment, such as in spreadsheets.', 'Organizar y formatear datos simples en un entorno digital estructurado, como en hojas de cálculo.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.07', 'Update one’s contacts, such as on phone, email or social media.', 'Actualizar los contactos propios, como en el teléfono, correo electrónico o redes sociales.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.08', 'Acknowledge the importance of careful and ethical management of data and information in digital environments.', 'Reconocer la importancia de la gestión cuidadosa y ética de datos e información en entornos digitales.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO1.3.09', 'Recognise that digital files and folders can be (re-)named and organised in a manner desired by the user.', 'Reconocer que los archivos y carpetas digitales pueden ser (re)nombrados y organizados de la manera deseada por el usuario.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.10', 'Recognise that digital files can be saved to different locations (devices, external storage and cloud services) and transferred from one location to another.', 'Reconocer que los archivos digitales pueden guardarse en diferentes ubicaciones (dispositivos, almacenamiento externo y servicios en la nube) y transferirse de una ubicación a otra.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.11', 'Identify common data collection tools and their main functions.', 'Identificar herramientas comunes de recolección de datos y sus funciones principales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.12', 'Define responsibilities associated with using data collection tools.', 'Definir responsabilidades asociadas con el uso de herramientas de recolección de datos.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.13', 'Identify common types of data and their formats.', 'Identificar tipos comunes de datos y sus formatos.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.14', 'Apply naming conventions to digital files and hierarchies to digital folders.', 'Aplicar convenciones de nomenclatura a archivos digitales y jerarquías a carpetas digitales.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.15', 'Manage, save and delete files on digital devices, external storage, and cloud services.', 'Gestionar, guardar y eliminar archivos en dispositivos digitales, almacenamiento externo y servicios en la nube.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.16', 'Manage information in one’s digital accounts, such as email.', 'Gestionar información en las cuentas digitales propias, como el correo electrónico.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.17', 'Use data collection tools for simple processing of data and information such as quizzes, polls or surveys.', 'Utilizar herramientas de recolección de datos para el procesamiento simple de datos e información, como cuestionarios, sondeos o encuestas.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.3.18', 'Organise and format data in a structured digital environment, such as in spreadsheets.', 'Organizar y formatear datos en un entorno digital estructurado, como en hojas de cálculo.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.19', 'Apply basic formulas to data in a structured digital environment, such as in spreadsheets.', 'Aplicar fórmulas básicas a datos en un entorno digital estructurado, como en hojas de cálculo.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.20', 'Prioritise ethical and transparent management and processing of data and information in digital environments.', 'Priorizar la gestión y el procesamiento ético y transparente de datos e información en entornos digitales.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.3.21', 'Take account of potential sources of error or inaccuracy in management and processing of data and information in digital environments.', 'Tener en cuenta las posibles fuentes de error o inexactitud en la gestión y procesamiento de datos e información en entornos digitales.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.3.22', 'Identify possible sources of error or inaccuracy in information or data in digital environments.', 'Identificar posibles fuentes de error o inexactitud en la información o datos en entornos digitales.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.23', 'Describe the main steps in managing, processing and analysing information and data in digital environments.', 'Describir los pasos principales en la gestión, procesamiento y análisis de información y datos en entornos digitales.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.24', 'Describe features of open data (examples, applications, benefits and limitations).', 'Describir características de datos abiertos (ejemplos, aplicaciones, beneficios y limitaciones).', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.25', 'Describe features of big data (examples, applications, benefits and limitations).', 'Describir características de big data (ejemplos, aplicaciones, beneficios y limitaciones).', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.26', 'Apply a variety of functions to transfer and manage data and information in digital environments.', 'Aplicar una variedad de funciones para transferir y gestionar datos e información en entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.27', 'Use a range of digital tools and methods to collect and process a variety of data and information.', 'Utilizar una gama de herramientas y métodos digitales para recolectar y procesar una variedad de datos e información.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.28', 'Apply appropriate analysis of information and data in digital environments to contribute to complex decision-making.', 'Aplicar análisis apropiado de información y datos en entornos digitales para contribuir a la toma de decisiones complejas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.29', 'Assist others with data and information management, processing and analysis in digital environments.', 'Ayudar a otros con la gestión, procesamiento y análisis de datos e información en entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.30', 'Acknowledge the importance of structuring and documenting data and information in digital environments for the benefit of others.', 'Reconocer la importancia de estructurar y documentar datos e información en entornos digitales para el beneficio de otros.', 'Highly advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO1.3.31', 'Stay informed about digital technological developments in data and information management and analysis.', 'Mantenerse informado sobre los desarrollos tecnológicos digitales en la gestión y análisis de datos e información.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.3.32', 'Develop and implement strategies for complex or specialised data and information management, processing and analysis in digital environments.', 'Desarrollar e implementar estrategias para la gestión, procesamiento y análisis de datos e información complejos o especializados en entornos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.33', 'Use a variety of tools and methods such as big data techniques or simulations to process, manage or analyse complex data or large volumes of information.', 'Utilizar una variedad de herramientas y métodos como técnicas de big data o simulaciones para procesar, gestionar o analizar datos complejos o grandes volúmenes de información.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.34', 'Lead or contribute to initiatives that support others in advanced information and data management, processing and analysis in digital environments.', 'Liderar o contribuir a iniciativas que apoyen a otros en la gestión, procesamiento y análisis avanzado de información y datos en entornos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.35', 'Contribute to improvements in or new solutions for complex data management, processing or analysis in digital environments.', 'Contribuir a mejoras o nuevas soluciones para la gestión, procesamiento o análisis de datos complejos en entornos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 2.1 Interacting
  ['LO2.1.01', 'Acknowledge the importance of taking others’ preferences into account in digital communication.', 'Reconocer la importancia de tener en cuenta las preferencias de los demás en la comunicación digital.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.1.02', 'Distinguish between synchronous and asynchronous forms of digital communication.', 'Distinguir entre formas síncronas y asíncronas de comunicación digital.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.1.03', 'Identify differences between digital and non-digital interactions.', 'Identificar diferencias entre interacciones digitales y no digitales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.04', 'Distinguish between physical and virtual realities.', 'Distinguir entre realidades físicas y virtuales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.05', 'Identify basic features and functions of digital communication tools.', 'Identificar características y funciones básicas de herramientas de comunicación digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.06', 'Identify basic features of virtual assistants (chatbots) and AI systems used in communication contexts.', 'Identificar características básicas de asistentes virtuales (chatbots) y sistemas de IA utilizados en contextos de comunicación.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO2.1.07', 'Recognise key differences between human-to-machine and human-to-human interactions.', 'Reconocer diferencias clave entre interacciones humano-máquina y humano-humano.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.08', 'Recognise in general terms what a robot is, including their non-human nature.', 'Reconocer en términos generales qué es un robot, incluida su naturaleza no humana.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.1.09', 'Recognise that humans interact with robots in order to carry out tasks.', 'Reconocer que los humanos interactúan con robots para llevar a cabo tareas.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.1.10', 'Use basic features of digital communication tools to interact with individuals and groups.', 'Utilizar características básicas de herramientas de comunicación digital para interactuar con individuos y grupos.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO2.1.11', 'Acknowledge the importance of tailoring one’s digital communication to specific contexts.', 'Reconocer la importancia de adaptar la comunicación digital propia a contextos específicos.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.1.12', 'Recognise that there is a reality-virtuality continuum in digital environments.', 'Reconocer que existe un continuo realidad-virtualidad en entornos digitales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.13', 'Describe main features and functions of a range of digital communication tools.', 'Describir las características y funciones principales de una gama de herramientas de comunicación digital.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.14', 'Describe benefits and limitations of virtual assistants (chatbots) and AI systems in digital communication contexts.', 'Describir beneficios y limitaciones de asistentes virtuales (chatbots) y sistemas de IA en contextos de comunicación digital.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO2.1.15', 'Identify contexts in which asynchronous or synchronous digital communication, or non-digital communication, may work best.', 'Identificar contextos en los que la comunicación digital asíncrona o síncrona, o la comunicación no digital, puede funcionar mejor.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.1.16', 'Identify key features of robots (such as sensors, software, motion controls and human interface).', 'Identificar características clave de robots (como sensores, software, controles de movimiento e interfaz humana).', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.17', 'Define examples of how humans can interact with robots.', 'Definir ejemplos de cómo los humanos pueden interactuar con robots.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.18', 'Recognise that robots can operate with varying degrees of autonomy.', 'Reconocer que los robots pueden operar con diversos grados de autonomía.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.19', 'Select suitable communication means and tools, considering digital and non-digital options, for a given context or purpose.', 'Seleccionar medios y herramientas de comunicación adecuados, considerando opciones digitales y no digitales, para un contexto o propósito dado.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.1.20', 'Develop and refine questions, commands or statements (prompts) for virtual assistants (chatbots) and AI systems to support non-complex digital interactions.', 'Desarrollar y refinar preguntas, comandos o declaraciones (prompts) para asistentes virtuales (chatbots) y sistemas de IA para apoyar interacciones digitales no complejas.', 'Intermediate', 'Skill', 'AI-Explicit'],
  ['LO2.1.21', 'Use multiple features of a variety of digital communication tools to interact with and manage individuals, groups and channels.', 'Utilizar múltiples características de una variedad de herramientas de comunicación digital para interactuar y gestionar individuos, grupos y canales.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.1.22', 'Continually adapt communication in digital environments in response to a variety of contexts.', 'Adaptar continuamente la comunicación en entornos digitales en respuesta a una variedad de contextos.', 'Advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.1.23', 'Combine digital communication tools and methods for complex communication tasks.', 'Combinar herramientas y métodos de comunicación digital para tareas de comunicación complejas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.24', 'Systematically develop and progressively refine questions, commands or statements (prompts) for AI systems to handle complex digital interactions.', 'Desarrollar sistemáticamente y refinar progresivamente preguntas, comandos o declaraciones (prompts) para sistemas de IA para manejar interacciones digitales complejas.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO2.1.25', 'Assess benefits and disadvantages of robotic applications in a specific context.', 'Evaluar beneficios y desventajas de aplicaciones robóticas en un contexto específico.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.26', 'Assist others to assess and select suitable digital communication tools for a given purpose.', 'Ayudar a otros a evaluar y seleccionar herramientas de comunicación digital adecuadas para un propósito dado.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.27', 'Organise and/or moderate complex digital events.', 'Organizar y/o moderar eventos digitales complejos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.28', 'Stay informed about developments in digital communication and interaction tools and methods.', 'Mantenerse informado sobre desarrollos en herramientas y métodos de comunicación e interacción digital.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.1.29', 'Assess and combine digital communication and interaction tools for highly complex or novel tasks.', 'Evaluar y combinar herramientas de comunicación e interacción digital para tareas altamente complejas o novedosas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.30', 'Provide guidance, support or leadership in the advanced use of digital communication and interaction tools.', 'Proporcionar orientación, apoyo o liderazgo en el uso avanzado de herramientas de comunicación e interacción digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.31', 'Lead or contribute to improvements in or new solutions for digital communication or human-machine interaction.', 'Liderar o contribuir a mejoras o nuevas soluciones para la comunicación digital o la interacción humano-máquina.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 2.2 Sharing
  ['LO2.2.01', 'Acknowledge the importance of ethical and responsible sharing of information and content in digital environments.', 'Reconocer la importancia del intercambio ético y responsable de información y contenido en entornos digitales.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO2.2.02', 'Recognise benefits and risks of sharing information and content in digital environments.', 'Reconocer beneficios y riesgos de compartir información y contenido en entornos digitales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.2.03', 'Identify functions and uses of social media, and examples of common social media platforms.', 'Identificar funciones y usos de las redes sociales, y ejemplos de plataformas de redes sociales comunes.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.2.04', 'Recognise that individuals can choose how and what they would like to share through digital technologies.', 'Reconocer que los individuos pueden elegir cómo y qué les gustaría compartir a través de tecnologías digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.2.05', 'Recognise that information and content - not all of which is true or accurate - can be shared in a variety of ways by AI systems as well as humans.', 'Reconocer que la información y el contenido - no todo el cual es verdadero o exacto - pueden ser compartidos de diversas maneras tanto por sistemas de IA como por humanos.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO2.2.06', 'Identify purpose and target audience of information and content to be shared in digital environments.', 'Identificar propósito y audiencia objetivo de información y contenido para ser compartido en entornos digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.2.07', 'Use simple processes to share information and content in digital environments appropriately and in accordance with goals.', 'Utilizar procesos simples para compartir información y contenido en entornos digitales apropiadamente y de acuerdo con los objetivos.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.2.08', 'Acknowledge the importance of assessing the value and accuracy of information and content prior to sharing it in digital environments.', 'Reconocer la importancia de evaluar el valor y la precisión de la información y el contenido antes de compartirlo en entornos digitales.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.2.09', 'Define responsibilities associated with sharing information and content in digital environments.', 'Definir responsabilidades asociadas con compartir información y contenido en entornos digitales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.2.10', 'Describe effective and ethical ways to share information and content in a variety of digital environments.', 'Describir formas efectivas y éticas de compartir información y contenido en una variedad de entornos digitales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.2.11', 'Assess potential risks, benefits and ethical considerations of sharing information and content in a variety of digital environments.', 'Evaluar riesgos potenciales, beneficios y consideraciones éticas de compartir información y contenido en una variedad de entornos digitales.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.2.12', 'Effectively and ethically share information and content in a variety of digital environments.', 'Compartir información y contenido de manera efectiva y ética en una variedad de entornos digitales.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.2.13', 'Report or flag misinformation and disinformation that has been shared in digital environments.', 'Reportar o marcar desinformación e información errónea que ha sido compartida en entornos digitales.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.2.14', 'Acknowledge the value of sharing digital information and content to assist others, such as through Open Educational Resources (OER).', 'Reconocer el valor de compartir información y contenido digital para ayudar a otros, como a través de Recursos Educativos Abiertos (REA).', 'Advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.2.15', 'Effectively and ethically share information and content in digital environments to support personal, learning or professional goals of oneself and others.', 'Compartir información y contenido en entornos digitales de manera efectiva y ética para apoyar objetivos personales, de aprendizaje o profesionales propios y de otros.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.2.16', 'Advise others on effective and ethical ways to share information and content in digital environments.', 'Aconsejar a otros sobre formas efectivas y éticas de compartir información y contenido en entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.2.17', 'Explore new and alternative means for complex sharing information and content in digital environments.', 'Explorar medios nuevos y alternativos para compartir información y contenido complejo en entornos digitales.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.2.18', 'Facilitate complex sharing of information and content across a variety of digital technologies.', 'Facilitar el intercambio complejo de información y contenido a través de una variedad de tecnologías digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.2.19', 'Contribute to complex or specialised initiatives for sharing information and content in digital environments.', 'Contribuir a iniciativas complejas o especializadas para compartir información y contenido en entornos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.2.20', 'Lead or contribute to improvements in or new solutions for sharing complex information and content in digital environments.', 'Liderar o contribuir a mejoras o nuevas soluciones para compartir información y contenido complejo en entornos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 2.3 Citizenship
  ['LO2.3.01', 'Acknowledge the potential benefits of digital technologies for one’s own and others empowerment and participation.', 'Reconocer los beneficios potenciales de las tecnologías digitales para el empoderamiento y la participación propios y ajenos.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.3.02', 'Recognise digital citizenship as the ability to participate actively and responsibly in communities through engagement with digital technologies.', 'Reconocer la ciudadanía digital como la capacidad de participar activa y responsablemente en comunidades a través del compromiso con tecnologías digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.3.03', 'Identify examples of civic participation in digital environments.', 'Identificar ejemplos de participación cívica en entornos digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.3.04', 'Recognise that digital technologies - including difficulties in accessing them - can exclude certain groups or individuals.', 'Reconocer que las tecnologías digitales - incluyendo dificultades para acceder a ellas - pueden excluir a ciertos grupos o individuos.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.3.05', 'Recognise that there are laws and regulations to protect the rights of users of digital platforms and services.', 'Reconocer que existen leyes y regulaciones para proteger los derechos de los usuarios de plataformas y servicios digitales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.3.06', 'Identify main purposes and functions of (personally relevant) digital platforms and services.', 'Identificar propósitos principales y funciones de plataformas y servicios digitales (personalmente relevantes).', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.3.07', 'Recognise that individuals can play an active role in reviewing or improving online products and services.', 'Reconocer que los individuos pueden desempeñar un papel activo en la revisión o mejora de productos y servicios en línea.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.3.08', 'Use digital tools to search for and find communities for civic participation on issues of interest.', 'Utilizar herramientas digitales para buscar y encontrar comunidades para la participación cívica en temas de interés.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO2.3.09', 'Use (personally relevant) digital platforms and services, seeking assistance as needed.', 'Utilizar plataformas y servicios digitales (personalmente relevantes), buscando asistencia según sea necesario.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO2.3.10', 'Prioritise the exploration of ways that digital technologies can enhance one’s civic and societal participation.', 'Priorizar la exploración de formas en que las tecnologías digitales pueden mejorar la participación cívica y social propia.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO2.3.11', 'Acknowledge the importance of identifying excluded or marginalised people and groups in digital environments.', 'Reconocer la importancia de identificar personas y grupos excluidos o marginados en entornos digitales.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO2.3.12', 'Participate in discussions on digital citizenship topics.', 'Participar en discusiones sobre temas de ciudadanía digital.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO2.3.13', 'Recognise that digital participation is the active involvement in society through the use of digital technologies.', 'Reconocer que la participación digital es la involucración activa en la sociedad a través del uso de tecnologías digitales.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.3.14', 'Recognise that civic participation occurs along a continuum.', 'Reconocer que la participación cívica ocurre a lo largo de un continuo.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.3.15', 'Recognise key freedoms, rights and responsibilities of individuals under relevant digital laws and regulations.', 'Reconocer libertades clave, derechos y responsabilidades de los individuos bajo leyes y regulaciones digitales relevantes.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.3.16', 'Define how to exercise key rights in digital environments.', 'Definir cómo ejercer derechos clave en entornos digitales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.3.17', 'Describe the concept of the platform economy, including opportunities, risks, social and ethical implications.', 'Describir el concepto de la economía de plataformas, incluyendo oportunidades, riesgos, implicaciones sociales y éticas.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.3.18', 'Describe the concept and functions of civic monitoring.', 'Describir el concepto y funciones del monitoreo cívico.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.3.19', 'Describe the concept and functions of e-Government.', 'Describir el concepto y funciones del gobierno electrónico (e-Government).', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.3.20', 'Describe how digital technologies such as social media platforms can influence some aspects of basic democracy (for example, distortion of the electoral process).', 'Describir cómo las tecnologías digitales como las plataformas de redes sociales pueden influir en algunos aspectos de la democracia básica (por ejemplo, distorsión del proceso electoral).', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.3.21', 'Interact autonomously and effectively with digital platforms and services.', 'Interactuar de forma autónoma y efectiva con plataformas y servicios digitales.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.3.22', 'Assess opportunities, risks, social and ethical implications of the platform economy.', 'Evaluar oportunidades, riesgos, implicaciones sociales y éticas de la economía de plataformas.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.3.23', 'Prioritise the continual exploration of ways in which digital technologies can support empowerment or civic participation.', 'Priorizar la exploración continua de formas en que las tecnologías digitales pueden apoyar el empoderamiento o la participación cívica.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.3.24', 'Participate in discussions on digital technologies’ ethical, political and social implications.', 'Participar en discusiones sobre las implicaciones éticas, políticas y sociales de las tecnologías digitales.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.3.25', 'Distinguish between high-risk and prohibited AI systems (according to legislation).', 'Distinguir entre sistemas de IA de alto riesgo y prohibidos (según la legislación).', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO2.3.26', 'Describe potential societal, political or economic impacts of prohibited and high-risk AI systems.', 'Describir posibles impactos sociales, políticos o económicos de sistemas de IA prohibidos y de alto riesgo.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO2.3.27', 'Assess the potential of digital technologies for inclusion, exclusion, and civic intervention in a given context.', 'Evaluar el potencial de las tecnologías digitales para la inclusión, exclusión e intervención cívica en un contexto dado.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.3.28', 'Assess a range of ways in which digital technologies such as social media platforms can influence democratic processes.', 'Evaluar una gama de formas en que las tecnologías digitales como las plataformas de redes sociales pueden influir en los procesos democráticos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.3.29', 'Assist others to identify opportunities and participate in digital environments for (self or community) empowerment and participation.', 'Ayudar a otros a identificar oportunidades y participar en entornos digitales para el empoderamiento y participación (propia o comunitaria).', 'Advanced', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.3.30', 'Support others to inform themselves about and exercise their rights under digital legislation.', 'Apoyar a otros para informarse y ejercer sus derechos bajo la legislación digital.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.3.31', 'Stay informed about individuals’ freedoms, rights and responsibilities with evolving digital technologies and legislative developments.', 'Mantenerse informado sobre las libertades, derechos y responsabilidades de los individuos con tecnologías digitales en evolución y desarrollos legislativos.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.3.32', 'Evaluate multiple impacts of digital technologies on society, political processes or the economy from a range of perspectives.', 'Evaluar múltiples impactos de las tecnologías digitales en la sociedad, procesos políticos o la economía desde una gama de perspectivas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.3.33', 'Assist others to comprehend the main provisions of digital legislation, given a specific context.', 'Ayudar a otros a comprender las disposiciones principales de la legislación digital, dado un contexto específico.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.3.34', 'Lead or design digital citizenship initiatives, for example to promote participation, inclusion or empowerment.', 'Liderar o diseñar iniciativas de ciudadanía digital, por ejemplo para promover la participación, inclusión o empoderamiento.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 2.4 Collaborating
  ['LO2.4.01', 'Acknowledge the importance of effective communication skills for successful collaboration in digital environments.', 'Reconocer la importancia de habilidades de comunicación efectiva para una colaboración exitosa en entornos digitales.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.4.02', 'Recognise main benefits and limitations of digital collaboration tools.', 'Reconocer beneficios y limitaciones principales de las herramientas de colaboración digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.4.03', 'Recognise the presence of AI systems in digital collaboration tools.', 'Reconocer la presencia de sistemas de IA en herramientas de colaboración digital.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO2.4.04', 'Participate in collaborative groups via digital collaboration tools.', 'Participar en grupos colaborativos a través de herramientas de colaboración digital.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO2.4.05', 'Take account of different perspectives to help achieve a common goal in digital environments.', 'Tener en cuenta diferentes perspectivas para ayudar a lograr un objetivo común en entornos digitales.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.4.06', 'Identify main features and functions of a variety of digital collaboration tools.', 'Identificar características y funciones principales de una variedad de herramientas de colaboración digital.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.4.07', 'Recognise the functions, benefits and limitations of AI system functionalities in some digital collaboration tools.', 'Reconocer las funciones, beneficios y limitaciones de las funcionalidades del sistema de IA en algunas herramientas de colaboración digital.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO2.4.08', 'Identify examples of ethical, responsible and effective human-AI collaboration.', 'Identificar ejemplos de colaboración humano-IA ética, responsable y efectiva.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO2.4.09', 'Select digital collaboration tools that meet collaboration goals.', 'Seleccionar herramientas de colaboración digital que cumplan con los objetivos de colaboración.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.4.10', 'Create and manage simple collaborative tasks using digital collaboration tools.', 'Crear y gestionar tareas colaborativas simples utilizando herramientas de colaboración digital.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.4.11', 'Contribute effectively to simple collaborative tasks in digital environments.', 'Contribuir efectivamente a tareas colaborativas simples en entornos digitales.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.4.12', 'Prioritise a good fit between how digital collaboration tools are used and the preferences of individuals involved in collaboration.', 'Priorizar un buen ajuste entre cómo se utilizan las herramientas de colaboración digital y las preferencias de los individuos involucrados en la colaboración.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.4.13', 'Ensure appropriate and ethical use of digital technologies including AI systems for collaborative tasks.', 'Asegurar el uso apropiado y ético de tecnologías digitales, incluidos los sistemas de IA, para tareas colaborativas.', 'Advanced', 'Attitude', 'AI-Explicit'],
  ['LO2.4.14', 'Use and combine a variety of digital collaboration tools that meet the needs of projects, tasks and groups.', 'Utilizar y combinar una variedad de herramientas de colaboración digital que satisfagan las necesidades de proyectos, tareas y grupos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.4.15', 'Help others to develop their capabilities to collaborate in digital environments.', 'Ayudar a otros a desarrollar sus capacidades para colaborar en entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.4.16', 'Assess ethical and practical aspects of human-AI collaboration techniques for a given purpose.', 'Evaluar aspectos éticos y prácticos de técnicas de colaboración humano-IA para un propósito dado.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO2.4.17', 'Lead collaboration in digital environments.', 'Liderar la colaboración en entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.4.18', 'Stay informed about developments in collaborative practices in digital environments.', 'Mantenerse informado sobre desarrollos en prácticas colaborativas en entornos digitales.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.4.19', 'Promote and support proportionate, ethical and effective use of digital technologies, including AI systems, in collaborations.', 'Promover y apoyar el uso proporcional, ético y efectivo de tecnologías digitales, incluidos los sistemas de IA, en colaboraciones.', 'Highly advanced', 'Attitude', 'AI-Explicit'],
  ['LO2.4.20', 'Design complex or specialised strategies for collaboration in digital environments.', 'Diseñar estrategias complejas o especializadas para la colaboración en entornos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.4.21', 'Assist others to develop capabilities to lead collaboration in digital environments.', 'Ayudar a otros a desarrollar capacidades para liderar la colaboración en entornos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.4.22', 'Lead or contribute to improvements in or new solutions for human-AI collaboration.', 'Liderar o contribuir a mejoras o nuevas soluciones para la colaboración humano-IA.', 'Highly advanced', 'Skill', 'AI-Explicit'],
  // 2.5 Netiquette
  ['LO2.5.01', 'Acknowledge the importance of giving space to the opinions of others in digital environments.', 'Reconocer la importancia de dar espacio a las opiniones de otros en entornos digitales.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.5.02', 'Identify differences in verbal and non-verbal behaviours in digital and non-digital environments.', 'Identificar diferencias en comportamientos verbales y no verbales en entornos digitales y no digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.5.03', 'Recognise that there are cultural and contextual differences in verbal and non-verbal communication in digital environments.', 'Reconocer que existen diferencias culturales y contextuales en la comunicación verbal y no verbal en entornos digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.5.04', 'Recognise that some behaviour in digital environments may not be acceptable to others, and/or may have legal consequences.', 'Reconocer que algún comportamiento en entornos digitales puede no ser aceptable para otros, y/o puede tener consecuencias legales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.5.05', 'Use appropriate tone and visual expression such as emoji in formal and non-formal digital environments.', 'Utilizar tono y expresión visual apropiados, como emojis, en entornos digitales formales y no formales.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.5.06', 'Prioritise digital behaviours that support inclusion and a positive digital reputation of oneself and others.', 'Priorizar comportamientos digitales que apoyen la inclusión y una reputación digital positiva de uno mismo y de los demás.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.5.07', 'Identify key rights and responsibilities of children and adults in relation to digital behaviour.', 'Identificar derechos y responsabilidades clave de niños y adultos en relación con el comportamiento digital.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.5.08', 'Describe the relationship between digital behaviour and digital reputation.', 'Describir la relación entre el comportamiento digital y la reputación digital.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.5.09', 'Identify key rights and responsibilities of children and adults in relation to digital behaviour.', 'Identificar derechos y responsabilidades clave de niños y adultos en relación con el comportamiento digital.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.5.10', 'Use respectful and inclusive tone and visual expression such as emoji in formal and non-formal digital environments.', 'Utilizar un tono respetuoso e inclusivo y expresión visual, como emojis, en entornos digitales formales y no formales.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.5.11', 'Promote and support inclusive and respectful behaviour in digital environments.', 'Promover y apoyar un comportamiento inclusivo y respetuoso en entornos digitales.', 'Advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.5.12', 'Distinguish between ethical, legal and illegal behaviours in digital environments, recognising that these distinctions may be complex.', 'Distinguir entre comportamientos éticos, legales e ilegales en entornos digitales, reconociendo que estas distinciones pueden ser complejas.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO2.5.13', 'Identify types of abuse that can occur in digital environments, including affected groups and potential impacts.', 'Identificar tipos de abuso que pueden ocurrir en entornos digitales, incluyendo grupos afectados e impactos potenciales.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO2.5.14', 'Describe ways in which abuse in digital environments can be reported and tackled.', 'Describir formas en que el abuso en entornos digitales puede ser reportado y abordado.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO2.5.15', 'Respond with effective and respective communication and behaviour to difficult or complex situations in digital environments.', 'Responder con comunicación y comportamiento efectivo y respetuoso a situaciones difíciles o complejas en entornos digitales.', 'Advanced', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.5.16', 'Assess ethical and legal/illegal aspects of behaviour in digital environments in a specific context.', 'Evaluar aspectos éticos y legales/ilegales del comportamiento en entornos digitales en un contexto específico.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.5.17', 'Analyse patterns and potential impacts of abuse of specific groups in digital environments.', 'Analizar patrones e impactos potenciales del abuso a grupos específicos en entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.5.18', 'Support others to develop their capacities for inclusive and respectful behaviour in digital environments.', 'Apoyar a otros a desarrollar sus capacidades para un comportamiento inclusivo y respetuoso en entornos digitales.', 'Advanced', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.5.19', 'Stay informed about developments in policies and legislation relating to behaviour in digital environments.', 'Mantenerse informado sobre desarrollos en políticas y legislación relacionadas con el comportamiento en entornos digitales.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.5.20', 'Assist others to understand key rights and responsibilities under policies and legislation relating to digital behaviour in a given context.', 'Ayudar a otros a entender derechos y responsabilidades clave bajo políticas y legislación relacionadas con el comportamiento digital en un contexto dado.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.5.21', 'Lead or contribute to digital behaviour policies or initiatives.', 'Liderar o contribuir a políticas o iniciativas de comportamiento digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 2.6 Identity
  ['LO2.6.01', 'Acknowledge the benefits of implementing measures to help manage one’s digital identity.', 'Reconocer los beneficios de implementar medidas para ayudar a gestionar la identidad digital propia.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.6.02', 'Recognise features of physical and digital identities.', 'Reconocer características de identidades físicas y digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.6.03', 'Identify aspects of physical identity that can be linked to digital identity.', 'Identificar aspectos de la identidad física que pueden vincularse a la identidad digital.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.6.04', 'Recognise digital identity as both a method to authenticate (verify) an individual and the data generated by an individual’s online activities.', 'Reconocer la identidad digital como un método para autenticar (verificar) a un individuo y como los datos generados por las actividades en línea de un individuo.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.05', 'Identify common forms and uses of digital identity.', 'Identificar formas y usos comunes de la identidad digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.06', 'Recognise that information on the internet can persist over time.', 'Reconocer que la información en internet puede persistir a lo largo del tiempo.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.07', 'Recognise the concept and components of a digital footprint.', 'Reconocer el concepto y componentes de una huella digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.08', 'Recognise that digital identity protection laws protect individuals’ data and privacy.', 'Reconocer que las leyes de protección de identidad digital protegen los datos y la privacidad de los individuos.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.09', 'Identify simple measures such as limiting tracking and deleting browsing history to manage digital identity.', 'Identificar medidas simples como limitar el rastreo y eliminar el historial de navegación para gestionar la identidad digital.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.6.10', 'Implement simple measures such as limiting tracking and deleting browsing history to manage digital identity.', 'Implementar medidas simples como limitar el rastreo y eliminar el historial de navegación para gestionar la identidad digital.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.6.11', 'Acknowledge the importance of one’s own role and rights in the management of digital identity.', 'Reconocer la importancia del propio rol y derechos en la gestión de la identidad digital.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO2.6.12', 'Describe the relationships between digital footprint, digital reputation and digital identity.', 'Describir las relaciones entre huella digital, reputación digital e identidad digital.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.13', 'Identify examples of actively and passively generated information in relation to digital identity.', 'Identificar ejemplos de información generada activa y pasivamente en relación con la identidad digital.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.14', 'Describe ways in which the scope of one’s digital identity can be analysed.', 'Describir formas en las que el alcance de la identidad digital propia puede ser analizado.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.15', 'Identify features and functions used to manage digital identity, such as settings on devices and apps, online accounts, activity tracking and social media platforms.', 'Identificar características y funciones utilizadas para gestionar la identidad digital, como configuraciones en dispositivos y apps, cuentas en línea, seguimiento de actividad y plataformas de redes sociales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.16', 'Use information on the scope of one’s own digital identity to guide actions on digital identity management.', 'Utilizar información sobre el alcance de la propia identidad digital para guiar acciones en la gestión de la identidad digital.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.6.17', 'Adjust settings on devices and apps, online accounts and activity tracking to help manage one’s digital identity.', 'Ajustar configuraciones en dispositivos y apps, cuentas en línea y seguimiento de actividad para ayudar a gestionar la identidad digital propia.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.6.18', 'Curate and manage one or more digital identities using a variety of features and functionalities on digital platform(s) or service(s).', 'Curar y gestionar una o más identidades digitales utilizando una variedad de características y funcionalidades en plataforma(s) o servicio(s) digital(es).', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.6.19', 'Prioritise the assessment of one’s digital identity on an ongoing basis.', 'Priorizar la evaluación de la identidad digital propia de forma continua.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.6.20', 'Recognise the relationship between digital technological developments and digital identity management.', 'Reconocer la relación entre los desarrollos tecnológicos digitales y la gestión de la identidad digital.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.21', 'Describe ways to exercise rights on issues relating to digital identity.', 'Describir formas de ejercer derechos en cuestiones relacionadas con la identidad digital.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO2.6.22', 'Describe ways in which AI systems are used in digital identity management.', 'Describir formas en las que los sistemas de IA se utilizan en la gestión de la identidad digital.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO2.6.23', 'Implement a variety of processes to manage digital identity across a range of digital environments.', 'Implementar una variedad de procesos para gestionar la identidad digital en una gama de entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.6.24', 'Assess benefits, social and ethical implications of the use of AI systems in digital identity management.', 'Evaluar beneficios, implicaciones sociales y éticas del uso de sistemas de IA en la gestión de la identidad digital.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO2.6.25', 'Curate and manage digital identities for personal, professional and/or organisational purposes across a variety of platforms and services.', 'Curar y gestionar identidades digitales para propósitos personales, profesionales y/u organizacionales en una variedad de plataformas y servicios.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.6.26', 'Assist others with basic digital identity management.', 'Ayudar a otros con la gestión básica de la identidad digital.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.6.27', 'Stay informed about developments in digital technologies in relation digital identity management.', 'Mantenerse informado sobre desarrollos en tecnologías digitales en relación con la gestión de la identidad digital.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.6.28', 'Support others to deepen their capabilities in the management and curation of digital identities.', 'Apoyar a otros para profundizar sus capacidades en la gestión y curación de identidades digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.6.29', 'Advise others on complex aspects of digital identity management and rights.', 'Aconsejar a otros sobre aspectos complejos de la gestión de la identidad digital y derechos.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 3.1 Developing
  ['LO3.1.01', 'Acknowledge the benefits of exploring a variety of digital content creation tools to support content creation goals.', 'Reconocer los beneficios de explorar una variedad de herramientas de creación de contenido digital para apoyar los objetivos de creación de contenido.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO3.1.02', 'Acknowledge the importance of digital content that is accessible and inclusive.', 'Reconocer la importancia del contenido digital que es accesible e inclusivo.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO3.1.03', 'Identify common types of digital content and their associated file formats.', 'Identificar tipos comunes de contenido digital y sus formatos de archivo asociados.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.1.04', 'Identify common operational functions across digital content creation tools.', 'Identificar funciones operativas comunes en herramientas de creación de contenido digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO3.1.05', 'Distinguish between accessible digital content and inclusive digital content.', 'Distinguir entre contenido digital accesible y contenido digital inclusivo.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.1.06', 'Recognise that while AI systems can generate and integrate digital content, humans are essential to ensure ethical, responsible, and context-appropriate outputs.', 'Reconocer que aunque los sistemas de IA pueden generar e integrar contenido digital, los humanos son esenciales para asegurar resultados éticos, responsables y apropiados al contexto.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.1.07', 'Recognise that generative AI is a particular type of AI and is one of various digital technologies that can be used to support content creation.', 'Reconocer que la IA generativa es un tipo particular de IA y es una de varias tecnologías digitales que pueden usarse para apoyar la creación de contenido.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.1.08', 'Use basic features of digital content creation tools to create and edit digital content (text, image, video and/or audio).', 'Utilizar características básicas de herramientas de creación de contenido digital para crear y editar contenido digital (texto, imagen, video y/o audio).', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO3.1.09', 'Purposefully explore features and functions of digital content creation tools to deepen content creation capabilities.', 'Explorar intencionadamente características y funciones de herramientas de creación de contenido digital para profundizar capacidades de creación de contenido.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.1.10', 'Describe benefits, limitations and ethical considerations in the use of digital technologies such as AI systems for content creation.', 'Describir beneficios, limitaciones y consideraciones éticas en el uso de tecnologías digitales como sistemas de IA para la creación de contenido.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.1.11', 'Define strategies such as templates or appropriate sequencing of steps that enable efficient digital content creation.', 'Definir estrategias como plantillas o secuenciación apropiada de pasos que permitan la creación eficiente de contenido digital.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.1.12', 'Use a variety of digital content creation tools to create and edit digital content (text, image, video and/or audio).', 'Utilizar una variedad de herramientas de creación de contenido digital para crear y editar contenido digital (texto, imagen, video y/o audio).', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.1.13', 'Assess inclusivity and/or accessibility needs of the audience for which digital content is being created.', 'Evaluar necesidades de inclusión y/o accesibilidad de la audiencia para la cual se está creando el contenido digital.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO3.1.14', 'Edit digital content to enhance accessibility and meet audience needs.', 'Editar contenido digital para mejorar la accesibilidad y satisfacer las necesidades de la audiencia.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.1.15', 'Apply strategies such as templates or appropriate sequencing of steps that enable efficient digital content creation.', 'Aplicar estrategias como plantillas o secuenciación apropiada de pasos que permitan la creación eficiente de contenido digital.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.1.16', 'Interact with AI systems purposefully, selectively and ethically to support digital content creation.', 'Interactuar con sistemas de IA de manera intencionada, selectiva y ética para apoyar la creación de contenido digital.', 'Intermediate', 'Skill', 'AI-Explicit'],
  ['LO3.1.17', 'Acknowledge the importance of assessing capabilities, constraints and ethical aspects of digital content creation tools to ensure appropriate selection and use.', 'Reconocer la importancia de evaluar capacidades, limitaciones y aspectos éticos de herramientas de creación de contenido digital para asegurar una selección y uso apropiados.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.1.18', 'Select and combine digital content creation tools and methods to meet complex content creation task and audience requirements.', 'Seleccionar y combinar herramientas y métodos de creación de contenido digital para cumplir con tareas complejas de creación de contenido y requisitos de la audiencia.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.19', 'Create and edit a variety of complex or specialised digital content, tailored appropriately to goals and audience.', 'Crear y editar una variedad de contenido digital complejo o especializado, adaptado apropiadamente a objetivos y audiencia.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.20', 'Support others to develop their capabilities in digital content creation using ethical and responsible approaches.', 'Apoyar a otros para desarrollar sus capacidades en la creación de contenido digital utilizando enfoques éticos y responsables.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.21', 'Promote and support accessibility and inclusivity in digital content creation initiatives.', 'Promover y apoyar la accesibilidad e inclusión en iniciativas de creación de contenido digital.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.1.22', 'Promote and support the selective and ethical use of AI systems in content creation.', 'Promover y apoyar el uso selectivo y ético de sistemas de IA en la creación de contenido.', 'Highly advanced', 'Attitude', 'AI-Explicit'],
  ['LO3.1.23', 'Help others to develop advanced digital content creation capabilities.', 'Ayudar a otros a desarrollar capacidades avanzadas de creación de contenido digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.24', 'Lead or contribute to complex or specialised digital content creation initiatives.', 'Liderar o contribuir a iniciativas complejas o especializadas de creación de contenido digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.25', 'Lead or contribute to improvements in or new solutions for complex or specialised digital content.', 'Liderar o contribuir a mejoras o nuevas soluciones para contenido digital complejo o especializado.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 3.2 Integrating
  ['LO3.2.01', 'Acknowledge the importance of ethical and transparent practices when re-using or elaborating existing digital content.', 'Reconocer la importancia de prácticas éticas y transparentes al reutilizar o elaborar contenido digital existente.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO3.2.02', 'Acknowledge the benefits of exploring digital content integration and elaboration tools and techniques.', 'Reconocer los beneficios de explorar herramientas y técnicas de integración y elaboración de contenido digital.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO3.2.03', 'Recognise the concept of acknowledgement in re-using existing digital content.', 'Reconocer el concepto de reconocimiento al reutilizar contenido digital existente.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO3.2.04', 'Recognise the concept of transparent use of AI systems (particularly generative AI) in digital content integration and re-elaboration.', 'Reconocer el concepto de uso transparente de sistemas de IA (particularmente IA generativa) en la integración y reelaboración de contenido digital.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.2.05', 'Distinguish between editable and uneditable digital content.', 'Distinguir entre contenido digital editable y no editable.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.2.06', 'Identify main functions of content creation tools for editing and integrating digital content (text, image, audio, video).', 'Identificar funciones principales de herramientas de creación de contenido para editar e integrar contenido digital (texto, imagen, audio, video).', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO3.2.07', 'Make changes to existing digital content using basic editing, formatting and integration functions.', 'Realizar cambios en contenido digital existente utilizando funciones básicas de edición, formato e integración.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO3.2.08', 'Purposefully explore a variety of ways to integrate and re-elaborate digital content to deepen digital content integration and re-elaboration capabilities.', 'Explorar intencionadamente una variedad de formas de integrar y reelaborar contenido digital para profundizar capacidades de integración y reelaboración de contenido digital.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.2.09', 'Identify structure, format and audience requirements of a digital content integration or re-elaboration task.', 'Identificar requisitos de estructura, formato y audiencia de una tarea de integración o reelaboración de contenido digital.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.2.10', 'Describe ways in which to acknowledge digital content that is being re-used.', 'Describir formas en las que reconocer el contenido digital que se está reutilizando.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.2.11', 'Describe ethical and transparent practices in the use of AI systems (particularly generative AI) in digital content integration and elaboration.', 'Describir prácticas éticas y transparentes en el uso de sistemas de IA (particularmente IA generativa) en la integración y elaboración de contenido digital.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.2.12', 'Adjust or integrate digital content to meet format, structure and audience requirements.', 'Ajustar o integrar contenido digital para cumplir con requisitos de formato, estructura y audiencia.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.2.13', 'Modify or transform digital textual, numeric or visual representations to effectively and accurately convey the meaning of data and information.', 'Modificar o transformar representaciones digitales textuales, numéricas o visuales para transmitir de manera efectiva y precisa el significado de datos e información.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.2.14', 'Use digital technologies in a selective, ethical and transparent way to make enhancements or integrations to existing digital content.', 'Utilizar tecnologías digitales de manera selectiva, ética y transparente para realizar mejoras o integraciones a contenido digital existente.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.2.15', 'Prioritise transparent and ethical practices in digital content integration and re-elaboration tasks.', 'Priorizar prácticas transparentes y éticas en tareas de integración y reelaboración de contenido digital.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.2.16', 'Describe a range of methods for complex digital content integration and re-elaboration.', 'Describir una gama de métodos para la integración y reelaboración de contenido digital complejo.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO3.2.17', 'Describe appropriate and inappropriate uses of AI systems to enhance digital content integration or re-elaboration of complex tasks.', 'Describir usos apropiados e inapropiados de sistemas de IA para mejorar la integración o reelaboración de contenido digital en tareas complejas.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.2.18', 'Adjust or integrate a variety of digital content to meet complex format, structure, and audience requirements.', 'Ajustar o integrar una variedad de contenido digital para cumplir con requisitos complejos de formato, estructura y audiencia.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.2.19', 'Apply digital technologies in a selective, ethical and transparent way to apply complex integration or re-elaboration to digital content.', 'Aplicar tecnologías digitales de manera selectiva, ética y transparente para aplicar integración o reelaboración compleja a contenido digital.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.2.20', 'Support others to develop their capabilities in digital content integration and re-elaboration.', 'Apoyar a otros para desarrollar sus capacidades en la integración y reelaboración de contenido digital.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.2.21', 'Promote and support ethical and transparent practices in digital content integration and re-elaboration.', 'Promover y apoyar prácticas éticas y transparentes en la integración y reelaboración de contenido digital.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.2.22', 'Stay informed about digital technological developments in digital content integration and re-elaboration, including their technical and ethical implications.', 'Mantenerse informado sobre desarrollos tecnológicos digitales en la integración y reelaboración de contenido digital, incluyendo sus implicaciones técnicas y éticas.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.2.23', 'Evaluate and apply advanced design and data visualisation techniques to complex or specialised digital content integration and re-elaboration.', 'Evaluar y aplicar técnicas avanzadas de diseño y visualización de datos a la integración y reelaboración de contenido digital complejo o especializado.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO3.2.24', 'Assist others with complex digital content integration and re-elaboration tasks.', 'Ayudar a otros con tareas complejas de integración y reelaboración de contenido digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO3.2.25', 'Lead or contribute to complex digital content integration or re-elaboration initiatives.', 'Liderar o contribuir a iniciativas complejas de integración o reelaboración de contenido digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO3.2.26', 'Lead or contribute to improvements in or new solutions for digital complex content integration or re-elaboration.', 'Liderar o contribuir a mejoras o nuevas soluciones para la integración o reelaboración de contenido digital complejo.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 3.3 Copyright
  ['LO3.3.01', 'Recognise that the internet is not a fully free space: individuals’ data can be monetised, and individuals may need permission to use content found.', 'Reconocer que internet no es un espacio totalmente libre: los datos de los individuos pueden ser monetizados, y los individuos pueden necesitar permiso para usar contenido encontrado.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.02', 'Recognise, in general terms, the concepts of copyright and licence in digital contexts.', 'Reconocer, en términos generales, los conceptos de derechos de autor y licencia en contextos digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.3.03', 'Recognise that an individual’s original digital content is automatically copyrighted.', 'Reconocer que el contenido digital original de un individuo tiene derechos de autor automáticamente.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.3.04', 'Recognise that different kinds of copyright and licences apply to digital content, including AI-generated content, and that these determine how content can be used and shared.', 'Reconocer que diferentes tipos de derechos de autor y licencias se aplican al contenido digital, incluido el contenido generado por IA, y que estos determinan cómo se puede usar y compartir el contenido.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.3.05', 'Recognise that AI-generated content should be labelled as such to help others understand its origin and possibilities for further use.', 'Reconocer que el contenido generado por IA debe etiquetarse como tal para ayudar a otros a entender su origen y posibilidades de uso posterior.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.3.06', 'Identify digital content that can be used free of charge.', 'Identificar contenido digital que se puede usar de forma gratuita.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.3.07', 'Use and share digital content in compliance with basic legal and ethical guidelines.', 'Usar y compartir contenido digital cumpliendo con pautas legales y éticas básicas.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO3.3.08', 'Prioritise a cautious approach to digital content (check before using or sharing).', 'Priorizar un enfoque cauteloso hacia el contenido digital (verificar antes de usar o compartir).', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.3.09', 'Acknowledge the complex nature of copyright and licensing of digital content.', 'Reconocer la naturaleza compleja de los derechos de autor y las licencias del contenido digital.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.3.10', 'Define, with examples from digital contexts, the concept of intellectual property.', 'Definir, con ejemplos de contextos digitales, el concepto de propiedad intelectual.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.11', 'Distinguish, with examples from digital contexts, between copyright, trademark, design and patent.', 'Distinguir, con ejemplos de contextos digitales, entre derechos de autor, marca registrada, diseño y patente.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.12', 'Identify common types and purposes of licences in digital contexts, including Creative Commons.', 'Identificar tipos comunes y propósitos de licencias en contextos digitales, incluido Creative Commons.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.3.13', 'Identify examples of piracy and plagiarism in digital contexts.', 'Identificar ejemplos de piratería y plagio en contextos digitales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.14', 'Identify examples of where copyright applies and does not apply in digital contexts.', 'Identificar ejemplos de dónde se aplican y dónde no se aplican los derechos de autor en contextos digitales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.15', 'Describe legal, ethical and commercial consequences of intellectual property violations in digital contexts, including piracy and plagiarism.', 'Describir consecuencias legales, éticas y comerciales de violaciones de propiedad intelectual en contextos digitales, incluyendo piratería y plagio.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.16', 'Identify examples of legal and ethical challenges relating to copyright in the training of AI models.', 'Identificar ejemplos de desafíos legales y éticos relacionados con los derechos de autor en el entrenamiento de modelos de IA.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.3.17', 'Apply legal and ethical guidelines appropriately when using and sharing digital content.', 'Aplicar pautas legales y éticas apropiadamente al usar y compartir contenido digital.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.3.18', 'Prioritise a consideration of ethical and legal aspects, such as transparency and copyright, when using and sharing digital content.', 'Priorizar una consideración de aspectos éticos y legales, como transparencia y derechos de autor, al usar y compartir contenido digital.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.3.19', 'Describe key features of current legislation in relation to digital copyright and licences.', 'Describir características clave de la legislación actual en relación con los derechos de autor y licencias digitales.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.20', 'Describe examples of where copyright applies and does not apply in digital contexts.', 'Describir ejemplos de dónde se aplican y no se aplican los derechos de autor en contextos digitales.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO3.3.21', 'Identify differences in how ethical and copyright issues apply to training data for AI systems and AI-generated content (output).', 'Identificar diferencias en cómo se aplican los problemas éticos y de derechos de autor a los datos de entrenamiento para sistemas de IA y al contenido generado por IA (salida).', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.3.22', 'Assess and correctly apply legal and ethical guidelines for using and sharing of digital content in complex contexts, including different software licensing models and the renewal requirements of licences.', 'Evaluar y aplicar correctamente pautas legales y éticas para usar y compartir contenido digital en contextos complejos, incluyendo diferentes modelos de licencias de software y requisitos de renovación de licencias.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.3.23', 'Assist others to use and share digital content in compliance with legal and ethical guidelines.', 'Ayudar a otros a usar y compartir contenido digital en cumplimiento con pautas legales y éticas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.3.24', 'Stay informed about developments in copyright and licensing regulations in digital contexts.', 'Mantenerse informado sobre desarrollos en regulaciones de derechos de autor y licencias en contextos digitales.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.3.25', 'Promote and support awareness and understanding of legal and ethical copyright and licensing practices in digital contexts.', 'Promover y apoyar la conciencia y comprensión de prácticas legales y éticas de derechos de autor y licencias en contextos digitales.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.3.26', 'Apply advanced knowledge of intellectual property rights, copyright and licensing concepts in digital contexts to inform decision-making.', 'Aplicar conocimiento avanzado de derechos de propiedad intelectual, derechos de autor y conceptos de licencias en contextos digitales para informar la toma de decisiones.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO3.3.27', 'Lead or contribute to policies or guidelines on copyright and licensing in digital contexts.', 'Liderar o contribuir a políticas o pautas sobre derechos de autor y licencias en contextos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 3.4 Programming
  ['LO3.4.01', 'Acknowledge the essential role of humans in determining how computer programs and AI systems are used.', 'Reconocer el papel esencial de los humanos en determinar cómo se utilizan los programas informáticos y los sistemas de IA.', 'Basic', 'Attitude', 'AI-Explicit'],
  ['LO3.4.02', 'Identify common uses of computer programs and applications.', 'Identificar usos comunes de programas y aplicaciones informáticas.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO3.4.03', 'Recognise computational thinking as a human activity which involves the identification of steps that can be performed by a computer to solve a problem or task.', 'Reconocer el pensamiento computacional como una actividad humana que implica la identificación de pasos que pueden ser realizados por una computadora para resolver un problema o tarea.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.04', 'Recognise what AI is in general terms.', 'Reconocer qué es la IA en términos generales.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.05', 'Identify, in a general way, what is and what is not an AI system.', 'Identificar, de manera general, qué es y qué no es un sistema de IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.06', 'Identify common examples of applications of AI systems.', 'Identificar ejemplos comunes de aplicaciones de sistemas de IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.07', 'Give basic instructions to a computer to perform simple tasks.', 'Dar instrucciones básicas a una computadora para realizar tareas simples.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO3.4.08', 'Represent simple sequences symbolically, and interpret simple symbolic sequences.', 'Representar secuencias simples simbólicamente, e interpretar secuencias simbólicas simples.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO3.4.09', 'Acknowledge the relevance of computational thinking, algorithmic representation and programming in everyday contexts.', 'Reconocer la relevancia del pensamiento computacional, la representación algorítmica y la programación en contextos cotidianos.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.4.10', 'Acknowledge the importance of ethics and accessibility in programming contexts.', 'Reconocer la importancia de la ética y la accesibilidad en contextos de programación.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.4.11', 'Distinguish between a computational model of reality and reality itself.', 'Distinguir entre un modelo computacional de la realidad y la realidad misma.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.4.12', 'Recognise, with examples from computational thinking or programming, the concept of algorithm.', 'Reconocer, con ejemplos de pensamiento computacional o programación, el concepto de algoritmo.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.13', 'Define differences between a computable problem and a non-computable problem.', 'Definir diferencias entre un problema computable y un problema no computable.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.14', 'Define general steps in computational thinking.', 'Definir pasos generales en el pensamiento computacional.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.15', 'Recognise that there are a variety of programming languages, each with a range of potential uses.', 'Reconocer que existe una variedad de lenguajes de programación, cada uno con una gama de usos potenciales.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.16', 'Define foundational programming concepts and general steps in programming.', 'Definir conceptos fundamentales de programación y pasos generales en programación.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.17', 'Recognise the role of programming in robotics.', 'Reconocer el papel de la programación en la robótica.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.18', 'Recognise that machine learning is a branch of AI that enables algorithms to learn from data and make predictions.', 'Reconocer que el aprendizaje automático (machine learning) es una rama de la IA que permite a los algoritmos aprender de datos y hacer predicciones.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.19', 'Recognise that there are steps that should be followed to develop, validate and deploy a computer program or an AI system.', 'Reconocer que hay pasos que deben seguirse para desarrollar, validar y desplegar un programa informático o un sistema de IA.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.20', 'Describe examples of machine learning applications.', 'Describir ejemplos de aplicaciones de aprendizaje automático.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.21', 'Describe examples of AI system applications from a range of sectors of society.', 'Describir ejemplos de aplicaciones de sistemas de IA de una gama de sectores de la sociedad.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.22', 'Translate basic information into logical operations.', 'Traducir información básica en operaciones lógicas.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.4.23', 'Develop basic programs with control structures.', 'Desarrollar programas básicos con estructuras de control.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.4.24', 'Create visual representations such as flow diagrams to illustrate basic algorithms.', 'Crear representaciones visuales como diagramas de flujo para ilustrar algoritmos básicos.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.4.25', 'Acknowledge the importance of human oversight and human-centric approaches in the development and deployment of computer programs and AI systems.', 'Reconocer la importancia de la supervisión humana y los enfoques centrados en el humano en el desarrollo y despliegue de programas informáticos y sistemas de IA.', 'Advanced', 'Attitude', 'AI-Explicit'],
  ['LO3.4.26', 'Define the concepts and role of human-centric approaches and human oversight in the context of programming and AI systems.', 'Definir los conceptos y el papel de los enfoques centrados en el humano y la supervisión humana en el contexto de la programación y los sistemas de IA.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.27', 'Describe the main steps in developing, validating and deploying a computer program or an AI system.', 'Describir los pasos principales en el desarrollo, validación y despliegue de un programa informático o un sistema de IA.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.28', 'Distinguish between main types of machine learning.', 'Distinguir entre los tipos principales de aprendizaje automático.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.29', 'Identify the main features and purposes of commonly-used machine learning algorithms.', 'Identificar las características y propósitos principales de algoritmos de aprendizaje automático de uso común.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.30', 'Describe the role of user experience (UX) and customer experience (CX) in programming.', 'Describir el papel de la experiencia de usuario (UX) y la experiencia del cliente (CX) en la programación.', 'Advanced', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.31', 'Describe examples of the application of computational thinking and programming in robotics.', 'Describir ejemplos de la aplicación del pensamiento computacional y la programación en la robótica.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO3.4.32', 'Identify routine tasks which could be (partially or fully) automated through programming tools or AI systems.', 'Identificar tareas rutinarias que podrían ser (parcial o totalmente) automatizadas a través de herramientas de programación o sistemas de IA.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.33', 'Assess ethical and practical aspects of the development and deployment of computer programs and AI systems.', 'Evaluar aspectos éticos y prácticos del desarrollo y despliegue de programas informáticos y sistemas de IA.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO3.4.34', 'Apply computational thinking, knowledge of programming and/or AI systems to (partially or fully) automate routine tasks.', 'Aplicar pensamiento computacional, conocimiento de programación y/o sistemas de IA para automatizar (parcial o totalmente) tareas rutinarias.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO3.4.35', 'Apply programming tools or AI systems to complex computational thinking tasks.', 'Aplicar herramientas de programación o sistemas de IA a tareas complejas de pensamiento computacional.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO3.4.36', 'Promote and support ethical programming and/or AI systems development practices.', 'Promover y apoyar prácticas de desarrollo de programación y/o sistemas de IA éticas.', 'Highly advanced', 'Attitude', 'AI-Explicit'],
  ['LO3.4.37', 'Stay informed about current developments in programming techniques and related applications of AI systems, such as robotics.', 'Mantenerse informado sobre desarrollos actuales en técnicas de programación y aplicaciones relacionadas de sistemas de IA, como la robótica.', 'Highly advanced', 'Attitude', 'AI-Explicit'],
  ['LO3.4.38', 'Lead or contribute to complex projects focused on applications of computational thinking, programming or AI systems, including developing, validating and deploying computer programs or AI systems.', 'Liderar o contribuir a proyectos complejos centrados en aplicaciones de pensamiento computacional, programación o sistemas de IA, incluyendo desarrollo, validación y despliegue de programas informáticos o sistemas de IA.', 'Highly advanced', 'Skill', 'AI-Explicit'],
  ['LO3.4.39', 'Assist others to develop basic programming capabilities and/or or capabilities in the application of AI systems to computational thinking tasks.', 'Ayudar a otros a desarrollar capacidades básicas de programación y/o capacidades en la aplicación de sistemas de IA a tareas de pensamiento computacional.', 'Highly advanced', 'Skill', 'AI-Explicit'],
  // 4.1 Safety
  ['LO4.1.01', 'Acknowledge the importance of one’s individual role in protecting digital devices and their contents.', 'Reconocer la importancia del rol individual propio en la protección de dispositivos digitales y sus contenidos.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.1.02', 'Recognise the concepts of cybersecurity, cyber threat and cyberattack.', 'Reconocer los conceptos de ciberseguridad, ciberamenaza y ciberataque.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.1.03', 'Recognise that individuals’ actions and cybersecurity tools work together to help keep devices and their contents secure.', 'Reconocer que las acciones de los individuos y las herramientas de ciberseguridad trabajan juntas para ayudar a mantener seguros los dispositivos y sus contenidos.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.1.04', 'Recognise that there is cybersecurity legislation that helps to ensure the security of products and services.', 'Reconocer que existe legislación de ciberseguridad que ayuda a garantizar la seguridad de productos y servicios.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.1.05', 'Identify basic device protection measures and practices, such as antivirus software, screen locking, strong passwords, and multi-factor authentication.', 'Identificar medidas y prácticas básicas de protección de dispositivos, como software antivirus, bloqueo de pantalla, contraseñas fuertes y autenticación multifactor.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.1.06', 'Apply basic device protection measures and practices, such as antivirus software, screen locking, strong passwords, and multi-factor authentication.', 'Aplicar medidas y prácticas básicas de protección de dispositivos, como software antivirus, bloqueo de pantalla, contraseñas fuertes y autenticación multifactor.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.1.07', 'Acknowledge the importance of remaining vigilant to and up-to-date with cybersecurity practices.', 'Reconocer la importancia de permanecer vigilante y actualizado con las prácticas de ciberseguridad.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO4.1.08', 'Describe main features of malware.', 'Describir características principales del malware.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.1.09', 'Recognise that AI systems can be used for both cyberattacks and cybersecurity.', 'Reconocer que los sistemas de IA pueden usarse tanto para ciberataques como para ciberseguridad.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO4.1.10', 'Apply a variety of malware prevention techniques and practices to protect devices and their contents.', 'Aplicar una variedad de técnicas y prácticas de prevención de malware para proteger dispositivos y sus contenidos.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO4.1.11', 'Prioritise regular checking and updating of cybersecurity measures that are in place on one’s devices.', 'Priorizar la comprobación y actualización regular de las medidas de ciberseguridad que están en los dispositivos propios.', 'Advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.1.12', 'Describe key rights of individuals under current cybersecurity legislation.', 'Describir derechos clave de los individuos bajo la legislación actual de ciberseguridad.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO4.1.13', 'Identify examples of how recent and emerging technologies such as AI systems are used in cyberattacks and cybersecurity.', 'Identificar ejemplos de cómo tecnologías recientes y emergentes como los sistemas de IA se utilizan en ciberataques y ciberseguridad.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO4.1.14', 'Update cybersecurity measures to protect devices and their contents in response to evolving digital threats.', 'Actualizar medidas de ciberseguridad para proteger dispositivos y sus contenidos en respuesta a amenazas digitales en evolución.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.1.15', 'Assist others in implementing basic device protection measures, such as antivirus software, screen locking, strong passwords and multi-factor authentication.', 'Ayudar a otros a implementar medidas básicas de protección de dispositivos, como software antivirus, bloqueo de pantalla, contraseñas fuertes y autenticación multifactor.', 'Advanced', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.1.16', 'Stay informed about digital technological and legislative developments in relation to cybersecurity.', 'Mantenerse informado sobre desarrollos tecnológicos digitales y legislativos en relación con la ciberseguridad.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.1.17', 'Assess rights of individuals under relevant provisions of current cybersecurity legislation.', 'Evaluar derechos de individuos bajo disposiciones relevantes de la legislación actual de ciberseguridad.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO4.1.18', 'Lead or contribute to citizen-focused cybersecurity initiatives.', 'Liderar o contribuir a iniciativas de ciberseguridad enfocadas al ciudadano.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO4.1.19', 'Support others to build their capabilities in protecting their devices and their contents against digital threats.', 'Apoyar a otros para construir sus capacidades en la protección de sus dispositivos y sus contenidos contra amenazas digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 4.2 Personal Data
  ['LO4.2.01', 'Acknowledge the importance of a cautious approach to the sharing of personal data in digital environments.', 'Reconocer la importancia de un enfoque cauteloso al compartir datos personales en entornos digitales.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.2.02', 'Recognise that personal data is collected and generated through a large variety of digital sources and processes.', 'Reconocer que los datos personales se recolectan y generan a través de una gran variedad de fuentes y procesos digitales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.2.03', 'Identify risks of sharing personal data in digital environments, including specific risks in relation to AI systems.', 'Identificar riesgos de compartir datos personales en entornos digitales, incluyendo riesgos específicos en relación con sistemas de IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO4.2.04', 'Recognise that individuals have a right to privacy and that their personal data is protected under legislation.', 'Reconocer que los individuos tienen derecho a la privacidad y que sus datos personales están protegidos por la legislación.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.2.05', 'Recognise that manipulative methods can be used to deceive individuals into providing access to personal data, accounts or other sensitive information.', 'Reconocer que se pueden utilizar métodos manipulativos para engañar a los individuos para que proporcionen acceso a datos personales, cuentas u otra información sensible.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.2.06', 'Recognise signs of identity theft.', 'Reconocer signos de robo de identidad.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.2.07', 'Recognise that users of platforms and services can request to block or flag personal information that has been shared inappropriately online.', 'Reconocer que los usuarios de plataformas y servicios pueden solicitar bloquear o marcar información personal que se ha compartido inapropiadamente en línea.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.2.08', 'Implement basic security measures for online payments and transactions.', 'Implementar medidas básicas de seguridad para pagos y transacciones en línea.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.2.09', 'Respond appropriately to signs of identity theft.', 'Responder apropiadamente a signos de robo de identidad.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.2.10', 'Block or flag personal information that has been inappropriately shared online.', 'Bloquear o marcar información personal que se ha compartido inapropiadamente en línea.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.2.11', 'Acknowledge the importance of careful handling of personal data of oneself and others, especially vulnerable individuals and children.', 'Reconocer la importancia del manejo cuidadoso de datos personales propios y de otros, especialmente individuos vulnerables y niños.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.2.12', 'Recognise key concepts of data protection and privacy legislation including privacy, anonymisation, pseudonymisation and data removal rights.', 'Reconocer conceptos clave de protección de datos y legislación de privacidad, incluyendo privacidad, anonimización, seudonimización y derechos de eliminación de datos.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.2.13', 'Identify the purpose of privacy statements.', 'Identificar el propósito de las declaraciones de privacidad.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.2.14', 'Define main privacy statement concepts such as data subject, retention period, data transfer, and automated decision-making system.', 'Definir conceptos principales de declaraciones de privacidad como sujeto de datos, periodo de retención, transferencia de datos y sistema de toma de decisiones automatizada.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.2.15', 'Describe techniques related to social engineering in digital environments, such as phishing or baiting.', 'Describir técnicas relacionadas con la ingeniería social en entornos digitales, como phishing o baiting.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.2.16', 'Define personal data breach under current data protection and privacy legislation.', 'Definir violación de datos personales bajo la legislación actual de protección de datos y privacidad.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.2.17', 'Recognise that regulation of personal data ownership in AI systems is complex.', 'Reconocer que la regulación de la propiedad de datos personales en sistemas de IA es compleja.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO4.2.18', 'Describe privacy implications associated with the use of content shared online, such as to train AI systems.', 'Describir implicaciones de privacidad asociadas con el uso de contenido compartido en línea, como para entrenar sistemas de IA.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO4.2.19', 'Define main features and functions of privacy tools.', 'Definir características y funciones principales de herramientas de privacidad.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.2.20', 'Manage personal data and privacy across a variety of digital environments, including use of privacy tools.', 'Gestionar datos personales y privacidad en una variedad de entornos digitales, incluyendo el uso de herramientas de privacidad.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO4.2.21', 'Continually explore data ownership and privacy issues in relation to digital technological developments.', 'Explorar continuamente la propiedad de datos y problemas de privacidad en relación con desarrollos tecnológicos digitales.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.2.22', 'Support others to understand their rights under current data protection and privacy legislation.', 'Apoyar a otros para entender sus derechos bajo la legislación actual de protección de datos y privacidad.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.2.23', 'Assist others to implement basic strategies to protect personal data and manage privacy in digital environments.', 'Ayudar a otros a implementar estrategias básicas para proteger datos personales y gestionar la privacidad en entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.2.24', 'Stay informed about digital technological and legislative developments in relation to personal data, data ownership and privacy.', 'Mantenerse informado sobre desarrollos tecnológicos digitales y legislativos en relación con datos personales, propiedad de datos y privacidad.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.2.25', 'Advise on policy or regulatory aspects of data protection and privacy in digital contexts.', 'Asesorar sobre aspectos políticos o regulatorios de protección de datos y privacidad en contextos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO4.2.26', 'Lead or contribute to the design of personal data protection strategies in digital contexts.', 'Liderar o contribuir al diseño de estrategias de protección de datos personales en contextos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 4.3 Health
  ['LO4.3.01', 'Acknowledge the benefits of balancing online and offline activities.', 'Reconocer los beneficios de equilibrar actividades en línea y fuera de línea.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.3.02', 'Acknowledge the importance of daily routines that minimise digital stress and promote social connection.', 'Reconocer la importancia de rutinas diarias que minimicen el estrés digital y promuevan la conexión social.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.3.03', 'Identify main risks and benefits to physical, mental and social wellbeing in digital environments.', 'Identificar riesgos y beneficios principales para el bienestar físico, mental y social en entornos digitales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.04', 'Recognise that there is a variety of information, groups and communities in digital environments that can support one’s physical, mental and/or social wellbeing.', 'Reconocer que hay una variedad de información, grupos y comunidades en entornos digitales que pueden apoyar el bienestar físico, mental y/o social propio.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.05', 'Recognise risks and benefits to one\'s own physical, mental and social wellbeing in digital environments.', 'Reconocer riesgos y beneficios para el bienestar físico, mental y social propio en entornos digitales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.06', 'Identify features of digital platforms or services, such as social media, that are designed to capture and maintain individuals\' attention.', 'Identificar características de plataformas o servicios digitales, como redes sociales, que están diseñadas para capturar y mantener la atención de los individuos.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.07', 'Identify limitations and risks of using virtual assistants and AI systems to support human wellbeing.', 'Identificar limitaciones y riesgos de usar asistentes virtuales y sistemas de IA para apoyar el bienestar humano.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO4.3.08', 'Identify strategies to support physical, mental and social wellbeing in digital environments.', 'Identificar estrategias para apoyar el bienestar físico, mental y social en entornos digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.3.09', 'Recognise signs and potential effects of problematic usage of digital technologies.', 'Reconocer signos y efectos potenciales del uso problemático de tecnologías digitales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.3.10', 'Recognise that there are laws and regulations that help protect the wellbeing of individuals in digital environments.', 'Reconocer que existen leyes y regulaciones que ayudan a proteger el bienestar de los individuos en entornos digitales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.11', 'Make a basic assessment of one\'s digital habits in relation to one’s physical, mental and social wellbeing.', 'Realizar una evaluación básica de los hábitos digitales propios en relación con el bienestar físico, mental y social propio.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.3.12', 'Apply personalised strategies to support physical, mental and social wellbeing in digital environments.', 'Aplicar estrategias personalizadas para apoyar el bienestar físico, mental y social en entornos digitales.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.3.13', 'Acknowledge the importance of one\'s own and others\' right to disconnect.', 'Reconocer la importancia del derecho propio y de los demás a desconectarse.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.3.14', 'Acknowledge the physical, mental and social benefits of analysing one\'s own digital usage patterns.', 'Reconocer los beneficios físicos, mentales y sociales de analizar los patrones de uso digital propios.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.3.15', 'Identify reliable sources of information, and inclusive groups and communities in digital environments, that can support one’s physical, mental and/or social wellbeing.', 'Identificar fuentes confiables de información, y grupos y comunidades inclusivos en entornos digitales, que puedan apoyar el bienestar físico, mental y/o social propio.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.16', 'Describe examples of harmful content and behaviour in digital environments and their potential impacts on oneself and others.', 'Describir ejemplos de contenido y comportamiento dañino en entornos digitales y sus impactos potenciales en uno mismo y en los demás.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.17', 'Describe ways in which some applications of digital technologies, such as social media, augment and perpetuate bias, stereotyping and exclusion.', 'Describir formas en las que algunas aplicaciones de tecnologías digitales, como las redes sociales, aumentan y perpetúan sesgos, estereotipos y exclusión.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.18', 'Describe strategies to help protect against and respond effectively to harmful behaviour and content.', 'Describir estrategias para ayudar a protegerse contra y responder eficazmente al comportamiento y contenido dañino.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.19', 'Identify possible ways to flag or intervene if harmful behaviour or content is encountered in digital environments.', 'Identificar posibles formas de marcar o intervenir si se encuentra comportamiento o contenido dañino en entornos digitales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.20', 'Describe impacts of harmful behaviour, content and deceptive design in digital environments on oneself and others.', 'Describir impactos del comportamiento dañino, contenido y diseño engañoso en entornos digitales sobre uno mismo y los demás.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.3.21', 'Analyse and adapt one\'s own digital usage patterns to support physical, mental and social wellbeing.', 'Analizar y adaptar los patrones de uso digital propios para apoyar el bienestar físico, mental y social.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.3.22', 'Implement strategies to help protect oneself against and respond effectively to harmful behaviour and content.', 'Implementar estrategias para ayudar a protegerse contra y responder eficazmente al comportamiento y contenido dañino.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.3.23', 'Adapt to changing digital technological developments and needs to support and maintain one\'s own and others\' physical, mental and social wellbeing.', 'Adaptarse a los desarrollos tecnológicos digitales cambiantes y necesidades para apoyar y mantener el bienestar físico, mental y social propio y de los demás.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.3.24', 'Continually scrutinise the role of digital technologies such as social media in augmenting and perpetuating bias, stereotyping and exclusion.', 'Escrutar continuamente el papel de tecnologías digitales como redes sociales en aumentar y perpetuar sesgos, estereotipos y exclusión.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.3.25', 'Assist others to review and adapt their usage of digital technologies to support and maintain their physical, mental and social wellbeing.', 'Ayudar a otros a revisar y adaptar su uso de tecnologías digitales para apoyar y mantener su bienestar físico, mental y social.', 'Advanced', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.3.26', 'Flag or intervene effectively in instances of harmful behaviour or content in digital environments.', 'Marcar o intervenir eficazmente en casos de comportamiento o contenido dañino en entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.3.27', 'Help others to build capacity to counteract the role of digital technologies such as social media in augmenting and perpetuating bias, stereotyping and exclusion.', 'Ayudar a otros a desarrollar capacidad para contrarrestar el papel de tecnologías digitales como redes sociales en aumentar y perpetuar sesgos, estereotipos y exclusión.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.3.28', 'Assist others to understand their rights in relation to wellbeing and/or inclusion in digital environments.', 'Ayudar a otros a entender sus derechos en relación con el bienestar y/o la inclusión en entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.3.29', 'Assist others to develop awareness of harmful behaviour, content and deceptive design in digital environments.', 'Ayudar a otros a desarrollar conciencia sobre comportamiento dañino, contenido y diseño engañoso en entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.3.30', 'Promote actions that support wellbeing and inclusion in digital environments.', 'Promover acciones que apoyen el bienestar y la inclusión en entornos digitales.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.3.31', 'Assess and evaluate evidence on wellbeing and/or inclusion in digital environments to guide decision-making.', 'Valorar y evaluar evidencia sobre bienestar y/o inclusión en entornos digitales para guiar la toma de decisiones.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO4.3.32', 'Lead or contribute to initiatives that support wellbeing and/or inclusion in digital environments.', 'Liderar o contribuir a iniciativas que apoyen el bienestar y/o la inclusión en entornos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO4.3.33', 'Contribute to legal and regulatory decision-making in relation to individuals\' wellbeing and/or inclusion in digital environments.', 'Contribuir a la toma de decisiones legales y regulatorias en relación con el bienestar y/o inclusión de individuos en entornos digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 4.4 Environment
  ['LO4.4.01', 'Acknowledge the role that individuals can play to help reduce the environmental impact of digital technologies.', 'Reconocer el papel que los individuos pueden desempeñar para ayudar a reducir el impacto ambiental de las tecnologías digitales.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.4.02', 'Recognise that some digital technologies and infrastructures such as AI systems and data centres have large impacts on the environment.', 'Reconocer que algunas tecnologías digitales e infraestructuras como los sistemas de IA y centros de datos tienen grandes impactos en el medio ambiente.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO4.4.03', 'Recognise that the full environmental impacts of digital technologies are not immediately apparent to an individual user.', 'Reconocer que los impactos ambientales completos de las tecnologías digitales no son inmediatamente evidentes para un usuario individual.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.4.04', 'Recognise that digital technologies can support energy efficiency and sustainability.', 'Reconocer que las tecnologías digitales pueden apoyar la eficiencia energética y la sostenibilidad.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.4.05', 'Identify simple strategies to reduce energy and data consumption of digital technologies, such as minimising usage of energy-intensive applications and non-usage of digital technologies when not needed.', 'Identificar estrategias simples para reducir el consumo de energía y datos de tecnologías digitales, como minimizar el uso de aplicaciones intensivas en energía y el no uso de tecnologías digitales cuando no se necesitan.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO4.4.06', 'Apply simple strategies to reduce energy and data consumption of digital technologies, such as minimising usage of energy-intensive applications and non-usage of digital technologies when not needed.', 'Aplicar estrategias simples para reducir el consumo de energía y datos de tecnologías digitales, como minimizar el uso de aplicaciones intensivas en energía y el no uso de tecnologías digitales cuando no se necesitan.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO4.4.07', 'Continually assess the environmental impacts of one\'s usage of digital technologies.', 'Evaluar continuamente los impactos ambientales del uso propio de tecnologías digitales.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO4.4.08', 'Identify environmental impacts of digital technologies that occur during manufacturing, usage and disposal.', 'Identificar impactos ambientales de tecnologías digitales que ocurren durante la fabricación, uso y eliminación.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.4.09', 'Describe environmental impacts of data centres and e-commerce.', 'Describir impactos ambientales de centros de datos y comercio electrónico.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.4.10', 'Describe examples of how digital tools can support sustainable living.', 'Describir ejemplos de cómo las herramientas digitales pueden apoyar una vida sostenible.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.4.11', 'Define the concepts of sharing economy and circular economy, including risks, limitations and potential environmental benefits.', 'Definir los conceptos de economía colaborativa y economía circular, incluyendo riesgos, limitaciones y beneficios ambientales potenciales.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.4.12', 'Apply a variety of strategies to reduce the environmental impact of one\'s use of digital technologies and digital devices, such as informed digital device purchasing decisions, device recycling and repair, environmentally conscious e-commerce practices, and environmentally conscious usage patterns.', 'Aplicar una variedad de estrategias para reducir el impacto ambiental del uso propio de tecnologías digitales y dispositivos digitales, como decisiones informadas de compra de dispositivos digitales, reciclaje y reparación de dispositivos, prácticas de comercio electrónico conscientes del medio ambiente y patrones de uso conscientes del medio ambiente.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO4.4.13', 'Stay informed about the environmental impacts of digital technologies and ways in which digital technologies can support sustainability.', 'Mantenerse informado sobre los impactos ambientales de las tecnologías digitales y formas en las que las tecnologías digitales pueden apoyar la sostenibilidad.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.4.14', 'Evaluate the environmental impacts of digital technologies and infrastructures to support decision-making or advocacy.', 'Evaluar los impactos ambientales de tecnologías digitales e infraestructuras para apoyar la toma de decisiones o la abogacía.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.4.15', 'Help others to assess their use of digital technologies to identify ways in which to reduce environmental impact.', 'Ayudar a otros a evaluar su uso de tecnologías digitales para identificar formas en las cuales reducir el impacto ambiental.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.4.16', 'Stay informed about the environmental and sustainability implications of digital technologies across a range of sectors.', 'Mantenerse informado sobre las implicaciones ambientales y de sostenibilidad de las tecnologías digitales en una gama de sectores.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.4.17', 'Promote and support actions for environmentally sustainable usage of digital technologies.', 'Promover y apoyar acciones para el uso ambientalmente sostenible de tecnologías digitales.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO4.4.18', 'Lead or contribute to digital sustainability initiatives.', 'Liderar o contribuir a iniciativas de sostenibilidad digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO4.4.19', 'Contribute to improvements in or new solutions for digital sustainability.', 'Contribuir a mejoras o nuevas soluciones para la sostenibilidad digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 5.1 Technical Problems
  ['LO5.1.01', 'Acknowledge the commonplace nature of technical problems in digital environments.', 'Reconocer la naturaleza común de los problemas técnicos en entornos digitales.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.02', 'Acknowledge the benefits of seeking assistance to help resolve technical problems.', 'Reconocer los beneficios de buscar asistencia para ayudar a resolver problemas técnicos.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.03', 'Distinguish between operating systems and software.', 'Distinguir entre sistemas operativos y software.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO5.1.04', 'Identify main features of hardware, software, connectivity, and common peripheral devices.', 'Identificar características principales de hardware, software, conectividad y dispositivos periféricos comunes.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO5.1.05', 'Recognise signs of common technical problems such as lack of connectivity, forgot password, forgot file location, unsaved document, or error in email or web address.', 'Reconocer signos de problemas técnicos comunes como falta de conectividad, contraseña olvidada, ubicación de archivo olvidada, documento no guardado o error en correo electrónico o dirección web.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO5.1.06', 'Follow instructions to solve common technical problems such as lack of connectivity, forgot password, forgot file location, unsaved document, or error in email or web address.', 'Seguir instrucciones para resolver problemas técnicos comunes como falta de conectividad, contraseña olvidada, ubicación de archivo olvidada, documento no guardado o error en correo electrónico o dirección web.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO5.1.07', 'Install and update software and applications, as needed.', 'Instalar y actualizar software y aplicaciones, según sea necesario.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO5.1.08', 'Acknowledge the benefits of building capacity and autonomy in addressing technical issues.', 'Reconocer los beneficios de desarrollar capacidad y autonomía para abordar problemas técnicos.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.09', 'Troubleshoot technical problems in digital environments using a variety of search and problem-solving strategies (whether human-assisted or digital technology-assisted).', 'Solucionar problemas técnicos en entornos digitales utilizando una variedad de estrategias de búsqueda y resolución de problemas (ya sea asistidas por humanos o por tecnología digital).', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.1.10', 'Update and adjust settings on main and peripheral digital devices to maintain good performance.', 'Actualizar y ajustar configuraciones en dispositivos digitales principales y periféricos para mantener un buen rendimiento.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO5.1.11', 'Prioritise the development of one\'s capacity to diagnose and solve technical issues in digital environments.', 'Priorizar el desarrollo de la capacidad propia para diagnosticar y resolver problemas técnicos en entornos digitales.', 'Advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.12', 'Assist others to diagnose and solve technical problems in digital environments.', 'Ayudar a otros a diagnosticar y resolver problemas técnicos en entornos digitales.', 'Advanced', 'Skill', 'AI not Implicit or Explicit'],
  ['LO5.1.13', 'Use various solution-finding strategies to troubleshoot complex technical problems in digital environments.', 'Utilizar diversas estrategias de búsqueda de soluciones para solucionar problemas técnicos complejos en entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.1.14', 'Help others to develop confidence and autonomy to solve technical problems in digital environments.', 'Ayudar a otros a desarrollar confianza y autonomía para resolver problemas técnicos en entornos digitales.', 'Highly advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.15', 'Design or deliver training to support the use of digital devices or systems.', 'Diseñar o impartir formación para apoyar el uso de dispositivos o sistemas digitales.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 5.2 Identifying Needs
  ['LO5.2.01', 'Acknowledge the importance of individual choice in digital environment configurations.', 'Reconocer la importancia de la elección individual en las configuraciones del entorno digital.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.2.02', 'Recognise common ways in which features of digital environments can be adjusted to meet users\' needs and preferences.', 'Reconocer formas comunes en las que las características de los entornos digitales pueden ajustarse para satisfacer las necesidades y preferencias de los usuarios.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO5.2.03', 'Recognise the concept and purpose of a digital assistance tool.', 'Reconocer el concepto y propósito de una herramienta de asistencia digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.2.04', 'Recognise the presence of AI systems in digital assistance tools.', 'Reconocer la presencia de sistemas de IA en herramientas de asistencia digital.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO5.2.05', 'Identify common assistive technologies and their purposes.', 'Identificar tecnologías de asistencia comunes y sus propósitos.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.2.06', 'Use assistive technologies, if and as required.', 'Usar tecnologías de asistencia, si y según sea necesario.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO5.2.07', 'Use digital assistance tools to support simple tasks, with awareness of their benefits and limitations.', 'Usar herramientas de asistencia digital para apoyar tareas simples, con conciencia de sus beneficios y limitaciones.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO5.2.08', 'Acknowledge the benefits of exploring adaptations to digital environment configurations and features of digital assistance tools.', 'Reconocer los beneficios de explorar adaptaciones a las configuraciones del entorno digital y características de herramientas de asistencia digital.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO5.2.09', 'Adjust features of one\'s digital environment to suit one\'s own and others\' needs and preferences.', 'Ajustar características del entorno digital propio para adaptarse a las necesidades y preferencias propias y de otros.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.2.10', 'Make informed use of digital assistance tools to support one\'s own and others\' needs, with awareness of their benefits and limitations.', 'Hacer uso informado de herramientas de asistencia digital para apoyar las necesidades propias y de otros, con conciencia de sus beneficios y limitaciones.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.2.11', 'Prioritise an ongoing assessment of how digital environmental configurations, digital assistance tools and/or assistive technologies can meet the needs of oneself and others.', 'Priorizar una evaluación continua de cómo las configuraciones ambientales digitales, herramientas de asistencia digital y/o tecnologías de asistencia pueden satisfacer las necesidades de uno mismo y de otros.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO5.2.12', 'Adjust features of one\'s digital environment to suit one\'s own and others\' needs and preferences.', 'Ajustar características del entorno digital propio para adaptarse a las necesidades y preferencias propias y de otros.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.2.13', 'Assess the accessibility, inclusivity, fairness and/or rights-sensitivity of digital technologies in a given context.', 'Evaluar la accesibilidad, inclusividad, equidad y/o sensibilidad a los derechos de las tecnologías digitales en un contexto dado.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.2.14', 'Support others to make informed use of digital assistance tools, and adjustments to digital environment configurations, to meet their own and others\' needs.', 'Apoyar a otros para hacer un uso informado de herramientas de asistencia digital y ajustes a configuraciones de entorno digital, para satisfacer sus propias necesidades y las de otros.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.2.15', 'Promote and support the use of inclusive and accessible digital technologies.', 'Promover y apoyar el uso de tecnologías digitales inclusivas y accesibles.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO5.2.16', 'Assess complex needs of individuals to identify and/or design tailored digital solutions.', 'Evaluar necesidades complejas de individuos para identificar y/o diseñar soluciones digitales a medida.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO5.2.17', 'Contribute to improvements in digital assistance tools, accessible digital environment configurations, and/or assistive technologies.', 'Contribuir a mejoras en herramientas de asistencia digital, configuraciones de entorno digital accesibles y/o tecnologías de asistencia.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 5.3 Creative Use
  ['LO5.3.01', 'Acknowledge that digital technologies can support, but not replace, human creativity.', 'Reconocer que las tecnologías digitales pueden apoyar, pero no reemplazar, la creatividad humana.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO5.3.02', 'Identify examples of how digital technologies are used to solve real-world problems and to make improvements to or create new solutions for products and services.', 'Identificar ejemplos de cómo se utilizan las tecnologías digitales para resolver problemas del mundo real y para hacer mejoras o crear nuevas soluciones para productos y servicios.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.3.03', 'Identify examples of where digital technologies can support or augment human creativity.', 'Identificar ejemplos de dónde las tecnologías digitales pueden apoyar o aumentar la creatividad humana.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.3.04', 'Acknowledge the importance of placing human rights, values, needs and experiences at the centre of digital technologies design and use.', 'Reconocer la importancia de colocar los derechos humanos, valores, necesidades y experiencias en el centro del diseño y uso de tecnologías digitales.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO5.3.05', 'Define the concept of human-centric and its role in digital technologies development and usage.', 'Definir el concepto de centrado en el humano y su papel en el desarrollo y uso de tecnologías digitales.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO5.3.06', 'Identify examples of the interplay between humans and digital technologies in creativity and problem-solving.', 'Identificar ejemplos de la interacción entre humanos y tecnologías digitales en la creatividad y la resolución de problemas.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO5.3.07', 'Describe strengths, weaknesses and ethical considerations of digital technologies including AI systems in relation to human creativity and problem-solving.', 'Describir fortalezas, debilidades y consideraciones éticas de tecnologías digitales, incluidos sistemas de IA, en relación con la creatividad humana y la resolución de problemas.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO5.3.08', 'Assess strengths and weaknesses of available digital technologies in relation to a particular problem-solving task.', 'Evaluar fortalezas y debilidades de tecnologías digitales disponibles en relación con una tarea particular de resolución de problemas.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.3.09', 'Use a variety of digital technologies responsibly and ethically to support problem-solving as an individual or in a group.', 'Utilizar una variedad de tecnologías digitales de manera responsable y ética para apoyar la resolución de problemas como individuo o en grupo.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.3.10', 'Prioritise human-centric approaches in one\'s own use of digital technologies for problem-solving.', 'Priorizar enfoques centrados en el humano en el uso propio de tecnologías digitales para la resolución de problemas.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO5.3.11', 'Use a variety of digital technologies efficiently, responsibly and ethically to help solve complex problems.', 'Utilizar una variedad de tecnologías digitales de manera eficiente, responsable y ética para ayudar a resolver problemas complejos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.12', 'Contribute to initiatives focused on the application of digital technologies to help solve complex problem-solving tasks.', 'Contribuir a iniciativas enfocadas en la aplicación de tecnologías digitales para ayudar a resolver tareas complejas de resolución de problemas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.13', 'Support others to develop their confidence and capabilities in using digital technologies to help solve real-world problems.', 'Apoyar a otros para desarrollar su confianza y capacidades en el uso de tecnologías digitales para ayudar a resolver problemas del mundo real.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.14', 'Lead or contribute to initiatives focused on the application of digital technologies for highly complex or specialised problem-solving.', 'Liderar o contribuir a iniciativas enfocadas en la aplicación de tecnologías digitales para la resolución de problemas altamente complejos o especializados.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.15', 'Lead or contribute to initiatives that use digital technologies to help make improvements to or find new solutions for real-world problems.', 'Liderar o contribuir a iniciativas que utilicen tecnologías digitales para ayudar a realizar mejoras o encontrar nuevas soluciones para problemas del mundo real.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.16', 'Support others to develop their capabilities to use digital technologies for complex or specialised problem-solving tasks.', 'Apoyar a otros para desarrollar sus capacidades para usar tecnologías digitales para tareas de resolución de problemas complejas o especializadas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 5.4 Competence Gaps
  ['LO5.4.01', 'Acknowledge the value of learning about digital technologies in relation to one\'s own interests and needs.', 'Reconocer el valor de aprender sobre tecnologías digitales en relación con los propios intereses y necesidades.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO5.4.02', 'Acknowledge the benefits and commonplace nature of seeking support in addressing digital competence needs.', 'Reconocer los beneficios y la naturaleza común de buscar apoyo para abordar necesidades de competencia digital.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.4.03', 'Recognise that digital competence is much broader than technical skills.', 'Reconocer que la competencia digital es mucho más amplia que las habilidades técnicas.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.4.04', 'Recognise that digital competence requires regular updating for daily life, working and learning.', 'Reconocer que la competencia digital requiere actualización regular para la vida diaria, el trabajo y el aprendizaje.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.4.05', 'Identify opportunities to improve one\'s digital competences.', 'Identificar oportunidades para mejorar las propias competencias digitales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.4.06', 'Acknowledge the benefits of staying informed about developments in digital technologies.', 'Reconocer los beneficios de mantenerse informado sobre desarrollos en tecnologías digitales.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO5.4.07', 'Prioritise the identification of opportunities to learn about digital technologies.', 'Priorizar la identificación de oportunidades para aprender sobre tecnologías digitales.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO5.4.08', 'Identify relevant learning to meet one\'s digital competence needs.', 'Identificar aprendizaje relevante para satisfacer las propias necesidades de competencia digital.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO5.4.09', 'Accurately assess one\'s own digital competences and digital competence needs.', 'Evaluar con precisión las propias competencias digitales y necesidades de competencia digital.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.4.10', 'Participate actively in learning to meet one\'s digital competence needs.', 'Participar activamente en el aprendizaje para satisfacer las propias necesidades de competencia digital.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO5.4.11', 'Continually assess digital technological developments and their implications for one’s own and others’ digital competence needs.', 'Evaluar continuamente los desarrollos tecnológicos digitales y sus implicaciones para las necesidades de competencia digital propias y de otros.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO5.4.12', 'Engage in ongoing self-development to meet digital competence needs.', 'Involucrarse en el autodesarrollo continuo para satisfacer necesidades de competencia digital.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO5.4.13', 'Support others to develop confidence and autonomy in digital environments.', 'Apoyar a otros para desarrollar confianza y autonomía en entornos digitales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.4.14', 'Compile available digital competence learning opportunities for a particular purpose.', 'Compilar oportunidades de aprendizaje de competencia digital disponibles para un propósito particular.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.4.15', 'Engage in ongoing self-development to meet complex or specialised digital competence needs.', 'Involucrarse en el autodesarrollo continuo para satisfacer necesidades de competencia digital complejas o especializadas.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO5.4.16', 'Mentor others in identifying and addressing their digital competence needs.', 'Mentorar a otros en la identificación y abordaje de sus necesidades de competencia digital.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO5.4.17', 'Design learning material to help others to meet complex or specialised digital competence needs.', 'Diseñar material de aprendizaje para ayudar a otros a satisfacer necesidades de competencia digital complejas o especializadas.', 'Highly advanced', 'Skill', 'AI-Implicit']
];

// Hydrate raw data into full objects
export const DIGCOMP_DATA: LearningOutcome[] = RAW_OUTCOMES.map(item => {
  const [id, enDesc, esDesc, levelKey, ksaKey, aiLabel] = item;
  
  // Parse IDs to get area (LO1, LO2...) and subarea (1.1, 1.2...)
  // ID Format: LOX.Y.ZZ -> X is Area, X.Y is Subarea
  const areaNum = parseInt(id.charAt(2));
  const subAreaKey = id.substring(2, 5); // "1.1", "1.2", "5.4"
  
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

  // Determine which example to use: Specific > Template > Fallback
  const examples = SPECIFIC_EXAMPLES_MAP[id] || AREA_EXAMPLES_TEMPLATES[subAreaKey];

  return {
    id,
    description: {
      en: enDesc,
      es: esDesc,
      eu: esDesc // Fallback for Basque description to Spanish
    },
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
