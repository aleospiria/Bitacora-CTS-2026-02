// ============================================================
// CONTENIDO DE LA BITÁCORA. Edita aquí; los componentes no cambian.
// Cualquier campo con `pendiente: true` se muestra como "Por completar".
// `fecha: null` muestra una insignia "Falta fecha".
// ============================================================

export const proyecto = {
  titulo: 'Incendios forestales en Colombia',
  subtitulo:
    'Bitácora del proceso: del problema a la propuesta, con sus evidencias, decisiones y ajustes.',
  curso: 'Ciencia, Tecnología y Sociedad · 2026-02',
  autor: 'Víctor Alejandro Aristizábal Ospina',
  rol: 'Investigador y redactor',
  url: 'https://bitacora-cts-2026-02.vercel.app/',
}

export const cifras = [
  { valor: '4.000+', texto: 'incendios en 2025', fuente: 'IDEAM, 2026' },
  { valor: '30.000 ha', texto: 'de cobertura vegetal afectadas en 2025', fuente: 'IDEAM, 2026' },
  { valor: '67 %', texto: 'de las emergencias atendidas en 2024 fueron incendios (6.300 reportes)', fuente: 'UNGRD, 2024, p. 154' },
  { valor: '38', texto: 'municipios del Tolima en alerta (el mayor número del país)', fuente: 'IDEAM, 2026, p. 4' },
]

