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
      'Por completar: qué hace el módulo, con qué actores se ha trabajado (productores, técnicos, aliados) y qué se aprendió. Sin nombres ni datos personales.',
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
      'La documentación pública de Terrasacha no estaba disponible, así que los endpoints eran una propuesta por confirmar con el proveedor.',
    ],
    evidencia: null,
  },
  {
    id: 'cambio-web',
    etapa: 'Propuesta',
    titulo: 'Cambio: de app móvil a app web',
    fecha: null,
    estado: 'hecho',
    resumen:
      'Decidimos construir una aplicación web en lugar de una app nativa. Ver el registro de decisiones.',
    detalle: [],
    evidencia: null,
  },
  {
    id: 'como',
    etapa: 'El cómo',
    titulo: 'Metodología y plan de recolección',
    fecha: null,
    estado: 'pendiente',
    resumen: 'Por completar: qué instrumentos usamos, con quién y cómo.',
    detalle: [],
    evidencia: null,
  },
  {
    id: 'recoleccion',
    etapa: 'Recolección de información',
    titulo: 'Trabajo con actores del territorio',
    fecha: null,
    estado: 'pendiente',
    resumen: 'Por completar: entrevistas, encuestas, observación, fotos o mapas, con consentimiento.',
    detalle: [],
    evidencia: null,
  },
  {
    id: 'hallazgos',
    etapa: 'Hallazgos',
    titulo: 'Qué encontramos',
    fecha: null,
    estado: 'pendiente',
    resumen: 'Por completar: resultados y su relación con la causa priorizada.',
    detalle: [],
    evidencia: null,
  },
  {
    id: 'validacion',
    etapa: 'Propuesta',
    titulo: 'Validación con actores reales',
    fecha: null,
    estado: 'pendiente',
    resumen: 'Por completar: a quién le mostramos la propuesta y qué nos dijo.',
    detalle: [],
    evidencia: null,
  },
]

export const causaPriorizada = {
  pendiente: true,
  texto:
    'Por completar: la causa que el equipo decidió priorizar. Hipótesis a partir de la ficha: la desconexión entre la alerta científica (IDEAM) y la capacidad de respuesta y el comportamiento local.',
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
  especificos: {
    pendiente: true,
    texto:
      'Por completar: objetivos específicos de la intervención. Borrador de la propuesta inicial: visualizar el índice de amenaza sobre imágenes satelitales; consultar por ubicación o municipio; notificar alertas altas; permitir reporte ciudadano; mostrar historial y pronóstico.',
  },
}

export const como = {
  pendiente: true,
  texto: 'Por completar: enfoque metodológico, instrumentos y orden de trabajo.',
}

export const recoleccion = {
  consentimiento:
    'Antes de cada entrevista se pide consentimiento informado. En esta bitácora no se muestran nombres, rostros reconocibles ni datos personales de las personas del territorio.',
  evidencias: [], // { tipo: 'foto'|'video'|'mapa'|'instrumento', titulo, descripcion, src }
}

export const hallazgos = {
  pendiente: true,
  texto: 'Por completar: hallazgos, cada uno enlazado a su evidencia y a la causa priorizada.',
  items: [],
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
    'Imágenes satelitales e índice de incendio vía APIs de Terrasacha, empresa colombiana donde trabajo. Declaro este vínculo para que se lea la propuesta con ese contexto. Terrasacha ya tiene un módulo de detección de incendios con sensores IoT; esta propuesta lo complementa con una vista pública para el ciudadano. Los contratos de la API están por confirmar.',
  validacion: { pendiente: true, texto: 'Por completar: cómo validamos la propuesta con actores reales y qué cambió.' },
}

export const decisiones = [
  {
    fecha: null,
    titulo: 'Árbol de problemas como herramienta principal',
    queDecidimos: 'Usar el árbol de problemas en vez de los 5 porqués o la espina de pescado.',
    porQue: 'Separa causas y efectos y deja el impacto social visible. Las causas eran claras, así que no hacía falta la espina de pescado.',
    cambio: 'Sin cambio posterior.',
    retro: null,
  },
  {
    fecha: null,
    titulo: 'De app móvil nativa (Flutter) a aplicación web',
    queDecidimos: 'Construir la propuesta como aplicación web en lugar de una app móvil en Flutter.',
    porQue: 'Comodidad: una web se abre desde cualquier celular o computador sin instalar nada, y es más simple de desarrollar y mostrar.',
    cambio: 'Se mantienen los módulos del MVP. Se pierden las notificaciones push nativas y se adapta el modo offline.',
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
    fecha: null,
    titulo: 'Retroalimentación de actores reales',
    queDecidimos: 'Por completar.',
    porQue: 'Por completar: qué dijeron los actores a quienes mostramos la propuesta y cómo respondimos.',
    cambio: 'Por completar: ejemplo de ajuste de objetivos, población o enfoque.',
    retro: 'pendiente',
  },
]

export const cts = [
  {
    titulo: 'La tecnología no es neutral',
    concepto: 'Relación bidireccional entre tecnología y sociedad',
    argumento:
      'El IDEAM puede detectar los focos con satélites (MODIS y VIIRS), pero la alerta sirve solo si los bomberos locales tienen vehículos y personal para responder. La misma tecnología produce resultados distintos según los recursos y las decisiones políticas que la rodean.',
    pendiente: false,
    nota: 'Falta citar la lectura o el autor del curso que respalda este concepto.',
  },
  {
    titulo: 'Contra el determinismo tecnológico',
    concepto: 'Quién decide y quién gana o pierde',
    argumento:
      'Un incendio no es solo un fenómeno natural: las quemas, la deforestación y los intereses ilegales son decisiones sociales. Una app de alerta solo cierra la brecha entre ciencia y acción si se diseña con las comunidades, que son a la vez causa y víctima.',
    pendiente: false,
    nota: 'Falta citar la lectura o el caso del curso que respalda este concepto.',
  },
]

export const ia = {
  intro:
    'Se valora verificar y explicar el uso de IA. Cada uso importante lleva su ficha de auditoría. Esta es la lista de usos de esta bitácora.',
  usos: [
    {
      fecha: null,
      herramienta: 'Kiro (asistente de IA)',
      para: 'Construir el código de este sitio web de la bitácora (estructura, diseño, componentes).',
      verificacion: 'Por completar: qué revisaste y qué corregiste.',
      pendiente: true,
    },
  ],
}

export const reflexion = {
  autor: 'Víctor Alejandro Aristizábal Ospina',
  pendiente: true,
  texto:
    'Por completar: tu aporte al proyecto y lo que aprendiste en el proceso. Esta sección la escribes tú, en primera persona.',
}

export const referencias = [
  'IDEAM. (2026, 27 de agosto). Pronóstico de la Amenaza por Incendios de la Cobertura Vegetal. Actualización 27 de agosto de 2026, 12:00 HLC. Instituto de Hidrología, Meteorología y Estudios Ambientales.',
  'UNGRD. (2025, febrero). Informe de Gestión 2024. Unidad Nacional para la Gestión del Riesgo de Desastres.',
]
