/* ============================================================
   DATOS DE DEMOSTRACIÓN
   ============================================================ */

const CATALOGOS = {
  subsecretarias: ['FORMACIÓN', 'ORSO', 'PL Y PP', 'DESPACHO', 'SPC'],
  enlaces: ['LUISA FRANCO', 'JEFERSSON MARÍN', 'FARID VANEGAS', 'PAOLA QUINTERO', 'LAURA DANIELA TORO', 'LAURA ISABEL TORO', 'SANTIAGO JARAMILLO', 'JOHN ARIAS'],
  estadosTramite: ['En subsanación', 'En cotización', 'A ejecución', 'Cancelado', 'Suspendido', 'Sin recibir', 'Ejecutado'],
  estadosReq: ['Ejecutado', 'No ejecutado por el proveedor', 'Cancelado', 'Cancelado por incumplimiento', 'A ejecución'],
  estadosEvidencia: ['OK', 'PENDIENTE', 'EN SUBSANACIÓN', 'CANCELADO'],
  comunas: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '50', '60', '70', '80', '90', '99'],
  tiposRecurso: ['ORD', 'PP'],
  tarifasImpuesto: [0, 0.05, 0.08, 0.16, 0.19],
  meses: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
};

let PROYECTOS = [
  { codigo: '240183', nombre: 'Apoyo técnico a nuevas expresiones organizativas', subsec: 'PL Y PP' },
  { codigo: '240184', nombre: 'Apoyo técnico y material a las organizaciones sociales', subsec: 'ORSO' },
  { codigo: '240185', nombre: 'Consolidación del Sistema de Servicio al Ciudadano', subsec: 'PL Y PP' },
  { codigo: '240186', nombre: 'Control Social a la gestión pública', subsec: 'FORMACIÓN' },
  { codigo: '240187', nombre: 'Desarrollo de estrategias de formación', subsec: 'FORMACIÓN' },
  { codigo: '240188', nombre: 'Fortalecimiento de la Gestión Comunitaria', subsec: 'ORSO' },
  { codigo: '240189', nombre: 'Implementación de estrategias de articulación', subsec: 'FORMACIÓN' },
  { codigo: '240190', nombre: 'Implementación de la Política Pública', subsec: 'PL Y PP' },
  { codigo: '240191', nombre: 'Innovación pública y social en el territorio', subsec: 'FORMACIÓN' },
  { codigo: '240193', nombre: 'Mejoramiento de la Presupuestación Participativa', subsec: 'PL Y PP' },
  { codigo: '250007', nombre: 'Fortalecimiento a Organizaciones Sociales', subsec: 'ORSO' },
  { codigo: '250009', nombre: 'Fortalecimiento al Plan de Trabajo', subsec: 'ORSO' }
];

// Muestra representativa del tarifario (en producción serían 1.004 items en Firestore)
const TARIFARIO = [
  // Categoría 1 - Alimentación
  { id: 'AL 0004', cat: 1, catName: 'Alimentación', desc: 'Botella de agua', carac: 'Cantidad: 280-300ml. Envase: botella plástica.', min: 1, max: 50, medida: 'Unidad', precio: 3656.15 },
  { id: 'AL 0005', cat: 1, catName: 'Alimentación', desc: 'Botella de agua', carac: 'Cantidad: 280-300ml. Envase: botella plástica.', min: 51, max: 100, medida: 'Unidad', precio: 3546.45 },
  { id: 'AL 0006', cat: 1, catName: 'Alimentación', desc: 'Botella de agua', carac: 'Cantidad: 280-300ml. Envase: botella plástica.', min: 101, max: 10000, medida: 'Unidad', precio: 3439.95 },
  { id: 'AL 0007', cat: 1, catName: 'Alimentación', desc: 'Botella de agua 500ml', carac: 'Cantidad: 500ml. Envase: botella plástica.', min: 1, max: 50, medida: 'Unidad', precio: 4508.15 },
  { id: 'AL 0008', cat: 1, catName: 'Alimentación', desc: 'Botella de agua 500ml', carac: 'Cantidad: 500ml. Envase: botella plástica.', min: 51, max: 100, medida: 'Unidad', precio: 4372.89 },
  { id: 'AL 0025', cat: 1, catName: 'Alimentación', desc: 'Jugo de fruta natural', carac: 'Servido en vaso individual de 250ml', min: 1, max: 50, medida: 'Unidad', precio: 9531.75 },
  { id: 'AL 0026', cat: 1, catName: 'Alimentación', desc: 'Jugo de fruta natural', carac: 'Servido en vaso individual de 250ml', min: 51, max: 100, medida: 'Unidad', precio: 9246.33 },
  { id: 'AL 0042', cat: 1, catName: 'Alimentación', desc: 'Estación de café con máquina', carac: 'Máquina dispensadora automática + insumos por 4 horas', min: 1, max: 100, medida: 'Unidad', precio: 471600 },
  { id: 'AL 0045', cat: 1, catName: 'Alimentación', desc: 'Estación de café atendida', carac: 'Café, agua, aromática + persona de atención por 4h', min: 1, max: 100, medida: 'Unidad', precio: 262000 },

  // Categoría 2 - Transporte
  { id: 'TR 0001', cat: 2, catName: 'Transporte', desc: 'Transporte Aeropuerto JMC', carac: 'Automóvil modelo 2016+. Ida y regreso.', min: 1, max: 100, medida: 'Ida y regreso', precio: 468720 },
  { id: 'TR 0002', cat: 2, catName: 'Transporte', desc: 'Transporte Aeropuerto JMC', carac: 'Van modelo 2016+. Capacidad 12 personas.', min: 1, max: 100, medida: 'Ida y regreso', precio: 779030 },
  { id: 'TR 0004', cat: 2, catName: 'Transporte', desc: 'Transporte urbano automóvil', carac: 'Automóvil. Recorrido 12 horas.', min: 1, max: 100, medida: 'Recorrido 12h', precio: 495866 },
  { id: 'TR 0008', cat: 2, catName: 'Transporte', desc: 'Transporte urbano por hora', carac: 'Automóvil modelo 2016+.', min: 1, max: 100, medida: 'Hora', precio: 43400 },
  { id: 'TR 0009', cat: 2, catName: 'Transporte', desc: 'Transporte urbano van por hora', carac: 'Van modelo 2016+. Capacidad 12 personas.', min: 1, max: 100, medida: 'Hora', precio: 108500 },

  // Categoría 3 - Impresión
  { id: 'IM 0001', cat: 3, catName: 'Impresión', desc: 'Impresión de volantes', carac: 'Media carta 21,59 x 14 cm, propalcote 115gr', min: 1, max: 1000, medida: 'Unidad', precio: 186.35 },
  { id: 'IM 0002', cat: 3, catName: 'Impresión', desc: 'Impresión de volantes', carac: 'Media carta 21,59 x 14 cm, propalcote 115gr', min: 1001, max: 5000, medida: 'Unidad', precio: 147.80 },
  { id: 'IM 0006', cat: 3, catName: 'Impresión', desc: 'Afiche 35x50 cm', carac: 'Propalcote 115gr. Color 4x0.', min: 1, max: 5000, medida: 'Unidad', precio: 1037.80 },
  { id: 'IM 0014', cat: 3, catName: 'Impresión', desc: 'Impresión de individuales', carac: 'Tamaño tabloide. Papel earth pact.', min: 1, max: 1000, medida: 'Unidad', precio: 778.62 },

  // Categoría 4 - Suministros
  { id: 'SU 0001', cat: 4, catName: 'Suministros', desc: 'Cuaderno argollado', carac: 'Tamaño media carta, 80 hojas rayadas', min: 1, max: 500, medida: 'Unidad', precio: 8500 },
  { id: 'SU 0002', cat: 4, catName: 'Suministros', desc: 'Lapiceros tinta negra', carac: 'Tipo BIC o equivalente', min: 1, max: 1000, medida: 'Unidad', precio: 1200 },
  { id: 'SU 0015', cat: 4, catName: 'Suministros', desc: 'Bolsa ecológica con logo', carac: 'Tela no tejida, 35x40cm, impresión 1 tinta', min: 50, max: 5000, medida: 'Unidad', precio: 4800 },

  // Categoría 5 - Mobiliario
  { id: 'MO 0001', cat: 5, catName: 'Mobiliario', desc: 'Carpa 3x3 m', carac: 'Carpa tipo plegable, color blanco, con paredes', min: 1, max: 50, medida: 'Día', precio: 180000 },
  { id: 'MO 0008', cat: 5, catName: 'Mobiliario', desc: 'Mesa rectangular plegable', carac: '1.80m x 0.75m, plástica reforzada', min: 1, max: 100, medida: 'Día', precio: 28000 },
  { id: 'MO 0012', cat: 5, catName: 'Mobiliario', desc: 'Silla rimax blanca', carac: 'Plástica con respaldo, apilable', min: 1, max: 500, medida: 'Día', precio: 3500 },

  // Categoría 7 - Técnico
  { id: 'TE 0001', cat: 7, catName: 'Técnico', desc: 'Sonido para evento mediano', carac: '2 cabinas amplificadas 500W, mezclador, 2 micrófonos. 4 horas.', min: 1, max: 50, medida: 'Servicio', precio: 580000 },
  { id: 'TE 0015', cat: 7, catName: 'Técnico', desc: 'Videobeam con pantalla', carac: '4000 lúmenes + pantalla 2x2m + cables. 4 horas.', min: 1, max: 30, medida: 'Servicio', precio: 320000 },
  { id: 'TE 0089', cat: 7, catName: 'Técnico', desc: 'Camarógrafo + edición', carac: 'Cámara FullHD, micro lavalier, edición básica 5min', min: 1, max: 20, medida: 'Servicio', precio: 850000 }
];

const CATEGORIAS = [
  { num: 1, name: 'Alimentación', count: 141 },
  { num: 2, name: 'Transporte', count: 46 },
  { num: 3, name: 'Impresión', count: 79 },
  { num: 4, name: 'Suministros', count: 144 },
  { num: 5, name: 'Mobiliario', count: 96 },
  { num: 6, name: 'Personal y varios', count: 22 },
  { num: 7, name: 'Técnico', count: 375 },
  { num: 8, name: 'Backline', count: 83 },
  { num: 9, name: 'Salud', count: 5 },
  { num: 10, name: 'Costos fijos', count: 13 }
];

// Requerimientos demo (en producción vienen de Firestore)
const REQUERIMIENTOS_DEMO = [
  {
    id: 'r-001', op: '1_ORSO_ORD', opSeq: 1,
    m1: { subsec: 'ORSO', enlace: 'JOHN ARIAS', fechaElab: '2026-04-15' },
    m2: { evento: 'Encuentro de organizaciones sociales comuna 5', proyecto: '240186', comuna: '5', mga: '1.1.1 Realizar proceso formativo', actDet: 'Realizar Un Proceso Formativo',
          instancia: 'Mesa Comunitaria Comuna 5', remDia: '20', remMes: '04', remAno: '2026',
          fechaEntrega: '2026-05-22', horaEntrega: '09:00', fechaMontaje: '2026-05-22', fechaDesmontaje: '2026-05-22',
          lugar: 'Casa de la Cultura Castilla', persona: 'Mary Luz González', contacto: '300-555-1234',
          tarifario: 'AL 0005', desc: 'Botella de agua', medida: 'Unidad', cantidad: 80, obs: 'Para asistentes confirmados', evSpc: 'OK', evOper: 'OK' },
    m3: { idInterno: 'P-2026-0001', precio: 3546.45, subtotal: 283716, tarifaImp: 0.19, valorImp: 53906, totalEjec: 337622, honorarios: 32074, ivaHon: 6094, totalHon: 38168, gmf: 1350, estampilla: 6752, valorEjec: 375790,
          proveedor: 'Distribuidora EXCO SAS', nit: '900.123.456-7', factura: 'FE-2026-4521', compEgreso: 'CE-2026-1102',
          reporteNov: 'Ejecución sin novedades. Asistencia: 78/80.',
          estadoReq: 'Ejecutado', conciliacion: 'OK', estadoFactHon: 'OK', pagoHon: 'PH-2026-0034', tipoRec: 'ORD' },
    estadoTramite: 'Ejecutado'
  },
  {
    id: 'r-002', op: '2_FORM_ORD', opSeq: 2,
    m1: { subsec: 'FORMACIÓN', enlace: 'LAURA DANIELA TORO', fechaElab: '2026-04-18' },
    m2: { evento: 'JORNADA ESPECIAL JÓVENES LÍDERES', proyecto: '240191', comuna: '8', mga: '2.1.1 Realizar procesos pedagógicos', actDet: 'Brindar apoyo logístico en el desarrollo',
          instancia: 'Red de Jóvenes Líderes Comuna 8', remDia: '23', remMes: '04', remAno: '2026',
          fechaEntrega: '2026-05-25', horaEntrega: '08:00', fechaMontaje: '2026-05-25', fechaDesmontaje: '2026-05-25',
          lugar: 'Centro Cultural Moravia', persona: 'Camilo Restrepo', contacto: '301-555-8762',
          tarifario: 'AL 0042', desc: 'Estación de café con máquina', medida: 'Unidad', cantidad: 1, obs: 'Para 50 asistentes', evSpc: 'OK', evOper: 'OK' },
    m3: { idInterno: 'P-2026-0002', precio: 471600, subtotal: 471600, tarifaImp: 0.19, valorImp: 89604, totalEjec: 561204, honorarios: 53314, ivaHon: 10130, totalHon: 63444, gmf: 2245, estampilla: 11224, valorEjec: 624648,
          proveedor: 'Café Casa Solera', nit: '901.456.789-1', factura: 'FE-2026-2018', compEgreso: 'CE-2026-1118',
          reporteNov: 'Asistencia: 52. Operador llegó 15 min tarde por tráfico.',
          estadoReq: 'Ejecutado', conciliacion: 'OK', estadoFactHon: 'OK', pagoHon: 'PH-2026-0041', tipoRec: 'ORD' },
    estadoTramite: 'Ejecutado'
  },
  {
    id: 'r-003', op: '3_PLYPP_ORD', opSeq: 3,
    m1: { subsec: 'PL Y PP', enlace: 'FARID VANEGAS', fechaElab: '2026-04-20' },
    m2: { evento: 'Encuentro articulación asocomunales comuna 7', proyecto: '240193', comuna: '7', mga: '2.2.1 Realizar la priorización', actDet: 'Apoyar logísticamente las fases del PP',
          instancia: 'Asocomunales Comuna 7 Robledo', remDia: '25', remMes: '04', remAno: '2026',
          fechaEntrega: '2026-06-10', horaEntrega: '07:00', fechaMontaje: '2026-06-10', fechaDesmontaje: '2026-06-10',
          lugar: 'JAL Comuna 7 - Robledo', persona: 'Liliana Bedoya', contacto: '302-555-1199',
          tarifario: 'TR 0009', desc: 'Transporte urbano van por hora', medida: 'Hora', cantidad: 8, obs: 'Recorrido por sedes comunales', evSpc: 'PENDIENTE', evOper: 'PENDIENTE' },
    m3: { idInterno: 'P-2026-0003', precio: 108500, subtotal: 868000, tarifaImp: 0.19, valorImp: 164920, totalEjec: 1032920, honorarios: 98127, ivaHon: 18644, totalHon: 116771, gmf: 4132, estampilla: 20658, valorEjec: 1149691,
          proveedor: 'Transportes del Valle', nit: '900.789.123-4', factura: '', compEgreso: '',
          reporteNov: '',
          estadoReq: 'A ejecución', conciliacion: 'PENDIENTE', estadoFactHon: 'PENDIENTE', pagoHon: '', tipoRec: 'PP' },
    estadoTramite: 'A ejecución'
  },
  {
    id: 'r-004', op: '4_FORM_ORD', opSeq: 4,
    m1: { subsec: 'FORMACIÓN', enlace: 'JEFERSSON MARÍN', fechaElab: '2026-04-22' },
    m2: { evento: 'Taller de formación líderes comunales', proyecto: '240187', comuna: '13', mga: '1.1.1 Realizar procesos formativos', actDet: 'Brindar apoyo logístico en talleres',
          fechaEntrega: '2026-06-05', lugar: 'Sede SPC', persona: 'Jhonatan Pérez', contacto: '300-555-4422',
          tarifario: 'IM 0001', desc: 'Impresión de volantes', medida: 'Unidad', cantidad: 800, obs: 'Material informativo', evSpc: 'PENDIENTE', evOper: 'PENDIENTE' },
    m3: { precio: 186.35, subtotal: 149080, tarifaImp: 0.19, valorImp: 28325, totalEjec: 177405, honorarios: 16853, ivaHon: 3202, totalHon: 20055, gmf: 710, estampilla: 3548, valorEjec: 197460,
          proveedor: '', nit: '', factura: '', estadoReq: 'A ejecución', conciliacion: 'PENDIENTE', tipoRec: 'ORD' },
    estadoTramite: 'En cotización'
  },
  {
    id: 'r-005', op: '5_ORSO_ORD', opSeq: 5,
    m1: { subsec: 'ORSO', enlace: 'PAOLA QUINTERO', fechaElab: '2026-04-23' },
    m2: { evento: 'Sesión ordinaria JAL Comuna 4', proyecto: '240190', comuna: '4', mga: '1.1.5 Realizar sesiones ordinarias', actDet: 'Realizar apoyo logístico en sesiones',
          instancia: 'JAL Comuna 4 - Aranjuez', remDia: '26', remMes: '04', remAno: '2026',
          fechaEntrega: '2026-05-30', horaEntrega: '14:00', fechaMontaje: '2026-05-30', fechaDesmontaje: '2026-05-30',
          lugar: 'JAL Comuna 4 - Aranjuez', persona: 'Pedro Ramírez', contacto: '301-555-2266',
          tarifario: 'AL 0007', desc: 'Botella de agua 500ml', medida: 'Unidad', cantidad: 35, obs: 'Para asistentes a sesión', evSpc: 'OK', evOper: 'OK' },
    m3: { idInterno: 'P-2026-0005', precio: 4508.15, subtotal: 157785, tarifaImp: 0.19, valorImp: 29979, totalEjec: 187764, honorarios: 17838, ivaHon: 3389, totalHon: 21227, gmf: 751, estampilla: 3755, valorEjec: 208991,
          proveedor: 'Distribuidora EXCO SAS', nit: '900.123.456-7', factura: 'FE-2026-4533', compEgreso: 'CE-2026-1145',
          reporteNov: 'Ejecución normal.',
          estadoReq: 'Ejecutado', conciliacion: 'OK', estadoFactHon: 'OK', pagoHon: 'PH-2026-0067', tipoRec: 'ORD' },
    estadoTramite: 'Ejecutado'
  },
  {
    id: 'r-006', op: '6_FORM_ORD', opSeq: 6,
    m1: { subsec: 'FORMACIÓN', enlace: 'SANTIAGO JARAMILLO', fechaElab: '2026-04-25' },
    m2: { evento: 'Foro distrital de juventudes', proyecto: '240191', comuna: '99', mga: '2.1.1 Realizar procesos pedagógicos', actDet: 'Brindar apoyo logístico en foros',
          fechaEntrega: '2026-06-18', lugar: 'Centro de Convenciones Plaza Mayor', persona: 'Sofía Vargas', contacto: '300-555-7733',
          tarifario: 'TE 0001', desc: 'Sonido para evento mediano', medida: 'Servicio', cantidad: 1, obs: '4 horas + montaje', evSpc: 'EN SUBSANACIÓN', evOper: 'PENDIENTE' },
    m3: { precio: 580000, subtotal: 580000, tarifaImp: 0.19, valorImp: 110200, totalEjec: 690200, honorarios: 65569, ivaHon: 12458, totalHon: 78027, gmf: 2761, estampilla: 13804, valorEjec: 768227,
          proveedor: 'Audio Pro Medellín', nit: '900.555.222-1', factura: '', estadoReq: 'A ejecución', conciliacion: 'EN SUBSANACIÓN', tipoRec: 'ORD' },
    estadoTramite: 'En subsanación'
  },
  {
    id: 'r-007', op: '7_PLYPP_PP', opSeq: 7,
    m1: { subsec: 'PL Y PP', enlace: 'FARID VANEGAS', fechaElab: '2026-04-26' },
    m2: { evento: 'Asamblea de priorización PP Comuna 1', proyecto: '240193', comuna: '1', mga: '2.2.1 Realizar la priorización', actDet: 'Apoyar logísticamente las fases del PP',
          fechaEntrega: '2026-06-22', lugar: 'Colegio Popular Comuna 1', persona: 'Marcela Quintero', contacto: '301-555-9988',
          tarifario: 'MO 0012', desc: 'Silla rimax blanca', medida: 'Día', cantidad: 150, obs: 'Para 150 asambleístas', evSpc: 'PENDIENTE', evOper: 'PENDIENTE' },
    m3: { precio: 3500, subtotal: 525000, tarifaImp: 0.19, valorImp: 99750, totalEjec: 624750, honorarios: 59351, ivaHon: 11277, totalHon: 70628, gmf: 2499, estampilla: 12495, valorEjec: 695378,
          proveedor: '', nit: '', factura: '', estadoReq: 'A ejecución', conciliacion: 'PENDIENTE', tipoRec: 'PP' },
    estadoTramite: 'A ejecución'
  },
  {
    id: 'r-008', op: '8_ORSO_ORD', opSeq: 8,
    m1: { subsec: 'ORSO', enlace: 'JOHN ARIAS', fechaElab: '2026-04-28' },
    m2: { evento: 'Encuentro intersectorial organizaciones', proyecto: '250007', comuna: '10', mga: '1.1.10 Desarrollar estrategias', actDet: 'Desarrollar estrategias de formación',
          fechaEntrega: '2026-06-15', lugar: 'Parque Explora', persona: 'Diana Cárdenas', contacto: '300-555-3344',
          tarifario: 'AL 0045', desc: 'Estación de café atendida', medida: 'Unidad', cantidad: 2, obs: 'Dos estaciones, mañana y tarde', evSpc: 'PENDIENTE', evOper: 'PENDIENTE' },
    m3: { precio: 262000, subtotal: 524000, tarifaImp: 0.19, valorImp: 99560, totalEjec: 623560, honorarios: 59238, ivaHon: 11255, totalHon: 70493, gmf: 2494, estampilla: 12471, valorEjec: 694053,
          proveedor: 'Café Casa Solera', nit: '901.456.789-1', factura: '', estadoReq: 'A ejecución', conciliacion: 'PENDIENTE', tipoRec: 'ORD' },
    estadoTramite: 'En cotización'
  },
  {
    id: 'r-009', op: '9_DESPACHO_ORD', opSeq: 9,
    m1: { subsec: 'DESPACHO', enlace: 'LAURA ISABEL TORO', fechaElab: '2026-04-29' },
    m2: { evento: 'Reunión gabinete sectorial', proyecto: '240192', comuna: '99', mga: '1.1.3 Realizar seguimiento', actDet: 'Realizar apoyo logístico en seguimiento',
          fechaEntrega: '2026-05-28', lugar: 'Sede SPC Despacho', persona: 'Asistente Despacho', contacto: '304-555-1100',
          tarifario: 'AL 0006', desc: 'Botella de agua', medida: 'Unidad', cantidad: 25, obs: 'Reunión interna', evSpc: 'OK', evOper: 'OK' },
    m3: { precio: 3439.95, subtotal: 85999, tarifaImp: 0.19, valorImp: 16340, totalEjec: 102339, honorarios: 9722, ivaHon: 1847, totalHon: 11569, gmf: 409, estampilla: 2047, valorEjec: 113908,
          proveedor: 'Distribuidora EXCO SAS', nit: '900.123.456-7', factura: 'FE-2026-4541', estadoReq: 'Ejecutado', conciliacion: 'OK', tipoRec: 'ORD' },
    estadoTramite: 'Ejecutado'
  },
  {
    id: 'r-010', op: '10_FORM_PP', opSeq: 10,
    m1: { subsec: 'FORMACIÓN', enlace: 'LAURA DANIELA TORO', fechaElab: '2026-05-02' },
    m2: { evento: 'Taller formación PP - Acuerdos comunitarios', proyecto: '240187', comuna: '8', mga: '1.1.1 Realizar procesos formativos', actDet: 'Brindar apoyo logístico',
          fechaEntrega: '2026-06-12', lugar: 'Sede comunal Villa Hermosa', persona: 'Catalina Ortiz', contacto: '305-555-7711',
          tarifario: 'TE 0015', desc: 'Videobeam con pantalla', medida: 'Servicio', cantidad: 1, obs: 'Para 40 asistentes', evSpc: 'PENDIENTE', evOper: 'PENDIENTE' },
    m3: { precio: 320000, subtotal: 320000, tarifaImp: 0.19, valorImp: 60800, totalEjec: 380800, honorarios: 36176, ivaHon: 6873, totalHon: 43049, gmf: 1523, estampilla: 7616, valorEjec: 423849,
          proveedor: '', nit: '', factura: '', estadoReq: 'A ejecución', conciliacion: 'PENDIENTE', tipoRec: 'PP' },
    estadoTramite: 'En cotización'
  },
  {
    id: 'r-011', op: '11_ORSO_ORD', opSeq: 11,
    m1: { subsec: 'ORSO', enlace: 'JEFERSSON MARÍN', fechaElab: '2026-05-03' },
    m2: { evento: 'Encuentro asociaciones campesinas Corregimiento 60', proyecto: '250009', comuna: '60', mga: '1.1.4 Realizar acompañamiento', actDet: 'Brindar acompañamiento técnico',
          fechaEntrega: '2026-06-08', lugar: 'San Cristóbal - Corregimental', persona: 'Don Aníbal Mejía', contacto: '301-555-4400',
          tarifario: 'TR 0001', desc: 'Transporte Aeropuerto JMC', medida: 'Ida y regreso', cantidad: 1, obs: 'Recoger delegación rural', evSpc: 'CANCELADO', evOper: 'CANCELADO' },
    m3: { precio: 468720, subtotal: 468720, tarifaImp: 0.19, valorImp: 89057, totalEjec: 557777, honorarios: 52989, ivaHon: 10068, totalHon: 63057, gmf: 2231, estampilla: 11156, valorEjec: 620834,
          proveedor: '', nit: '', factura: '', estadoReq: 'Cancelado', conciliacion: 'N/A', tipoRec: 'ORD' },
    estadoTramite: 'Cancelado'
  },
  {
    id: 'r-012', op: '12_PLYPP_ORD', opSeq: 12,
    m1: { subsec: 'PL Y PP', enlace: 'FARID VANEGAS', fechaElab: '2026-05-04' },
    m2: { evento: 'Mesa de trabajo seguimiento PP 2026', proyecto: '240185', comuna: '99', mga: '2.1.1 Realizar encuentros', actDet: 'Realizar encuentros de control',
          fechaEntrega: '2026-06-20', lugar: 'Sede SPC', persona: 'Comité PP', contacto: '300-555-0000',
          tarifario: 'AL 0042', desc: 'Estación de café con máquina', medida: 'Unidad', cantidad: 1, obs: 'Para 30 asistentes', evSpc: 'OK', evOper: 'PENDIENTE' },
    m3: { precio: 471600, subtotal: 471600, tarifaImp: 0.19, valorImp: 89604, totalEjec: 561204, honorarios: 53314, ivaHon: 10130, totalHon: 63444, gmf: 2245, estampilla: 11224, valorEjec: 624648,
          proveedor: 'Café Casa Solera', nit: '901.456.789-1', factura: '', estadoReq: 'A ejecución', conciliacion: 'PENDIENTE', tipoRec: 'ORD' },
    estadoTramite: 'A ejecución'
  }
];