// Línea de tiempo: entradas fechadas a lo largo del semestre
export const etapas = [
  {
    id: 'problema',
    etapa: 'Problema y herramientas',
    titulo: 'Elegimos el problema y lo describimos',
    fecha: '27-28 ago 2026',
    estado: 'hecho',
    resumen:
      'Partimos del pronóstico del IDEAM del 27 de agosto de 2026, que pone en alerta alta a Antioquia, Caldas, Cauca, Cundinamarca, Huila, La Guajira, Nariño y Tolima. Redactamos la ficha técnica de la primera entrega.',
    detalle: [
      'Territorio: centro y sur del país. Las comunidades más afectadas son campesinas, indígenas y afrodescendientes de zonas rurales. En el Tolima, Coello, Chaparral y Planadas han perdido cultivos de café y plátano.',
      'Justificación: pérdida de biodiversidad, afectación económica, daños a la salud por el humo y desplazamiento forzado.',
    ],
    evidencia: { tipo: 'documento', texto: 'Ficha técnica primera entrega (20 %)' },
  },
  {
    id: 'arbol',
    etapa: 'Problema y herramientas',
    titulo: 'Construimos el árbol de problemas',
    fecha: '27-28 ago 2026',
    estado: 'hecho',
    resumen:
      'Elegimos el árbol de problemas sobre los 5 porqués y la espina de pescado, porque separa causas y efectos y se entiende de un vistazo.',
    detalle: [
      'Las causas son claras y diferenciables, por eso la espina de pescado (útil con causas cruzadas) aportaba menos.',
      'Raíces: 4 causas naturales y 4 humanas. Ramas: 5 efectos.',
    ],
    evidencia: { tipo: 'imagen', src: 'img/arbol-problemas.png', texto: 'Árbol de problemas' },
  },
  {
    id: 'actores',
    etapa: 'Problema y herramientas',
    titulo: 'Mapeamos a los actores',
    fecha: '27-28 ago 2026',
    estado: 'hecho',
    resumen:
      'Identificamos nueve actores y encontramos que no están alineados: la información científica, la capacidad de respuesta y el comportamiento social van por caminos distintos.',
    detalle: [],
    evidencia: { tipo: 'tabla', texto: 'Tabla de actores clave' },
  },
  {
    id: 'objetivos',
    etapa: 'Objetivos',
    titulo: 'Definimos el objetivo general',
    fecha: '27-28 ago 2026',
    estado: 'hecho',
    resumen:
      'Analizar causas, consecuencias y actores desde CTS para proponer estrategias de prevención que integren ciencia, tecnología y participación comunitaria.',
    detalle: [],
    evidencia: null,
  },
  {
    id: 'terrasacha',
    etapa: 'El cómo',
    titulo: 'Trabajo continuo en Terrasacha',
    fecha: 'Hace ~1,5 años hasta hoy (rango aprox.)',
    estado: 'hecho',
    resumen:
      'Mi participación con actores y territorio no fue una salida puntual. Trabajo en Terrasacha, un proyecto donde desarrollamos una plataforma más amplia. Uno de sus módulos detecta incendios con sensores IoT para monitorear cultivos de forma constante y en tiempo real.',
    detalle: [
      'Esa experiencia es la base de la propuesta: conocía el problema desde la parte técnica antes de elegirlo para el curso.',
      'Con técnicos y operadores de campo aprendimos cómo se trabaja en el territorio. Un aprendizaje clave: las apps móviles para tomar datos en campo se diseñan offline-first, porque casi siempre en esos lugares no hay señal.',
      'Mi jefe es el project manager y mantiene comunicación constante con aliados y otros actores interesados, incluidos quienes quieren probar una prueba piloto.',
      'La plataforma se llama Oráculo y es mi referente técnico (ver El cómo). El módulo de incendios es solo una parte de un proyecto más grande.',
    ],
    evidencia: null,
  },
  {
    id: 'retro-profesora',
    etapa: 'Propuesta',
    titulo: 'La profesora pregunta por un plan de participación',
    fecha: 'Entre ago y sep 2026',
    estado: 'hecho',
    resumen:
      'Tras la ficha técnica, la profesora preguntó si había un plan o propuesta de participación con actores o en el territorio. De ahí salió la idea de una app, apoyada en mi trabajo en Terrasacha. La profesora dijo que la idea estaba bien encaminada.',
    detalle: [],
    evidencia: null,
  },
  {
    id: 'propuesta-inicial',
    etapa: 'Propuesta',
    titulo: 'Primera idea: app móvil «FuegoCero»',
    fecha: '15 sep 2026 (aprox.)',
    estado: 'hecho',
    resumen:
      'Una app en Flutter que muestra, sobre imágenes satelitales, el índice de amenaza por incendios de cualquier punto de Colombia, con datos de la empresa colombiana Terrasacha.',
    detalle: [
      'Los datos vendrían en primera instancia de Terrasacha, solo como opción. También se pueden hacer APIs propias o usar otras APIs públicas.',
      'Después se priorizó el IDEAM como fuente principal, por ser la entidad oficial del país.',
    ],
    evidencia: null,
  },
  {
    id: 'cambio-web',
    etapa: 'Propuesta',
    titulo: 'Cambio: de app móvil a app web',
    fecha: '10 nov 2026 (aprox.)',
    estado: 'hecho',
    resumen:
      'Decidimos construir una aplicación web en lugar de una app nativa. Ver el registro de decisiones.',
    detalle: [],
    evidencia: null,
  },
  {
    id: 'ideam',
    etapa: 'Propuesta',
    titulo: 'Decidimos usar el IDEAM como fuente de datos',
    fecha: '16 nov 2026 (aprox.)',
    estado: 'hecho',
    resumen:
      'Al ser un problema nacional, el IDEAM es la entidad oficial de Colombia. Terrasacha queda como opción de apoyo, y también se pueden hacer APIs propias o usar otras APIs públicas.',
    detalle: [],
    evidencia: null,
  },
  {
    id: 'como',
    etapa: 'El cómo',
    titulo: 'Metodología y plan de recolección',
    fecha: 'Hace ~1,5 años hasta hoy (rango aprox.)',
    estado: 'hecho',
    resumen:
      'Metodología: árbol de problemas para ordenar causas y efectos, y trabajo participativo desde dentro de un proyecto real (Terrasacha) con técnicos, operadores de campo y el project manager.',
    detalle: [],
    evidencia: null,
  },
  {
    id: 'recoleccion',
    etapa: 'Recolección de información',
    titulo: 'Trabajo con actores del territorio',
    fecha: 'Hace ~1,5 años hasta hoy (rango aprox.)',
    estado: 'hecho',
    resumen:
      'La información de territorio salió de trabajar con técnicos y operadores de campo durante cerca de año y medio. Por completar: evidencias (capturas, fotos o notas) sin datos personales.',
    detalle: [],
    evidencia: null,
  },
  {
    id: 'hallazgos',
    etapa: 'Hallazgos',
    titulo: 'Qué encontramos',
    fecha: 'Hace ~1,5 años hasta hoy (rango aprox.)',
    estado: 'hecho',
    resumen:
      'El hallazgo central: en campo casi nunca hay señal, así que las herramientas deben funcionar offline. Eso se refleja en la propuesta.',
    detalle: [],
    evidencia: null,
  },
  {
    id: 'validacion',
    etapa: 'Propuesta',
    titulo: 'Validación con actores reales',
    fecha: 'Hace ~1,5 años hasta hoy (rango aprox.)',
    estado: 'hecho',
    resumen:
      'Presenté la propuesta al project manager de Terrasacha. Le pareció bien: concientiza a más gente, sirve de publicidad aunque sea pequeña para el proyecto, que se cita, y no hay inconveniente en usar herramientas de Oráculo.',
    detalle: [],
    evidencia: null,
  },
]

