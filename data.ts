
import { LearningOutcome, ProficiencyLevel, KSA, Language } from './types';

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

// Raw data format: [ID, English Desc, Spanish Desc, Level, KSA, AI Label]
const RAW_OUTCOMES: string[][] = [
  // 1.1
  ['LO1.1.01', 'Acknowledge the benefits of using different digital search tools and methods.', 'Reconocer los beneficios de usar diferentes herramientas de búsqueda digital.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO1.1.02', 'Recognise that the results of a search depend on the tool used.', 'Reconocer que los resultados dependen de la herramienta de búsqueda utilizada.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.1.03', 'Recognise that search results can contain irrelevant information.', 'Reconocer que los resultados pueden contener información irrelevante.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.1.04', 'Identify the main features of commonly-used AI-driven and traditional search tools.', 'Identificar características de herramientas de búsqueda tradicionales y basadas en IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO1.1.05', 'Use digital search tools to implement basic information searches.', 'Usar herramientas de búsqueda para realizar búsquedas básicas.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO1.1.06', 'Use digital search tools to refine or update existing results.', 'Usar herramientas para refinar o actualizar resultados existentes.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO1.1.07', 'Purposefully explore new digital search tools and search functionalities.', 'Explorar intencionadamente nuevas herramientas y funcionalidades de búsqueda.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO1.1.08', 'Identify strategies that provide more relevant digital search results.', 'Identificar estrategias que proporcionan resultados más relevantes.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.1.09', 'Distinguish between more and less relevant digital search results.', 'Distinguir entre resultados de búsqueda más y menos relevantes.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.1.10', 'Select appropriate digital search tools based on information needs.', 'Seleccionar herramientas de búsqueda apropiadas según las necesidades.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.1.11', 'Translate information needs into effective digital search queries.', 'Traducir necesidades de información en consultas de búsqueda efectivas.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.1.12', 'Apply appropriate strategies to refine or filter existing digital results.', 'Aplicar estrategias para refinar o filtrar resultados digitales.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.1.13', 'Continually explore functions and features of familiar and novel tools.', 'Explorar continuamente funciones de herramientas familiares y nuevas.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.1.14', 'Prioritise deepening one’s existing search capabilities.', 'Priorizar la profundización en las capacidades de búsqueda propias.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.1.15', 'Combine a variety of digital search tools to address complex needs.', 'Combinar varias herramientas para abordar necesidades complejas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.16', 'Assist others in developing their digital search capabilities.', 'Ayudar a otros a desarrollar sus capacidades de búsqueda.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.17', 'Stay informed about developments in digital search technologies.', 'Mantenerse informado sobre desarrollos en tecnologías de búsqueda.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.1.18', 'Assess and evaluate developments in digital search technologies.', 'Evaluar desarrollos en tecnologías de búsqueda para tomar decisiones.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.19', 'Combine a variety of tools to address highly complex information needs.', 'Combinar herramientas para necesidades de información muy complejas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.20', 'Assist others to implement and refine complex or specialised searches.', 'Ayudar a otros a refinar búsquedas complejas o especializadas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.1.21', 'Contribute to improvements in or new solutions for complex searches.', 'Contribuir a mejoras o nuevas soluciones para búsquedas complejas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 1.2
  ['LO1.2.01', 'Acknowledge the benefits of a cautious approach in interpreting information.', 'Reconocer los beneficios de ser cauteloso al interpretar información.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO1.2.02', 'Distinguish between the source of digital content and content itself.', 'Distinguir entre la fuente del contenido y el contenido mismo.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.03', 'Recognise that some digital information sources may not be trustworthy.', 'Reconocer que algunas fuentes pueden no ser fiables.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.04', 'Recognise difficulty distinguishing human vs AI generated content.', 'Reconocer la dificultad de distinguir contenido humano vs generado por IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.05', 'Recognise examples of misinformation, disinformation, and bias.', 'Reconocer ejemplos de desinformación y sesgos.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.06', 'Recognise examples of social media influencing and filter bubbles.', 'Reconocer ejemplos de influencia en redes sociales y burbujas de filtro.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.07', 'Make a basic assessment of reliability and credibility of sources.', 'Hacer una evaluación básica de fiabilidad de fuentes.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO1.2.08', 'Acknowledge benefits of questioning credibility of sources.', 'Reconocer beneficios de cuestionar la credibilidad de las fuentes.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO1.2.09', 'Recognise potential consequences of misinformation.', 'Reconocer consecuencias potenciales de la desinformación.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.10', 'Describe methods to identify the source of information found online.', 'Describir métodos para identificar la fuente de información en línea.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.11', 'Define the purposes of fact-checking services.', 'Definir los propósitos de servicios de verificación de hechos.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.12', 'Recognise concepts of pre-bunking and de-bunking.', 'Reconocer conceptos de pre-bunking y de-bunking.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.13', 'Recognise how AI training data affects reliability.', 'Reconocer cómo los datos de entrenamiento de IA afectan la fiabilidad.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.14', 'Recognise AI systems may function like a "black box".', 'Reconocer que la IA puede funcionar como una "caja negra".', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.15', 'Identify examples of human and AI bias.', 'Identificar ejemplos de sesgo humano y de IA.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.16', 'Recognise that AI systems may produce inaccurate output.', 'Reconocer que la IA puede producir resultados inexactos (alucinaciones).', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.17', 'Recognise humans using AI are responsible for checking validity.', 'Reconocer que los humanos usando IA son responsables de verificar la validez.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.18', 'Recognise user-directing strategies like clickbait and nudging.', 'Reconocer estrategias como clickbait y nudging.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.19', 'Apply pre-bunking and de-bunking strategies.', 'Aplicar estrategias de verificación para descartar fuentes no fiables.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.2.20', 'Respond effectively to user-directing strategies.', 'Responder eficazmente a estrategias como clickbait y nudging.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.2.21', 'Critically assess reliability considering AI and commercial interests.', 'Evaluar críticamente la fiabilidad considerando IA e intereses comerciales.', 'Intermediate', 'Skill', 'AI-Explicit'],
  ['LO1.2.22', 'Continually scrutinise how AI systems shape information.', 'Escrutar continuamente cómo la IA da forma a la información.', 'Advanced', 'Attitude', 'AI-Explicit'],
  ['LO1.2.23', 'Describe consequences of misinformation and filter bubbles.', 'Describir consecuencias de desinformación y burbujas de filtro.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.2.24', 'Describe features of trustworthy digital technologies.', 'Describir características de tecnologías digitales fiables.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.25', 'Describe methods used to identify deep-fakes.', 'Describir métodos para identificar deep-fakes.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO1.2.26', 'Thoroughly assess reliability of diverse sources.', 'Evaluar exhaustivamente la fiabilidad de diversas fuentes.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.2.27', 'Support others to develop capabilities to assess reliability.', 'Apoyar a otros a evaluar la fiabilidad de fuentes.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.2.28', 'Promote resilience to misinformation.', 'Promover la resiliencia ante la desinformación.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.2.29', 'Systematically assess information for complex decision-making.', 'Evaluar sistemáticamente información para decisiones complejas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.2.30', 'Help others critically evaluate information.', 'Ayudar a otros a evaluar críticamente la información.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.2.31', 'Lead initiatives supporting accurate interpretation of data.', 'Liderar iniciativas para la interpretación precisa de datos.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 1.3
  ['LO1.3.01', 'Acknowledge benefits of managing and organising information.', 'Reconocer beneficios de organizar la información digital.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO1.3.02', 'Recognise functions of data removal, restoration and backup.', 'Reconocer funciones de borrado, restauración y copia de seguridad.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.03', 'Identify main properties of digital files and folders.', 'Identificar propiedades principales de archivos y carpetas.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.04', 'Recognise the concept of data in general terms.', 'Reconocer el concepto de datos en términos generales.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.05', 'Download, save, retrieve, move and delete digital files.', 'Descargar, guardar, recuperar, mover y borrar archivos.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.06', 'Organise and format simple data in spreadsheets.', 'Organizar y formatear datos simples en hojas de cálculo.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.07', 'Update one’s contacts on phone or email.', 'Actualizar contactos en teléfono o correo.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.08', 'Acknowledge importance of ethical management of data.', 'Reconocer la importancia de la gestión ética de datos.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO1.3.09', 'Recognise that files can be renamed and organised.', 'Reconocer que los archivos se pueden renombrar y organizar.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.10', 'Recognise files can be saved to different locations/cloud.', 'Reconocer que los archivos se pueden guardar en la nube o dispositivos.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.11', 'Identify common data collection tools.', 'Identificar herramientas comunes de recolección de datos.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.12', 'Define responsibilities using data collection tools.', 'Definir responsabilidades al usar herramientas de recolección.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.13', 'Identify common types of data and formats.', 'Identificar tipos comunes de datos y formatos.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO1.3.14', 'Apply naming conventions and folder hierarchies.', 'Aplicar convenciones de nomenclatura y jerarquías de carpetas.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.15', 'Manage files on devices and cloud services.', 'Gestionar archivos en dispositivos y nube.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.16', 'Manage information in digital accounts like email.', 'Gestionar información en cuentas digitales como email.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.17', 'Use data collection tools for quizzes or surveys.', 'Usar herramientas para cuestionarios o encuestas.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO1.3.18', 'Organise and format data in spreadsheets.', 'Organizar y formatear datos en hojas de cálculo.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.19', 'Apply basic formulas to data in spreadsheets.', 'Aplicar fórmulas básicas en hojas de cálculo.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO1.3.20', 'Prioritise ethical and transparent management of data.', 'Priorizar la gestión ética y transparente de datos.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.3.21', 'Take account of potential sources of error in data.', 'Tener en cuenta fuentes potenciales de error en los datos.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.3.22', 'Identify possible sources of error in data.', 'Identificar posibles fuentes de error en datos.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.23', 'Describe steps in managing and analysing information.', 'Describir pasos para gestionar y analizar información.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.24', 'Describe features of open data.', 'Describir características de datos abiertos.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.25', 'Describe features of big data.', 'Describir características de Big Data.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO1.3.26', 'Apply functions to transfer and manage data.', 'Aplicar funciones para transferir y gestionar datos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.27', 'Use digital tools to collect and process data.', 'Usar herramientas para recolectar y procesar datos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.28', 'Apply analysis of data for complex decision-making.', 'Aplicar análisis de datos para decisiones complejas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.29', 'Assist others with data management and analysis.', 'Asistir a otros en la gestión y análisis de datos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.30', 'Acknowledge importance of documenting data.', 'Reconocer importancia de documentar datos para otros.', 'Highly advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO1.3.31', 'Stay informed about developments in data management.', 'Mantenerse informado sobre desarrollos en gestión de datos.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO1.3.32', 'Develop strategies for complex data management.', 'Desarrollar estrategias para gestión de datos complejos.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.33', 'Use big data techniques to process large volumes.', 'Usar técnicas de Big Data para grandes volúmenes.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.34', 'Lead initiatives for advanced data management.', 'Liderar iniciativas de gestión avanzada de datos.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO1.3.35', 'Contribute to new solutions for data management.', 'Contribuir a nuevas soluciones de gestión de datos.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 2.1
  ['LO2.1.01', 'Acknowledge importance of others’ preferences in digital communication.', 'Reconocer preferencias de otros en comunicación digital.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.1.02', 'Distinguish between synchronous and asynchronous communication.', 'Distinguir comunicación síncrona y asíncrona.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.1.03', 'Identify differences between digital and non-digital interactions.', 'Identificar diferencias entre interacción digital y no digital.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.04', 'Distinguish between physical and virtual realities.', 'Distinguir realidades físicas y virtuales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.05', 'Identify basic features of digital communication tools.', 'Identificar características básicas de herramientas de comunicación.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.06', 'Identify basic features of virtual assistants and AI systems.', 'Identificar características de asistentes virtuales y sistemas de IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO2.1.07', 'Recognise differences between human-machine and human-human interactions.', 'Reconocer diferencias entre interacción humano-máquina y humano-humano.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.08', 'Recognise what a robot is and its non-human nature.', 'Reconocer qué es un robot y su naturaleza no humana.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.1.09', 'Recognise humans interact with robots to carry out tasks.', 'Reconocer que los humanos interactúan con robots para tareas.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.1.10', 'Use basic features of communication tools.', 'Usar características básicas de herramientas de comunicación.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO2.1.11', 'Tailor communication to specific contexts.', 'Adaptar la comunicación a contextos específicos.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.1.12', 'Recognise reality-virtuality continuum.', 'Reconocer el continuo realidad-virtualidad.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.13', 'Describe features of digital communication tools.', 'Describir características de herramientas de comunicación.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.14', 'Describe benefits and limitations of AI in communication.', 'Describir beneficios y límites de la IA en comunicación.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO2.1.15', 'Identify contexts for sync vs async communication.', 'Identificar contextos para comunicación síncrona vs asíncrona.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.1.16', 'Identify key features of robots (sensors, software).', 'Identificar características clave de robots (sensores, software).', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.17', 'Define examples of human-robot interaction.', 'Definir ejemplos de interacción humano-robot.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.18', 'Recognise robots operate with varying autonomy.', 'Reconocer que los robots tienen diversos grados de autonomía.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.1.19', 'Select suitable communication means for a context.', 'Seleccionar medios de comunicación adecuados al contexto.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.1.20', 'Develop prompts for virtual assistants for non-complex interactions.', 'Desarrollar prompts para asistentes virtuales en interacciones simples.', 'Intermediate', 'Skill', 'AI-Explicit'],
  ['LO2.1.21', 'Use multiple features of communication tools.', 'Usar múltiples funciones de herramientas de comunicación.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.1.22', 'Continually adapt communication to contexts.', 'Adaptar continuamente la comunicación a contextos.', 'Advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.1.23', 'Combine tools for complex communication tasks.', 'Combinar herramientas para tareas complejas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.24', 'Refine prompts for AI to handle complex interactions.', 'Refinar prompts para que la IA maneje interacciones complejas.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO2.1.25', 'Assess benefits and disadvantages of robotic applications.', 'Evaluar beneficios y desventajas de aplicaciones robóticas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.26', 'Assist others to select communication tools.', 'Asistir a otros en la selección de herramientas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.27', 'Organise and moderate complex digital events.', 'Organizar y moderar eventos digitales complejos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.28', 'Stay informed about developments in communication tools.', 'Mantenerse informado sobre desarrollos en comunicación.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.1.29', 'Assess and combine tools for novel tasks.', 'Evaluar y combinar herramientas para tareas novedosas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.30', 'Provide guidance in advanced use of communication tools.', 'Proveer guía en el uso avanzado de herramientas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.1.31', 'Lead improvements in digital communication solutions.', 'Liderar mejoras en soluciones de comunicación.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 2.2 Sharing
  ['LO2.2.01', 'Acknowledge importance of responsible sharing.', 'Reconocer importancia de compartir responsablemente.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO2.2.02', 'Recognise benefits and risks of sharing.', 'Reconocer beneficios y riesgos de compartir.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.2.03', 'Identify functions of social media.', 'Identificar funciones de redes sociales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO2.2.04', 'Recognise choice in what to share.', 'Reconocer la elección en qué compartir.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.2.05', 'Recognise AI systems can share information.', 'Reconocer que los sistemas de IA pueden compartir información.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO2.2.06', 'Identify target audience of sharing.', 'Identificar audiencia objetivo al compartir.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO2.2.07', 'Use simple processes to share information.', 'Usar procesos simples para compartir.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO2.2.08', 'Assess value and accuracy before sharing.', 'Evaluar valor y precisión antes de compartir.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.2.09', 'Define responsibilities associated with sharing.', 'Definir responsabilidades al compartir.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.2.10', 'Describe effective/ethical ways to share.', 'Describir formas éticas de compartir.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO2.2.11', 'Assess risks/benefits of sharing.', 'Evaluar riesgos/beneficios de compartir.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.2.12', 'Effectively and ethically share information.', 'Compartir información de forma ética y efectiva.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.2.13', 'Report or flag misinformation.', 'Reportar o marcar desinformación.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO2.2.14', 'Acknowledge value of OER (Open Educational Resources).', 'Reconocer valor de REA (Recursos Educativos Abiertos).', 'Advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO2.2.15', 'Share to support professional goals.', 'Compartir para apoyar objetivos profesionales.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.2.16', 'Advise others on sharing.', 'Aconsejar a otros sobre compartir.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO2.2.17', 'Explore alternative means for complex sharing.', 'Explorar medios alternativos para compartir complejo.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO2.2.18', 'Facilitate complex sharing across technologies.', 'Facilitar compartir complejo entre tecnologías.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.2.19', 'Contribute to specialised sharing initiatives.', 'Contribuir a iniciativas especializadas de compartir.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO2.2.20', 'Lead improvements in sharing solutions.', 'Liderar mejoras en soluciones de compartir.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 3.1 Content Creation
  ['LO3.1.01', 'Acknowledge benefits of content creation tools.', 'Reconocer beneficios de herramientas de creación.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO3.1.02', 'Importance of accessible and inclusive content.', 'Importancia de contenido accesible e inclusivo.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO3.1.03', 'Identify common file formats.', 'Identificar formatos de archivo comunes.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.1.04', 'Identify common operational functions.', 'Identificar funciones operativas comunes.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO3.1.05', 'Distinguish accessible vs inclusive content.', 'Distinguir contenido accesible vs inclusivo.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.1.06', 'Recognise humans essential for ethical AI content.', 'Reconocer humanos esenciales para contenido IA ético.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.1.07', 'Recognise Generative AI as specific AI type.', 'Reconocer IA Generativa como tipo específico.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.1.08', 'Use basic tools to create content.', 'Usar herramientas básicas para crear contenido.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO3.1.09', 'Explore features to deepen creation capabilities.', 'Explorar funciones para mejorar creación.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.1.10', 'Describe benefits/limitations of AI for creation.', 'Describir beneficios/límites de IA para creación.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.1.11', 'Define strategies like templates for efficiency.', 'Definir estrategias como plantillas para eficiencia.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.1.12', 'Use variety of tools to create content.', 'Usar variedad de herramientas para crear.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.1.13', 'Assess inclusivity needs of audience.', 'Evaluar necesidades de inclusión de la audiencia.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO3.1.14', 'Edit content to enhance accessibility.', 'Editar contenido para mejorar accesibilidad.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.1.15', 'Apply templates/sequencing strategies.', 'Aplicar plantillas/estrategias de secuencia.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.1.16', 'Interact with AI selectively for content creation.', 'Interactuar con IA selectivamente para crear contenido.', 'Intermediate', 'Skill', 'AI-Explicit'],
  ['LO3.1.17', 'Assess capabilities of creation tools.', 'Evaluar capacidades de herramientas de creación.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.1.18', 'Select/combine tools for complex tasks.', 'Seleccionar/combinar herramientas para tareas complejas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.19', 'Create/edit complex specialised content.', 'Crear/editar contenido especializado complejo.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.20', 'Support others in ethical content creation.', 'Apoyar a otros en creación ética.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.21', 'Promote accessibility in creation initiatives.', 'Promover accesibilidad en iniciativas de creación.', 'Highly advanced', 'Attitude', 'AI-Implicit'],
  ['LO3.1.22', 'Promote ethical use of AI in creation.', 'Promover uso ético de IA en creación.', 'Highly advanced', 'Attitude', 'AI-Explicit'],
  ['LO3.1.23', 'Help others develop advanced creation skills.', 'Ayudar a otros a desarrollar habilidades avanzadas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.24', 'Lead complex creation initiatives.', 'Liderar iniciativas de creación complejas.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO3.1.25', 'Lead improvements in creation solutions.', 'Liderar mejoras en soluciones de creación.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 3.4 Programming (Highlight Area)
  ['LO3.4.01', 'Acknowledge role of humans in determining AI use.', 'Reconocer rol humano en determinar uso de IA.', 'Basic', 'Attitude', 'AI-Explicit'],
  ['LO3.4.02', 'Identify common uses of computer programs.', 'Identificar usos comunes de programas.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO3.4.03', 'Recognise computational thinking as human activity.', 'Reconocer pensamiento computacional como actividad humana.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.04', 'Recognise what AI is in general terms.', 'Reconocer qué es la IA en términos generales.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.05', 'Identify what is and isn’t an AI system.', 'Identificar qué es y qué no es un sistema de IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.06', 'Identify common applications of AI.', 'Identificar aplicaciones comunes de IA.', 'Basic', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.07', 'Give basic instructions to a computer.', 'Dar instrucciones básicas a un ordenador.', 'Basic', 'Skill', 'AI-Implicit'],
  ['LO3.4.08', 'Represent simple sequences symbolically.', 'Representar secuencias simples simbólicamente.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO3.4.09', 'Acknowledge relevance of computational thinking.', 'Reconocer relevancia del pensamiento computacional.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.4.10', 'Acknowledge ethics/accessibility in programming.', 'Reconocer ética/accesibilidad en programación.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO3.4.11', 'Distinguish model of reality vs reality.', 'Distinguir modelo de realidad vs realidad.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO3.4.12', 'Recognise concept of algorithm.', 'Reconocer concepto de algoritmo.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.13', 'Define computable vs non-computable problem.', 'Definir problema computable vs no computable.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.14', 'Define general steps in computational thinking.', 'Definir pasos generales del pensamiento computacional.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.15', 'Recognise variety of programming languages.', 'Reconocer variedad de lenguajes de programación.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.16', 'Define foundational programming concepts.', 'Definir conceptos fundamentales de programación.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.17', 'Recognise role of programming in robotics.', 'Reconocer rol de programación en robótica.', 'Intermediate', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.18', 'Recognise machine learning as branch of AI.', 'Reconocer aprendizaje automático como rama de IA.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.19', 'Recognise steps to develop/validate AI.', 'Reconocer pasos para desarrollar/validar IA.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.20', 'Describe examples of ML applications.', 'Describir ejemplos de aplicaciones de ML.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.21', 'Describe AI applications in sectors.', 'Describir aplicaciones de IA en sectores.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.22', 'Translate information into logical operations.', 'Traducir información a operaciones lógicas.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.4.23', 'Develop basic programs with control structures.', 'Desarrollar programas básicos con estructuras de control.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.4.24', 'Create flow diagrams.', 'Crear diagramas de flujo.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO3.4.25', 'Acknowledge importance of human oversight in AI.', 'Reconocer importancia de supervisión humana en IA.', 'Advanced', 'Attitude', 'AI-Explicit'],
  ['LO3.4.26', 'Define human-centric approaches in AI.', 'Definir enfoques centrados en el humano en IA.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.27', 'Describe main steps in developing AI.', 'Describir pasos principales en desarrollo de IA.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.28', 'Distinguish types of machine learning.', 'Distinguir tipos de aprendizaje automático.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.29', 'Identify main features of ML algorithms.', 'Identificar características de algoritmos ML.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.30', 'Describe role of UX/CX in programming.', 'Describir rol de UX/CX en programación.', 'Advanced', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO3.4.31', 'Describe computational thinking in robotics.', 'Describir pensamiento computacional en robótica.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO3.4.32', 'Identify routine tasks for automation.', 'Identificar tareas rutinarias para automatizar.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO3.4.33', 'Assess ethical aspects of AI deployment.', 'Evaluar aspectos éticos del despliegue de IA.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO3.4.34', 'Apply CT/AI to automate tasks.', 'Aplicar PC/IA para automatizar tareas.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO3.4.35', 'Apply tools to complex CT tasks.', 'Aplicar herramientas a tareas complejas de PC.', 'Advanced', 'Skill', 'AI-Explicit'],
  ['LO3.4.36', 'Promote ethical programming practices.', 'Promover prácticas éticas de programación.', 'Highly advanced', 'Attitude', 'AI-Explicit'],
  ['LO3.4.37', 'Stay informed about AI/Robotics dev.', 'Mantenerse informado sobre desarrollo IA/Robótica.', 'Highly advanced', 'Attitude', 'AI-Explicit'],
  ['LO3.4.38', 'Lead complex projects in AI/CT.', 'Liderar proyectos complejos en IA/PC.', 'Highly advanced', 'Skill', 'AI-Explicit'],
  ['LO3.4.39', 'Assist others in programming/AI.', 'Asistir a otros en programación/IA.', 'Highly advanced', 'Skill', 'AI-Explicit'],
  // 4.1 Safety
  ['LO4.1.01', 'Acknowledge importance of protecting devices.', 'Reconocer importancia de proteger dispositivos.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.1.02', 'Recognise concepts of cybersecurity.', 'Reconocer conceptos de ciberseguridad.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.1.03', 'Recognise tools help keep devices secure.', 'Reconocer que las herramientas ayudan a proteger.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.1.04', 'Recognise cybersecurity legislation.', 'Reconocer legislación de ciberseguridad.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.1.05', 'Identify basic protection measures (antivirus, passwords).', 'Identificar medidas básicas (antivirus, contraseñas).', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO4.1.06', 'Apply basic protection measures.', 'Aplicar medidas básicas de protección.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.1.07', 'Importance of being vigilant.', 'Importancia de estar vigilante.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO4.1.08', 'Describe main features of malware.', 'Describir características del malware.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO4.1.09', 'Recognise AI used for cyberattacks/defense.', 'Reconocer IA usada en ciberataques/defensa.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO4.1.10', 'Apply variety of malware prevention techniques.', 'Aplicar variedad de técnicas antimalware.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO4.1.11', 'Prioritise regular updating of measures.', 'Priorizar actualización regular de medidas.', 'Advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO4.1.12', 'Describe key rights under legislation.', 'Describir derechos clave bajo legislación.', 'Advanced', 'Knowledge', 'AI-Implicit'],
  ['LO4.1.13', 'Identify AI use in recent cyberattacks.', 'Identificar uso de IA en ciberataques recientes.', 'Advanced', 'Knowledge', 'AI-Explicit'],
  ['LO4.1.14', 'Update measures to evolving threats.', 'Actualizar medidas ante amenazas evolutivas.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO4.1.15', 'Assist others in device protection.', 'Asistir a otros en protección de dispositivos.', 'Advanced', 'Skill', 'AI not Implicit or Explicit'],
  ['LO4.2.03', 'Identify risks of sharing personal data (AI specific).', 'Identificar riesgos de compartir datos (específico IA).', 'Basic', 'Knowledge', 'AI-Explicit'],
  // 5.1 Problem Solving
  ['LO5.1.01', 'Acknowledge commonplace nature of technical problems.', 'Reconocer naturaleza común de problemas técnicos.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.02', 'Benefits of seeking assistance.', 'Beneficios de buscar ayuda.', 'Basic', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.03', 'Distinguish OS and software.', 'Distinguir SO y software.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO5.1.04', 'Identify hardware/software features.', 'Identificar características hardware/software.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO5.1.05', 'Recognise signs of technical problems.', 'Reconocer signos de problemas técnicos.', 'Basic', 'Knowledge', 'AI not Implicit or Explicit'],
  ['LO5.1.06', 'Follow instructions to solve problems.', 'Seguir instrucciones para resolver problemas.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO5.1.07', 'Install and update software.', 'Instalar y actualizar software.', 'Basic', 'Skill', 'AI not Implicit or Explicit'],
  ['LO5.1.08', 'Benefits of autonomy in solving issues.', 'Beneficios de autonomía resolviendo problemas.', 'Intermediate', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.09', 'Troubleshoot using search/strategies.', 'Solucionar problemas usando búsqueda/estrategias.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.1.10', 'Adjust settings for performance.', 'Ajustar configuración para rendimiento.', 'Intermediate', 'Skill', 'AI not Implicit or Explicit'],
  ['LO5.1.11', 'Prioritise capacity to diagnose issues.', 'Priorizar capacidad de diagnosticar problemas.', 'Advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.12', 'Assist others to diagnose/solve.', 'Asistir a otros a diagnosticar/resolver.', 'Advanced', 'Skill', 'AI not Implicit or Explicit'],
  ['LO5.1.13', 'Use strategies for complex troubleshooting.', 'Usar estrategias para problemas complejos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.1.14', 'Help others develop confidence.', 'Ayudar a otros a desarrollar confianza.', 'Highly advanced', 'Attitude', 'AI not Implicit or Explicit'],
  ['LO5.1.15', 'Design/deliver training on devices.', 'Diseñar/impartir formación sobre dispositivos.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  // 5.3 Creative Use
  ['LO5.3.01', 'Acknowledge digital support for creativity.', 'Reconocer soporte digital a la creatividad.', 'Basic', 'Attitude', 'AI-Implicit'],
  ['LO5.3.02', 'Identify technologies to solve real-world problems.', 'Identificar tecnologías para problemas reales.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.3.03', 'Identify where technologies augment creativity.', 'Identificar dónde la tecnología aumenta la creatividad.', 'Basic', 'Knowledge', 'AI-Implicit'],
  ['LO5.3.04', 'Importance of human-centric design.', 'Importancia del diseño centrado en humanos.', 'Intermediate', 'Attitude', 'AI-Implicit'],
  ['LO5.3.05', 'Define concept of human-centric.', 'Definir concepto de centrado en humanos.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO5.3.06', 'Identify interplay human-tech in creativity.', 'Identificar interacción humano-tec en creatividad.', 'Intermediate', 'Knowledge', 'AI-Implicit'],
  ['LO5.3.07', 'Describe strengths/weaknesses of AI for creativity.', 'Describir fortalezas/debilidades de IA para creatividad.', 'Intermediate', 'Knowledge', 'AI-Explicit'],
  ['LO5.3.08', 'Assess technologies for problem-solving.', 'Evaluar tecnologías para resolución de problemas.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.3.09', 'Use technologies responsibly for solving.', 'Usar tecnologías responsablemente para resolver.', 'Intermediate', 'Skill', 'AI-Implicit'],
  ['LO5.3.10', 'Prioritise human-centric approaches.', 'Priorizar enfoques centrados en humanos.', 'Advanced', 'Attitude', 'AI-Implicit'],
  ['LO5.3.11', 'Use technologies ethically to solve complex problems.', 'Usar tecnologías éticamente para problemas complejos.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.12', 'Contribute to initiatives for complex solving.', 'Contribuir a iniciativas de resolución compleja.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.13', 'Support others to develop confidence.', 'Apoyar a otros a desarrollar confianza.', 'Advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.14', 'Lead initiatives for highly complex solving.', 'Liderar iniciativas de resolución muy compleja.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.15', 'Lead initiatives for new solutions.', 'Liderar iniciativas para nuevas soluciones.', 'Highly advanced', 'Skill', 'AI-Implicit'],
  ['LO5.3.16', 'Support others in specialised solving.', 'Apoyar a otros en resolución especializada.', 'Highly advanced', 'Skill', 'AI-Implicit']
];

// Re-integrate the detailed examples we created earlier
const DETAILED_EXAMPLES_MAP: Record<string, any> = {
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
        eu: "Arloa: Zeharkako Proiektuak.\nZerbitzu-ikaskuntza: Birziklapen-kanpaina erraz bat gidatu ikastetxean, tresna digitalak erabiliz kartelak sortzeko eta ikaskide txikiagoei hondakinak nola sailkatu azaltzeko.",
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

// Hydrate raw data into full objects
export const DIGCOMP_DATA: LearningOutcome[] = RAW_OUTCOMES.map(item => {
  const [id, enDesc, esDesc, levelKey, ksaKey, aiLabel] = item;
  
  // Parse IDs to get area (LO1, LO2...) and subarea (1.1, 1.2...)
  // ID Format: LOX.Y.ZZ -> X is Area, X.Y is Subarea
  const areaNum = parseInt(id.charAt(2));
  const subAreaKey = id.substring(2, 5); // "1.1", "1.2"
  
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

  return {
    id,
    description: {
      en: enDesc,
      es: esDesc,
      // For Basque, we use English/Spanish as fallback for description if not manually provided in a large translation map
      eu: esDesc 
    },
    level: levelMap[levelKey],
    ksa: ksaMap[ksaKey],
    aiLabel,
    competenceArea: AREAS[areaNum as keyof typeof AREAS],
    competenceSubArea: SUB_AREAS[subAreaKey as keyof typeof SUB_AREAS] || { en: subAreaKey, es: subAreaKey, eu: subAreaKey },
    examples: DETAILED_EXAMPLES_MAP[id]
  };
});

export const getCompetenceAreas = (lang: Language) => 
  Array.from(new Set(DIGCOMP_DATA.map(d => d.competenceArea[lang]))).sort();

export const PROFICIENCY_LEVELS = Object.values(ProficiencyLevel);