// Se llena desde Firestore al iniciar (loadRequerimientos)
let REQUERIMIENTOS = [];

// Auditoría demo
const AUDITORIA = [
  { ts: '2026-05-19 14:32', user: 'Daniel M.', role: 'Logístico', action: 'Actualizó requerimiento', details: 'OP 12_PLYPP_ORD — Cambió cantidad de 1 a 2' },
  { ts: '2026-05-19 14:28', user: 'Catalina R.', role: 'Financiero', action: 'Marcó como Ejecutado', details: 'OP 9_DESPACHO_ORD — Estado conciliación: OK' },
  { ts: '2026-05-19 13:45', user: 'Daniel M.', role: 'Logístico', action: 'Creó requerimiento', details: 'OP 12_PLYPP_ORD — Mesa de trabajo seguimiento PP 2026' },
  { ts: '2026-05-19 11:20', user: 'Carlos H.', role: 'Revisión', action: 'Adjuntó soporte', details: 'OP 2_FORM_ORD — Lista de chequeo cargada' },
  { ts: '2026-05-19 10:15', user: 'Sistema', role: 'Auto', action: 'Recalculó cálculos financieros', details: 'OP 6_FORM_ORD — Por cambio de tarifa de impuesto 16% → 19%' },
  { ts: '2026-05-18 17:02', user: 'Daniel M.', role: 'Logístico', action: 'Actualizó requerimiento', details: 'OP 10_FORM_PP — Cambió fecha de entrega' },
  { ts: '2026-05-18 16:30', user: 'Catalina R.', role: 'Financiero', action: 'Registró factura', details: 'OP 5_ORSO_ORD — Factura FE-2026-4533' },
  { ts: '2026-05-18 15:00', user: 'Admin', role: 'Admin', action: 'Asignó rol', details: 'Usuario Luisa F. — Rol Logístico' }
];

/* ============================================================
   COLUMNAS DE DETALLE EJECUCIÓN — las 66 columnas reales del Excel
   con accesor para renderizado dinámico en la tabla
   ============================================================ */

const MOMENTOS_LABEL = {
  M1: 'Primer momento · Logístico',
  M2: 'Segundo momento · Logístico',
  M3: 'Tercer momento · Financiero',
  CONT: 'Contratista',
  REV: 'Revisión'
};

const MOMENTOS_LABEL_MODAL = {
  m1: 'Primer momento · Datos básicos (Logístico)',
  m2: 'Segundo momento · Evento y tarifario (Logístico)',
  m3: 'Tercer momento · Cálculos financieros (Financiero)',
  contratista: 'Contratista · Presentación 462',
  revision: 'Revisión · Documentos y soportes'
};

const COLUMNAS_DETALLE = [
  // === Primer momento — Logístico ===
  { id: 'op',              col: 'A',  m: 'M1', label: 'OP',                          def: true,  mono: true,  acc: r => esc(r.op) },
  { id: 'subsec',          col: 'B',  m: 'M1', label: 'Subsecretaría',               def: true,               acc: r => esc(r.m1.subsec) },
  { id: 'enlace',          col: 'C',  m: 'M1', label: 'Enlace Logístico',            def: false,              acc: r => esc(r.m1.enlace) },
  { id: 'fechaElab',       col: 'D',  m: 'M1', label: 'Fecha Elaboración',           def: false,              acc: r => fmt.fecha(r.m1.fechaElab) },
  // === Segundo momento — Logístico (E-O) ===
  { id: 'remDia',          col: 'E',  m: 'M2', label: 'Remisión op. · Día',          def: false, mono: true,  acc: r => r.m2.remDia  || '—' },
  { id: 'remMes',          col: 'F',  m: 'M2', label: 'Remisión op. · Mes',          def: false, mono: true,  acc: r => r.m2.remMes  || '—' },
  { id: 'remAno',          col: 'G',  m: 'M2', label: 'Remisión op. · Año',          def: false, mono: true,  acc: r => r.m2.remAno  || '—' },
  { id: 'estadoTramite',   col: 'H',  m: 'M2', label: 'Estado trámite',              def: true,  pill: true,  acc: r => r.estadoTramite },
  { id: 'evento',          col: 'I',  m: 'M2', label: 'Evento',                      def: true,  trunc: 220,  acc: r => esc(r.m2.evento) },
  { id: 'instancia',       col: 'J',  m: 'M2', label: 'Instancia / Beneficiario',    def: false, trunc: 180,  acc: r => esc(r.m2.instancia || '—') },
  { id: 'nombreProy',      col: 'K',  m: 'M2', label: 'Nombre Proyecto',             def: false, trunc: 220,  acc: r => esc(PROYECTOS.find(p => p.codigo === r.m2.proyecto)?.nombre || '—') },
  { id: 'proyecto',        col: 'L',  m: 'M2', label: 'Cód. Proyecto',               def: true,  mono: true,  acc: r => esc(r.m2.proyecto) },
  { id: 'comuna',          col: 'M',  m: 'M2', label: 'Comuna',                      def: true,               acc: r => esc(r.m2.comuna) },
  { id: 'mga',             col: 'N',  m: 'M2', label: 'Actividad MGA',               def: false, trunc: 200,  acc: r => esc(r.m2.mga) },
  { id: 'actDet',          col: 'O',  m: 'M2', label: 'Actividad Detallada MGA',     def: false, trunc: 240,  acc: r => esc(r.m2.actDet) },
  // === ID interno (Tercer momento — Financiero) ===
  { id: 'idInterno',       col: 'P',  m: 'M3', label: 'ID financiero',               def: false, mono: true,  acc: r => esc(r.m3.idInterno || '—') },
  // === Segundo momento — Logístico (Q-AB) ===
  { id: 'lugar',           col: 'Q',  m: 'M2', label: 'Lugar del Evento',            def: false, trunc: 200,  acc: r => esc(r.m2.lugar) },
  { id: 'fechaEntrega',    col: 'R',  m: 'M2', label: 'Fecha Entrega',               def: true,               acc: r => fmt.fecha(r.m2.fechaEntrega) },
  { id: 'horaEntrega',     col: 'S',  m: 'M2', label: 'Hora Entrega',                def: false, mono: true,  acc: r => esc(r.m2.horaEntrega || '08:00') },
  { id: 'fechaMontaje',    col: 'T',  m: 'M2', label: 'Fecha Montaje',               def: false,              acc: r => fmt.fecha(r.m2.fechaMontaje || r.m2.fechaEntrega) },
  { id: 'fechaDesmontaje', col: 'U',  m: 'M2', label: 'Fecha Desmontaje',            def: false,              acc: r => fmt.fecha(r.m2.fechaDesmontaje || r.m2.fechaEntrega) },
  { id: 'persona',         col: 'V',  m: 'M2', label: 'Persona que recibe',          def: false,              acc: r => esc(r.m2.persona) },
  { id: 'contacto',        col: 'W',  m: 'M2', label: 'Contacto',                    def: false, mono: true,  acc: r => esc(r.m2.contacto) },
  { id: 'codTarif',        col: 'X',  m: 'M2', label: 'Cód. Tarifario',              def: false, mono: true,  acc: r => esc(r.m2.tarifario) },
  { id: 'desc',            col: 'Y',  m: 'M2', label: 'Descripción Requerimiento',   def: false, trunc: 220,  acc: r => esc(r.m2.desc) },
  { id: 'obs',             col: 'Z',  m: 'M2', label: 'Obs. Requerimiento',          def: false, trunc: 200,  acc: r => esc(r.m2.obs) },
  { id: 'medida',          col: 'AA', m: 'M2', label: 'Unidad de Medida',            def: false,              acc: r => esc(r.m2.medida) },
  { id: 'cantidad',        col: 'AB', m: 'M2', label: 'Cantidad',                    def: true,  num: true,   acc: r => fmt.num(r.m2.cantidad) },
  // === Tercer momento — Financiero (AC-AQ) ===
  { id: 'precio',          col: 'AC', m: 'M3', label: 'Precio compra/u',             def: false, num: true,   acc: r => fmt.cop(r.m3.precio) },
  { id: 'subtotal',        col: 'AD', m: 'M3', label: 'Subtotal compra',             def: false, num: true,   acc: r => fmt.cop(r.m3.subtotal) },
  { id: 'administracion',  col: 'AD2',m: 'M3', label: 'Administración',              def: false, num: true,   acc: r => fmt.cop(r.m3.administracion || 0) },
  { id: 'tarifaImp',       col: 'AE', m: 'M3', label: 'Tarifa Impto',                def: false, num: true,   acc: r => fmt.pct(r.m3.tarifaImp) },
  { id: 'valorImp',        col: 'AF', m: 'M3', label: 'Valor Impto',                 def: false, num: true,   acc: r => fmt.cop(r.m3.valorImp) },
  { id: 'totalEjec',       col: 'AG', m: 'M3', label: 'Total ejec. c/Impto',         def: false, num: true,   acc: r => fmt.cop(r.m3.totalEjec) },
  { id: 'pctHon',          col: 'AH', m: 'M3', label: '% Honorarios',                def: false, num: true,   acc: r => fmt.cop(r.m3.honorarios) },
  { id: 'ivaHon',          col: 'AI', m: 'M3', label: 'IVA honorarios',              def: false, num: true,   acc: r => fmt.cop(r.m3.ivaHon) },
  { id: 'totalHon',        col: 'AJ', m: 'M3', label: 'TOTAL HONORARIOS',            def: false, num: true,   acc: r => fmt.cop(r.m3.totalHon) },
  { id: 'gmf',             col: 'AK', m: 'M3', label: 'GMF 4×1000',                  def: false, num: true,   acc: r => fmt.cop(r.m3.gmf) },
  { id: 'estampilla',      col: 'AL', m: 'M3', label: 'Estampilla Justicia 2%',      def: false, num: true,   acc: r => fmt.cop(r.m3.estampilla) },
  { id: 'valorEjec',       col: 'AM', m: 'M3', label: 'Valor Ejecutado Contrato',    def: true,  num: true,   acc: r => fmt.cop(r.m3.valorEjec) },
  { id: 'proveedor',       col: 'AN', m: 'M3', label: 'Proveedor Aprobado',          def: false, trunc: 200,  acc: r => esc(r.m3.proveedor || '—') },
  { id: 'nit',             col: 'AO', m: 'M3', label: 'NIT',                         def: false, mono: true,  acc: r => esc(r.m3.nit || '—') },
  { id: 'factura',         col: 'AP', m: 'M3', label: 'N° de Factura',               def: false, mono: true,  acc: r => esc(r.m3.factura || '—') },
  { id: 'compEgreso',      col: 'AQ', m: 'M3', label: 'Comprobante Egreso',          def: false, mono: true,  acc: r => esc(r.m3.compEgreso || '—') },
  // === Contratista (AR) ===
  { id: 'pres462',         col: 'AR', m: 'CONT', label: 'Presentación 462',          def: false, mono: true,  acc: r => esc(r.contratista?.pres462 || '—') },
  // === Tercer momento — Financiero (AS, AT) ===
  { id: 'reporteNov',      col: 'AS', m: 'M3', label: 'Reporte de Novedades',        def: false, trunc: 180,  acc: r => esc(r.m3.reporteNov || '—') },
  { id: 'estadoReq',       col: 'AT', m: 'M3', label: 'Estado del requerimiento',    def: false,              acc: r => esc(r.m3.estadoReq || '—') },
  // === Segundo momento — Logístico (AU, AV evidencias) ===
  { id: 'evSpc',           col: 'AU', m: 'M2', label: 'Estado Evidencia SPC',        def: false,              acc: r => esc(r.m2.evSpc || '—') },
  { id: 'evOper',          col: 'AV', m: 'M2', label: 'Estado Evidencia Operador',   def: false,              acc: r => esc(r.m2.evOper || '—') },
  // === Tercer momento — Financiero (AW-AZ) ===
  { id: 'conciliacion',    col: 'AW', m: 'M3', label: 'Estado Conciliación',         def: false,              acc: r => esc(r.m3.conciliacion || '—') },
  { id: 'estadoFactHon',   col: 'AX', m: 'M3', label: 'Estado Fact. Honorarios',     def: false,              acc: r => esc(r.m3.estadoFactHon || '—') },
  { id: 'pagoHon',         col: 'AY', m: 'M3', label: '# Pago Honorarios',           def: false, mono: true,  acc: r => esc(r.m3.pagoHon || '—') },
  { id: 'tipoRec',         col: 'AZ', m: 'M3', label: 'Tipo de Recurso',             def: false,              acc: r => esc(r.m3.tipoRec || '—') },
  // === Revisión (BA-BN) ===
  { id: 'opPdf',           col: 'BA', m: 'REV', label: 'OP PDF',                     def: false,              acc: r => esc(r.revision?.opPdf || '—') },
  { id: 'correoOp',        col: 'BB', m: 'REV', label: 'Correo OP',                  def: false,              acc: r => esc(r.revision?.correoOp || '—') },
  { id: 'cotiz1',          col: 'BC', m: 'REV', label: 'Cotiz 1',                    def: false,              acc: r => esc(r.revision?.cotiz1 || '—') },
  { id: 'cotiz2',          col: 'BD', m: 'REV', label: 'Cotiz 2',                    def: false,              acc: r => esc(r.revision?.cotiz2 || '—') },
  { id: 'cotiz3',          col: 'BE', m: 'REV', label: 'Cotiz 3',                    def: false,              acc: r => esc(r.revision?.cotiz3 || '—') },
  { id: 'gestSolCotiz',    col: 'BF', m: 'REV', label: 'Gestión Solicitud Cotiz.',   def: false,              acc: r => esc(r.revision?.gestSolCotiz || '—') },
  { id: 'justifSeleccProv',col: 'BG', m: 'REV', label: 'Justificación Selecc. Prov.',def: false, trunc: 180,  acc: r => esc(r.revision?.justifSeleccProv || '—') },
  { id: 'correoVerifCotiz',col: 'BH', m: 'REV', label: 'Correo Verif. Cotiz.',       def: false,              acc: r => esc(r.revision?.correoVerifCotiz || '—') },
  { id: 'soporteRespProv', col: 'BI', m: 'REV', label: 'Soporte Resp. Proveedores',  def: false,              acc: r => esc(r.revision?.soporteRespProv || '—') },
  { id: 'informePlaza',    col: 'BJ', m: 'REV', label: 'Informe Plaza',              def: false,              acc: r => esc(r.revision?.informePlaza || '—') },
  { id: 'listaChequeo',    col: 'BK', m: 'REV', label: 'Lista de Chequeo',           def: false,              acc: r => esc(r.revision?.listaChequeo || '—') },
  { id: 'correoVerifInf',  col: 'BL', m: 'REV', label: 'Correo Verif. Informe',      def: false,              acc: r => esc(r.revision?.correoVerifInf || '—') },
  { id: 'obsRev',          col: 'BM', m: 'REV', label: 'Observaciones Revisión',     def: false, trunc: 180,  acc: r => esc(r.revision?.obsRev || '—') },
  { id: 'estadoRev',       col: 'BN', m: 'REV', label: 'Estado Revisión',            def: false,              acc: r => esc(r.revision?.estadoRev || '—') }
];

// Letra de columna de Excel a partir del índice 0-based (0→A, 26→AA, …)
function colLetter(n) {
  let s = '';
  n += 1;
  while (n > 0) { const m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); }
  return s;
}
// Reasigna la letra de cada columna según su posición real (evita desfases al
// insertar columnas nuevas como "Administración").
COLUMNAS_DETALLE.forEach((c, i) => { c.col = colLetter(i); });

/* ============================================================
   ESTADO GLOBAL
   ============================================================ */

const state = {
  role: null,
  view: 'dashboard',
  filters: { search: '', subsec: '', estado: '', proyecto: '' },
  editingReq: null,
  activeTab: 'm1',
  tarifarioCategoria: 1,
  tarifarioFilter: '',
  columnasVisibles: null, // se inicializa después de la declaración
  columnsDrawerOpen: false,
  columnsDrawerFilter: '',
  crossFilter: null,  // {dim: 'subsec'|'proyecto'|'mga'|'comuna'|'tipoRec'|'estadoTramite', value: '...'}
  cargando: false
};
state.columnasVisibles = COLUMNAS_DETALLE.filter(c => c.def).map(c => c.id);

const TODOS_TABS = ['m1', 'm2', 'm3', 'contratista', 'revision'];
const ROLE_INFO = {
  logistico1:  { name: 'Logístico 1',       initials: 'L1', label: 'Logístico 1',  canEdit: ['m1'] },
  logistico2:  { name: 'Juan José Pérez',   initials: 'JP', label: 'Logístico 2',  canEdit: TODOS_TABS },
  financiero:  { name: 'Financiero',        initials: 'FN', label: 'Financiero',   canEdit: TODOS_TABS },
  coordinacion:{ name: 'Coordinación',      initials: 'CO', label: 'Coordinación', canEdit: [] },
  contratista: { name: 'Metro Parques',     initials: 'MP', label: 'Contratista',  canEdit: ['contratista'] },
  revision:    { name: 'Revisión',          initials: 'RV', label: 'Revisión',     canEdit: [] }
};
// Roles con permisos totales (crear, eliminar, editar todo)
const ROLES_TOTALES = ['logistico2', 'financiero'];
// Roles con acceso a la vista de Auditoría (supervisión)
const ROLES_AUDITORIA = ['logistico2', 'financiero', 'coordinacion'];


/* ============================================================
   CAPA DE ACCESO A FIRESTORE
   Colección: requerimientos/{id}
   (tarifario y catálogos siguen siendo locales hasta migrarlos)
   ============================================================ */

const COL_REQUERIMIENTOS = 'requerimientos';

// Espera a que el módulo de Firebase haya inicializado window.fb
function esperarFirebase(timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    if (window.fb && window.fb.ready) return resolve(window.fb);
    if (window.fb && window.fb.ready === false) return reject(window.fb.error || new Error('Firebase no inicializó'));
    const t0 = Date.now();
    const iv = setInterval(() => {
      if (window.fb && window.fb.ready) { clearInterval(iv); resolve(window.fb); }
      else if (window.fb && window.fb.ready === false) { clearInterval(iv); reject(window.fb.error); }
      else if (Date.now() - t0 > timeoutMs) { clearInterval(iv); reject(new Error('Timeout esperando Firebase')); }
    }, 100);
  });
}