export const causaPriorizada = {
  titulo: 'Causas humanas prevenibles: quemas agrícolas sin control y fogatas o residuos mal manejados',
  resumen:
    'De las ocho causas del árbol, priorizamos las humanas que se pueden prevenir. Su raíz común es que la información de riesgo existe pero no llega de forma comprensible ni a tiempo a quien decide si prende una quema o una fogata.',
  razones: [
    'Las causas naturales (El Niño, calor, falta de lluvia, viento) no se pueden controlar. Las humanas sí.',
    'La mayoría de los incendios tiene origen humano, según la ficha técnica.',
    'El IDEAM ya publica el pronóstico de amenaza, pero el ciudadano no lo ve ni lo entiende. Es una brecha de información y de concientización, no de tecnología.',
    'Los incendios de cobertura vegetal fueron el 67 % de las emergencias atendidas en 2024 (UNGRD).',
  ],
  descartadas:
    'Deforestación e incendios intencionados quedan fuera del alcance. Dependen de intereses ilegales y de seguridad, y exceden lo que una herramienta ciudadana puede resolver.',
}
export const arbol = {
  imagen: 'img/arbol-problemas.png',
  causasNaturales: [
    ['Fenómeno de El Niño', 'Sequías prolongadas y déficit hídrico'],
    ['Altas temperaturas', 'Vegetación seca altamente inflamable'],
    ['Falta de lluvias', 'Temporada seca intensa y suelos áridos'],
    ['Vientos fuertes', 'Aceleran y expanden el frente de fuego'],
  ],
  causasHumanas: [
    ['Quemas agrícolas', 'Prácticas sin control para preparar terrenos'],
    ['Deforestación', 'Tala y ampliación de frontera agropecuaria'],
    ['Fogatas y residuos', 'Fogatas mal apagadas, colillas y vidrios al sol'],
    ['Incendios intencionados', 'Intereses ilegales: tierras, minería y cultivos ilícitos'],
  ],
  efectos: [
    ['Pérdida de biodiversidad', 'Muerte de fauna y flora nativa; páramo y bosque andino degradados'],
    ['Destrucción de cultivos', 'Pérdida de café, plátano y aguacate; caída de ingresos rurales'],
    ['Daños a la salud', 'Enfermedades respiratorias por humo y material particulado'],
    ['Desplazamiento', 'Familias campesinas e indígenas obligadas a abandonar su territorio'],
    ['Emisiones de CO₂', 'Agravan el cambio climático y realimentan nuevas sequías'],
  ],
}

