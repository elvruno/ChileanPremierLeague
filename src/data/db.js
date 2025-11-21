export let equipos = [
  { id: 1, nombre: "Coquimbo Unido", logo: "/Imagenes/Coquimbo_Unido.png", pj: 24, pg: 18, pe: 5, pp: 1, gf: 37, gc: 12 },
  { id: 2, nombre: "Universidad Católica", logo: "/Imagenes/hijo.png", pj: 24, pg: 13, pe: 6, pp: 5, gf: 38, gc: 22 },
  { id: 3, nombre: "O'Higgins", logo: "/Imagenes/Ohiggins.png", pj: 24, pg: 12, pe: 8, pp: 4, gf: 32, gc: 28 },
  { id: 4, nombre: "Audax Italiano", logo: "/Imagenes/Audax_Italiano_Escudo.png", pj: 24, pg: 13, pe: 4, pp: 7, gf: 43, gc: 36 },
  { id: 5, nombre: "Universidad de Chile", logo: "/Imagenes/Universidad_de_Chile.png", pj: 23, pg: 13, pe: 3, pp: 7, gf: 47, gc: 24 },
  { id: 6, nombre: "Palestino", logo: "/Imagenes/Palestino.png", pj: 24, pg: 11, pe: 6, pp: 7, gf: 31, gc: 23 },
  { id: 7, nombre: "Cobresal", logo: "/Imagenes/cobresal.png", pj: 24, pg: 11, pe: 5, pp: 8, gf: 30, gc: 28 },
  { id: 8, nombre: "Colo Colo", logo: "/Imagenes/corrocorro.png", pj: 24, pg: 9, pe: 7, pp: 8, gf: 36, gc: 27 },
  { id: 9, nombre: "Huachipato", logo: "/Imagenes/huachipato.png", pj: 24, pg: 9, pe: 4, pp: 11, gf: 36, gc: 38 },
  { id: 10, nombre: "Ñublense", logo: "/Imagenes/nublense.png", pj: 24, pg: 7, pe: 9, pp: 8, gf: 30, gc: 36 },
  { id: 11, nombre: "Unión La Calera", logo: "/Imagenes/lacalera.png", pj: 24, pg: 7, pe: 5, pp: 12, gf: 22, gc: 28 },
  { id: 12, nombre: "Everton", logo: "/Imagenes/eBerton.png", pj: 23, pg: 5, pe: 7, pp: 11, gf: 24, gc: 35 },
  { id: 13, nombre: "Deportes Limache", logo: "/Imagenes/limache.png", pj: 24, pg: 5, pe: 6, pp: 13, gf: 27, gc: 35 },
  { id: 14, nombre: "La Serena", logo: "/Imagenes/serena.png", pj: 24, pg: 5, pe: 6, pp: 13, gf: 27, gc: 43 },
  { id: 15, nombre: "Unión Española", logo: "/Imagenes/panaderos.png", pj: 24, pg: 6, pe: 2, pp: 16, gf: 28, gc: 46 },
  { id: 16, nombre: "Iquique", logo: "/Imagenes/Iquique.png", pj: 24, pg: 3, pe: 5, pp: 16, gf: 25, gc: 52 }
];


export let partidos = [
  { id: 1, local: "Palestino", logoLocal: "/Imagenes/Palestino.png", visita: "Everton", logoVisita: "/Imagenes/eBerton.png", hora: "17:00", estadio: "La Cisterna" },
  { id: 2, local: "La Serena", logoLocal: "/Imagenes/serena.png", visita: "Audax Italiano", logoVisita: "/Imagenes/Audax_Italiano_Escudo.png", hora: "15:00", estadio: "La Portada" },
  { id: 3, local: "Huachipato", logoLocal: "/Imagenes/huachipato.png", visita: "Iquique", logoVisita: "/Imagenes/Iquique.png", hora: "17:30", estadio: "CAP Acero" },
  { id: 4, local: "Universidad Católica", logoLocal: "/Imagenes/hijo.png", visita: "Universidad de Chile", logoVisita: "/Imagenes/Universidad_de_Chile.png", hora: "12:30", estadio: "Claro Arena" },
  { id: 5, local: "Cobresal", logoLocal: "/Imagenes/cobresal.png", visita: "Unión Española", logoVisita: "/Imagenes/panaderos.png", hora: "16:00", estadio: "El Salvador" },
  { id: 6, local: "Unión La Calera", logoLocal: "/Imagenes/lacalera.png", visita: "Ñublense", logoVisita: "/Imagenes/nublense.png", hora: "18:30", estadio: "Nicolás Chahuán" },
  { id: 7, local: "O'Higgins", logoLocal: "/Imagenes/Ohiggins.png", visita: "Coquimbo Unido", logoVisita: "/Imagenes/Coquimbo_Unido.png", hora: "20:30", estadio: "El Teniente" },
  { id: 8, local: "Colo Colo", logoLocal: "/Imagenes/corrocorro.png", visita: "Deportes Limache", logoVisita: "/Imagenes/limache.png", hora: "18:00", estadio: "Estadio Monumental" }
];

const calcularPuntos = (pg, pe) => pg * 3 + pe * 1;
export const getEquipos = () =>
  equipos
    .map((e) => ({
      ...e,
      dg: e.gf - e.gc,
      pts: calcularPuntos(e.pg, e.pe),
    }))
    .sort((a, b) => {
      if (b.pts === a.pts) {
        return b.dg - a.dg; 
      }
      return b.pts - a.pts;
    });

export const addEquipo = (nuevo) => {
  const equipo = {
    id: Date.now(),
    ...nuevo,
    dg: nuevo.gf - nuevo.gc,
    pts: calcularPuntos(nuevo.pg, nuevo.pe),
  };
  equipos = [...equipos, equipo];
};

export const updateEquipo = (id, cambios) => {
  equipos = equipos.map((eq) =>
    eq.id === id
      ? {
          ...eq,
          ...cambios,
          dg: cambios.gf - cambios.gc,
          pts: calcularPuntos(cambios.pg, cambios.pe),
        }
      : eq
  );
};

export const deleteEquipo = (id) => {
  equipos = equipos.filter((eq) => eq.id !== id);
};

export const getPartidos = () => partidos;

export const addPartido = (nuevo) => {
  const partido = { id: Date.now(), ...nuevo };
  partidos = [...partidos, partido];
};

export const updatePartido = (id, cambios) => {
  partidos = partidos.map((p) => (p.id === id ? { ...p, ...cambios } : p));
};

export const deletePartido = (id) => {
  partidos = partidos.filter((p) => p.id !== id);
};