// Elimina propiedades undefined (Firestore no las acepta)
function limpiarParaFirestore(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(limpiarParaFirestore);
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined) continue;
    out[k] = (v && typeof v === 'object') ? limpiarParaFirestore(v) : v;
  }
  return out;
}

// Carga todos los requerimientos desde Firestore al array global
async function loadRequerimientos() {
  const fb = await esperarFirebase();
  const snap = await fb.getDocs(fb.collection(fb.db, COL_REQUERIMIENTOS));
  REQUERIMIENTOS = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  // Migrar requerimientos antiguos (un ítem) al modelo de items[] y refrescar totales
  REQUERIMIENTOS.forEach(r => recalcularReq(r));
  // Orden estable por opSeq si existe, luego por OP
  REQUERIMIENTOS.sort((a, b) => (a.opSeq || 0) - (b.opSeq || 0) || String(a.op).localeCompare(String(b.op)));
  return REQUERIMIENTOS;
}

// Carga el catálogo de proyectos desde Firestore (colección proyectos).
// Reemplaza el catálogo local; si falla, se conserva el de respaldo.
const COL_PROYECTOS = 'proyectos';
async function loadProyectos() {
  try {
    const fb = await esperarFirebase();
    const snap = await fb.getDocs(fb.collection(fb.db, COL_PROYECTOS));
    if (snap.empty) return PROYECTOS;
    PROYECTOS = snap.docs.map(d => {
      const x = d.data();
      return { codigo: x.codigo || d.id, nombre: x.nombre || '', subsec: x.dependencia || x.subsec || '' };
    }).sort((a, b) => String(a.codigo).localeCompare(String(b.codigo)));
  } catch (err) {
    console.error('No se pudo cargar el catálogo de proyectos, se usa el de respaldo:', err);
  }
  return PROYECTOS;
}

// Mapa { códigoProyecto: [actividades MGA] } cargado desde catalogos/mgaPorProyecto
let MGA_POR_PROYECTO = {};
async function loadMgaPorProyecto() {
  try {
    const fb = await esperarFirebase();
    const snap = await fb.getDoc(fb.doc(fb.db, 'catalogos', 'mgaPorProyecto'));
    if (snap.exists()) MGA_POR_PROYECTO = snap.data().mapa || {};
  } catch (err) {
    console.error('No se pudo cargar el mapa de MGA por proyecto:', err);
  }
  return MGA_POR_PROYECTO;
}

// Opciones <option> de actividad MGA para un proyecto (incluye el valor actual
// aunque no esté en la lista, para no perder datos existentes).
function opcionesMGA(codigoProyecto, seleccion) {
  const lista = MGA_POR_PROYECTO[codigoProyecto] || [];
  const todas = (seleccion && !lista.includes(seleccion)) ? [seleccion, ...lista] : lista;
  const placeholder = lista.length ? 'Seleccionar actividad MGA…' : '(Sin MGA para este proyecto)';
  return `<option value="">${placeholder}</option>` +
    todas.map(m => `<option ${m === seleccion ? 'selected' : ''}>${esc(m)}</option>`).join('');
}

// Mapa { códigoProyecto: [ {mga, det:[actividades detalladas]} ] }
let DET_POR_PROYECTO = {};
async function loadDetalladas() {
  try {
    const fb = await esperarFirebase();
    const snap = await fb.getDoc(fb.doc(fb.db, 'catalogos', 'detalladasPorMga'));
    if (snap.exists()) DET_POR_PROYECTO = snap.data().mapa || {};
  } catch (err) {
    console.error('No se pudo cargar el mapa de actividades detalladas:', err);
  }
  return DET_POR_PROYECTO;
}

// Actividades detalladas correspondientes a un (proyecto, MGA)
function detalladasDe(codigoProyecto, mga) {
  const arr = DET_POR_PROYECTO[codigoProyecto] || [];
  return (arr.find(x => x.mga === mga) || {}).det || [];
}

// ID financiero = Proyecto · código MGA · descripción de actividad detallada
function componerIdFinanciero(r) {
  const proyecto = r.m2?.proyecto || '';
  const codMga = (String(r.m2?.mga || '').match(/^[\d.]+/) || [''])[0].replace(/\.+$/, '').trim();
  const actDet = r.m2?.actDet || '';
  return [proyecto, codMga, actDet].filter(Boolean).join(' · ');
}

// Actualiza el ID financiero (modelo + campo visible) tras cambiar proyecto/MGA/actividad
function refreshIdFinanciero() {
  if (!state.editingReq) return;
  const val = componerIdFinanciero(state.editingReq);
  setReqPath(state.editingReq, 'm3.idInterno', val);
  const el = document.getElementById('idFinancieroAuto');
  if (el) el.value = val;
}

// Opciones <option> de actividad detallada para un (proyecto, MGA)
function opcionesDetalladas(codigoProyecto, mga, seleccion) {
  const lista = detalladasDe(codigoProyecto, mga);
  // Si hay una sola y no hay selección previa, se autoselecciona
  const auto = (!seleccion && lista.length === 1) ? lista[0] : seleccion;
  const todas = (auto && !lista.includes(auto)) ? [auto, ...lista] : lista;
  const placeholder = lista.length ? 'Seleccionar actividad detallada…' : '(Selecciona primero una MGA)';
  return `<option value="">${placeholder}</option>` +
    todas.map(d => `<option ${d === auto ? 'selected' : ''}>${esc(d)}</option>`).join('');
}
// No re-renderiza mientras haya un modal abierto, para no interrumpir la edición.
let unsubRequerimientos = null;
function suscribirRequerimientos() {
  if (unsubRequerimientos || !window.fb || !window.fb.ready) return;
  const fb = window.fb;
  unsubRequerimientos = fb.onSnapshot(fb.collection(fb.db, COL_REQUERIMIENTOS), snap => {
    REQUERIMIENTOS = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    REQUERIMIENTOS.forEach(r => recalcularReq(r));
    REQUERIMIENTOS.sort((a, b) => (a.opSeq || 0) - (b.opSeq || 0) || String(a.op).localeCompare(String(b.op)));
    const modalAbierto = document.getElementById('modal')?.classList.contains('active');
    if (state.role && !modalAbierto && !state.cargando) render();
  }, err => console.error('onSnapshot requerimientos:', err));
}
function desuscribirRequerimientos() {
  if (unsubRequerimientos) { unsubRequerimientos(); unsubRequerimientos = null; }
}

// Construye el string de OP a partir de un secuencial
function construirOP(req, seq) {
  const subsecMap = { 'FORMACIÓN': 'FORM', 'ORSO': 'ORSO', 'PL Y PP': 'PLYPP', 'DESPACHO': 'DESPACHO', 'SPC': 'SPC' };
  const subAbbr = subsecMap[req.m1?.subsec] || 'GEN';
  const tipo = req.m3?.tipoRec || 'ORD';
  return `${seq}_${subAbbr}_${tipo}`;
}

// OP tentativo solo para vista previa en la UI (el definitivo lo asigna la transacción)
function generarOP(req) {
  const seq = (REQUERIMIENTOS.reduce((m, r) => Math.max(m, r.opSeq || 0), 0)) + 1;
  return { op: construirOP(req, seq), opSeq: seq };
}

// Crea un requerimiento nuevo en Firestore asignando el secuencial de forma
// ATÓMICA mediante una transacción sobre contadores/requerimientos, para que
// dos usuarios simultáneos no obtengan el mismo OP.
async function crearRequerimientoFirestore(req) {
  const fb = await esperarFirebase();
  const counterRef = fb.doc(fb.db, 'contadores', 'requerimientos');
  const newRef = fb.doc(fb.collection(fb.db, COL_REQUERIMIENTOS)); // id autogenerado
  await fb.runTransaction(fb.db, async (tx) => {
    const snap = await tx.get(counterRef);
    const actual = snap.exists() ? (snap.data().seq || 0) : 0;
    // Arranca desde el máximo conocido para no chocar con datos ya sembrados
    const maxLocal = REQUERIMIENTOS.reduce((m, r) => Math.max(m, r.opSeq || 0), 0);
    const seq = Math.max(actual, maxLocal) + 1;
    const payload = limpiarParaFirestore({ ...req, op: construirOP(req, seq), opSeq: seq });
    delete payload.id;
    payload._creadoEn = fb.serverTimestamp();
    payload._actualizadoEn = fb.serverTimestamp();
    tx.set(counterRef, { seq }, { merge: true });
    tx.set(newRef, payload);
  });
  return newRef.id;
}

// Actualiza un requerimiento existente en Firestore
async function actualizarRequerimientoFirestore(req) {
  const fb = await esperarFirebase();
  const payload = limpiarParaFirestore({ ...req });
  delete payload.id;
  payload._actualizadoEn = fb.serverTimestamp();
  await fb.setDoc(fb.doc(fb.db, COL_REQUERIMIENTOS, req.id), payload, { merge: true });
  return req.id;
}

// Elimina un requerimiento de Firestore
async function eliminarRequerimientoFirestore(id) {
  const fb = await esperarFirebase();
  await fb.deleteDoc(fb.doc(fb.db, COL_REQUERIMIENTOS, id));
  return id;
}

// Sube los requerimientos de ejemplo a Firestore (idempotente: usa ids fijos)
async function seedRequerimientos() {
  const fb = await esperarFirebase();
  for (const r of REQUERIMIENTOS_DEMO) {
    const { id, ...data } = r;
    data._creadoEn = fb.serverTimestamp();
    data._actualizadoEn = fb.serverTimestamp();
    await fb.setDoc(fb.doc(fb.db, COL_REQUERIMIENTOS, id), limpiarParaFirestore(data), { merge: true });
  }
  await loadRequerimientos();
}

/* ============================================================
   UTILIDADES
   ============================================================ */

const fmt = {
  cop: n => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n || 0),
  copShort: n => {
    if (!n) return '$0';
    if (n >= 1e9) return '$' + (n / 1e9).toFixed(1) + ' MM';
    if (n >= 1e6) return '$' + (n / 1e6).toFixed(1) + ' M';
    if (n >= 1e3) return '$' + (n / 1e3).toFixed(0) + ' K';
    return '$' + n.toFixed(0);
  },
  num: n => new Intl.NumberFormat('es-CO').format(n || 0),
  pct: n => (n * 100).toFixed(1) + '%',
  fecha: s => {
    if (!s) return '—';
    const d = new Date(s);
    return d.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
  }
};