export const actores = [
  { nombre: 'IDEAM', tipo: 'Estado', rol: 'Monitorea el clima y emite alertas tempranas.', relacion: 'Avisa cuándo y dónde hay riesgo. Sin su monitoreo se actuaría a ciegas (IDEAM, 2026, p. 2).' },
  { nombre: 'UNGRD', tipo: 'Estado', rol: 'Coordina la respuesta nacional y moviliza recursos.', relacion: 'Declara alertas oficiales y organiza la ayuda cuando un incendio se sale de control.' },
  { nombre: 'Cuerpos de Bomberos', tipo: 'Estado', rol: 'Sofocan y controlan los incendios en el terreno.', relacion: 'Primera línea, con frecuencia sin equipo ni personal suficientes (IDEAM, 2026, p. 11).' },
  { nombre: 'Ministerio de Ambiente', tipo: 'Estado', rol: 'Diseña políticas de prevención y restauración.', relacion: 'Crea normas y programas contra la deforestación y las quemas ilegales.' },
  { nombre: 'CAR', tipo: 'Estado', rol: 'Autoridades ambientales regionales.', relacion: 'Vigilan quemas no autorizadas y pueden sancionar.' },
  { nombre: 'Fuerzas Militares y Policía', tipo: 'Estado', rol: 'Apoyan con helicópteros, logística y seguridad.', relacion: 'Llegan donde los bomberos no pueden por tierra.' },
  { nombre: 'Comunidades locales', tipo: 'Sociedad', rol: 'Habitantes de zonas rurales.', relacion: 'A veces causan incendios por quemas, pero casi siempre son las principales víctimas y pueden prevenir.' },
  { nombre: 'Sector agrícola y ganadero', tipo: 'Sociedad', rol: 'Usa quemas para renovar pastos.', relacion: 'Una de las principales causas humanas cuando la quema se sale de control.' },
  { nombre: 'Grupos armados ilegales', tipo: 'Ilegal', rol: 'En algunas regiones provocan incendios.', relacion: 'Convierten un problema ambiental en uno de seguridad.' },
]

export const objetivos = {
  general:
    'Identificar y analizar las causas, consecuencias y actores involucrados en los incendios forestales en Colombia, desde una perspectiva de Ciencia, Tecnología y Sociedad, con el fin de proponer estrategias de prevención y mitigación que integren el conocimiento científico, las herramientas tecnológicas y la participación comunitaria.',
  especificos: [
    {
      texto: 'Caracterizar las causas humanas prevenibles de los incendios forestales (quemas agrícolas y fogatas o residuos) y los actores que intervienen.',
      enlace: 'Árbol de problemas, mapa de actores y causa priorizada.',
      estado: 'hecho',
    },
    {
      texto: 'Traducir el pronóstico de amenaza del IDEAM en un semáforo de riesgo comprensible, consultable por ubicación o municipio.',
      enlace: 'Propuesta: mapa, índice y buscador.',
      estado: 'hecho',
    },
    {
      texto: 'Diseñar la propuesta a partir de lo aprendido con técnicos y operadores de campo: que funcione con poca señal y ofrezca recomendaciones de prevención según el nivel de riesgo.',
      enlace: 'Hallazgo offline-first y módulos de la propuesta.',
      estado: 'hecho',
    },
    {
      texto: 'Validar la propuesta con actores reales y ajustarla según su retroalimentación.',
      enlace: 'Validación con el project manager de Terrasacha.',
      estado: 'hecho',
    },
  ],
}
export const como = {
  texto:
    'Dos métodos. Primero, el árbol de problemas para ordenar causas y efectos. Segundo, trabajo participativo desde dentro de un proyecto real: durante cerca de año y medio trabajé en Terrasacha con técnicos y operadores de campo, y consulté al project manager, que conversa con aliados y actores interesados en pilotos.',
}
export const recoleccion = {
  consentimiento:
    'Antes de cada entrevista se pide consentimiento informado. En esta bitácora no se muestran nombres, rostros reconocibles ni datos personales de las personas del territorio.',
  evidencias: [], // { tipo: 'foto'|'video'|'mapa'|'instrumento', titulo, descripcion, src }
}

