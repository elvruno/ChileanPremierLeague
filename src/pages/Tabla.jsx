import React, { useState, useEffect } from "react";
import { getEquipos, getPartidos } from "../data/db";

const Tabla = () => {
  const [equipos, setEquipos] = useState([]);
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
    setEquipos(getEquipos());
    setPartidos(getPartidos());
  }, []);

  return (
    <main className="container-fluid py-5">
      <section className="mb-5">
        <h2 className="section-title text-center mb-4">
          Tabla de Posiciones - Campeonato Chileno 2025
        </h2>
        <div className="table-responsive">
          <table className="table table-hover text-center">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Equipo</th>
                <th>PJ</th>
                <th>G</th>
                <th>E</th>
                <th>P</th>
                <th>GF</th>
                <th>GC</th>
                <th>DG</th>
                <th>Pts</th>
              </tr>
            </thead>
            <tbody>
              {equipos.map((e, i) => (
                <tr key={e.id}>
                  <td>{i + 1}</td>
                  <td className="text-start">
                    <img src={e.logo} className="team-logo" alt={e.nombre} />{" "}
                    {e.nombre}
                  </td>
                  <td>{e.pj}</td>
                  <td>{e.pg}</td>
                  <td>{e.pe}</td>
                  <td>{e.pp}</td>
                  <td>{e.gf}</td>
                  <td>{e.gc}</td>
                  <td>{e.dg}</td>
                  <td>{e.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2 className="section-title text-center mb-4">Jornada 25 de 30</h2>
        <div className="row g-4">
          {partidos.map((p) => (
            <div key={p.id} className="col-md-6">
              <div className="match-card d-flex align-items-center justify-content-between p-3 shadow-sm rounded bg-white">
                <div className="d-flex align-items-center">
                  <img
                    src={p.logoLocal}
                    alt={p.local}
                    className="team-logo me-2"
                  />
                  <span className="fw-bold">{p.local}</span>
                  <span className="mx-2">vs</span>
                  <span className="fw-bold">{p.visita}</span>
                  <img
                    src={p.logoVisita}
                    alt={p.visita}
                    className="team-logo ms-2"
                  />
                </div>
                <div className="text-end">
                  <p className="mb-0 fw-bold text-primary">{p.hora}</p>
                  <small className="text-muted">{p.estadio}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Tabla;
