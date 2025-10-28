import React, { useState, useEffect } from "react";
import {
  getEquipos,
  addEquipo,
  updateEquipo,
  deleteEquipo,
  getPartidos,
  addPartido,
  updatePartido,
  deletePartido,
} from "../data/db";

const AdminPanel = () => {
  const [equipos, setEquipos] = useState([]);
  const [partidos, setPartidos] = useState([]);
  const [editEquipo, setEditEquipo] = useState(null);
  const [editPartido, setEditPartido] = useState(null);

  useEffect(() => {
    setEquipos(getEquipos());
    setPartidos(getPartidos());
  }, []);

  // ================= HANDLERS EQUIPOS =================
  const handleSubmitEquipo = (e) => {
    e.preventDefault();
    const form = e.target;

    // Procesar logo (file input o existente)
    const logoFile = form.logo.files[0];
    const logoUrl = logoFile
      ? URL.createObjectURL(logoFile)
      : editEquipo?.logo || "/Imagenes/default.png";

    const nuevo = {
      nombre: form.nombre.value,
      logo: logoUrl,
      pj: parseInt(form.pj.value),
      pg: parseInt(form.pg.value),
      pe: parseInt(form.pe.value),
      pp: parseInt(form.pp.value),
      gf: parseInt(form.gf.value),
      gc: parseInt(form.gc.value),
    };

    if (editEquipo) {
      updateEquipo(editEquipo.id, nuevo);
    } else {
      addEquipo(nuevo);
    }

    setEquipos(getEquipos());
    setEditEquipo(null);
    form.reset();
  };

  const handleDeleteEquipo = (id) => {
    deleteEquipo(id);
    setEquipos(getEquipos());
  };

  // ================= HANDLERS PARTIDOS =================
  const handleSubmitPartido = (e) => {
    e.preventDefault();
    const form = e.target;

    const equipoLocal = equipos.find((eq) => eq.nombre === form.local.value);
    const equipoVisita = equipos.find((eq) => eq.nombre === form.visita.value);

    const nuevo = {
      local: equipoLocal.nombre,
      logoLocal: equipoLocal.logo,
      visita: equipoVisita.nombre,
      logoVisita: equipoVisita.logo,
      hora: form.hora.value,
      estadio: form.estadio.value,
    };

    if (editPartido) {
      updatePartido(editPartido.id, nuevo);
    } else {
      addPartido(nuevo);
    }

    setPartidos(getPartidos());
    setEditPartido(null);
    form.reset();
  };

  const handleDeletePartido = (id) => {
    deletePartido(id);
    setPartidos(getPartidos());
  };

  return (
    <main className="container py-6">
      <h1 className="text-center mb-7">Panel de Administración</h1>

      {/* ================= EQUIPOS ================= */}
      <section className="mb-5">
        <h3>Equipos</h3>
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Equipo</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PE</th>
              <th>PP</th>
              <th>GF</th>
              <th>GC</th>
              <th>DG</th>
              <th>Pts</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {equipos.map((e, i) => (
              <tr key={e.id}>
                <td>{i + 1}</td>
                <td>
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
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => setEditEquipo(e)}
                    data-bs-toggle="modal"
                    data-bs-target="#equipoModal"
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteEquipo(e.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#equipoModal"
          onClick={() => setEditEquipo(null)}
        >
          Agregar Equipo
        </button>
      </section>

      {/* ================= PARTIDOS ================= */}
      <section>
        <h3>Partidos</h3>
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Local</th>
              <th>Visita</th>
              <th>Hora</th>
              <th>Estadio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {partidos.map((p, i) => (
              <tr key={p.id}>
                <td>{i + 1}</td>
                <td>
                  <img src={p.logoLocal} className="team-logo" alt={p.local} />{" "}
                  {p.local}
                </td>
                <td>
                  {p.visita}{" "}
                  <img src={p.logoVisita} className="team-logo" alt={p.visita} />
                </td>
                <td>{p.hora}</td>
                <td>{p.estadio}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => setEditPartido(p)}
                    data-bs-toggle="modal"
                    data-bs-target="#partidoModal"
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeletePartido(p.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#partidoModal"
          onClick={() => setEditPartido(null)}
        >
          Agregar Partido
        </button>
      </section>

      {/* ================= MODAL EQUIPOS ================= */}
      <div className="modal fade" id="equipoModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmitEquipo}>
              <div className="modal-header">
                <h5 className="modal-title">
                  {editEquipo ? "Editar Equipo" : "Agregar Equipo"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">
                <input
                  type="text"
                  name="nombre"
                  defaultValue={editEquipo?.nombre || ""}
                  placeholder="Nombre del equipo"
                  className="form-control mb-2"
                  required
                />

                <label className="form-label">Logo del equipo</label>
                <input
                  type="file"
                  name="logo"
                  accept="image/*"
                  className="form-control mb-3"
                />

                <div className="row">
                  <div className="col">
                    <input
                      type="number"
                      name="pj"
                      defaultValue={editEquipo?.pj || ""}
                      placeholder="PJ"
                      className="form-control mb-2"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      name="pg"
                      defaultValue={editEquipo?.pg || ""}
                      placeholder="PG"
                      className="form-control mb-2"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      name="pe"
                      defaultValue={editEquipo?.pe || ""}
                      placeholder="PE"
                      className="form-control mb-2"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      name="pp"
                      defaultValue={editEquipo?.pp || ""}
                      placeholder="PP"
                      className="form-control mb-2"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <input
                      type="number"
                      name="gf"
                      defaultValue={editEquipo?.gf || ""}
                      placeholder="GF"
                      className="form-control mb-2"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      name="gc"
                      defaultValue={editEquipo?.gc || ""}
                      placeholder="GC"
                      className="form-control mb-2"
                    />
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ================= MODAL PARTIDOS ================= */}
      <div className="modal fade" id="partidoModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmitPartido}>
              <div className="modal-header">
                <h5 className="modal-title">
                  {editPartido ? "Editar Partido" : "Agregar Partido"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <select
                      name="local"
                      defaultValue={editPartido?.local || ""}
                      className="form-select mb-2"
                      required
                    >
                      <option value="">-- Equipo Local --</option>
                      {equipos.map((eq) => (
                        <option key={eq.id} value={eq.nombre}>
                          {eq.nombre}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <select
                      name="visita"
                      defaultValue={editPartido?.visita || ""}
                      className="form-select mb-2"
                      required
                    >
                      <option value="">-- Equipo Visitante --</option>
                      {equipos.map((eq) => (
                        <option key={eq.id} value={eq.nombre}>
                          {eq.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="time"
                      name="hora"
                      defaultValue={editPartido?.hora || ""}
                      className="form-control mb-2"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="estadio"
                      defaultValue={editPartido?.estadio || ""}
                      placeholder="Estadio"
                      className="form-control mb-2"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminPanel;