export const hallazgos = {
  pendiente: true,
  texto: 'Por completar: más hallazgos, cada uno enlazado a su evidencia y a la causa priorizada.',
  items: [
    {
      titulo: 'En campo casi nunca hay señal',
      fuente: 'Trabajo con técnicos y operadores de campo en Terrasacha',
      detalle:
        'Quienes toman datos en el territorio trabajan en zonas sin conectividad. Por eso las apps móviles para operadores se construyen offline-first: guardan los datos en el dispositivo y los sincronizan cuando vuelve la señal.',
      implicacion:
        'Una alerta o un mapa que solo funcione con internet falla justo donde hace falta. La propuesta mantiene el modo offline (caché de la última consulta) y no depende solo de notificaciones push.',
      causa: 'Conecta con la causa estructural: la alerta existe, pero no siempre llega ni se puede usar donde ocurre el incendio.',
    },
  ],
}

export const propuesta = {
  nombre: 'FuegoCero (versión web)',
  idea:
    'Una aplicación web que traduce el índice de amenaza por incendios en una experiencia visual y clara para el ciudadano. El usuario abre el mapa, toca su ubicación o busca su municipio y ve el nivel de riesgo en semáforo, con recomendaciones de prevención.',
  modulos: [
    ['Mapa satelital', 'Capas de índice, focos de calor y cobertura vegetal.'],
    ['Índice de incendio', 'Semáforo por punto consultado, con fecha de actualización.'],
    ['Mi ubicación y buscador', 'Consulta por geolocalización o por municipio y departamento.'],
    ['Zonas guardadas y alertas', 'Mi vereda, mi finca, mi municipio, con aviso al pasar a alerta alta.'],
    ['Recomendaciones', 'Prevención de fogatas, vidrios y quemas agrícolas según el riesgo.'],
    ['Reporte ciudadano', 'Foto y ubicación de un posible conato.'],
    ['Historial', 'Evolución del índice en los últimos días.'],
  ],
  fuentes:
    'La propuesta es independiente de cualquier producto. Mi trabajo en Terrasacha es un referente: por esa experiencia sé qué datos satelitales y qué técnicas se necesitan y cómo integrarlos. Declaro este vínculo para que se lea la propuesta con ese contexto. Fuente principal de datos: el IDEAM, porque el problema es nacional y es la entidad oficial de Colombia que publica el pronóstico de amenaza por incendios. Terrasacha se usaría en primera instancia y como opción, pero se pueden construir APIs propias o usar otras APIs públicas.',
  validacion: {
    actor: 'Project manager de Terrasacha',
    texto:
      'Le presenté la propuesta. Le pareció buena idea: concientiza a más gente y funciona como publicidad, por pequeña que sea, porque el proyecto se cita. Confirmó que no hay inconveniente en usar herramientas de Oráculo. Él mantiene comunicación constante con aliados y otros actores, algunos interesados en una prueba piloto.',
    cambio: 'No pidió cambios a la propuesta. Quedó abierta la posibilidad de una prueba piloto con aliados.',
  },
}
// Plataforma donde vive el módulo de detección de incendios
export const oraculo = {
  nombre: 'Oráculo Terrasacha',
  intro:
    'Oráculo es la plataforma de Terrasacha donde trabajo. No es parte de la propuesta: es mi referente. Haber construido un análisis geoespacial real, con su módulo de detección de incendios, me permite saber qué se puede desarrollar y cómo hacerlo. En la plataforma se dibuja un área en el mapa, se elige un tipo de análisis y se obtienen imágenes y resultados.',
  capturas: [
    {
      src: 'img/screen-home.png',
      alt: 'Pantalla de inicio de Oráculo con acceso rápido y la lista de imágenes exportadas',
      titulo: '1. Inicio',
      texto:
        'El punto de entrada. El botón «Nuevo Análisis Satelital» abre el mapa para empezar una consulta; el historial guarda las anteriores.',
      marcas: [{ left: 48.4, top: 34.4, width: 41.8, height: 5.6, label: 'Aquí empieza todo' }],
    },
    {
      src: 'img/screen-deteccion.jpg',
      alt: 'Mapa de Bogotá con el panel Tipo de análisis, que ofrece exportación normal y modelos de IA',
      titulo: '2. Tipo de análisis',
      texto:
        'Se dibuja el área de interés y se elige el tipo de análisis. Entre los modelos de IA está «Detección de incendios».',
      marcas: [{ left: 2.5, top: 51, width: 12.6, height: 13.2, label: 'Detección de incendios' }],
    },
  ],
  flujo: [
    ['Dibujar el área', 'El usuario marca en el mapa la zona que quiere vigilar.'],
    ['Elegir «Detección de incendios»', 'Pipeline con datos MODIS: preprocesamiento con NDVI y temperatura superficial.'],
    ['Inferencia con IA', 'Un modelo entrenado analiza esas imágenes para detectar posibles incendios.'],
    ['Descargar el resultado', 'La imagen resultante queda en el historial para consultarla o descargarla.'],
  ],
  tecnologia: [
    'Python y FastAPI',
    'Google Earth Engine',
    'Imágenes MODIS y Sentinel',
    'Mapas con Leaflet',
    'Modelos de IA (ONNX)',
    'Sensores IoT',
    'Almacenamiento en la nube',
    'Autenticación de usuarios',
  ],
  aprendizajes: [
    'Los operadores de campo necesitan herramientas que funcionen sin señal (offline-first).',
    'La plataforma combina dos fuentes: satélites para ver el territorio y sensores IoT para medir en el sitio.',
    'Un modelo de IA no sirve sin un flujo claro: elegir área, procesar, inferir y entregar un resultado comprensible.',
  ],
  aviso:
    'Se muestra solo la arquitectura general, con el visto bueno del project manager. No se publican claves, direcciones internas ni datos de clientes.',
}

