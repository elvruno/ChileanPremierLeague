import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../api";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [equipo, setEquipo] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const navigate = useNavigate();

  const equipos = [
    { nombre: "Colo Colo", archivo: "corrocorro.png" },
    { nombre: "Universidad de Chile", archivo: "Universidad_de_Chile.png" },
    { nombre: "Universidad Católica", archivo: "hijo.png" },
    { nombre: "Everton", archivo: "eBerton.png" },
    { nombre: "Coquimbo Unido", archivo: "Coquimbo_Unido.png" },
    { nombre: "Huachipato", archivo: "huachipato.png" },
    { nombre: "Ñublense", archivo: "nublense.png" },
    { nombre: "Cobresal", archivo: "cobresal.png" },
    { nombre: "Unión Española", archivo: "panaderos.png" },
    { nombre: "Unión La Calera", archivo: "lacalera.png" },
    { nombre: "Palestino", archivo: "Palestino.png" },
    { nombre: "O'Higgins", archivo: "Ohiggins.png" },
    { nombre: "Audax Italiano", archivo: "Audax_Italiano_Escudo.png" },
    { nombre: "Deportes La Serena", archivo: "serena.png" },
    { nombre: "Deportes Iquique", archivo: "Iquique.png" },
    { nombre: "Deportes Limache", archivo: "limache.png" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !correo || !equipo || !password || !passwordConf) {
      setMensaje("Completa todos los campos.");
      return;
    }
    if (password !== passwordConf) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }

    const nuevoUsuario = {
      nombre,
      email: correo,
      equipoFavorito: equipo,
      password,
    };

    try {
      const res = await fetch(`${API_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoUsuario),
      });

      if (!res.ok) throw new Error("Error backend");

      setMensaje("Registro exitoso");
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      console.error(error);
      setMensaje("Error al registrar en el servidor.");
    }
  };

  return (
    <main className="container py-5">
      <h2 className="text-center">Registro</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Nombre"
          value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input className="form-control mb-2" placeholder="Email"
          value={correo} onChange={(e) => setCorreo(e.target.value)} />
        <select className="form-control mb-2"
          value={equipo} onChange={(e) => setEquipo(e.target.value)}>
          <option value="">Seleccione equipo</option>
          {equipos.map(eq => (
            <option key={eq.archivo} value={eq.archivo}>{eq.nombre}</option>
          ))}
        </select>
        <input type="password" className="form-control mb-2" placeholder="Contraseña"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Confirmar"
          value={passwordConf} onChange={(e) => setPasswordConf(e.target.value)} />
        <button className="btn btn-success w-100">Registrar</button>
      </form>

      {mensaje && <div className="alert alert-info mt-3">{mensaje}</div>}
    </main>
  );
}
export default Registro;
