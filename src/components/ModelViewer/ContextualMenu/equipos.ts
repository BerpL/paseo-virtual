import {
  equipos1000,
  equipos3200,
  equipos3300,
  equipos3400,
  equipos3600,
  equipos3700,
  equipos3500,
  equipos3900,
  equipos4000,
  equipos5000
} from "./equipos3200";

const equipos = [
  {
    id: "chancado-pica-roca",
    nombre: "Pica Rocas",
    rutaImgTabla: "/areas/2600/picarocas/tabla.PNG",
    tabla: [
      {
        label: "Tag",
        value: "2610-RK-001/002",
      },
      {
        label: "Fabricante/Modelo",
        value: "BREAKER TECHNOLOGY/ TTX48 BX85",
      },
      {
        label: "Alcance horizontal máx. (mm)",
        value: "17,500",
      },
      {
        label: "Alcance vertical máx. (mm)",
        value: "12,200",
      },
      {
        label: "Martillo Hidraulico",
        value: "DAEMO ENGINEERING/ BXR85C",
      },
      {
        label: "Frecuencia de impacto (bpm)",
        value: "490",
      },
      {
        label: "Motor eléctrico/ Modelo/ (KW)",
        value: "WEG/110",
      },
    ],
    rutaImgPartes: "/areas/2600/picarocas/partes-principales.png",
    rutaImgFuncionamiento: "/areas/2600/picarocas/principio-funcionamiento.png",
  },
  {
    id: "chancado-pica-roca-2",
    nombre: "Pica Rocas",
    rutaImgTabla: "/areas/2600/picarocas/tabla.PNG",
    tabla: [
      {
        label: "Tag",
        value: "2610-RK-001/002",
      },
      {
        label: "Fabricante/Modelo",
        value: "BREAKER TECHNOLOGY/ TTX48 BX85",
      },
      {
        label: "Alcance horizontal máx. (mm)",
        value: "17,500",
      },
      {
        label: "Alcance vertical máx. (mm)",
        value: "12,200",
      },
      {
        label: "Martillo Hidraulico",
        value: "DAEMO ENGINEERING/ BXR85C",
      },
      {
        label: "Frecuencia de impacto (bpm)",
        value: "490",
      },
      {
        label: "Motor eléctrico/ Modelo/ (KW)",
        value: "WEG/110",
      },
    ],
    rutaImgPartes: "/areas/2600/picarocas/partes-principales.png",
    rutaImgFuncionamiento: "/areas/2600/picarocas/principio-funcionamiento.png",
  },
  {
    id: "chancado-chancadora",
    nombre: "Chancadora",
    rutaImgTabla: "/areas/2600/chancadora/tabla.PNG",
    tabla: [
      {
        label: "Tag",
        value: "2610-CR-001/002",
      },
      {
        label: "Fabricante/Modelo",
        value: "FLSMIDTH/ 1,600 x 2,400TSU",
      },
      {
        label: "Capacidad nom. (t/h)",
        value: "2,656",
      },
      {
        label: "Capacidad diseño (t/h)",
        value: "5,312t/h",
      },
      {
        label: "Ajuste lado abierto (OSS) máx. (mm)",
        value: "229",
      },
      {
        label: "Ajuste lado abierto (OSS) min. (mm)",
        value: "150",
      },
      {
        label: "Motor eléctrico/ Modelo/ (KW)",
        value: "WEG MGF/ 750",
      },
    ],
    rutaImgPartes: "/areas/2600/chancadora/partes-principales.png",
    rutaImgFuncionamiento:
      "/areas/2600/chancadora/principio-funcionamiento.png",
  },
  {
    id: "chancado-chancadora-2",
    nombre: "Chancadora",
    rutaImgTabla: "/areas/2600/chancadora/tabla.PNG",
    tabla: [
      {
        label: "Tag",
        value: "2610-CR-001/002",
      },
      {
        label: "Fabricante/Modelo",
        value: "FLSMIDTH/ 1,600 x 2,400TSU",
      },
      {
        label: "Capacidad nom. (t/h)",
        value: "2,656",
      },
      {
        label: "Capacidad diseño (t/h)",
        value: "5,312t/h",
      },
      {
        label: "Ajuste lado abierto (OSS) máx. (mm)",
        value: "229",
      },
      {
        label: "Ajuste lado abierto (OSS) min. (mm)",
        value: "150",
      },
      {
        label: "Motor eléctrico/ Modelo/ (KW)",
        value: "WEG MGF/ 750",
      },
    ],
    rutaImgPartes: "/areas/2600/chancadora/partes-principales.png",
    rutaImgFuncionamiento:
      "/areas/2600/chancadora/principio-funcionamiento.png",
  },
  {
    id: "chancado-faja-sacrificio",
    nombre: "Faja de sacrificio",
    rutaImgTabla: "/areas/2600/faja-transportadora-sacrificio/tabla.PNG",
    tabla: [
      {
        label: "Tag",
        value: "2730-CV-001",
      },
      {
        label: "Largo x Ancho (m)",
        value: "153.5 x 2.135",
      },
      {
        label: "Velocidad de operación (m/s)",
        value: "4.5",
      },
      {
        label: "Capacidad diseño (t/h)",
        value: "10,897",
      },
      {
        label: "Faja/ Modelo",
        value: "SEMPERTRANS/ EP1600/4 cable acero",
      },
      {
        label: "Sistema de Tensado/ Modelo",
        value: "DYMONT/ HUINCHE",
      },
      {
        label: "Motor eléctrico/ Modelo/ (kW)",
        value: "SIEMENS/ 700",
      },
      {
        label: "Reductor/ Tipo/ Relación trans",
        value: "FLENDER/ Cónico/ 14.8:2",
      },
    ],
    rutaImgPartes:
      "/areas/2600/faja-transportadora-sacrificio/partes-principales.png",
    rutaImgFuncionamiento:
      "/areas/2600/faja-transportadora-sacrificio/principio-funcionamiento.png",
  },
  {
    id: "chancado-faja-sacrificio-2",
    nombre: "Faja de sacrificio",
    rutaImgTabla: "/areas/2600/faja-transportadora-sacrificio/tabla.PNG",
    tabla: [
      {
        label: "Tag",
        value: "2730-CV-001",
      },
      {
        label: "Largo x Ancho (m)",
        value: "153.5 x 2.135",
      },
      {
        label: "Velocidad de operación (m/s)",
        value: "4.5",
      },
      {
        label: "Capacidad diseño (t/h)",
        value: "10,897",
      },
      {
        label: "Faja/ Modelo",
        value: "SEMPERTRANS/ EP1600/4 cable acero",
      },
      {
        label: "Sistema de Tensado/ Modelo",
        value: "DYMONT/ HUINCHE",
      },
      {
        label: "Motor eléctrico/ Modelo/ (kW)",
        value: "SIEMENS/ 700",
      },
      {
        label: "Reductor/ Tipo/ Relación trans",
        value: "FLENDER/ Cónico/ 14.8:2",
      },
    ],
    rutaImgPartes:
      "/areas/2600/faja-transportadora-sacrificio/partes-principales.png",
    rutaImgFuncionamiento:
      "/areas/2600/faja-transportadora-sacrificio/principio-funcionamiento.png",
  },
  {
    id: "chancado-faja-overlay",
    nombre: "Faja Overland 1",
    rutaImgTabla: "/areas/2600/faja-overland/tabla.PNG",
    tabla: [
      {
        label: "Tag",
        value: "2730-CV-002",
      },
      {
        label: "Largo x Ancho (m)",
        value: "4,711 x 1.830",
      },
      {
        label: "Velocidad de operación (m/s)",
        value: "6.5",
      },
      {
        label: "Capacidad diseño (t/h)",
        value: "10,897",
      },
      {
        label: "Faja/ Modelo",
        value: "SEMPERTRANS/ ST5400 cable acero",
      },
      {
        label: "Sistema de Tensado/ Modelo",
        value: "DYMONT/ HUINCHE",
      },
      {
        label: "Motor eléctrico/ Modelo/ (kW)",
        value: "SIEMENS/ GMD/5,500",
      },
      {
        label: "Reductor/ Tipo",
        value: "SIEMENS/ VFD",
      },
    ],
    rutaImgPartes: "/areas/2600/faja-overland/partes-principales.png",
    rutaImgFuncionamiento:
      "/areas/2600/faja-overland/principio-funcionamiento.png",
  },
  {
    id: "chancado-faja-overland-2",
    nombre: "Faja Overland 2",
    rutaImgTabla: "/areas/2600/faja-overland/tabla.PNG",
    tabla: [
      {
        label: "Tag",
        value: "2730-CV-002",
      },
      {
        label: "Largo x Ancho (m)",
        value: "4,711 x 1.830",
      },
      {
        label: "Velocidad de operación (m/s)",
        value: "6.5",
      },
      {
        label: "Capacidad diseño (t/h)",
        value: "10,897",
      },
      {
        label: "Faja/ Modelo",
        value: "SEMPERTRANS/ ST5400 cable acero",
      },
      {
        label: "Sistema de Tensado/ Modelo",
        value: "DYMONT/ HUINCHE",
      },
      {
        label: "Motor eléctrico/ Modelo/ (kW)",
        value: "SIEMENS/ GMD/5,500",
      },
      {
        label: "Reductor/ Tipo",
        value: "SIEMENS/ VFD",
      },
    ],
    rutaImgPartes: "/areas/2600/faja-overland/partes-principales.png",
    rutaImgFuncionamiento:
      "/areas/2600/faja-overland/principio-funcionamiento.png",
  },
  {
    id: "chancado-magneto-faja-alimentadora",
    nombre: "Magneto - Faja alimentadora",
    rutaImgTabla: "/areas/2600/magnetos-faja-alimentadora/tabla.PNG",
    tabla: [
      {
        label: "Tag",
        value: "2730-MA-001/002",
      },
      {
        label: "Fabricante/ Modelo",
        value: "ERIEZ/ SE 12067 MC-1",
      },
      {
        label: "Dimensiones (A x L x H) (m)",
        value: "3 x 3 x 1.721",
      },
      {
        label: "Flujo de aire (m³/h)",
        value: "- / 138 / -",
      },
      {
        label: "Distancia entre faja y magneto (mm)",
        value: "750 - 800",
      },
      {
        label: "Rectificador/ Modelo/ (kW)",
        value: "ERIEZ/ 40 - 45/ 40 - 45",
      },
      {
        label: "Angulo de inclinación (°)",
        value: "37",
      },
      {
        label: "Puntos de suspensión/ Tipo",
        value: "4/ Tensor",
      },
    ],
    rutaImgPartes:
      "/areas/2600/magnetos-faja-alimentadora/partes-principales.png",
    rutaImgFuncionamiento:
      "/areas/2600/magnetos-faja-alimentadora/principio-funcionamiento.png",
  },
  {
    id: "chancado-magneto-faja-alimentadora-2",
    nombre: "Magneto - Faja alimentadora",
    rutaImgTabla: "/areas/2600/magnetos-faja-alimentadora/tabla.PNG",
    tabla: [
      {
        label: "Tag",
        value: "2730-MA-001/002",
      },
      {
        label: "Fabricante/ Modelo",
        value: "ERIEZ/ SE 12067 MC-1",
      },
      {
        label: "Dimensiones (A x L x H) (m)",
        value: "3 x 3 x 1.721",
      },
      {
        label: "Flujo de aire (m³/h)",
        value: "- / 138 / -",
      },
      {
        label: "Distancia entre faja y magneto (mm)",
        value: "750 - 800",
      },
      {
        label: "Rectificador/ Modelo/ (kW)",
        value: "ERIEZ/ 40 - 45/ 40 - 45",
      },
      {
        label: "Angulo de inclinación (°)",
        value: "37",
      },
      {
        label: "Puntos de suspensión/ Tipo",
        value: "4/ Tensor",
      },
    ],
    rutaImgPartes:
      "/areas/2600/magnetos-faja-alimentadora/partes-principales.png",
    rutaImgFuncionamiento:
      "/areas/2600/magnetos-faja-alimentadora/principio-funcionamiento.png",
  },
  {
    id: "chancado-faja-alimentadora",
    nombre: "Faja alimentadora",
    rutaImgTabla: "/areas/2600/faja-alimentadora/tabla.PNG",
    tabla: [
      {
        label: "Tag",
        value: "2730-FE-001/002",
      },
      {
        label: "Largo x Ancho (m)",
        value: "13.5 x 3.048",
      },
      {
        label: "Velocidad de operación (m/s)",
        value: "0.32",
      },
      {
        label: "Capacidad diseño (t/h)",
        value: "7,508",
      },
      {
        label: "Faja/ Modelo",
        value: "SEMPERTRANS/ ST3150 cable acero",
      },
      {
        label: "Sistema de Tensado/ Modelo",
        value: "REXROTH/ SP355",
      },
      {
        label: "Motor Hidráulico/ Modelo/ (kW)",
        value: "REXROTH HAGGLUNDS/ CBM/ 2,247",
      },
    ],
    rutaImgPartes: "/areas/2600/faja-alimentadora/partes-principales.png",
    rutaImgFuncionamiento:
      "/areas/2600/faja-alimentadora/principio-funcionamiento.png",
  },
  {
    id: "chancado-faja-alimentadora-2",
    nombre: "Faja alimentadora",
    rutaImgTabla: "/areas/2600/faja-alimentadora/tabla.PNG",
    tabla: [
      {
        label: "Tag",
        value: "2730-FE-001/002",
      },
      {
        label: "Largo x Ancho (m)",
        value: "13.5 x 3.048",
      },
      {
        label: "Velocidad de operación (m/s)",
        value: "0.32",
      },
      {
        label: "Capacidad diseño (t/h)",
        value: "7,508",
      },
      {
        label: "Faja/ Modelo",
        value: "SEMPERTRANS/ ST3150 cable acero",
      },
      {
        label: "Sistema de Tensado/ Modelo",
        value: "REXROTH/ SP355",
      },
      {
        label: "Motor Hidráulico/ Modelo/ (kW)",
        value: "REXROTH HAGGLUNDS/ CBM/ 2,247",
      },
    ],
    rutaImgPartes: "/areas/2600/faja-alimentadora/partes-principales.png",
    rutaImgFuncionamiento:
      "/areas/2600/faja-alimentadora/principio-funcionamiento.png",
  },
  {
    id: "chancado-colector-polvo",
    nombre: "Colector de polvo",
    rutaImgTabla: "/areas/2600/colector-polvo/tabla.PNG",
    tabla: [
      {
        label: "Tag",
        value: "2610-BH-002",
      },
      {
        label: "Fabricante/ Modelo",
        value: "FERROVIAL/ 2117-144 TA",
      },
      {
        label: "Flujo (m³/h)",
        value: "49,020",
      },
      {
        label: "Eficiencia (%)",
        value: "99.75",
      },
      {
        label: "Ventilador Centrifugo/ Modelo",
        value: "INGEVENT/ CIA SW-402AR70",
      },
      {
        label: "Motor eléctrico/ Modelo/ (kW)",
        value: "WEG M22/ 93",
      },
      {
        label: "Válvula rotatoria/ Modelo",
        value: "MEYER & SONS/ 12 X 12 HDX",
      },
      {
        label: "Filtro Tipo/ Número (fila x columna)",
        value: "De mangas/ 357 (21 x 17)",
      },
    ],
    rutaImgPartes: "/areas/2600/colector-polvo/partes-principales.png",
    rutaImgFuncionamiento:
      "/areas/2600/colector-polvo/principio-funcionamiento.png",
  },
  {
    id: "chancado-supresor-polvo",
    nombre: "Supresor de polvo",
    rutaImgTabla: "/areas/2600/supresor-polvo/tabla.PNG",
    tabla: [
      {
        label: "Tag",
        value: "2610-DT-001/002, 2730-DT-002/003",
      },
      {
        label: "Fabricante/ Modelo",
        value: "BLEXIM",
      },
      {
        label: "Flujo de agua (m³/h)",
        value: "14.49/ 0.58/ 2.52",
      },
      {
        label: "Flujo de aire (m³/h)",
        value: "- / 138 / -",
      },
      {
        label: "Tipo de supresión de polvo",
        value: "Agua pulverizada/ Niebla seca",
      },
      {
        label: "Boquillas de neblina seca/ Modelo",
        value: "MH / FP10/ MHD",
      },
      {
        label: "Tipo",
        value: "De agua normal/ Sonoro",
      },
      {
        label: "Cantidad",
        value: "16/ 19/ 6",
      },
    ],
    rutaImgPartes: "/areas/2600/supresor-polvo/partes-principales.png",
    rutaImgFuncionamiento:
      "/areas/2600/supresor-polvo/principio-funcionamiento.png",
  },
  ...equipos1000,
  ...equipos3200,
  ...equipos3300,
  ...equipos3400,
  ...equipos3600,
  ...equipos3700,
  ...equipos3500,
  ...equipos3900,
  ...equipos4000,
  ...equipos5000
];
export interface tableInterface {
  label: string;
  value: string;
}

export interface equiposInterface {
  id: string;
  nombre: string;
  rutaImgTabla?: string;
  rutaImgPartes?: string;
  rutaImgFuncionamiento?: string;
  tabla: tableInterface[] | [];
}

const equiposIndexed: any = equipos.reduce(
  (acc, equipo) => ({ ...acc, [equipo.id]: equipo }),
  {}
);

export { equipos, equiposIndexed };