// Dimensiones CTS (de la ficha técnica) aplicadas al proyecto
export const ctsDimensiones = [
  {
    nombre: 'Ciencia',
    puntos: [
      'Climatología: El Niño y el cambio climático crean sequías, calor y viento que preparan el incendio.',
      'Ecología: estudia la pérdida de biodiversidad y el daño a páramos y bosques andinos.',
      'Referente: el índice NDVI mide la salud de la vegetación y la temperatura superficial mide el calor del suelo.',
    ],
  },
  {
    nombre: 'Tecnología',
    puntos: [
      'Satélites (MODIS, VIIRS) detectan focos de calor casi en tiempo real.',
      'Inteligencia artificial predice zonas de riesgo; helicópteros, drones y sistemas de descarga de agua combaten el fuego.',
      'Referente: en Oráculo corre un modelo de IA sobre imágenes MODIS, y los sensores IoT miden en el sitio.',
    ],
  },
  {
    nombre: 'Sociedad',
    puntos: [
      'Las decisiones humanas (quemas, deforestación) causan la mayoría de los incendios, y las comunidades son a la vez víctima y primera defensa.',
      'Las políticas públicas y la voluntad política definen los recursos para prevenir.',
      'Aprendido en campo: operadores y aliados determinan si la tecnología se usa. Sin señal o sin confianza, la alerta no sirve.',
    ],
  },
]

export const decisiones = [
  {
    fecha: '27-28 ago 2026',
    titulo: 'Árbol de problemas como herramienta principal',
    queDecidimos: 'Usar el árbol de problemas en vez de los 5 porqués o la espina de pescado.',
    porQue: 'Separa causas y efectos y deja el impacto social visible. Las causas eran claras, así que no hacía falta la espina de pescado.',
    cambio: 'Sin cambio posterior.',
    retro: null,
  },
  {
    fecha: '10 nov 2026 (aprox.)',
    titulo: 'De app móvil nativa (Flutter) a aplicación web',
    queDecidimos: 'Construir la propuesta como aplicación web en lugar de una app móvil en Flutter.',
    porQue: 'Comodidad: una web se abre desde cualquier celular o computador sin instalar nada, y es más simple de desarrollar y mostrar.',
    cambio: 'Se mantienen los módulos del MVP. Se pierden las notificaciones push nativas y se adapta el modo offline.',
    retro: null,
  },
  {
    fecha: '16 nov 2026 (aprox.)',
    titulo: 'IDEAM como fuente principal de datos',
    queDecidimos: 'Basar el índice de amenaza en los datos del IDEAM. Terrasacha, las APIs propias y otras APIs públicas quedan como alternativas.',
    porQue: 'El problema y la ficha técnica son nacionales y territoriales, y el IDEAM es la entidad oficial de Colombia que publica el pronóstico de amenaza por incendios.',
    cambio: 'La primera idea contemplaba a Terrasacha como proveedor. Ahora es una opción entre varias.',
    retro: null,
  },
  {
    fecha: 'Entre ago y sep 2026',
    titulo: 'De la ficha técnica a una propuesta con participación',
    queDecidimos: 'Pasar de describir el problema a plantear una propuesta de intervención: una app que muestra el índice de incendios.',
    porQue: 'La profesora preguntó por un plan de participación con actores o territorio. La ficha trataba un problema nacional y difícil de abordar de forma directa, así que partí de lo que ya conocía por mi trabajo en Terrasacha.',
    cambio: 'La ficha pasó de analizar el problema a proponer una solución concreta. La profesora validó la dirección.',
    retro: null,
  },
  {
    fecha: 'Hace ~1,5 años hasta hoy (rango aprox.)',
    titulo: 'Retroalimentación de actores reales',
    queDecidimos: 'Mantener la propuesta tal como estaba y apoyarnos en herramientas de Oráculo.',
    porQue: 'El project manager de Terrasacha la validó: concientiza a más gente, sirve de publicidad al proyecto y no hay inconveniente en usar sus herramientas.',
    cambio: 'Sin cambios en la propuesta. Queda abierta una posible prueba piloto con aliados.',
    retro: null,
  },
]

