import React from "react";

const Ranking = () => {
  const goleadores = [
    { id: 1, jugador: "Fernando Zampedri", equipo: "Universidad Católica", goles: 14 },
    { id: 2, jugador: "Leonardo Valencia", equipo: "Audax Italiano", goles: 13 },
    { id: 3, jugador: "Diego Coelho", equipo: "Cobresal", goles: 11 },
    { id: 3, jugador: "Lionel Altamirano", equipo: "Huachipato", goles: 11 },
    { id: 3, jugador: "Lucas Di Yorio", equipo: "Universidad de Chile", goles: 11 },
  ];

  const asistencias = [
    { id: 1, jugador: "Leonardo Valencia", equipo: "Audax Italiano", asistencias: 10 },
    { id: 2, jugador: "Matías Palavecino", equipo: "Coquimbo Unido", asistencias: 7 },
    { id: 3, jugador: "Jorge Henríquez Neira", equipo: "Cobresal", asistencias: 6 },
    { id: 3, jugador: "Juan Cornejo", equipo: "Coquimbo Unido", asistencias: 6 },
    { id: 3, jugador: "Lucas Assadi", equipo: "Universidad de Chile", asistencias: 6 },
    { id: 3, jugador: "Luis Guerra", equipo: "Deportes Limache", asistencias: 6 },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">
        Ranking de Jugadores - Campeonato Chileno 2025
      </h2>

      <h4 className="text-center text-primary mb-3">Máximos Goleadores</h4>
      <div className="table-responsive mb-5">
        <table className="table table-bordered table-striped text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Jugador</th>
              <th>Equipo</th>
              <th>Goles</th>
            </tr>
          </thead>
          <tbody>
            {goleadores.map((g, index) => (
              <tr key={index}>
                <td>{g.id}</td>
                <td>{g.jugador}</td>
                <td>{g.equipo}</td>
                <td>{g.goles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 className="text-center text-primary mb-3">Máximos Asistidores</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Jugador</th>
              <th>Equipo</th>
              <th>Asistencias</th>
            </tr>
          </thead>
          <tbody>
            {asistencias.map((a, index) => (
              <tr key={index}>
                <td>{a.id}</td>
                <td>{a.jugador}</td>
                <td>{a.equipo}</td>
                <td>{a.asistencias}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ranking;