// Sanitiza texto para insertarlo en HTML
function esc(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function estadoClase(estado) {
  const map = {
    'Ejecutado': 'ejecutado',
    'En cotización': 'cotizacion',
    'En subsanación': 'subsanacion',
    'A ejecución': 'ejecucion',
    'Cancelado': 'cancelado',
    'Suspendido': 'suspendido',
    'Sin recibir': 'suspendido'
  };
  return map[estado] || 'suspendido';
}

function showToast(msg, kind = 'success') {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.toggle('success', kind === 'success');
  t.classList.add('active');
  setTimeout(() => t.classList.remove('active'), 2400);
}

/* ============================================================
   CÁLCULOS FINANCIEROS (compartible con backend)
   ============================================================ */

// ---- Modelo de ítems: un requerimiento puede tener varias líneas/ítems ----
function nuevoItem() {
  return { desc: '', tarifario: '', caracteristicas: '', medida: '', cantidad: 0, precio: 0,
           tarifaImp: 0.19, adminPct: 0, obs: '', evSpc: 'PENDIENTE', evOper: 'PENDIENTE' };
}

// Garantiza r.items[]; migra requerimientos antiguos de un solo ítem
function migrarItems(r) {
  if (Array.isArray(r.items) && r.items.length) return r.items;
  const cod = r.m2?.tarifario || '';
  r.items = [{
    desc: r.m2?.desc || '', tarifario: cod,
    caracteristicas: (TARIFARIO.find(t => t.id === cod) || {}).carac || '',
    medida: r.m2?.medida || '',
    cantidad: Number(r.m2?.cantidad) || 0, precio: Number(r.m3?.precio) || 0,
    tarifaImp: Number(r.m3?.tarifaImp) || 0.19, adminPct: Number(r.m3?.adminPct) || 0,
    obs: r.m2?.obs || '', evSpc: r.m2?.evSpc || 'PENDIENTE', evOper: r.m2?.evOper || 'PENDIENTE'
  }];
  return r.items;
}

// Cálculo financiero de UN ítem. Administración = % sobre el subtotal;
// el IVA (tarifa impuesto) se calcula SOLO sobre el subtotal.
function calcItem(it) {
  const cantidad = Number(it.cantidad) || 0;
  const precio = Number(it.precio) || 0;
  const tarifaImp = Number(it.tarifaImp) || 0;
  const adminPct = Number(it.adminPct) || 0;
  const subtotal = precio * cantidad;
  const administracion = subtotal * adminPct;
  const valorImp = subtotal * tarifaImp;            // IVA solo sobre el subtotal
  const totalEjec = subtotal + administracion + valorImp;
  const honorarios = totalEjec * 0.095;
  const ivaHon = honorarios * 0.19;
  const totalHon = honorarios + ivaHon;
  const gmf = (totalEjec / 1000) * 4;
  const estampilla = totalEjec * 0.02;
  const valorEjec = totalEjec + totalHon;
  return Object.fromEntries(Object.entries(
    { subtotal, administracion, valorImp, totalEjec, honorarios, ivaHon, totalHon, gmf, estampilla, valorEjec }
  ).map(([k, v]) => [k, Math.round(v)]));
}

// Recalcula cada ítem y vuelca los TOTALES (suma) en m3 + representativos en m2,
// para que tabla, dashboard y exportación sigan funcionando con los agregados.
function recalcularReq(r) {
  migrarItems(r);
  const claves = ['subtotal','administracion','valorImp','totalEjec','honorarios','ivaHon','totalHon','gmf','estampilla','valorEjec'];
  const tot = Object.fromEntries(claves.map(k => [k, 0]));
  let cantidadTotal = 0;
  r.items.forEach(it => {
    it.cantidad = Number(it.cantidad) || 0;
    it.precio = Number(it.precio) || 0;
    it.tarifaImp = Number(it.tarifaImp) || 0;
    it.adminPct = Number(it.adminPct) || 0;
    const c = calcItem(it);
    claves.forEach(k => tot[k] += c[k]);
    cantidadTotal += it.cantidad;
  });
  Object.assign(r.m3, tot);
  const first = r.items[0] || nuevoItem();
  r.m2.desc = first.desc; r.m2.tarifario = first.tarifario; r.m2.medida = first.medida;
  r.m2.cantidad = cantidadTotal; r.m2.obs = first.obs;
  r.m2.evSpc = first.evSpc; r.m2.evOper = first.evOper;
  r.m3.precio = first.precio; r.m3.tarifaImp = first.tarifaImp;
  r.m3.idInterno = componerIdFinanciero(r); // ID financiero compuesto
  return r;
}

// Tarjeta editable de un ítem (usada en M2)
function renderItemCard(it, i, dis, total) {
  const c = calcItem(it);
  const tarif = TARIFARIO.find(x => x.id === it.tarifario);
  return `
  <div class="item-card" data-idx="${i}">
    <div class="item-card-head">
      <span class="item-card-title">Ítem ${i + 1}</span>
      ${(!dis && total > 1) ? `<button type="button" class="item-remove" data-idx="${i}" title="Eliminar ítem">✕ Quitar</button>` : ''}
    </div>
    <div class="form-grid cols-3">
      <div class="form-group span-2">
        <label class="form-label">Descripción <span class="hint">(autocompleta del tarifario)</span></label>
        <input type="text" class="form-input item-desc" list="tarifDescList" data-idx="${i}" value="${esc(it.desc)}" placeholder="Ej: Botella de agua" ${dis}>
      </div>
      <div class="form-group">
        <label class="form-label">Cantidad <span class="required">*</span> <span class="hint">(=21*3)</span></label>
        <input type="text" class="form-input mono item-cantidad" data-idx="${i}" value="${esc(it.cantidad)}" placeholder="80" ${dis}>
      </div>
      <div class="form-group">
        <label class="form-label">Código tarifario</label>
        <input type="text" class="form-input mono item-codigo" data-idx="${i}" value="${esc(it.tarifario)}" placeholder="AL 0005" ${dis}>
      </div>
      <div class="form-group">
        <label class="form-label">Unidad <span class="hint">(auto)</span></label>
        <input type="text" class="form-input item-medida" data-idx="${i}" value="${esc(it.medida)}" ${dis}>
      </div>
      <div class="form-group">
        <label class="form-label">Precio unitario</label>
        <input type="text" class="form-input mono item-precio" data-idx="${i}" value="${esc(it.precio)}" placeholder="0" ${dis}>
      </div>
      <div class="form-group span-3">
        <label class="form-label">Características del ítem <span class="hint">(del tarifario)</span></label>
        <textarea class="form-textarea item-carac" data-idx="${i}" rows="2" placeholder="Se completan automáticamente al elegir el ítem del tarifario" ${dis}>${esc(it.caracteristicas || (tarif ? tarif.carac : ''))}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label">Tarifa impuesto (IVA)</label>
        <select class="form-select item-tarifa" data-idx="${i}" ${dis}>
          ${CATALOGOS.tarifasImpuesto.map(t2 => `<option value="${t2}" ${Number(it.tarifaImp) === t2 ? 'selected' : ''}>${(t2 * 100).toFixed(0)}%</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Administración (%) <span class="hint">(antes del IVA)</span></label>
        <div class="input-suffix-wrap">
          <input type="number" class="form-input mono item-admin" data-idx="${i}" min="0" max="100" step="0.1" value="${esc(+(Number(it.adminPct) * 100).toFixed(4))}" placeholder="0" ${dis}>
          <span class="input-suffix">%</span>
        </div>
      </div>
      <div class="form-group span-2">
        <label class="form-label">Observaciones del ítem</label>
        <input type="text" class="form-input item-obs" data-idx="${i}" value="${esc(it.obs)}" ${dis}>
      </div>
      <div class="form-group">
        <label class="form-label">Evidencia SPC</label>
        <select class="form-select item-evspc" data-idx="${i}" ${dis}>
          ${CATALOGOS.estadosEvidencia.map(e => `<option ${e === it.evSpc ? 'selected' : ''}>${esc(e)}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Evidencia Operador</label>
        <select class="form-select item-evoper" data-idx="${i}" ${dis}>
          ${CATALOGOS.estadosEvidencia.map(e => `<option ${e === it.evOper ? 'selected' : ''}>${esc(e)}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="item-card-total">Valor ejecutado del ítem: <strong>${fmt.cop(c.valorEjec)}</strong>${tarif ? ` · <span class="hint">${esc(tarif.id)} · rango ${tarif.min}-${tarif.max}</span>` : ''}</div>
  </div>`;
}

// Panel de M3: resumen de cálculo por ítem + totales.
// Al EDITAR (no en creación) el rol financiero puede ajustar IVA y administración
// por ítem; en creación es solo lectura (se editan en M2).
function renderM3CalcInner(r) {
  recalcularReq(r);
  const m3Edit = r.id !== 'new' && canRoleEditTab('m3');
  const filas = r.items.map((it, i) => {
    const c = calcItem(it);
    const celdaAdmin = m3Edit
      ? `<input type="number" class="form-input mono m3-admin" data-idx="${i}" min="0" max="100" step="0.1" value="${esc(+(Number(it.adminPct) * 100).toFixed(4))}" style="width:70px;text-align:right;"> · ${fmt.cop(c.administracion)}`
      : `${(Number(it.adminPct) * 100).toFixed(1)}% · ${fmt.cop(c.administracion)}`;
    const celdaIva = m3Edit
      ? `<select class="form-select m3-tarifa" data-idx="${i}" style="width:78px;">${CATALOGOS.tarifasImpuesto.map(t2 => `<option value="${t2}" ${Number(it.tarifaImp) === t2 ? 'selected' : ''}>${(t2 * 100).toFixed(0)}%</option>`).join('')}</select> · ${fmt.cop(c.valorImp)}`
      : `${(Number(it.tarifaImp) * 100).toFixed(0)}% · ${fmt.cop(c.valorImp)}`;
    return `<tr>
      <td>${i + 1}</td>
      <td class="ic-desc">${esc(it.desc || it.tarifario || '—')}</td>
      <td>${fmt.num(it.cantidad)}</td>
      <td>${fmt.cop(it.precio)}</td>
      <td>${fmt.cop(c.subtotal)}</td>
      <td>${celdaAdmin}</td>
      <td>${celdaIva}</td>
      <td>${fmt.cop(c.valorEjec)}</td>
    </tr>`;
  }).join('');
  return `
      <div class="items-calc-wrap">
        <table class="items-calc-table">
          <thead><tr>
            <th>#</th><th class="ic-desc">Ítem</th><th>Cant.</th><th>Precio/u</th>
            <th>Subtotal</th><th>Administración</th><th>IVA</th><th>Valor ejec.</th>
          </tr></thead>
          <tbody>${filas}</tbody>
        </table>
      </div>

      <div class="calc-panel">
        <div class="calc-row"><div class="calc-label">Subtotal (todos los ítems)</div><div class="calc-value">${fmt.cop(r.m3.subtotal)}</div></div>
        <div class="calc-row"><div class="calc-label">Administración</div><div class="calc-value">${fmt.cop(r.m3.administracion)}</div></div>
        <div class="calc-row"><div class="calc-label">Valor impuesto (IVA sobre subtotal)</div><div class="calc-value">${fmt.cop(r.m3.valorImp)}</div></div>
        <div class="calc-row"><div class="calc-label">Total ejecutable</div><div class="calc-value">${fmt.cop(r.m3.totalEjec)}</div></div>
        <div class="calc-row"><div class="calc-label">Honorarios (9,5%)</div><div class="calc-value">${fmt.cop(r.m3.honorarios)}</div></div>
        <div class="calc-row"><div class="calc-label">IVA honorarios (19%)</div><div class="calc-value">${fmt.cop(r.m3.ivaHon)}</div></div>
        <div class="calc-row"><div class="calc-label">Total honorarios</div><div class="calc-value">${fmt.cop(r.m3.totalHon)}</div></div>
        <div class="calc-row"><div class="calc-label">GMF (4×1000)</div><div class="calc-value">${fmt.cop(r.m3.gmf)}</div></div>
        <div class="calc-row"><div class="calc-label">Estampilla Justicia Familia (2%)</div><div class="calc-value">${fmt.cop(r.m3.estampilla)}</div></div>
        <div class="calc-row total"><div class="calc-label">Valor ejecutado contrato (total)</div><div class="calc-value">${fmt.cop(r.m3.valorEjec)}</div></div>
      </div>`;
}

// Refresca en vivo el panel de cálculo de M3 (si está visible) tras cambiar
// cantidad, precio o tarifa.
function refreshM3Calc() {
  const panel = document.getElementById('m3CalcPanel');
  if (panel && state.editingReq) panel.innerHTML = renderM3CalcInner(state.editingReq);
}

/* ============================================================
   LOGIN
   ============================================================ */

(function initLogin() {
  const roleButtons = document.querySelectorAll('.role-option');
  const btn = document.getElementById('btnLogin');

  roleButtons.forEach(b => {
    b.addEventListener('click', () => {
      roleButtons.forEach(x => x.classList.remove('selected'));
      b.classList.add('selected');
      state.role = b.dataset.role;
      btn.disabled = false;
    });
  });

  btn.addEventListener('click', async () => {
    if (!state.role) return;
    document.getElementById('loginShell').style.display = 'none';
    document.getElementById('app').classList.add('active');
    applyRole();
    state.cargando = true;
    render();  // muestra estado de carga
    try {
      await loadProyectos();     // catálogo de proyectos (código → nombre)
      await loadMgaPorProyecto(); // actividades MGA por proyecto
      await loadDetalladas();    // actividades detalladas por (proyecto, MGA)
      await loadRequerimientos();
      suscribirRequerimientos(); // actualizaciones en vivo de otros usuarios
    } catch (err) {
      console.error('Error cargando requerimientos:', err);
      showToast('No se pudieron cargar los datos: ' + err.message, 'error');
    } finally {
      state.cargando = false;
      render();
    }
  });
})();

function applyRole() {
  const info = ROLE_INFO[state.role];
  document.getElementById('userAvatar').textContent = info.initials;
  document.getElementById('userName').textContent = info.name;
  document.getElementById('userRoleBadge').textContent = info.label;
  document.getElementById('navAuditoria').style.display = ROLES_AUDITORIA.includes(state.role) ? '' : 'none';
}

document.getElementById('userChip').addEventListener('click', () => {
  if (!confirm('¿Cerrar sesión y volver a la pantalla de selección de rol?')) return;
  desuscribirRequerimientos();
  state.role = null;
  document.getElementById('app').classList.remove('active');
  document.getElementById('loginShell').style.display = '';
  document.querySelectorAll('.role-option').forEach(x => x.classList.remove('selected'));
  document.getElementById('btnLogin').disabled = true;
});

/* ============================================================
   NAVEGACIÓN
   ============================================================ */

document.querySelectorAll('.nav-item[data-view]').forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('disabled')) return;
    document.querySelectorAll('.nav-item').forEach(x => x.classList.remove('active'));
    item.classList.add('active');
    state.view = item.dataset.view;
    render();
  });
});

const TITLES = {
  dashboard: 'Resumen',
  requerimientos: 'Requerimientos',
  tarifario: 'Tarifario del Distrito',
  reportes: 'Reportes',
  auditoria: 'Auditoría'
};

/* ============================================================
   RENDER PRINCIPAL
   ============================================================ */

function render() {
  document.getElementById('topbarTitle').textContent = TITLES[state.view];
  const content = document.getElementById('content');

  // Estado de carga inicial desde Firestore
  if (state.cargando) {
    content.innerHTML = `
      <div class="data-state">
        <div class="data-state-spinner"></div>
        <div class="data-state-title">Cargando datos desde Firestore…</div>
        <div class="data-state-sub">Proyecto matriz-logistica-37752</div>
      </div>`;
    return;
  }

  // Estado vacío: la colección requerimientos no tiene documentos
  if (REQUERIMIENTOS.length === 0 && ['dashboard', 'requerimientos', 'reportes'].includes(state.view)) {
    content.innerHTML = renderEmptyState();
    attachEmptyState();
    return;
  }

  switch (state.view) {
    case 'dashboard':       content.innerHTML = renderDashboard(); afterRenderDashboard(); break;
    case 'requerimientos':  content.innerHTML = renderRequerimientos(); attachReqTable(); break;
    case 'tarifario':       content.innerHTML = renderTarifario(); attachTarifario(); break;
    case 'reportes':        content.innerHTML = renderReportes(); afterRenderDashboard(); attachReportes(); break;
    case 'auditoria':       content.innerHTML = renderAuditoria(); break;
  }
}

function renderEmptyState() {
  const puedeCrear = ROLES_TOTALES.includes(state.role);
  return `
    <div class="page-header">
      <h1>Resumen ejecutivo</h1>
      <p>La colección <code style="font-family:var(--font-mono);font-size:12px;background:var(--color-surface-alt);padding:2px 6px;border-radius:4px;">requerimientos</code> en Firestore está vacía.</p>
    </div>
    <div class="data-state">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-border-strong)" stroke-width="1.4">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/>
      </svg>
      <div class="data-state-title">Aún no hay requerimientos en la base de datos</div>
      <div class="data-state-sub">Puedes crear el primero, o cargar los 12 requerimientos de ejemplo para probar el sistema con datos.</div>
      <div class="data-state-actions">
        ${puedeCrear ? `<button class="btn-accent" id="emptyNuevo" style="margin-left:0;">
          <svg class="btn-icon" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
          Crear el primer requerimiento
        </button>` : ''}
        <button class="btn-secondary" id="emptySeed">
          <svg class="btn-icon" viewBox="0 0 24 24"><path d="M12 16V4m0 0L8 8m4-4l4 4M4 20h16"/></svg>
          Cargar 12 requerimientos de ejemplo
        </button>
      </div>
    </div>`;
}

function attachEmptyState() {
  const bNuevo = document.getElementById('emptyNuevo');
  if (bNuevo) bNuevo.addEventListener('click', () => openModal(null));
  const bSeed = document.getElementById('emptySeed');
  if (bSeed) bSeed.addEventListener('click', async () => {
    bSeed.disabled = true;
    bSeed.textContent = 'Cargando ejemplos...';
    try {
      await seedRequerimientos();
      showToast('12 requerimientos de ejemplo cargados en Firestore', 'success');
      render();
    } catch (err) {
      console.error(err);
      showToast('Error al sembrar datos: ' + err.message, 'error');
      bSeed.disabled = false;
      bSeed.textContent = 'Cargar 12 requerimientos de ejemplo';
    }
  });
}

/* ============================================================
   VISTA: DASHBOARD
   ============================================================ */

// Mapeo dimensión → función accesora y etiqueta para mostrar al usuario
const DIM_LABEL = {
  subsec: 'Subsecretaría',
  proyecto: 'Proyecto',
  mga: 'Actividad MGA',
  comuna: 'Comuna',
  tipoRec: 'Tipo de recurso',
  estadoTramite: 'Estado de trámite'
};

function getDimValue(r, dim) {
  switch (dim) {
    case 'subsec':        return r.m1.subsec;
    case 'proyecto':      return r.m2.proyecto;
    case 'mga':           return r.m2.mga;
    case 'comuna':        return r.m2.comuna;
    case 'tipoRec':       return r.m3.tipoRec;
    case 'estadoTramite': return r.estadoTramite;
  }
}

function toggleCrossFilter(dim, value) {
  if (state.crossFilter && state.crossFilter.dim === dim && state.crossFilter.value === value) {
    state.crossFilter = null;          // mismo click → quitar filtro
  } else {
    state.crossFilter = { dim, value };
  }
  render();
}

function renderDashboard() {
  const cf = state.crossFilter;

  // Conjunto filtrado para los gráficos que NO pertenecen a la dimensión del filtro
  const datos = cf
    ? REQUERIMIENTOS.filter(r => getDimValue(r, cf.dim) === cf.value)
    : REQUERIMIENTOS;

  // Para cada gráfico, decide qué dataset usar: el filtrado en general,
  // o el completo si el gráfico es el originador del filtro (no se filtra a sí mismo)
  const datosPara = dim => (cf && cf.dim === dim) ? REQUERIMIENTOS : datos;

  const total = datos.length;
  const ejecutados = datos.filter(r => r.estadoTramite === 'Ejecutado').length;
  const enCurso = datos.filter(r => ['A ejecución', 'En cotización'].includes(r.estadoTramite)).length;
  const cancelados = datos.filter(r => r.estadoTramite === 'Cancelado').length;
  const presupuestoTotal = datos.reduce((s, r) => s + (r.m3.valorEjec || 0), 0);
  const ejecutado = datos.filter(r => r.estadoTramite === 'Ejecutado').reduce((s, r) => s + (r.m3.valorEjec || 0), 0);
  const pctEjec = presupuestoTotal > 0 ? ejecutado / presupuestoTotal : 0;

  // Suma por dimensión, aplicando el filtrado correcto
  const sumByDim = dim => {
    const fuente = datosPara(dim);
    const acc = {};
    fuente.forEach(r => {
      const k = getDimValue(r, dim);
      if (k == null || k === '') return;
      acc[k] = (acc[k] || 0) + (r.m3.valorEjec || 0);
    });
    return acc;
  };
  const porSubsec   = sumByDim('subsec');
  const porProyecto = sumByDim('proyecto');
  const porMGA      = sumByDim('mga');
  const porComuna   = sumByDim('comuna');
  const porTipoRec  = sumByDim('tipoRec');
  const subsecMax = Math.max(...Object.values(porSubsec), 1);

  const truncTxt = (s, n) => String(s).length > n ? String(s).slice(0, n) + '…' : String(s);

  // Helper: barra clickeable para cross-filter
  const barClasses = (dim, value) => {
    if (!cf) return 'clickable';
    if (cf.dim !== dim) return 'clickable';        // gráfico no involucrado, no se atenúa
    if (cf.value === value) return 'clickable bar-selected';
    return 'clickable bar-dimmed';
  };

  // Renderiza un bar-chart desde un objeto {label: valor}
  const barChart = (obj, topN, labelMax, dim, labelPrefix) => {
    const entries = Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, topN);
    const max = Math.max(...entries.map(e => e[1]), 1);
    return entries.map(([label, val]) => `
      <div class="bar-row ${barClasses(dim, label)}" data-cf-dim="${esc(dim)}" data-cf-value="${esc(label)}">
        <div class="bar-label" title="${esc((labelPrefix || '') + label)}">${esc((labelPrefix || '') + truncTxt(label, labelMax))}</div>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${(val / max * 100).toFixed(0)}%"></div>
        </div>
        <div class="bar-value">${fmt.copShort(val)}</div>
      </div>
    `).join('');
  };

  // Chip del filtro activo
  const chip = cf ? `
    <div class="cross-filter-chip">
      <svg viewBox="0 0 24 24"><path d="M3 6h18M6 12h12M10 18h4"/></svg>
      <span class="cf-dim">${esc(DIM_LABEL[cf.dim] || cf.dim)}:</span>
      <strong>${esc(cf.value)}</strong>
      <button id="btnClearCrossFilter" title="Quitar filtro">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>
  ` : '';

  // Datos para el donut y la leyenda (estados de trámite)
  const datosEstados = datosPara('estadoTramite');
  const estadosCounts = {};
  ['Ejecutado', 'A ejecución', 'En cotización', 'En subsanación', 'Cancelado'].forEach(e => {
    estadosCounts[e] = datosEstados.filter(r => r.estadoTramite === e).length;
  });

  // Tipo de recurso
  const datosTipoRec = datosPara('tipoRec');
  const ord = porTipoRec['ORD'] || 0;
  const pp = porTipoRec['PP'] || 0;
  const tot = ord + pp || 1;
  const nOrd = datosTipoRec.filter(r => r.m3.tipoRec === 'ORD').length;
  const nPp = datosTipoRec.filter(r => r.m3.tipoRec === 'PP').length;
  const recClass = value => {
    if (!cf) return 'clickable';
    if (cf.dim !== 'tipoRec') return 'clickable';
    if (cf.value === value) return 'clickable recurso-selected';
    return 'clickable recurso-dimmed';
  };

  return `
    <div class="page-header">
      <h1>Resumen ejecutivo</h1>
      <p>Estado consolidado de la operación logística — Mayo 2026 · Vigencia presupuestal ${esc(new Date().getFullYear())} · Click en cualquier gráfico para filtrar todo el dashboard.</p>
    </div>

    ${chip}

    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-label">Total requerimientos</div>
        <div class="kpi-value">${total}<span class="kpi-value-suffix">activos</span></div>
        <div class="kpi-trend up">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l3-3 3 3"/></svg>
          12% vs. mes anterior
        </div>
      </div>

      <div class="kpi-card">
        <div class="kpi-label">Presupuesto ejecutado</div>
        <div class="kpi-value">${fmt.copShort(ejecutado)}</div>
        <div class="kpi-progress"><div class="kpi-progress-fill" style="width: ${(pctEjec * 100).toFixed(0)}%"></div></div>
        <div class="kpi-trend flat" style="margin-top: 6px;">${fmt.pct(pctEjec)} del total ${cf ? 'filtrado' : 'comprometido'}</div>
      </div>

      <div class="kpi-card">
        <div class="kpi-label">En curso</div>
        <div class="kpi-value">${enCurso}<span class="kpi-value-suffix">/ ${total}</span></div>
        <div class="kpi-trend flat">A ejecución + en cotización</div>
      </div>

      <div class="kpi-card">
        <div class="kpi-label">Ejecutados completados</div>
        <div class="kpi-value">${ejecutados}<span class="kpi-value-suffix">/ ${total}</span></div>
        <div class="kpi-trend up">${cancelados} cancelados</div>
      </div>
    </div>

    <div class="dash-grid">
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">Ejecución por subsecretaría</div>
          <div class="panel-action">Ver detalle →</div>
        </div>
        <div class="bar-chart">
          ${Object.entries(porSubsec).sort((a,b)=>b[1]-a[1]).map(([sub, val]) => `
            <div class="bar-row ${barClasses('subsec', sub)}" data-cf-dim="subsec" data-cf-value="${esc(sub)}">
              <div class="bar-label">${esc(sub)}</div>
              <div class="bar-track">
                <div class="bar-fill" style="width: ${(val/subsecMax*100).toFixed(0)}%"></div>
              </div>
              <div class="bar-value">${fmt.copShort(val)}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">Estados de trámite</div>
        </div>
        <div class="donut-wrap">
          ${renderDonut(datosEstados)}
          <div class="donut-center">
            <div>
              <div class="donut-center-value">${datosEstados.length}</div>
              <div class="donut-center-label">${cf && cf.dim !== 'estadoTramite' ? 'Filtrado' : 'Total'}</div>
            </div>
          </div>
        </div>
        <div class="legend">
          ${[
            { label: 'Ejecutado', color: '#2d6a4f' },
            { label: 'A ejecución', color: '#a8842d' },
            { label: 'En cotización', color: '#2c4870' },
            { label: 'En subsanación', color: '#b07b15' },
            { label: 'Cancelado', color: '#9a2a2a' }
          ].map(x => ({ ...x, n: estadosCounts[x.label] || 0 }))
           .filter(x => x.n > 0).map(x => {
            const cls = !cf || cf.dim !== 'estadoTramite' ? 'clickable'
                       : cf.value === x.label ? 'clickable legend-selected'
                       : 'clickable legend-dimmed';
            return `
              <div class="legend-item ${cls}" data-cf-dim="estadoTramite" data-cf-value="${esc(x.label)}">
                <div class="legend-dot" style="background: ${x.color}"></div>
                <div>${esc(x.label)}</div>
                <div class="legend-count">${x.n}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>

    <div class="total-contrato-card">
      <div class="total-contrato-label">Valor total del contrato${cf ? ' · filtrado' : ''}</div>
      <div class="total-contrato-value">${fmt.cop(presupuestoTotal)}</div>
      <div class="total-contrato-meta">
        ${total} requerimientos · ${fmt.cop(ejecutado)} ejecutado · ${fmt.cop(presupuestoTotal - ejecutado)} pendiente de ejecución
      </div>
    </div>

    <div class="dash-grid-4">
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">Ejecución por proyecto</div>
        </div>
        <div class="bar-chart">
          ${barChart(porProyecto, 6, 14, 'proyecto', '')}
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">Ejecución por actividad MGA</div>
        </div>
        <div class="bar-chart">
          ${barChart(porMGA, 6, 14, 'mga', '')}
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">Ejecución por comuna</div>
        </div>
        <div class="bar-chart">
          ${barChart(porComuna, 8, 12, 'comuna', 'Comuna ')}
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">Por tipo de recurso</div>
        </div>
        <div class="recurso-split">
          <div class="recurso-item ${recClass('ORD')}" data-cf-dim="tipoRec" data-cf-value="ORD">
            <div class="recurso-head">
              <span class="recurso-tag ord">ORD</span>
              <span class="recurso-label">Recursos ordinarios</span>
            </div>
            <div class="recurso-value">${fmt.cop(ord)}</div>
            <div class="recurso-bar"><div class="recurso-bar-fill ord" style="width: ${(ord / tot * 100).toFixed(0)}%"></div></div>
            <div class="recurso-meta">${nOrd} requerimientos · ${(ord / tot * 100).toFixed(1)}%</div>
          </div>
          <div class="recurso-item ${recClass('PP')}" data-cf-dim="tipoRec" data-cf-value="PP">
            <div class="recurso-head">
              <span class="recurso-tag pp">PP</span>
              <span class="recurso-label">Presupuesto Participativo</span>
            </div>
            <div class="recurso-value">${fmt.cop(pp)}</div>
            <div class="recurso-bar"><div class="recurso-bar-fill pp" style="width: ${(pp / tot * 100).toFixed(0)}%"></div></div>
            <div class="recurso-meta">${nPp} requerimientos · ${(pp / tot * 100).toFixed(1)}%</div>
          </div>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">Próximas entregas${cf ? ' · filtrado' : ' — esta semana'}</div>
        <div class="panel-action">Ver todas →</div>
      </div>
      <table class="data-table" style="margin: -16px;">
        <thead>
          <tr>
            <th>OP</th>
            <th>Evento</th>
            <th>Lugar</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th style="text-align:right;">Valor</th>
          </tr>
        </thead>
        <tbody>
          ${datos.slice(0, 5).map(r => `
            <tr onclick="openModal('${r.id}')">
              <td class="cell-mono">${esc(r.op)}</td>
              <td class="cell-truncate" title="${esc(r.m2.evento)}">${esc(r.m2.evento)}</td>
              <td class="cell-truncate" style="max-width: 180px;">${esc(r.m2.lugar)}</td>
              <td>${fmt.fecha(r.m2.fechaEntrega)}</td>
              <td><span class="status-pill ${estadoClase(r.estadoTramite)}">${esc(r.estadoTramite)}</span></td>
              <td class="cell-number">${fmt.cop(r.m3.valorEjec)}</td>
            </tr>
          `).join('')}
          ${datos.length === 0 ? `<tr><td colspan="6" style="text-align:center;padding:32px;color:var(--color-text-tertiary);">No hay requerimientos que coincidan con el filtro.</td></tr>` : ''}
        </tbody>
      </table>
    </div>
  `;
}

function renderDonut(dataset) {
  const arr = dataset || REQUERIMIENTOS;
  const total = arr.length || 1;
  const counts = {
    'Ejecutado': arr.filter(r=>r.estadoTramite==='Ejecutado').length,
    'A ejecución': arr.filter(r=>r.estadoTramite==='A ejecución').length,
    'En cotización': arr.filter(r=>r.estadoTramite==='En cotización').length,
    'En subsanación': arr.filter(r=>r.estadoTramite==='En subsanación').length,
    'Cancelado': arr.filter(r=>r.estadoTramite==='Cancelado').length
  };
  const colors = {
    'Ejecutado': '#2d6a4f',
    'A ejecución': '#a8842d',
    'En cotización': '#2c4870',
    'En subsanación': '#b07b15',
    'Cancelado': '#9a2a2a'
  };
  const circ = 2 * Math.PI * 70;
  let offset = 0;
  const segments = Object.entries(counts).filter(([, n]) => n > 0).map(([label, n]) => {
    const len = (n / total) * circ;
    const seg = `<circle r="70" cx="90" cy="90" fill="none" stroke="${colors[label]}" stroke-width="18"
                  stroke-dasharray="${len} ${circ}" stroke-dashoffset="${-offset}" />`;
    offset += len;
    return seg;
  }).join('');
  return `<svg class="donut-svg" width="180" height="180" viewBox="0 0 180 180">
            <circle class="donut-bg" r="70" cx="90" cy="90"/>
            ${segments}
          </svg>`;
}

function afterRenderDashboard() {
  // Animar barras
  requestAnimationFrame(() => {
    document.querySelectorAll('.bar-fill').forEach(b => {
      const w = b.style.width;
      b.style.width = '0';
      requestAnimationFrame(() => { b.style.width = w; });
    });
  });

  // Cross-filter: click en cualquier elemento con data-cf-dim
  document.querySelectorAll('[data-cf-dim]').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const dim = el.dataset.cfDim;
      const value = el.dataset.cfValue;
      if (dim && value) toggleCrossFilter(dim, value);
    });
  });

  // Botón para limpiar el filtro activo
  const btnClear = document.getElementById('btnClearCrossFilter');
  if (btnClear) btnClear.addEventListener('click', () => {
    state.crossFilter = null;
    render();
  });
}

/* ============================================================
   VISTA: REQUERIMIENTOS
   ============================================================ */

function getFilteredReqs() {
  return REQUERIMIENTOS.filter(r => {
    if (state.filters.search) {
      const q = state.filters.search.toLowerCase();
      if (!(r.op + ' ' + r.m2.evento + ' ' + r.m2.lugar).toLowerCase().includes(q)) return false;
    }
    if (state.filters.subsec && r.m1.subsec !== state.filters.subsec) return false;
    if (state.filters.estado && r.estadoTramite !== state.filters.estado) return false;
    if (state.filters.proyecto && r.m2.proyecto !== state.filters.proyecto) return false;
    return true;
  });
}

function renderRequerimientos() {
  const reqs = getFilteredReqs();
  const canCreate = ROLES_TOTALES.includes(state.role);

  return `
    <div class="page-header">
      <h1>Requerimientos logísticos</h1>
      <p>Registro detallado de cada operación logística desde su solicitud hasta la conciliación final. Click en cualquier fila para abrir el detalle por momentos.</p>
    </div>

    <div class="table-toolbar">
      <div class="search-wrap">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        <input type="text" placeholder="Buscar por OP, evento, lugar..." id="searchInput" value="${esc(state.filters.search)}">
      </div>

      <select class="filter-select" id="filterSubsec">
        <option value="">Todas las subsecretarías</option>
        ${CATALOGOS.subsecretarias.map(s => `<option value="${esc(s)}" ${state.filters.subsec === s ? 'selected' : ''}>${esc(s)}</option>`).join('')}
      </select>

      <select class="filter-select" id="filterEstado">
        <option value="">Todos los estados</option>
        ${CATALOGOS.estadosTramite.map(s => `<option value="${esc(s)}" ${state.filters.estado === s ? 'selected' : ''}>${esc(s)}</option>`).join('')}
      </select>

      <select class="filter-select" id="filterProyecto">
        <option value="">Todos los proyectos</option>
        ${PROYECTOS.map(p => `<option value="${esc(p.codigo)}" ${state.filters.proyecto === p.codigo ? 'selected' : ''}>${esc(p.codigo)} — ${esc(p.nombre.substring(0, 30))}${p.nombre.length > 30 ? '…' : ''}</option>`).join('')}
      </select>

      <button class="btn-secondary" id="btnColumnas" title="Configurar columnas visibles">
        <svg class="btn-icon" viewBox="0 0 24 24"><path d="M3 5h18M3 12h18M3 19h18"/></svg>
        Columnas <span class="cols-count" id="colsCount">${state.columnasVisibles.length}/${COLUMNAS_DETALLE.length}</span>
      </button>

      <button class="btn-secondary" id="btnExport">
        <svg class="btn-icon" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/></svg>
        Exportar Excel
      </button>

      ${canCreate ? `<button class="btn-accent" id="btnNuevo">
        <svg class="btn-icon" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
        Nuevo requerimiento
      </button>` : ''}
    </div>

    ${renderTablaReqs(reqs)}
  `;
}

// Genera el bloque <div class="table-wrap"> con columnas dinámicas
function renderTablaReqs(reqs) {
  const cols = state.columnasVisibles
    .map(id => COLUMNAS_DETALLE.find(c => c.id === id))
    .filter(Boolean);
  const totalCols = cols.length || 1;
  const isWide = cols.length > 9;

  const renderCell = (c, r) => {
    let val;
    try { val = c.acc(r); } catch (e) { val = '—'; }
    let cls = '';
    if (c.mono) cls += ' cell-mono';
    if (c.num) cls += ' cell-number';
    if (c.trunc) cls += ' cell-truncate';
    let inner = val;
    if (c.pill) inner = `<span class="status-pill ${estadoClase(val)}">${esc(val)}</span>`;
    const style = c.trunc ? ` style="max-width: ${c.trunc}px;"` : '';
    const title = c.trunc ? ` title="${typeof val === 'string' ? val.replace(/<[^>]+>/g, '') : ''}"` : '';
    return `<td class="${cls.trim()}"${style}${title}>${inner}</td>`;
  };

  return `
    <div class="table-wrap ${isWide ? 'table-wrap-wide' : ''}">
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              ${cols.map(c => `<th${c.num ? ' style="text-align:right;"' : ''} title="Columna ${c.col} del Excel">${esc(c.label)}<span class="col-letter">${c.col}</span></th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${reqs.length === 0 ? `
              <tr><td colspan="${totalCols}" style="text-align: center; padding: 48px; color: var(--color-text-tertiary);">
                No hay requerimientos que coincidan con los filtros.
              </td></tr>
            ` : reqs.map(r => `
              <tr onclick="openModal('${esc(r.id)}')">
                ${cols.map(c => renderCell(c, r)).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div class="table-footer">
        <div>Mostrando <strong>${reqs.length}</strong> de <strong>${REQUERIMIENTOS.length}</strong> requerimientos · <strong>${cols.length}</strong> de ${COLUMNAS_DETALLE.length} columnas visibles</div>
        <div class="pagination">
          <button class="page-btn">‹</button>
          <button class="page-btn active">1</button>
          <button class="page-btn">›</button>
        </div>
      </div>
    </div>
  `;
}

function attachReqTable() {
  document.getElementById('searchInput').addEventListener('input', e => {
    state.filters.search = e.target.value;
    refreshReqTableOnly();
  });
  document.getElementById('filterSubsec').addEventListener('change', e => {
    state.filters.subsec = e.target.value;
    refreshReqTableOnly();
  });
  document.getElementById('filterEstado').addEventListener('change', e => {
    state.filters.estado = e.target.value;
    refreshReqTableOnly();
  });
  document.getElementById('filterProyecto').addEventListener('change', e => {
    state.filters.proyecto = e.target.value;
    refreshReqTableOnly();
  });
  const btnNuevo = document.getElementById('btnNuevo');
  if (btnNuevo) btnNuevo.addEventListener('click', () => {
    openModal(null);
  });
  document.getElementById('btnExport').addEventListener('click', exportRequerimientosExcel);
  document.getElementById('btnColumnas').addEventListener('click', openColumnsDrawer);
}

// Re-render manteniendo el foco del input (no recreamos toda la página)
function refreshReqTableOnly() {
  const reqs = getFilteredReqs();
  const wrap = document.querySelector('.table-wrap');
  if (!wrap) return;
  wrap.outerHTML = renderTablaReqs(reqs);
  // Actualizar contador en el botón de columnas
  const counter = document.getElementById('colsCount');
  if (counter) counter.textContent = `${state.columnasVisibles.length}/${COLUMNAS_DETALLE.length}`;
}

/* ============================================================
   MODAL EDICIÓN
   ============================================================ */

function openModal(reqId) {
  const isNew = !reqId;
  const original = isNew ? newEmptyReq() : REQUERIMIENTOS.find(x => x.id === reqId);
  if (!original) return;
  // Editar sobre una COPIA: si el usuario cancela, los datos en memoria no se mutan.
  const r = isNew ? original : JSON.parse(JSON.stringify(original));
  state.editingReq = r;
  state.activeTab = 'm1';

  document.getElementById('modalEyebrow').textContent = isNew ? 'Nuevo requerimiento' : `Requerimiento ${r.op}`;
  document.getElementById('modalTitle').textContent = isNew ? 'Crear nuevo requerimiento' : r.m2.evento;
  document.getElementById('modalOp').textContent = isNew ? '— (se asignará al guardar)' : r.op;
  document.getElementById('modalCreated').textContent = isNew ? 'Ahora' : fmt.fecha(r.m1.fechaElab);
  document.getElementById('modalUpdated').textContent = isNew ? '—' : 'hace 2 horas';

  const modalEl = document.querySelector('#modal .modal');
  if (modalEl) modalEl.classList.toggle('is-new', isNew);

  renderModalTabs();
  renderModalContent();
  document.getElementById('modal').classList.add('active');
}

function newEmptyReq() {
  return {
    id: 'new', op: '—', opSeq: REQUERIMIENTOS.length + 1,
    m1: { subsec: '', enlace: '', fechaElab: new Date().toISOString().substring(0,10) },
    m2: { evento: '', proyecto: '', comuna: '', mga: '', actDet: '', fechaEntrega: '', lugar: '', persona: '', contacto: '',
          tarifario: '', desc: '', medida: '', cantidad: 0, obs: '', evSpc: 'PENDIENTE', evOper: 'PENDIENTE' },
    m3: { precio: 0, subtotal: 0, administracion: 0, tarifaImp: 0.19, valorImp: 0, totalEjec: 0, honorarios: 0, ivaHon: 0, totalHon: 0, gmf: 0, estampilla: 0, valorEjec: 0,
          proveedor: '', nit: '', factura: '', estadoReq: 'A ejecución', conciliacion: 'PENDIENTE', tipoRec: 'ORD' },
    items: [nuevoItem()],
    estadoTramite: 'En cotización'
  };
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  state.editingReq = null;
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalCancel').addEventListener('click', closeModal);
document.getElementById('modalDelete').addEventListener('click', async () => {
  const r = state.editingReq;
  if (!r || r.id === 'new') return;
  if (!confirm(`¿Eliminar definitivamente el requerimiento ${r.op}?\n\nEvento: ${r.m2.evento || '—'}\n\nEsta acción no se puede deshacer.`)) return;
  const btn = document.getElementById('modalDelete');
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Eliminando...';
  try {
    await eliminarRequerimientoFirestore(r.id);
    showToast('Requerimiento eliminado', 'success');
    await loadRequerimientos();
    closeModal();
    render();
  } catch (err) {
    console.error(err);
    showToast('Error al eliminar: ' + err.message, 'error');
    btn.disabled = false;
    btn.textContent = original;
  }
});
document.getElementById('modal').addEventListener('mousedown', e => {
  // Cerrar solo si el clic EMPIEZA directamente en el fondo (no al seleccionar
  // texto dentro del contenido y soltar el mouse sobre el overlay).
  if (e.target === e.currentTarget) closeModal();
});
// Valida los campos obligatorios mínimos de un requerimiento; devuelve lista de faltantes
function validarReq(r) {
  const errs = [];
  if (!r.m1?.subsec) errs.push('Subsecretaría');
  if (!r.m2?.evento || !String(r.m2.evento).trim()) errs.push('Nombre del evento');
  if (!r.m2?.proyecto) errs.push('Código de proyecto');
  const items = Array.isArray(r.items) ? r.items : [];
  const validos = items.filter(it => Number(it.cantidad) > 0 &&
    ((it.tarifario && String(it.tarifario).trim()) || (it.desc && String(it.desc).trim())));
  if (!validos.length) errs.push('Al menos un ítem con cantidad y descripción/código');
  return errs;
}

document.getElementById('modalSave').addEventListener('click', async () => {
  const r = state.editingReq;
  if (!r) return;
  const isNew = r.id === 'new';
  r.m3.idInterno = componerIdFinanciero(r); // ID financiero al día antes de guardar
  if (isNew) {
    const errs = validarReq(r);
    if (errs.length) { showToast('Faltan campos obligatorios: ' + errs.join(' · '), 'error'); return; }
  }
  const btn = document.getElementById('modalSave');
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = isNew ? 'Creando...' : 'Guardando...';
  try {
    if (isNew) {
      await crearRequerimientoFirestore(r);
      showToast('Requerimiento creado en Firestore', 'success');
    } else {
      await actualizarRequerimientoFirestore(r);
      showToast('Cambios guardados en Firestore', 'success');
    }
    await loadRequerimientos();
    closeModal();
    render();
  } catch (err) {
    console.error(err);
    showToast('Error al guardar: ' + err.message, 'error');
    btn.disabled = false;
    btn.textContent = original;
  }
});

// Two-way binding: sincroniza inputs con data-field hacia state.editingReq
function setReqPath(obj, path, value) {
  const parts = path.split('.');
  let o = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (o[parts[i]] == null || typeof o[parts[i]] !== 'object') o[parts[i]] = {};
    o = o[parts[i]];
  }
  o[parts[parts.length - 1]] = value;
}

(function initModalBinding() {
  const body = document.getElementById('modalBody');
  if (!body) return;
  const handler = e => {
    const el = e.target;
    const field = el.dataset && el.dataset.field;
    if (!field || !state.editingReq) return;
    let value = el.value;
    if (el.type === 'number') value = value === '' ? null : Number(value);
    setReqPath(state.editingReq, field, value);
  };
  body.addEventListener('input', handler);
  body.addEventListener('change', handler);
})();

function canRoleEditTab(tabId) {
  const allowed = ROLE_INFO[state.role].canEdit;
  return allowed.includes(tabId);
}

function renderModalTabs() {
  const tabs = [
    { id: 'm1', label: 'Momento 1', role: 'Logístico' },
    { id: 'm2', label: 'Momento 2', role: 'Logístico' },
    { id: 'm3', label: 'Momento 3', role: 'Financiero' },
    { id: 'contratista', label: 'Contratista', role: 'Contratista' },
    { id: 'revision', label: 'Revisión', role: 'Revisión' }
  ];
  document.getElementById('modalTabs').innerHTML = tabs.map(t => {
    const canEdit = canRoleEditTab(t.id);
    return `<button class="tab-btn ${state.activeTab === t.id ? 'active' : ''}" data-tab="${t.id}">
      ${esc(t.label)}
      <span class="tab-role-badge">${esc(t.role)}</span>
      ${!canEdit ? '<svg class="tab-lock" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="1"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>' : ''}
    </button>`;
  }).join('');
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.addEventListener('click', () => {
      state.activeTab = b.dataset.tab;
      renderModalTabs();
      renderModalContent();
    });
  });
}

function renderModalContent() {
  const r = state.editingReq;
  const isNew = r.id === 'new';
  const tabsToRender = isNew ? ['m1', 'm2', 'm3', 'contratista'] : [state.activeTab];

  let html = '';

  if (isNew) {
    html += `<div class="form-banner" style="background: var(--color-gold-soft); border-color: var(--color-gold); color: var(--color-gold);">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
      <div><strong>Creación de requerimiento — vista completa.</strong> Las 5 secciones (66 columnas) están disponibles. Diligencia los campos que ya conoces; los que correspondan a otros momentos pueden quedar vacíos y los completarán los roles responsables (financiero, contratista, revisión) en su fase del proceso.</div>
    </div>`;

    html += `<div class="excel-upload-bar">
      <div class="excel-upload-info">
        <svg viewBox="0 0 24 24"><path d="M14 3v4a1 1 0 001 1h4M9 13l2 2 4-4"/><path d="M5 21h14a1 1 0 001-1V7l-5-4H5a1 1 0 00-1 1v16a1 1 0 001 1z"/></svg>
        <div>¿Ya tienes el requerimiento en un archivo Excel? Cárgalo y los campos cuyas columnas coincidan se diligenciarán automáticamente.</div>
      </div>
      <button class="btn-accent" id="btnCargarExcel" type="button">
        <svg class="btn-icon" viewBox="0 0 24 24"><path d="M12 16V4m0 0L8 8m4-4l4 4M4 20h16"/></svg>
        Cargar Excel
      </button>
      <button class="btn-secondary" id="btnDescargarReq" type="button">
        <svg class="btn-icon" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/></svg>
        Descargar
      </button>
      <input type="file" id="excelUploadInput" accept=".xlsx,.xls" style="display:none">
    </div>`;
  } else {
    html += `<div class="excel-upload-bar">
      <div class="excel-upload-info">
        <svg viewBox="0 0 24 24"><path d="M14 3v4a1 1 0 001 1h4M9 13l2 2 4-4"/><path d="M5 21h14a1 1 0 001-1V7l-5-4H5a1 1 0 00-1 1v16a1 1 0 001 1z"/></svg>
        <div>Descarga toda la información de este requerimiento en Excel (campos por momento + ítems).</div>
      </div>
      <button class="btn-accent" id="btnDescargarReq" type="button">
        <svg class="btn-icon" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/></svg>
        Descargar Excel
      </button>
    </div>`;
  }

  for (const t of tabsToRender) {
    const canEdit = isNew ? true : canRoleEditTab(t);
    const dis = canEdit ? '' : 'disabled';

    if (isNew) {
      const numero = { m1: 'M1', m2: 'M2', m3: 'M3', contratista: 'CONT', revision: 'REV' }[t];
      html += `<div class="momento-divider">
        <span class="momento-divider-num">${esc(numero)}</span>
        <span class="momento-divider-label">${esc(MOMENTOS_LABEL_MODAL[t])}</span>
      </div>`;
    }

    if (!isNew && !canEdit) {
      html += `<div class="form-banner locked">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="1"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>
        <div>Tu rol <strong>${esc(ROLE_INFO[state.role].label)}</strong> no puede editar esta sección. Solo lectura.</div>
      </div>`;
    }

  if (t === 'm1') {
    html += `
      <div class="form-banner">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
        <div>Datos básicos del primer momento, asignados por el equipo logístico al crear el requerimiento.</div>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">Subsecretaría <span class="required">*</span></label>
          <select class="form-select" data-field="m1.subsec" ${dis}>
            <option value="">Seleccionar...</option>
            ${CATALOGOS.subsecretarias.map(s => `<option ${s === r.m1.subsec ? 'selected' : ''}>${esc(s)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Enlace logístico responsable <span class="required">*</span></label>
          <select class="form-select" data-field="m1.enlace" ${dis}>
            <option value="">Seleccionar...</option>
            ${CATALOGOS.enlaces.map(e => `<option ${e === r.m1.enlace ? 'selected' : ''}>${esc(e)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Fecha de elaboración</label>
          <input type="date" class="form-input" data-field="m1.fechaElab" value="${esc(r.m1.fechaElab)}" ${dis}>
        </div>
        <div class="form-group">
          <label class="form-label">Tipo de recurso <span class="required">*</span> <span class="hint">(ORD / PP)</span></label>
          <select class="form-select" data-field="m3.tipoRec" ${dis}>
            ${CATALOGOS.tiposRecurso.map(tr => `<option ${tr === r.m3.tipoRec ? 'selected' : ''}>${esc(tr)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">OP (asignado automáticamente)</label>
          <input type="text" class="form-input mono" value="${esc(r.op)}" disabled>
        </div>
      </div>
    `;
  }

  if (t === 'm2') {
    migrarItems(r);
    html += `
      <div class="form-banner">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
        <div>Datos del evento y requerimiento del tarifario. El sistema selecciona automáticamente el código y precio según la cantidad ingresada.</div>
      </div>

      <div class="section-divider">
        <div class="section-divider-title">Datos del evento</div>
        <div class="section-divider-sub">Información logística general</div>
      </div>

      <div class="form-grid">
        <div class="form-group span-2">
          <label class="form-label">Nombre del evento <span class="required">*</span></label>
          <input type="text" class="form-input" data-field="m2.evento" value="${esc(r.m2.evento)}" ${dis}>
        </div>
        <div class="form-group">
          <label class="form-label">Estado del trámite</label>
          <select class="form-select" data-field="estadoTramite" ${dis}>
            ${CATALOGOS.estadosTramite.map(e => `<option ${e === r.estadoTramite ? 'selected' : ''}>${esc(e)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group span-2">
          <label class="form-label">Instancia / Beneficiario <span class="hint">(Col J)</span></label>
          <input type="text" class="form-input" data-field="m2.instancia" value="${esc(r.m2.instancia || '')}" placeholder="Ej: Mesa Comunitaria, JAL, Organización beneficiaria..." ${dis}>
        </div>
        <div class="form-group">
          <label class="form-label">Código proyecto <span class="required">*</span></label>
          <select class="form-select" data-field="m2.proyecto" ${dis} id="selProyecto">
            <option value="">Seleccionar...</option>
            ${PROYECTOS.map(p => `<option value="${esc(p.codigo)}" ${p.codigo === r.m2.proyecto ? 'selected' : ''}>${esc(p.codigo)} — ${esc(p.nombre)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group span-2">
          <label class="form-label">Nombre proyecto <span class="hint">(auto)</span></label>
          <input type="text" class="form-input" id="nombreProyAuto" value="${esc(PROYECTOS.find(p => p.codigo === r.m2.proyecto)?.nombre || '')}" disabled>
        </div>
        <div class="form-group">
          <label class="form-label">Comuna</label>
          <select class="form-select" data-field="m2.comuna" ${dis}>
            ${CATALOGOS.comunas.map(c => `<option ${c === r.m2.comuna ? 'selected' : ''}>${esc(c)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group span-2">
          <label class="form-label">Actividad MGA <span class="hint">(según el proyecto)</span></label>
          <select class="form-select" data-field="m2.mga" id="selMGA" ${dis}>
            ${opcionesMGA(r.m2.proyecto, r.m2.mga)}
          </select>
        </div>
        <div class="form-group span-2">
          <label class="form-label">Actividad detallada MGA <span class="hint">(según la MGA)</span></label>
          <select class="form-select" data-field="m2.actDet" id="selDet" ${dis}>
            ${opcionesDetalladas(r.m2.proyecto, r.m2.mga, r.m2.actDet)}
          </select>
        </div>
      </div>

      <div class="section-divider">
        <div class="section-divider-title">Fecha de remisión al operador</div>
        <div class="section-divider-sub">Columnas E, F, G del Excel — se diligencian por separado para mantener fidelidad con la matriz original</div>
      </div>

      <div class="form-grid cols-3">
        <div class="form-group">
          <label class="form-label">Día <span class="hint">(Col E)</span></label>
          <input type="number" class="form-input mono" data-field="m2.remDia" min="1" max="31" value="${esc(r.m2.remDia || '')}" placeholder="dd" ${dis}>
        </div>
        <div class="form-group">
          <label class="form-label">Mes <span class="hint">(Col F)</span></label>
          <input type="number" class="form-input mono" data-field="m2.remMes" min="1" max="12" value="${esc(r.m2.remMes || '')}" placeholder="mm" ${dis}>
        </div>
        <div class="form-group">
          <label class="form-label">Año <span class="hint">(Col G)</span></label>
          <input type="number" class="form-input mono" data-field="m2.remAno" min="2024" max="2030" value="${esc(r.m2.remAno || '')}" placeholder="aaaa" ${dis}>
        </div>
      </div>

      <div class="section-divider">
        <div class="section-divider-title">Logística de entrega</div>
        <div class="section-divider-sub">Fechas, lugar y contactos</div>
      </div>

      <div class="form-grid cols-3">
        <div class="form-group">
          <label class="form-label">Fecha entrega <span class="required">*</span></label>
          <input type="date" class="form-input" data-field="m2.fechaEntrega" value="${esc(r.m2.fechaEntrega)}" ${dis}>
        </div>
        <div class="form-group">
          <label class="form-label">Hora entrega</label>
          <input type="time" class="form-input" data-field="m2.horaEntrega" value="${esc(r.m2.horaEntrega || '08:00')}" ${dis}>
        </div>
        <div class="form-group">
          <label class="form-label">Fecha montaje</label>
          <input type="date" class="form-input" data-field="m2.fechaMontaje" value="${esc(r.m2.fechaMontaje || r.m2.fechaEntrega)}" ${dis}>
        </div>
        <div class="form-group">
          <label class="form-label">Fecha desmontaje</label>
          <input type="date" class="form-input" data-field="m2.fechaDesmontaje" value="${esc(r.m2.fechaDesmontaje || r.m2.fechaEntrega)}" ${dis}>
        </div>
        <div class="form-group span-3">
          <label class="form-label">Lugar del evento (dirección)</label>
          <input type="text" class="form-input" data-field="m2.lugar" value="${esc(r.m2.lugar)}" ${dis}>
        </div>
        <div class="form-group">
          <label class="form-label">Persona que recibe</label>
          <input type="text" class="form-input" data-field="m2.persona" value="${esc(r.m2.persona)}" ${dis}>
        </div>
        <div class="form-group">
          <label class="form-label">Contacto</label>
          <input type="text" class="form-input mono" data-field="m2.contacto" value="${esc(r.m2.contacto)}" ${dis}>
        </div>
      </div>

      <div class="section-divider">
        <div class="section-divider-title">Ítems del requerimiento</div>
        <div class="section-divider-sub">Agrega uno o más ítems del tarifario. Escribe la descripción (autocompleta) o el código directo · la cantidad admite fórmulas tipo Excel (=21*3)</div>
      </div>

      <datalist id="tarifDescList">
        ${[...new Set(TARIFARIO.map(t => t.desc))].map(d => `<option value="${esc(d)}"></option>`).join('')}
      </datalist>
      <div id="itemsContainer">
        ${r.items.map((it, i) => renderItemCard(it, i, dis, r.items.length)).join('')}
      </div>
      ${dis ? '' : `<button type="button" class="btn-secondary" id="btnAgregarItem" style="margin-top:8px;">+ Agregar ítem</button>`}
    `;
  }

  if (t === 'm3') {
    html += `
      <div class="form-banner">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
        <div>Cálculos financieros derivados del momento 2. Los valores se recalculan automáticamente en el servidor antes de persistir.</div>
      </div>

      <div class="section-divider">
        <div class="section-divider-title">Identificador financiero</div>
        <div class="section-divider-sub">Columna P del Excel — asignado por el rol financiero</div>
      </div>

      <div class="form-grid cols-3">
        <div class="form-group span-3">
          <label class="form-label">ID financiero <span class="hint">(auto: Proyecto · cód. MGA · actividad detallada)</span></label>
          <input type="text" class="form-input mono" id="idFinancieroAuto" value="${esc(componerIdFinanciero(r))}" disabled>
        </div>
        <div class="form-group">
          <label class="form-label">Tipo de recurso <span class="hint">(Col AZ · definido en M1)</span></label>
          <input type="text" class="form-input mono" value="${esc(r.m3.tipoRec || 'ORD')}" disabled>
        </div>
        <div class="form-group">
          <label class="form-label">Estado del requerimiento <span class="hint">(Col AT)</span></label>
          <select class="form-select" data-field="m3.estadoReq" ${dis}>
            ${CATALOGOS.estadosReq.map(e => `<option ${e === r.m3.estadoReq ? 'selected' : ''}>${esc(e)}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="section-divider">
        <div class="section-divider-title">Desglose financiero por ítem</div>
        <div class="section-divider-sub">Se calcula automáticamente desde los ítems del momento 2 · Administración antes del IVA · IVA solo sobre el subtotal</div>
      </div>

      <div id="m3CalcPanel">${renderM3CalcInner(r)}</div>

      <div class="section-divider">
        <div class="section-divider-title">Proveedor y facturación</div>
      </div>

      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">Proveedor aprobado <span class="hint">(Col AN)</span></label>
          <input type="text" class="form-input" data-field="m3.proveedor" value="${esc(r.m3.proveedor)}" ${dis}>
        </div>
        <div class="form-group">
          <label class="form-label">NIT <span class="hint">(Col AO)</span></label>
          <input type="text" class="form-input mono" data-field="m3.nit" value="${esc(r.m3.nit)}" ${dis}>
        </div>
        <div class="form-group">
          <label class="form-label">Número de factura <span class="hint">(Col AP)</span></label>
          <input type="text" class="form-input mono" data-field="m3.factura" value="${esc(r.m3.factura)}" ${dis}>
        </div>
        <div class="form-group">
          <label class="form-label">Comprobante de egreso <span class="hint">(Col AQ)</span></label>
          <input type="text" class="form-input mono" data-field="m3.compEgreso" value="${esc(r.m3.compEgreso || '')}" ${dis}>
        </div>
      </div>

      <div class="section-divider">
        <div class="section-divider-title">Novedades y conciliación</div>
        <div class="section-divider-sub">Reporte operativo + estados de conciliación y pago</div>
      </div>

      <div class="form-grid">
        <div class="form-group span-2">
          <label class="form-label">Reporte de novedades <span class="hint">(Col AS)</span></label>
          <textarea class="form-textarea" data-field="m3.reporteNov" placeholder="Cualquier novedad ocurrida durante la ejecución..." ${dis}>${esc(r.m3.reporteNov || '')}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Estado de conciliación <span class="hint">(Col AW)</span></label>
          <select class="form-select" data-field="m3.conciliacion" ${dis}>
            ${CATALOGOS.estadosEvidencia.map(e => `<option ${e === r.m3.conciliacion ? 'selected' : ''}>${esc(e)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Estado facturación honorarios <span class="hint">(Col AX)</span></label>
          <select class="form-select" data-field="m3.estadoFactHon" ${dis}>
            ${CATALOGOS.estadosEvidencia.map(e => `<option ${e === r.m3.estadoFactHon ? 'selected' : ''}>${esc(e)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label"># Pago honorarios <span class="hint">(Col AY)</span></label>
          <input type="text" class="form-input mono" data-field="m3.pagoHon" value="${esc(r.m3.pagoHon || '')}" placeholder="N° de comprobante de pago" ${dis}>
        </div>
      </div>
    `;
  }

  if (t === 'contratista') {
    html += `
      <div class="form-banner">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
        <div>Sección exclusiva del contratista (Metro Parques) — Presentación 462. Solo indica el mes; no se requiere adjuntar archivos.</div>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">Mes de presentación (Form. 462) <span class="required">*</span></label>
          <select class="form-select" data-field="contratista.pres462" ${dis}>
            <option value="">Seleccionar mes…</option>
            ${CATALOGOS.meses.map(m => `<option ${m === (r.contratista?.pres462 || '') ? 'selected' : ''}>${esc(m)}</option>`).join('')}
          </select>
        </div>
      </div>
    `;
  }

  if (t === 'revision') {
    const docs = [
      'OP PDF', 'Correo OP', 'Cotización 1', 'Cotización 2', 'Cotización 3',
      'Gestión solicitud de cotización', 'Justificación selección proveedor',
      'Correo verificación cotizaciones', 'Soporte respuesta proveedores',
      'Informe Plaza', 'Lista de chequeo', 'Correo verificación informe'
    ];
    html += `
      <div class="form-banner">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
        <div>Carga de soportes documentales. Los archivos se almacenan en Firebase Storage; aquí solo se referencia la URL.</div>
      </div>
      <div class="form-grid">
        ${docs.map(d => `
          <div class="form-group">
            <label class="form-label">${esc(d)}</label>
            <div style="display: flex; gap: 8px;">
              <input type="text" class="form-input mono" placeholder="URL del archivo..." style="flex: 1;" ${dis}>
              <button class="btn-secondary" ${!canEdit ? 'disabled' : ''} style="padding: 9px 12px;">
                <svg class="btn-icon" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/></svg>
              </button>
            </div>
          </div>
        `).join('')}
        <div class="form-group span-2">
          <label class="form-label">Observaciones de revisión</label>
          <textarea class="form-textarea" ${dis}></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Estado revisión</label>
          <select class="form-select" ${dis}>
            ${CATALOGOS.estadosEvidencia.map(e => `<option>${esc(e)}</option>`).join('')}
          </select>
        </div>
      </div>
    `;
  }

  } // fin for tabsToRender

  document.getElementById('modalBody').innerHTML = html;

  const anyEditable = isNew ? true : canRoleEditTab(state.activeTab);
  document.getElementById('modalFooterInfo').textContent = isNew
    ? 'Al guardar, el sistema asignará un OP único y validará los cálculos en el servidor.'
    : anyEditable
      ? 'Los cálculos se recalculan en el servidor antes de guardar.'
      : 'Solo lectura — tu rol no puede editar esta sección.';
  document.getElementById('modalSave').style.display = anyEditable ? '' : 'none';
  document.getElementById('modalSave').textContent = isNew ? 'Crear requerimiento' : 'Guardar cambios';

  // Eliminar: disponible solo al editar un requerimiento existente (roles gestores)
  const puedeEliminar = !isNew && ROLES_TOTALES.includes(state.role);
  const btnDelete = document.getElementById('modalDelete');
  btnDelete.style.display = puedeEliminar ? '' : 'none';
  btnDelete.disabled = false;
  btnDelete.textContent = 'Eliminar';

  // Conectar el autocompletado del tarifario si M2 fue renderizado y es editable
  if (tabsToRender.includes('m2') && (isNew || canRoleEditTab('m2'))) { attachItemsEditor(); attachProyectoSelect(); attachMgaSelect(); }

  // Conectar la edición de IVA/administración por ítem en M3 (financiero, al editar)
  if (tabsToRender.includes('m3') && !isNew && canRoleEditTab('m3')) attachM3Editor();

  // Conectar la carga de Excel en modo creación
  if (isNew) attachExcelUpload();

  // Botón "Descargar": exporta todo el requerimiento en edición a Excel
  const btnDesc = document.getElementById('btnDescargarReq');
  if (btnDesc) btnDesc.addEventListener('click', () => descargarRequerimientoExcel(state.editingReq));
}

// Al elegir el código de proyecto: muestra su nombre y repuebla las actividades MGA
function attachProyectoSelect() {
  const sel = document.getElementById('selProyecto');
  const nombre = document.getElementById('nombreProyAuto');
  if (!sel) return;
  sel.addEventListener('change', () => {
    const p = PROYECTOS.find(x => x.codigo === sel.value);
    if (nombre) nombre.value = p ? p.nombre : '';
    // Repoblar MGA del proyecto y limpiar MGA + actividad detallada anteriores
    const selMGA = document.getElementById('selMGA');
    if (selMGA) {
      selMGA.innerHTML = opcionesMGA(sel.value, '');
      if (state.editingReq) setReqPath(state.editingReq, 'm2.mga', '');
    }
    const selDet = document.getElementById('selDet');
    if (selDet) {
      selDet.innerHTML = opcionesDetalladas(sel.value, '', '');
      if (state.editingReq) setReqPath(state.editingReq, 'm2.actDet', '');
    }
    refreshIdFinanciero();
  });
}

// Al elegir la actividad MGA, repuebla las actividades detalladas correspondientes
function attachMgaSelect() {
  const selMGA = document.getElementById('selMGA');
  const selDet = document.getElementById('selDet');
  if (!selMGA || !selDet) return;
  selMGA.addEventListener('change', () => {
    const proyecto = document.getElementById('selProyecto')?.value || '';
    selDet.innerHTML = opcionesDetalladas(proyecto, selMGA.value, '');
    // Refleja en el modelo la selección (incluye autoselección si hay una sola)
    if (state.editingReq) setReqPath(state.editingReq, 'm2.actDet', selDet.value);
    refreshIdFinanciero();
  });
  // Al cambiar la actividad detallada, recomponer el ID financiero
  if (selDet) selDet.addEventListener('change', refreshIdFinanciero);
}

// Permite al financiero ajustar IVA y administración por ítem desde M3 (al editar)
function attachM3Editor() {
  const panel = document.getElementById('m3CalcPanel');
  if (!panel || !state.editingReq) return;
  const r = state.editingReq;
  panel.addEventListener('change', e => {
    const el = e.target;
    const idx = el.dataset && el.dataset.idx;
    if (idx == null) return;
    const it = r.items[Number(idx)];
    if (!it) return;
    if (el.classList.contains('m3-admin')) it.adminPct = (Number(el.value) || 0) / 100;
    else if (el.classList.contains('m3-tarifa')) it.tarifaImp = Number(el.value) || 0;
    else return;
    refreshM3Calc();
  });
}

/* ============================================================
   AUTOCOMPLETADO TARIFARIO
   ============================================================ */

// Evalúa una expresión aritmética tipo Excel (=21*3, 15+9, (10+5)*2)
// Solo permite dígitos y operadores: es seguro, no ejecuta código arbitrario.
function evaluarCantidad(raw) {
  let expr = String(raw == null ? '' : raw).trim();
  if (expr.startsWith('=')) expr = expr.slice(1);
  expr = expr.trim();
  if (expr === '') return null;
  // Validación estricta: solo números, operadores aritméticos, punto, paréntesis y espacios
  if (!/^[0-9+\-*/.()\s]+$/.test(expr)) return null;
  try {
    const result = Function('"use strict"; return (' + expr + ')')();
    if (typeof result !== 'number' || !isFinite(result)) return null;
    return Math.round(result * 100) / 100;
  } catch (e) {
    return null;
  }
}

// Parsea números tolerando separadores de miles/decimales (es-CO o en-US):
// "3.546,45" y "3,546.45" → 3546.45. Toma el último '.' o ',' como decimal.
function parseNumCO(v) {
  if (typeof v === 'number') return v;
  const s = String(v == null ? '' : v).trim().replace(/[^\d.,-]/g, '');
  if (!s) return 0;
  const dec = Math.max(s.lastIndexOf(','), s.lastIndexOf('.'));
  if (dec === -1) return Number(s) || 0;
  const ent = s.slice(0, dec).replace(/[.,]/g, '');
  const frac = s.slice(dec + 1).replace(/[.,]/g, '');
  return Number(`${ent}.${frac}`) || 0;
}

// Editor de ítems del requerimiento (M2). Maneja varios ítems con autocompletado
// del tarifario (por descripción o código), agregar/quitar y recálculo en vivo.
function attachItemsEditor() {
  const cont = document.getElementById('itemsContainer');
  if (!cont || !state.editingReq) return;
  const r = state.editingReq;

  function aplicarPorDesc(it) {
    const cands = TARIFARIO.filter(t => t.desc.toLowerCase() === String(it.desc || '').toLowerCase());
    if (!cands.length) return;
    const m = cands.find(t => it.cantidad >= t.min && it.cantidad <= t.max) || cands[0];
    it.tarifario = m.id; it.medida = m.medida; it.precio = m.precio; it.caracteristicas = m.carac || '';
  }
  function aplicarPorCodigo(it) {
    const m = TARIFARIO.find(t => t.id.toUpperCase() === String(it.tarifario || '').trim().toUpperCase());
    if (!m) return;
    if (!it.desc) it.desc = m.desc;
    it.medida = m.medida; it.precio = m.precio; it.caracteristicas = m.carac || '';
  }
  function rerender() {
    cont.innerHTML = r.items.map((it, i) => renderItemCard(it, i, '', r.items.length)).join('');
    refreshM3Calc();
  }

  const handle = e => {
    const el = e.target;
    const idx = el.dataset && el.dataset.idx;
    if (idx == null) return;
    const it = r.items[Number(idx)];
    if (!it) return;
    const commit = e.type === 'change';
    if (el.classList.contains('item-desc')) {
      it.desc = el.value;
      if (commit) { aplicarPorDesc(it); rerender(); return; }
    } else if (el.classList.contains('item-cantidad')) {
      const n = String(el.value).trim().startsWith('=') ? (evaluarCantidad(el.value) ?? 0) : parseNumCO(el.value);
      it.cantidad = n;
      if (commit) { if (String(el.value).trim().startsWith('=')) el.value = n; aplicarPorDesc(it); rerender(); return; }
    } else if (el.classList.contains('item-codigo')) {
      it.tarifario = el.value;
      if (commit) { aplicarPorCodigo(it); rerender(); return; }
    } else if (el.classList.contains('item-medida')) {
      it.medida = el.value;
    } else if (el.classList.contains('item-carac')) {
      it.caracteristicas = el.value;
    } else if (el.classList.contains('item-precio')) {
      it.precio = parseNumCO(el.value);
    } else if (el.classList.contains('item-tarifa')) {
      it.tarifaImp = Number(el.value) || 0;
    } else if (el.classList.contains('item-admin')) {
      it.adminPct = (Number(el.value) || 0) / 100;
    } else if (el.classList.contains('item-obs')) {
      it.obs = el.value;
    } else if (el.classList.contains('item-evspc')) {
      it.evSpc = el.value;
    } else if (el.classList.contains('item-evoper')) {
      it.evOper = el.value;
    }
    refreshM3Calc();
  };
  cont.addEventListener('input', handle);
  cont.addEventListener('change', handle);
  cont.addEventListener('click', e => {
    const rm = e.target.closest('.item-remove');
    if (!rm || r.items.length <= 1) return;
    r.items.splice(Number(rm.dataset.idx), 1);
    rerender();
  });

  const btn = document.getElementById('btnAgregarItem');
  if (btn) btn.addEventListener('click', () => { r.items.push(nuevoItem()); rerender(); });
}

/* ============================================================
   VISTA: TARIFARIO
   ============================================================ */

function renderTarifario() {
  const filter = state.tarifarioFilter.trim();
  const fNorm = filter.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Si hay texto en el buscador, se busca cross-categoría; si no, se respeta la categoría seleccionada
  let items;
  if (filter) {
    items = TARIFARIO.filter(t => {
      const hay = (t.id + ' ' + t.desc + ' ' + t.carac + ' ' + t.medida).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return hay.includes(fNorm);
    });
  } else {
    items = TARIFARIO.filter(t => t.cat === state.tarifarioCategoria);
  }
  const cat = CATEGORIAS.find(c => c.num === state.tarifarioCategoria);

  return `
    <div class="page-header">
      <h1>Tarifario del Distrito</h1>
      <p>Vigencia desde el 13 de abril de 2026 · Versión 3-2026 · 1.004 ítems en 10 categorías · Fuente única de verdad para los precios de referencia.</p>
    </div>

    <div class="table-toolbar">
      <div class="search-wrap">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        <input type="text" placeholder="Buscar por código, descripción, características..." id="tarifarioSearchInput" value="${esc(state.tarifarioFilter)}">
      </div>
      ${filter ? `<button class="btn-secondary" id="btnTarifarioClear">
        <svg class="btn-icon" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
        Limpiar
      </button>` : ''}
      <button class="btn-secondary" id="btnTarifarioExport" style="margin-left: auto;">
        <svg class="btn-icon" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/></svg>
        Exportar Excel
      </button>
    </div>

    ${filter ? `
      <div class="search-results-banner">
        <strong>${items.length}</strong> resultado${items.length === 1 ? '' : 's'} encontrado${items.length === 1 ? '' : 's'} en todo el tarifario para "<em>${esc(filter)}</em>"
      </div>
    ` : `
      <div class="cat-pills">
        ${CATEGORIAS.map(c => `
          <button class="cat-pill ${c.num === state.tarifarioCategoria ? 'active' : ''}" data-cat="${c.num}">
            ${esc(c.name)}<span class="cat-pill-count">${c.count}</span>
          </button>
        `).join('')}
      </div>
    `}

    <div class="table-wrap">
      <div class="table-scroll">
        <table class="data-table">
          <thead>
            <tr>
              <th>Código</th>
              ${filter ? '<th>Categoría</th>' : ''}
              <th>Descripción</th>
              <th>Características</th>
              <th style="text-align:right;">Rango min</th>
              <th style="text-align:right;">Rango max</th>
              <th>Medida</th>
              <th style="text-align:right;">Precio (sin IVA)</th>
            </tr>
          </thead>
          <tbody>
            ${items.length === 0 ? `<tr><td colspan="${filter ? 8 : 7}" style="text-align:center; padding: 48px; color: var(--color-text-tertiary);">${filter ? 'Sin resultados para esa búsqueda.' : 'No hay ítems en esta categoría en la muestra demo.'}</td></tr>` :
            items.map(t => `
              <tr>
                <td class="cell-mono">${esc(t.id)}</td>
                ${filter ? `<td><span class="tarifario-cat-pill">${esc(t.catName)}</span></td>` : ''}
                <td><strong>${esc(t.desc)}</strong></td>
                <td class="cell-truncate" style="max-width: 320px;" title="${esc(t.carac)}">${esc(t.carac)}</td>
                <td class="cell-number">${fmt.num(t.min)}</td>
                <td class="cell-number">${fmt.num(t.max)}</td>
                <td>${esc(t.medida)}</td>
                <td class="cell-number">${fmt.cop(t.precio)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div class="table-footer">
        <div>${filter
          ? `Mostrando <strong>${items.length}</strong> resultados de la búsqueda.`
          : `Mostrando muestra demo de <strong>${items.length}</strong> ítems de la categoría <strong>${esc(cat?.name)}</strong> (${cat?.count} en producción).`
        }</div>
      </div>
    </div>
  `;
}

function attachTarifario() {
  document.querySelectorAll('.cat-pill').forEach(p => {
    p.addEventListener('click', () => {
      state.tarifarioCategoria = Number(p.dataset.cat);
      render();
    });
  });
  const inp = document.getElementById('tarifarioSearchInput');
  if (inp) {
    inp.addEventListener('input', e => {
      state.tarifarioFilter = e.target.value;
      render();
      // Restaurar foco y posición del cursor tras el re-render
      const newInp = document.getElementById('tarifarioSearchInput');
      if (newInp) {
        newInp.focus();
        newInp.setSelectionRange(newInp.value.length, newInp.value.length);
      }
    });
  }
  const btnClear = document.getElementById('btnTarifarioClear');
  if (btnClear) btnClear.addEventListener('click', () => {
    state.tarifarioFilter = '';
    render();
  });
  const btnExp = document.getElementById('btnTarifarioExport');
  if (btnExp) btnExp.addEventListener('click', exportTarifarioExcel);
}

/* ============================================================
   VISTA: REPORTES
   ============================================================ */

function renderReportes() {
  // Por proyecto
  const porProyecto = {};
  REQUERIMIENTOS.forEach(r => {
    const p = r.m2.proyecto;
    if (!porProyecto[p]) porProyecto[p] = { ejecutado: 0, comprometido: 0, count: 0 };
    porProyecto[p].comprometido += r.m3.valorEjec;
    porProyecto[p].count++;
    if (r.estadoTramite === 'Ejecutado') porProyecto[p].ejecutado += r.m3.valorEjec;
  });

  const proyectosOrdenados = Object.entries(porProyecto).sort((a, b) => b[1].comprometido - a[1].comprometido);

  // Por comuna
  const porComuna = {};
  REQUERIMIENTOS.forEach(r => {
    porComuna[r.m2.comuna] = (porComuna[r.m2.comuna] || 0) + r.m3.valorEjec;
  });
  const comunaMax = Math.max(...Object.values(porComuna));

  return `
    <div class="page-header">
      <h1>Reportes y consolidados</h1>
      <p>Vistas agregadas calculadas en vivo desde los requerimientos. Equivalentes a las hojas TABLAS, RESUMEN, PRESUPUESTO SUB SEC e INFORMES.</p>
    </div>

    <div class="table-toolbar" style="margin-bottom: 16px;">
      <button class="btn-secondary" id="btnReportesExport" style="margin-left: auto;">
        <svg class="btn-icon" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/></svg>
        Exportar todos los reportes a Excel
      </button>
    </div>

    <div class="panel" style="margin-bottom: 24px;">
      <div class="panel-header">
        <div class="panel-title">Ejecución por proyecto</div>
      </div>
      <table class="data-table" style="margin: -16px;">
        <thead>
          <tr>
            <th>Código</th>
            <th>Proyecto</th>
            <th>Subsec.</th>
            <th style="text-align:right;">Req.</th>
            <th style="text-align:right;">Comprometido</th>
            <th style="text-align:right;">Ejecutado</th>
            <th style="text-align:right;">% Ejec.</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${proyectosOrdenados.map(([code, data]) => {
            const proy = PROYECTOS.find(p => p.codigo === code);
            const pct = data.ejecutado / data.comprometido;
            return `
              <tr>
                <td class="cell-mono">${esc(code)}</td>
                <td class="cell-truncate">${esc(proy?.nombre || '—')}</td>
                <td>${esc(proy?.subsec || '—')}</td>
                <td class="cell-number">${data.count}</td>
                <td class="cell-number">${fmt.cop(data.comprometido)}</td>
                <td class="cell-number">${fmt.cop(data.ejecutado)}</td>
                <td class="cell-number">${fmt.pct(pct)}</td>
                <td style="width: 140px;">
                  <div class="bar-track" style="height: 6px;"><div class="bar-fill" style="width: ${(pct * 100).toFixed(0)}%"></div></div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>

    <div class="dash-grid">
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">Distribución por comuna</div>
        </div>
        <div class="bar-chart">
          ${Object.entries(porComuna).sort((a,b)=>b[1]-a[1]).slice(0, 8).map(([c, val]) => `
            <div class="bar-row">
              <div class="bar-label">Comuna ${esc(c)}</div>
              <div class="bar-track">
                <div class="bar-fill" style="width: ${(val/comunaMax*100).toFixed(0)}%"></div>
              </div>
              <div class="bar-value">${fmt.copShort(val)}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">Seguimiento evidencias</div>
        </div>
        ${(() => {
          const counts = { SPC_OK: 0, SPC_PEND: 0, OPER_OK: 0, OPER_PEND: 0 };
          REQUERIMIENTOS.forEach(r => {
            if (r.m2.evSpc === 'OK') counts.SPC_OK++;
            else counts.SPC_PEND++;
            if (r.m2.evOper === 'OK') counts.OPER_OK++;
            else counts.OPER_PEND++;
          });
          return `
            <div class="bar-chart">
              <div class="bar-row">
                <div class="bar-label">SPC · OK</div>
                <div class="bar-track"><div class="bar-fill" style="width: ${(counts.SPC_OK/REQUERIMIENTOS.length*100).toFixed(0)}%"></div></div>
                <div class="bar-value">${counts.SPC_OK} / ${REQUERIMIENTOS.length}</div>
              </div>
              <div class="bar-row">
                <div class="bar-label">SPC · Pendiente</div>
                <div class="bar-track"><div class="bar-fill gold" style="width: ${(counts.SPC_PEND/REQUERIMIENTOS.length*100).toFixed(0)}%"></div></div>
                <div class="bar-value">${counts.SPC_PEND} / ${REQUERIMIENTOS.length}</div>
              </div>
              <div class="bar-row">
                <div class="bar-label">Operador · OK</div>
                <div class="bar-track"><div class="bar-fill" style="width: ${(counts.OPER_OK/REQUERIMIENTOS.length*100).toFixed(0)}%"></div></div>
                <div class="bar-value">${counts.OPER_OK} / ${REQUERIMIENTOS.length}</div>
              </div>
              <div class="bar-row">
                <div class="bar-label">Operador · Pendiente</div>
                <div class="bar-track"><div class="bar-fill gold" style="width: ${(counts.OPER_PEND/REQUERIMIENTOS.length*100).toFixed(0)}%"></div></div>
                <div class="bar-value">${counts.OPER_PEND} / ${REQUERIMIENTOS.length}</div>
              </div>
            </div>
          `;
        })()}
      </div>
    </div>
  `;
}

/* ============================================================
   VISTA: AUDITORÍA
   ============================================================ */

function renderAuditoria() {
  return `
    <div class="page-header">
      <h1>Auditoría del sistema</h1>
      <p>Registro inmutable de todas las modificaciones — colección <code style="font-family: var(--font-mono); font-size: 12px; background: var(--color-surface-alt); padding: 2px 6px; border-radius: 4px;">auditoria/</code> con retención 5 años (MIPG).</p>
    </div>

    <div class="table-toolbar">
      <div class="search-wrap">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        <input type="text" placeholder="Buscar por usuario, OP, acción...">
      </div>
      <select class="filter-select">
        <option>Todos los usuarios</option>
        <option>Daniel M.</option>
        <option>Catalina R.</option>
        <option>Carlos H.</option>
      </select>
      <select class="filter-select">
        <option>Últimos 7 días</option>
        <option>Últimos 30 días</option>
        <option>Este año</option>
      </select>
      <button class="btn-secondary" style="margin-left: auto;">
        <svg class="btn-icon" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/></svg>
        Exportar log
      </button>
    </div>

    <div class="panel">
      <div class="timeline">
        ${AUDITORIA.map(a => `
          <div class="timeline-item">
            <div class="timeline-time">${esc(a.ts)}</div>
            <div class="timeline-content">
              <div class="timeline-action">
                <span class="timeline-user">
                  <span class="user-avatar" style="width: 16px; height: 16px; font-size: 8px;">${esc(a.user.substring(0, 2).toUpperCase())}</span>
                  ${esc(a.user)}
                </span>
                <span style="margin-left: 4px;">${esc(a.action)}</span>
              </div>
              <div class="timeline-details">${esc(a.details)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function attachReportes() {
  const btn = document.getElementById('btnReportesExport');
  if (btn) btn.addEventListener('click', exportReportesExcel);
}

/* ============================================================
   EXPORTACIÓN A EXCEL CON FORMATO PROFESIONAL
   ============================================================ */

// Paleta usada en el Excel (consistente con la UI)
const XL = {
  accent:    'FF1F3A30',  // verde institucional
  accentSub: 'FF2D5546',
  gold:      'FFA8842D',
  goldSoft:  'FFF5EFDC',
  surface:   'FFFFFFFF',
  surfaceAlt:'FFFAFAF7',
  border:    'FFE5E3DC',
  text:      'FF1A1A17',
  textSec:   'FF5A5A55',
  textTer:   'FF8A8A82'
};

// Mapeo de cada columna a su valor RAW (no formateado) para Excel
function getRawValueForExport(c, r) {
  const toDate = s => s ? new Date(s + 'T12:00:00') : null;
  const rawMap = {
    op: r.op,
    subsec: r.m1.subsec,
    enlace: r.m1.enlace,
    fechaElab: toDate(r.m1.fechaElab),
    remDia: r.m2.remDia ? Number(r.m2.remDia) : null,
    remMes: r.m2.remMes ? Number(r.m2.remMes) : null,
    remAno: r.m2.remAno ? Number(r.m2.remAno) : null,
    estadoTramite: r.estadoTramite,
    evento: r.m2.evento,
    instancia: r.m2.instancia || '',
    nombreProy: PROYECTOS.find(p => p.codigo === r.m2.proyecto)?.nombre || '',
    proyecto: r.m2.proyecto,
    comuna: r.m2.comuna,
    mga: r.m2.mga,
    actDet: r.m2.actDet,
    idInterno: r.m3.idInterno || '',
    lugar: r.m2.lugar,
    fechaEntrega: toDate(r.m2.fechaEntrega),
    horaEntrega: r.m2.horaEntrega || '',
    fechaMontaje: toDate(r.m2.fechaMontaje || r.m2.fechaEntrega),
    fechaDesmontaje: toDate(r.m2.fechaDesmontaje || r.m2.fechaEntrega),
    persona: r.m2.persona,
    contacto: r.m2.contacto,
    codTarif: r.m2.tarifario,
    desc: r.m2.desc,
    obs: r.m2.obs,
    medida: r.m2.medida,
    cantidad: r.m2.cantidad,
    precio: r.m3.precio,
    subtotal: r.m3.subtotal,
    administracion: r.m3.administracion || 0,
    tarifaImp: r.m3.tarifaImp,
    valorImp: r.m3.valorImp,
    totalEjec: r.m3.totalEjec,
    pctHon: r.m3.honorarios,
    ivaHon: r.m3.ivaHon,
    totalHon: r.m3.totalHon,
    gmf: r.m3.gmf,
    estampilla: r.m3.estampilla,
    valorEjec: r.m3.valorEjec,
    proveedor: r.m3.proveedor || '',
    nit: r.m3.nit || '',
    factura: r.m3.factura || '',
    compEgreso: r.m3.compEgreso || '',
    pres462: r.contratista?.pres462 || '',
    reporteNov: r.m3.reporteNov || '',
    estadoReq: r.m3.estadoReq || '',
    evSpc: r.m2.evSpc || '',
    evOper: r.m2.evOper || '',
    conciliacion: r.m3.conciliacion || '',
    estadoFactHon: r.m3.estadoFactHon || '',
    pagoHon: r.m3.pagoHon || '',
    tipoRec: r.m3.tipoRec || '',
    opPdf: r.revision?.opPdf || '',
    correoOp: r.revision?.correoOp || '',
    cotiz1: r.revision?.cotiz1 || '',
    cotiz2: r.revision?.cotiz2 || '',
    cotiz3: r.revision?.cotiz3 || '',
    gestSolCotiz: r.revision?.gestSolCotiz || '',
    justifSeleccProv: r.revision?.justifSeleccProv || '',
    correoVerifCotiz: r.revision?.correoVerifCotiz || '',
    soporteRespProv: r.revision?.soporteRespProv || '',
    informePlaza: r.revision?.informePlaza || '',
    listaChequeo: r.revision?.listaChequeo || '',
    correoVerifInf: r.revision?.correoVerifInf || '',
    obsRev: r.revision?.obsRev || '',
    estadoRev: r.revision?.estadoRev || ''
  };
  const v = rawMap[c.id];
  return (v == null || v === '') ? null : v;
}

/* ============================================================
   IMPORTACIÓN DESDE EXCEL (cargar archivo → llenar formulario)
   ============================================================ */

// Ruta de cada columna dentro del objeto requerimiento (espejo de getRawValueForExport)
const COL_PATH = {
  op: ['op'],
  subsec: ['m1','subsec'], enlace: ['m1','enlace'], fechaElab: ['m1','fechaElab'],
  remDia: ['m2','remDia'], remMes: ['m2','remMes'], remAno: ['m2','remAno'],
  estadoTramite: ['estadoTramite'],
  evento: ['m2','evento'], instancia: ['m2','instancia'],
  proyecto: ['m2','proyecto'], comuna: ['m2','comuna'], mga: ['m2','mga'], actDet: ['m2','actDet'],
  idInterno: ['m3','idInterno'],
  lugar: ['m2','lugar'], fechaEntrega: ['m2','fechaEntrega'], horaEntrega: ['m2','horaEntrega'],
  fechaMontaje: ['m2','fechaMontaje'], fechaDesmontaje: ['m2','fechaDesmontaje'],
  persona: ['m2','persona'], contacto: ['m2','contacto'],
  codTarif: ['m2','tarifario'], desc: ['m2','desc'], obs: ['m2','obs'],
  medida: ['m2','medida'], cantidad: ['m2','cantidad'],
  precio: ['m3','precio'], subtotal: ['m3','subtotal'], tarifaImp: ['m3','tarifaImp'],
  valorImp: ['m3','valorImp'], totalEjec: ['m3','totalEjec'], pctHon: ['m3','honorarios'],
  ivaHon: ['m3','ivaHon'], totalHon: ['m3','totalHon'], gmf: ['m3','gmf'],
  estampilla: ['m3','estampilla'], valorEjec: ['m3','valorEjec'],
  proveedor: ['m3','proveedor'], nit: ['m3','nit'], factura: ['m3','factura'], compEgreso: ['m3','compEgreso'],
  pres462: ['contratista','pres462'],
  reporteNov: ['m3','reporteNov'], estadoReq: ['m3','estadoReq'],
  evSpc: ['m2','evSpc'], evOper: ['m2','evOper'],
  conciliacion: ['m3','conciliacion'], estadoFactHon: ['m3','estadoFactHon'],
  pagoHon: ['m3','pagoHon'], tipoRec: ['m3','tipoRec'],
  opPdf: ['revision','opPdf'], correoOp: ['revision','correoOp'],
  cotiz1: ['revision','cotiz1'], cotiz2: ['revision','cotiz2'], cotiz3: ['revision','cotiz3'],
  gestSolCotiz: ['revision','gestSolCotiz'], justifSeleccProv: ['revision','justifSeleccProv'],
  correoVerifCotiz: ['revision','correoVerifCotiz'], soporteRespProv: ['revision','soporteRespProv'],
  informePlaza: ['revision','informePlaza'], listaChequeo: ['revision','listaChequeo'],
  correoVerifInf: ['revision','correoVerifInf'], obsRev: ['revision','obsRev'], estadoRev: ['revision','estadoRev']
};

// Coloca un valor en su ruta dentro del objeto requerimiento
function setRawValueOnReq(req, colId, value) {
  const path = COL_PATH[colId];
  if (!path) return false;
  let obj = req;
  for (let i = 0; i < path.length - 1; i++) {
    if (!obj[path[i]]) obj[path[i]] = {};
    obj = obj[path[i]];
  }
  obj[path[path.length - 1]] = value;
  return true;
}

// Sinónimos de encabezados de Excel → id de columna.
// Cubre variantes "humanas" frecuentes (p. ej. plantillas con "NOMBRE DEL EVENTO")
// que no coinciden exactamente con el label de la columna. Las claves deben estar
// normalizadas igual que norm() en parseExcelToReq: minúsculas, sin tildes,
// sin espacios ni signos de puntuación.
const HEADER_ALIASES = {
  nombredelevento: 'evento', nombreevento: 'evento',
  estadodeltramite: 'estadoTramite', estadotramite: 'estadoTramite',
  instanciabeneficiario: 'instancia', beneficiario: 'instancia',
  codigoproyecto: 'proyecto', codigodelproyecto: 'proyecto', codproyecto: 'proyecto',
  nombreproyecto: 'nombreProy', nombredelproyecto: 'nombreProy',
  actividadmga: 'mga',
  lugardelevento: 'lugar', lugar: 'lugar',
  fechadeentrega: 'fechaEntrega', fechaentrega: 'fechaEntrega',
  horadeentrega: 'horaEntrega',
  unidaddemedida: 'medida',
  descripcionrequerimiento: 'desc', descripciondelrequerimiento: 'desc',
  observaciones: 'obs', observacionrequerimiento: 'obs'
};

// Extrae texto plano de una celda ExcelJS (string, número, fórmula, rich text, fecha)
function cellText(cell) {
  let v = cell ? cell.value : null;
  if (v == null) return '';
  if (typeof v === 'object') {
    if (v instanceof Date) return v.toISOString();
    if (v.result != null) v = v.result;
    else if (v.text != null) v = v.text;
    else if (Array.isArray(v.richText)) v = v.richText.map(t => t.text).join('');
    else if (v.hyperlink) v = v.text || v.hyperlink;
    else return '';
  }
  return String(v).trim();
}

// Convierte el valor crudo de una celda al tipo que espera el formulario
function convertExcelValue(colId, raw) {
  if (raw == null) return null;
  if (typeof raw === 'object' && !(raw instanceof Date)) {
    if (raw.result != null) raw = raw.result;
    else if (raw.text != null) raw = raw.text;
    else if (Array.isArray(raw.richText)) raw = raw.richText.map(t => t.text).join('');
  }
  const dateFields = ['fechaElab','fechaEntrega','fechaMontaje','fechaDesmontaje'];
  if (dateFields.includes(colId)) {
    let d = (raw instanceof Date) ? raw : new Date(raw);
    if (isNaN(d.getTime())) return null;
    return d.toISOString().substring(0, 10);
  }
  const numFields = ['cantidad','precio','subtotal','tarifaImp','valorImp','totalEjec',
                     'pctHon','ivaHon','totalHon','gmf','estampilla','valorEjec','remDia','remMes','remAno'];
  if (numFields.includes(colId)) {
    const n = Number(String(raw).replace(/[^0-9.\-]/g, ''));
    return isNaN(n) ? null : n;
  }
  const txt = String(raw).trim();
  return txt === '' ? null : txt;
}

// Lee un archivo Excel, detecta encabezados y devuelve un requerimiento con los campos coincidentes
async function parseExcelToReq(file) {
  const buffer = await file.arrayBuffer();
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.load(buffer);
  const ws = wb.worksheets[0];
  if (!ws) throw new Error('El archivo no contiene hojas.');

  const norm = s => String(s || '').toLowerCase().normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');

  // Índices de búsqueda: por label, por id, por letra de columna
  const byLabel = {}, byId = {};
  COLUMNAS_DETALLE.forEach(c => {
    byLabel[norm(c.label)] = c.id;
    byId[norm(c.id)] = c.id;
  });

  // Detectar la fila de encabezados (la que más coincida con columnas conocidas)
  let headerRowIdx = -1, bestScore = 0, headerMap = {};
  const maxScan = Math.min(ws.rowCount || 1, 12);
  for (let r = 1; r <= maxScan; r++) {
    const row = ws.getRow(r);
    let score = 0;
    const map = {};
    row.eachCell((cell, colNumber) => {
      const txt = norm(cellText(cell));
      if (!txt) return;
      if (byLabel[txt])             { score++; map[colNumber] = byLabel[txt]; }
      else if (byId[txt])           { score++; map[colNumber] = byId[txt]; }
      else if (HEADER_ALIASES[txt]) { score++; map[colNumber] = HEADER_ALIASES[txt]; }
    });
    if (score > bestScore) { bestScore = score; headerRowIdx = r; headerMap = map; }
  }

  // Si no hubo coincidencias suficientes, mapear por posición (A→col1, B→col2, … BN)
  let usedPositional = false;
  if (bestScore < 3) {
    usedPositional = true;
    headerMap = {};
    COLUMNAS_DETALLE.forEach((c, i) => { headerMap[i + 1] = c.id; });
    headerRowIdx = 1;
  }

  // Primera fila con datos después del encabezado
  let dataRowIdx = -1;
  for (let r = headerRowIdx + 1; r <= (ws.rowCount || 0); r++) {
    const row = ws.getRow(r);
    let hasData = false;
    row.eachCell(cell => { if (cellText(cell)) hasData = true; });
    if (hasData) { dataRowIdx = r; break; }
  }
  if (dataRowIdx === -1) throw new Error('No se encontró ninguna fila con datos debajo de los encabezados.');

  // Construir el requerimiento
  const req = newEmptyReq();
  const dataRow = ws.getRow(dataRowIdx);
  let filled = 0;
  const camposLlenos = [];
  Object.entries(headerMap).forEach(([colNum, colId]) => {
    const cell = dataRow.getCell(Number(colNum));
    if (cell.value == null || cell.value === '') return;
    const val = convertExcelValue(colId, cell.value);
    if (val == null || val === '') return;
    if (setRawValueOnReq(req, colId, val)) {
      filled++;
      const colDef = COLUMNAS_DETALLE.find(c => c.id === colId);
      if (colDef) camposLlenos.push(colDef.label);
    }
  });

  // El Excel trae un único ítem por fila: volcamos los campos importados de
  // m2/m3 al primer ítem para que el editor multi-ítem y los cálculos los tomen.
  req.items = [{
    desc: req.m2.desc || '', tarifario: req.m2.tarifario || '',
    caracteristicas: (TARIFARIO.find(t => t.id === req.m2.tarifario) || {}).carac || '',
    medida: req.m2.medida || '',
    cantidad: Number(req.m2.cantidad) || 0, precio: Number(req.m3.precio) || 0,
    tarifaImp: Number(req.m3.tarifaImp) || 0.19, adminPct: Number(req.m3.adminPct) || 0,
    obs: req.m2.obs || '', evSpc: req.m2.evSpc || 'PENDIENTE', evOper: req.m2.evOper || 'PENDIENTE'
  }];
  recalcularReq(req);

  return { req, filled, usedPositional, camposLlenos };
}

// Conecta el botón "Cargar Excel" y el input de archivo en modo creación
function attachExcelUpload() {
  const btn = document.getElementById('btnCargarExcel');
  const input = document.getElementById('excelUploadInput');
  if (!btn || !input) return;

  btn.addEventListener('click', () => input.click());

  input.addEventListener('change', async e => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (typeof ExcelJS === 'undefined') {
      showToast('ExcelJS no cargó. Verifica tu conexión.', 'error');
      return;
    }
    showToast('Leyendo Excel...', 'success');
    try {
      const result = await parseExcelToReq(file);
      if (result.filled === 0) {
        showToast('No se reconoció ninguna columna del archivo. Revisa los encabezados.', 'error');
      } else {
        state.editingReq = result.req;
        renderModalContent();
        const modo = result.usedPositional ? ' (mapeo por posición de columna)' : '';
        showToast(`Excel cargado · ${result.filled} campo${result.filled === 1 ? '' : 's'} diligenciado${result.filled === 1 ? '' : 's'}${modo}`, 'success');
      }
    } catch (err) {
      showToast('Error al leer el Excel: ' + err.message, 'error');
    }
    input.value = ''; // permite volver a cargar el mismo archivo
  });
}

// Devuelve la categoría (moneda/numero/porcentaje/fecha/texto) según la columna
function getCellFormat(c) {
  if (c.id === 'tarifaImp') return { numFmt: '0.0%', align: 'right' };
  if (['cantidad', 'remDia', 'remMes', 'remAno'].includes(c.id)) return { numFmt: '#,##0', align: 'right' };
  if (c.num) return { numFmt: '"$"#,##0', align: 'right' };
  if (['fechaElab', 'fechaEntrega', 'fechaMontaje', 'fechaDesmontaje'].includes(c.id)) return { numFmt: 'dd/mm/yyyy', align: 'center' };
  if (c.mono) return { font: 'Consolas', align: 'left' };
  return { align: 'left' };
}

// Aplica estilo de header con fondo verde institucional
function styleHeaderRow(row, opts = {}) {
  row.eachCell({ includeEmpty: false }, cell => {
    cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: opts.size || 11, name: 'Calibri' };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: opts.bg || XL.accent } };
    cell.alignment = { horizontal: opts.align || 'left', vertical: 'middle', wrapText: true };
    cell.border = {
      top: { style: 'thin', color: { argb: XL.accentSub } },
      bottom: { style: 'medium', color: { argb: XL.gold } },
      left: { style: 'thin', color: { argb: XL.accentSub } },
      right: { style: 'thin', color: { argb: XL.accentSub } }
    };
  });
  row.height = opts.height || 28;
}

// Aplica estilo a fila de datos (alternancia + bordes sutiles)
function styleDataRow(row, rowIdx) {
  const isEven = rowIdx % 2 === 0;
  row.eachCell({ includeEmpty: false }, cell => {
    if (isEven) {
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: XL.surfaceAlt } };
    }
    cell.border = {
      bottom: { style: 'thin', color: { argb: XL.border } },
      right:  { style: 'thin', color: { argb: XL.border } }
    };
    if (!cell.alignment) cell.alignment = { vertical: 'middle' };
    else cell.alignment = { ...cell.alignment, vertical: 'middle' };
  });
}

// Descarga el workbook como archivo
async function descargarWorkbook(wb, nombreBase) {
  const buffer = await wb.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const fecha = new Date().toISOString().substring(0,10);
  a.download = `${nombreBase}_${fecha}.xlsx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// EXPORTACIÓN: un solo requerimiento (todos sus campos + sus ítems)
async function descargarRequerimientoExcel(r) {
  if (!r) return;
  if (typeof ExcelJS === 'undefined') {
    showToast('ExcelJS no cargó. Verifica tu conexión.', 'error');
    return;
  }
  recalcularReq(r); // asegura items[] y totales actualizados
  showToast('Generando Excel...', 'success');

  const wb = new ExcelJS.Workbook();
  wb.creator = 'Matriz Operación Logística · SPC Medellín';
  wb.created = new Date();

  // Hoja 1: campos del requerimiento (vertical: Campo · Valor)
  const ws = wb.addWorksheet('Requerimiento');
  ws.columns = [{ width: 34 }, { width: 72 }];
  ws.getCell('A1').value = `Requerimiento ${r.op || '(nuevo)'}`;
  ws.getCell('A1').font = { bold: true, size: 14, color: { argb: XL.accent }, name: 'Calibri' };
  ws.mergeCells('A1:B1');
  ws.getCell('A2').value = r.m2?.evento || '';
  ws.getCell('A2').font = { italic: true, size: 11, color: { argb: XL.textSec }, name: 'Calibri' };
  ws.mergeCells('A2:B2');

  let fila = 4;
  ws.getCell(`A${fila}`).value = 'Campo';
  ws.getCell(`B${fila}`).value = 'Valor';
  styleHeaderRow(ws.getRow(fila));
  fila++;
  COLUMNAS_DETALLE.forEach(c => {
    const v = getRawValueForExport(c, r);
    const cellA = ws.getCell(`A${fila}`);
    const cellB = ws.getCell(`B${fila}`);
    cellA.value = c.label;
    cellA.font = { bold: true, size: 10, name: 'Calibri', color: { argb: XL.accent } };
    cellA.alignment = { vertical: 'top', wrapText: true };
    if (v !== null && v !== undefined) cellB.value = v;
    const f = getCellFormat(c);
    if (f.numFmt) cellB.numFmt = f.numFmt;
    cellB.alignment = { horizontal: f.align === 'right' ? 'right' : 'left', vertical: 'top', wrapText: true };
    cellB.font = { name: f.font || 'Calibri', size: 10 };
    fila++;
  });

  // Hoja 2: ítems del requerimiento (uno por fila, con cálculo)
  const wi = wb.addWorksheet('Ítems');
  const heads = ['#', 'Descripción', 'Código', 'Características', 'Unidad', 'Cantidad',
    'Precio unitario', 'Tarifa IVA', 'Administración %', 'Subtotal', 'Administración',
    'IVA', 'Total ejecutable', 'Honorarios', 'GMF', 'Estampilla', 'Valor ejecutado',
    'Observaciones', 'Evidencia SPC', 'Evidencia Operador'];
  wi.getRow(1).values = heads;
  styleHeaderRow(wi.getRow(1));
  (r.items || []).forEach((it, i) => {
    const cc = calcItem(it);
    wi.getRow(i + 2).values = [
      i + 1, it.desc || '', it.tarifario || '', it.caracteristicas || '', it.medida || '',
      Number(it.cantidad) || 0, Number(it.precio) || 0, Number(it.tarifaImp) || 0, Number(it.adminPct) || 0,
      cc.subtotal, cc.administracion, cc.valorImp, cc.totalEjec, cc.honorarios, cc.gmf, cc.estampilla, cc.valorEjec,
      it.obs || '', it.evSpc || '', it.evOper || ''
    ];
  });
  // Formatos de columna
  [7, 10, 11, 12, 13, 14, 15, 16, 17].forEach(ci => wi.getColumn(ci).numFmt = '"$"#,##0');
  wi.getColumn(6).numFmt = '#,##0';   // cantidad
  wi.getColumn(8).numFmt = '0%';      // tarifa IVA (fracción)
  wi.getColumn(9).numFmt = '0.0%';    // administración (fracción)
  const anchos = [4, 34, 12, 42, 12, 10, 15, 9, 14, 15, 15, 14, 16, 15, 12, 14, 16, 32, 14, 16];
  wi.columns.forEach((col, i) => { col.width = anchos[i] || 16; });

  const nombre = `requerimiento_${String(r.op || 'nuevo').replace(/[^\w-]+/g, '_')}`;
  await descargarWorkbook(wb, nombre);
  showToast('Requerimiento descargado', 'success');
}

// EXPORTACIÓN: Requerimientos (66 columnas)
async function exportRequerimientosExcel() {
  if (typeof ExcelJS === 'undefined') {
    showToast('ExcelJS no cargó. Verifica tu conexión.', 'error');
    return;
  }
  showToast('Generando Excel...', 'success');

  const wb = new ExcelJS.Workbook();
  wb.creator = 'Matriz Operación Logística · SPC Medellín';
  wb.created = new Date();

  const ws = wb.addWorksheet('DETALLE EJECUCIÓN', {
    views: [{ state: 'frozen', xSplit: 1, ySplit: 2, activeCell: 'B3' }]
  });

  const cols = COLUMNAS_DETALLE;

  // Fila 1: letras del Excel (referencia)
  ws.getRow(1).values = cols.map(c => c.col);
  ws.getRow(1).eachCell(cell => {
    cell.font = { bold: true, color: { argb: XL.textTer }, size: 9, name: 'Consolas' };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: XL.surfaceAlt } };
    cell.alignment = { horizontal: 'center', vertical: 'middle' };
    cell.border = { bottom: { style: 'thin', color: { argb: XL.border } } };
  });
  ws.getRow(1).height = 16;

  // Fila 2: headers descriptivos
  ws.getRow(2).values = cols.map(c => c.label);
  styleHeaderRow(ws.getRow(2));

  // Filas de datos
  REQUERIMIENTOS.forEach((req, idx) => {
    const rowNum = idx + 3;
    cols.forEach((c, colIdx) => {
      const cell = ws.getCell(rowNum, colIdx + 1);
      const value = getRawValueForExport(c, req);
      if (value !== null && value !== undefined) cell.value = value;

      const fmt2 = getCellFormat(c);
      if (fmt2.numFmt) cell.numFmt = fmt2.numFmt;
      cell.alignment = { horizontal: fmt2.align, vertical: 'middle', wrapText: false };
      if (fmt2.font) cell.font = { name: fmt2.font, size: 10 };
      else cell.font = { name: 'Calibri', size: 10 };
    });
    styleDataRow(ws.getRow(rowNum), idx);
  });

  // Anchos de columna
  cols.forEach((c, idx) => {
    const col = ws.getColumn(idx + 1);
    if (c.id === 'op' || c.id === 'idInterno') col.width = 18;
    else if (c.num) col.width = 16;
    else if (['fechaElab','fechaEntrega','fechaMontaje','fechaDesmontaje'].includes(c.id)) col.width = 13;
    else if (['remDia','remMes','remAno','comuna','tipoRec'].includes(c.id)) col.width = 9;
    else if (c.mono) col.width = 18;
    else if (c.trunc) col.width = Math.min(Math.max(c.trunc / 7, 18), 40);
    else col.width = 22;
  });

  // Autofiltro
  ws.autoFilter = {
    from: { row: 2, column: 1 },
    to:   { row: 2, column: cols.length }
  };

  // Hoja de metadata
  const meta = wb.addWorksheet('Información');
  meta.columns = [{ width: 28 }, { width: 60 }];
  meta.getCell('A1').value = 'Matriz Operación Logística';
  meta.getCell('A1').font = { bold: true, size: 16, color: { argb: XL.accent }, name: 'Calibri' };
  meta.mergeCells('A1:B1');

  const metadatos = [
    ['Entidad', 'Secretaría de Participación Ciudadana · Medellín'],
    ['Generado el', new Date().toLocaleString('es-CO', { dateStyle: 'long', timeStyle: 'short' })],
    ['Versión de la app', '2026.1 (Demo)'],
    ['Total requerimientos', REQUERIMIENTOS.length],
    ['Total columnas', COLUMNAS_DETALLE.length],
    ['', ''],
    ['Hoja DETALLE EJECUCIÓN', 'Replica las 66 columnas (A–BN) del archivo MATRIZ original']
  ];
  metadatos.forEach((row, i) => {
    const r = meta.getRow(i + 3);
    r.values = row;
    r.getCell(1).font = { bold: true, color: { argb: XL.textSec }, size: 10 };
    r.getCell(2).font = { size: 10 };
  });

  await descargarWorkbook(wb, 'matriz_operacion_logistica');
  showToast('Excel descargado · ' + REQUERIMIENTOS.length + ' requerimientos × ' + cols.length + ' columnas', 'success');
}

// EXPORTACIÓN: Tarifario
async function exportTarifarioExcel() {
  if (typeof ExcelJS === 'undefined') {
    showToast('ExcelJS no cargó. Verifica tu conexión.', 'error');
    return;
  }
  showToast('Generando Excel...', 'success');

  const wb = new ExcelJS.Workbook();
  wb.creator = 'Matriz Operación Logística · SPC Medellín';

  // Una hoja con todos los ítems
  const ws = wb.addWorksheet('Tarifario completo', {
    views: [{ state: 'frozen', ySplit: 1 }]
  });

  ws.columns = [
    { header: 'Código',          key: 'id',       width: 13 },
    { header: 'Categoría',       key: 'catName',  width: 18 },
    { header: 'Descripción',     key: 'desc',     width: 38 },
    { header: 'Características', key: 'carac',    width: 50 },
    { header: 'Cantidad mín.',   key: 'min',      width: 13 },
    { header: 'Cantidad máx.',   key: 'max',      width: 13 },
    { header: 'Unidad medida',   key: 'medida',   width: 18 },
    { header: 'Precio sin IVA',  key: 'precio',   width: 16 }
  ];

  TARIFARIO.forEach(t => ws.addRow(t));

  styleHeaderRow(ws.getRow(1));

  // Formato por columna
  ws.getColumn('id').eachCell({ includeEmpty: false }, (cell, i) => {
    if (i > 1) cell.font = { name: 'Consolas', size: 10 };
  });
  ws.getColumn('min').numFmt = '#,##0';
  ws.getColumn('max').numFmt = '#,##0';
  ws.getColumn('precio').numFmt = '"$"#,##0.00';
  ws.getColumn('min').alignment = { horizontal: 'right' };
  ws.getColumn('max').alignment = { horizontal: 'right' };
  ws.getColumn('precio').alignment = { horizontal: 'right' };

  // Bordes alternados
  ws.eachRow((row, i) => {
    if (i === 1) return;
    styleDataRow(row, i - 2);
  });

  ws.autoFilter = { from: 'A1', to: 'H1' };

  // Una hoja por categoría
  const porCat = {};
  TARIFARIO.forEach(t => {
    if (!porCat[t.catName]) porCat[t.catName] = [];
    porCat[t.catName].push(t);
  });

  Object.entries(porCat).forEach(([catName, items]) => {
    const wsc = wb.addWorksheet(catName.substring(0, 30), {
      views: [{ state: 'frozen', ySplit: 1 }]
    });
    wsc.columns = [
      { header: 'Código',          key: 'id',       width: 13 },
      { header: 'Descripción',     key: 'desc',     width: 40 },
      { header: 'Características', key: 'carac',    width: 55 },
      { header: 'Cantidad mín.',   key: 'min',      width: 13 },
      { header: 'Cantidad máx.',   key: 'max',      width: 13 },
      { header: 'Unidad medida',   key: 'medida',   width: 18 },
      { header: 'Precio sin IVA',  key: 'precio',   width: 16 }
    ];
    items.forEach(t => wsc.addRow(t));
    styleHeaderRow(wsc.getRow(1));
    wsc.getColumn('id').eachCell({ includeEmpty: false }, (cell, i) => {
      if (i > 1) cell.font = { name: 'Consolas', size: 10 };
    });
    wsc.getColumn('min').numFmt = '#,##0';
    wsc.getColumn('max').numFmt = '#,##0';
    wsc.getColumn('precio').numFmt = '"$"#,##0.00';
    wsc.getColumn('min').alignment = { horizontal: 'right' };
    wsc.getColumn('max').alignment = { horizontal: 'right' };
    wsc.getColumn('precio').alignment = { horizontal: 'right' };
    wsc.eachRow((row, i) => {
      if (i === 1) return;
      styleDataRow(row, i - 2);
    });
    wsc.autoFilter = { from: 'A1', to: 'G1' };
  });

  await descargarWorkbook(wb, 'tarifario_distrito');
  showToast('Excel descargado · ' + TARIFARIO.length + ' ítems del tarifario', 'success');
}

// EXPORTACIÓN: Reportes consolidados
async function exportReportesExcel() {
  if (typeof ExcelJS === 'undefined') {
    showToast('ExcelJS no cargó. Verifica tu conexión.', 'error');
    return;
  }
  showToast('Generando Excel...', 'success');

  const wb = new ExcelJS.Workbook();
  wb.creator = 'Matriz Operación Logística · SPC Medellín';

  // Hoja 1: Ejecución por proyecto
  const porProyecto = {};
  REQUERIMIENTOS.forEach(r => {
    const p = r.m2.proyecto;
    if (!porProyecto[p]) porProyecto[p] = { ejecutado: 0, comprometido: 0, count: 0 };
    porProyecto[p].comprometido += r.m3.valorEjec;
    porProyecto[p].count++;
    if (r.estadoTramite === 'Ejecutado') porProyecto[p].ejecutado += r.m3.valorEjec;
  });

  const ws1 = wb.addWorksheet('Por proyecto', { views: [{ state: 'frozen', ySplit: 1 }] });
  ws1.columns = [
    { header: 'Código',         key: 'codigo', width: 12 },
    { header: 'Nombre proyecto',key: 'nombre', width: 50 },
    { header: 'Subsecretaría',  key: 'subsec', width: 16 },
    { header: 'Requerimientos', key: 'count',  width: 14 },
    { header: 'Comprometido',   key: 'comp',   width: 18 },
    { header: 'Ejecutado',      key: 'ejec',   width: 18 },
    { header: '% Ejecución',    key: 'pct',    width: 13 }
  ];
  Object.entries(porProyecto).sort((a, b) => b[1].comprometido - a[1].comprometido).forEach(([code, data]) => {
    const proy = PROYECTOS.find(p => p.codigo === code);
    ws1.addRow({
      codigo: code,
      nombre: proy?.nombre || '—',
      subsec: proy?.subsec || '—',
      count: data.count,
      comp: data.comprometido,
      ejec: data.ejecutado,
      pct: data.comprometido > 0 ? data.ejecutado / data.comprometido : 0
    });
  });
  styleHeaderRow(ws1.getRow(1));
  ws1.getColumn('codigo').eachCell({ includeEmpty: false }, (cell, i) => {
    if (i > 1) cell.font = { name: 'Consolas', size: 10 };
  });
  ws1.getColumn('count').numFmt = '#,##0';
  ws1.getColumn('comp').numFmt = '"$"#,##0';
  ws1.getColumn('ejec').numFmt = '"$"#,##0';
  ws1.getColumn('pct').numFmt = '0.0%';
  ['count', 'comp', 'ejec', 'pct'].forEach(k => ws1.getColumn(k).alignment = { horizontal: 'right' });
  ws1.eachRow((row, i) => { if (i > 1) styleDataRow(row, i - 2); });
  ws1.autoFilter = { from: 'A1', to: 'G1' };

  // Hoja 2: Por subsecretaría
  const porSubsec = {};
  REQUERIMIENTOS.forEach(r => {
    const s = r.m1.subsec;
    if (!porSubsec[s]) porSubsec[s] = { count: 0, comprometido: 0, ejecutado: 0 };
    porSubsec[s].count++;
    porSubsec[s].comprometido += r.m3.valorEjec;
    if (r.estadoTramite === 'Ejecutado') porSubsec[s].ejecutado += r.m3.valorEjec;
  });

  const ws2 = wb.addWorksheet('Por subsecretaría', { views: [{ state: 'frozen', ySplit: 1 }] });
  ws2.columns = [
    { header: 'Subsecretaría',  key: 'subsec', width: 18 },
    { header: 'Requerimientos', key: 'count',  width: 14 },
    { header: 'Comprometido',   key: 'comp',   width: 18 },
    { header: 'Ejecutado',      key: 'ejec',   width: 18 },
    { header: '% Ejecución',    key: 'pct',    width: 13 }
  ];
  Object.entries(porSubsec).sort((a, b) => b[1].comprometido - a[1].comprometido).forEach(([s, d]) => {
    ws2.addRow({ subsec: s, count: d.count, comp: d.comprometido, ejec: d.ejecutado, pct: d.comprometido > 0 ? d.ejecutado / d.comprometido : 0 });
  });
  styleHeaderRow(ws2.getRow(1));
  ws2.getColumn('count').numFmt = '#,##0';
  ws2.getColumn('comp').numFmt = '"$"#,##0';
  ws2.getColumn('ejec').numFmt = '"$"#,##0';
  ws2.getColumn('pct').numFmt = '0.0%';
  ['count', 'comp', 'ejec', 'pct'].forEach(k => ws2.getColumn(k).alignment = { horizontal: 'right' });
  ws2.eachRow((row, i) => { if (i > 1) styleDataRow(row, i - 2); });
  ws2.autoFilter = { from: 'A1', to: 'E1' };

  // Hoja 3: Por comuna
  const porComuna = {};
  REQUERIMIENTOS.forEach(r => {
    const c = r.m2.comuna;
    if (!porComuna[c]) porComuna[c] = { count: 0, total: 0 };
    porComuna[c].count++;
    porComuna[c].total += r.m3.valorEjec;
  });

  const ws3 = wb.addWorksheet('Por comuna', { views: [{ state: 'frozen', ySplit: 1 }] });
  ws3.columns = [
    { header: 'Comuna',         key: 'comuna', width: 12 },
    { header: 'Requerimientos', key: 'count',  width: 14 },
    { header: 'Valor total',    key: 'total',  width: 18 }
  ];
  Object.entries(porComuna).sort((a, b) => b[1].total - a[1].total).forEach(([c, d]) => {
    ws3.addRow({ comuna: c, count: d.count, total: d.total });
  });
  styleHeaderRow(ws3.getRow(1));
  ws3.getColumn('count').numFmt = '#,##0';
  ws3.getColumn('total').numFmt = '"$"#,##0';
  ['count', 'total'].forEach(k => ws3.getColumn(k).alignment = { horizontal: 'right' });
  ws3.eachRow((row, i) => { if (i > 1) styleDataRow(row, i - 2); });
  ws3.autoFilter = { from: 'A1', to: 'C1' };

  await descargarWorkbook(wb, 'reportes_consolidados');
  showToast('Excel descargado · 3 hojas (proyecto, subsecretaría, comuna)', 'success');
}

/* ============================================================
   DRAWER DE COLUMNAS
   ============================================================ */

function openColumnsDrawer() {
  state.columnsDrawerOpen = true;
  state.columnsDrawerFilter = '';
  document.getElementById('drawerSearchInput').value = '';
  renderColumnsDrawer();
  document.getElementById('drawerBackdrop').classList.add('active');
  document.getElementById('columnsDrawer').classList.add('active');
}

function closeColumnsDrawer() {
  state.columnsDrawerOpen = false;
  document.getElementById('drawerBackdrop').classList.remove('active');
  document.getElementById('columnsDrawer').classList.remove('active');
}

function renderColumnsDrawer() {
  const f = state.columnsDrawerFilter.toLowerCase().trim();
  const fNorm = f.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Agrupar por momento
  const grouped = {};
  COLUMNAS_DETALLE.forEach(c => {
    if (f) {
      const haystack = (c.label + ' ' + c.col + ' ' + c.id).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (!haystack.includes(fNorm)) return;
    }
    if (!grouped[c.m]) grouped[c.m] = [];
    grouped[c.m].push(c);
  });

  const order = ['M1', 'M2', 'M3', 'CONT', 'REV'];
  const body = document.getElementById('drawerBody');

  if (Object.keys(grouped).length === 0) {
    body.innerHTML = `<div style="padding: 32px; text-align: center; color: var(--color-text-tertiary); font-size: 13px;">Ninguna columna coincide con "${esc(state.columnsDrawerFilter)}"</div>`;
  } else {
    body.innerHTML = order.filter(m => grouped[m]).map(m => {
      const cols = grouped[m];
      const allVisible = cols.every(c => state.columnasVisibles.includes(c.id));
      return `
        <div class="col-group">
          <div class="col-group-header">
            <div class="col-group-title">${esc(MOMENTOS_LABEL[m])} · ${cols.length} columna${cols.length === 1 ? '' : 's'}</div>
            <span class="col-group-toggle" data-toggle-group="${m}">${allVisible ? 'Quitar todas' : 'Mostrar todas'}</span>
          </div>
          ${cols.map(c => `
            <label class="col-item">
              <input type="checkbox" data-col-id="${esc(c.id)}" ${state.columnasVisibles.includes(c.id) ? 'checked' : ''}>
              <div class="col-item-info">
                <div class="col-item-label">${esc(c.label)}</div>
                <div class="col-item-meta">Col ${esc(c.col)} · ${esc(c.id)}</div>
              </div>
            </label>
          `).join('')}
        </div>
      `;
    }).join('');
  }

  // Actualizar contador
  document.getElementById('drawerCount').textContent = state.columnasVisibles.length;

  // Conectar checkboxes
  body.querySelectorAll('input[type="checkbox"][data-col-id]').forEach(cb => {
    cb.addEventListener('change', e => {
      const id = e.target.dataset.colId;
      toggleColumna(id, e.target.checked);
    });
  });

  // Conectar "Mostrar todas / Quitar todas" por momento
  body.querySelectorAll('[data-toggle-group]').forEach(el => {
    el.addEventListener('click', () => {
      const m = el.dataset.toggleGroup;
      const cols = COLUMNAS_DETALLE.filter(c => c.m === m);
      const allVisible = cols.every(c => state.columnasVisibles.includes(c.id));
      if (allVisible) {
        // quitar todas las de ese momento, preservando orden de las demás
        state.columnasVisibles = state.columnasVisibles.filter(id => {
          const c = COLUMNAS_DETALLE.find(x => x.id === id);
          return c && c.m !== m;
        });
      } else {
        // agregar las que falten, manteniendo orden del array maestro
        const setVis = new Set(state.columnasVisibles);
        cols.forEach(c => setVis.add(c.id));
        state.columnasVisibles = COLUMNAS_DETALLE.filter(c => setVis.has(c.id)).map(c => c.id);
      }
      renderColumnsDrawer();
      refreshReqTableOnly();
    });
  });
}

function toggleColumna(id, visible) {
  if (visible) {
    if (!state.columnasVisibles.includes(id)) {
      // Reinsertar manteniendo el orden del array maestro
      const setVis = new Set(state.columnasVisibles);
      setVis.add(id);
      state.columnasVisibles = COLUMNAS_DETALLE.filter(c => setVis.has(c.id)).map(c => c.id);
    }
  } else {
    state.columnasVisibles = state.columnasVisibles.filter(x => x !== id);
  }
  document.getElementById('drawerCount').textContent = state.columnasVisibles.length;
  refreshReqTableOnly();
}

(function initDrawer() {
  document.getElementById('drawerBackdrop').addEventListener('mousedown', e => {
    // Cerrar solo si el clic empieza en el propio fondo, no al arrastrar/seleccionar
    if (e.target === e.currentTarget) closeColumnsDrawer();
  });
  document.getElementById('drawerCloseBtn').addEventListener('click', closeColumnsDrawer);
  document.getElementById('drawerApplyBtn').addEventListener('click', closeColumnsDrawer);
  document.getElementById('drawerSearchInput').addEventListener('input', e => {
    state.columnsDrawerFilter = e.target.value;
    renderColumnsDrawer();
  });
  document.querySelectorAll('.drawer-quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = btn.dataset.preset;
      if (p === 'default')      state.columnasVisibles = COLUMNAS_DETALLE.filter(c => c.def).map(c => c.id);
      else if (p === 'all')     state.columnasVisibles = COLUMNAS_DETALLE.map(c => c.id);
      else if (p === 'none')    state.columnasVisibles = [];
      else if (['M1','M2','M3','CONT','REV'].includes(p))
                                state.columnasVisibles = COLUMNAS_DETALLE.filter(c => c.m === p).map(c => c.id);
      renderColumnsDrawer();
      refreshReqTableOnly();
    });
  });
  // ESC para cerrar
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && state.columnsDrawerOpen) closeColumnsDrawer();
  });
})();