export const cts = [
  {
    titulo: 'La tecnología no es neutral: su efecto depende de quién la usa',
    concepto: 'Construcción social de la tecnología',
    argumento:
      'El IDEAM detecta focos con satélites como MODIS y publica alertas, pero la misma alerta rinde distinto según si los bomberos locales tienen vehículos y personal, o si en campo hay señal para recibirla. El resultado no está en el artefacto sino en los recursos, las decisiones políticas y las condiciones del territorio que lo rodean.',
    nota: 'Falta nombrar el concepto o la lectura exacta del curso (diapositivas).',
  },
  {
    titulo: 'Tener la tecnología no basta: falta apropiación social',
    concepto: 'Contra el determinismo tecnológico y apropiación social',
    argumento:
      'Los satélites MODIS llevan más de 20 años observando la Tierra y el IDEAM ya publica el pronóstico, y aun así los incendios siguen. La tecnología no resuelve sola: la mayoría de los incendios nace de decisiones humanas, y cambiarlas exige educación y concientización. Por eso la propuesta no ofrece un sensor nuevo sino traducir lo que ya existe para que el ciudadano lo entienda y lo use.',
    nota: 'Falta nombrar el concepto o la lectura exacta del curso (diapositivas).',
  },
]
export const ia = {
  intro:
    'Se valora verificar y explicar el uso de IA. Cada uso importante lleva su ficha de auditoría. Esta es la lista de usos de esta bitácora.',
  usos: [
    {
      fecha: 'nov 2026',
      herramienta: 'Kiro (asistente de IA)',
      para: 'Construir el código de este sitio web de la bitácora (estructura, diseño, componentes).',
      verificacion: 'Por completar: qué revisaste y qué corregiste.',
      pendiente: true,
    },
  ],
}

export const reflexion = {
  autor: 'Víctor Alejandro Aristizábal Ospina',
  aporte:
    'Mi aporte: investigué y redacté la ficha técnica, construí el árbol de problemas y el mapa de actores, y llevé al proyecto la experiencia de campo de Terrasacha para diseñar una propuesta realista.',
  texto:
    'Tenemos varias herramientas y conocimientos a nuestro alcance, y aun así la falta de educación y de concientización no nos deja avanzar. Hay tecnología que parece muy nueva y futurista, pero varias de esas herramientas llevan años.',
}
export const referencias = [
  'IDEAM. (2026, 27 de agosto). Pronóstico de la Amenaza por Incendios de la Cobertura Vegetal. Actualización 27 de agosto de 2026, 12:00 HLC. Instituto de Hidrología, Meteorología y Estudios Ambientales.',
  'UNGRD. (2025, febrero). Informe de Gestión 2024. Unidad Nacional para la Gestión del Riesgo de Desastres.',
]
