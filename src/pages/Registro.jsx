import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !equipo || !password || !passwordConf) {
      setMensaje("Por favor, completa todos los campos.");
      return;
    }
    if (password !== passwordConf) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }

    const nuevoUsuario = { nombre, email: correo, equipo, password };

    try {
      const usuariosGuardados =
        JSON.parse(localStorage.getItem("usuarios")) || [];
      usuariosGuardados.push(nuevoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));

      setMensaje("¡Registro exitoso! Ahora puedes iniciar sesión.");

      if (process.env.NODE_ENV === "test") {
        navigate("/"); 
      } else {
        setTimeout(() => navigate("/"), 2000); 
      }
    } catch (error) {
      console.error("Error en registro:", error);
      setMensaje("Error interno al registrar el usuario.");
    }
  };

  return (
    <main className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Registro</h2>
          <form onSubmit={handleSubmit} className="form-login">
            <input
              type="text"
              placeholder="Nombre completo"
              className="form-control mb-3"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="form-control mb-3"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />

            <div className="mb-3">
              <label htmlFor="equipo" className="form-label fw-bold">
                Equipo favorito
              </label>
              <select
                id="equipo"
                className="form-select"
                value={equipo}
                onChange={(e) => setEquipo(e.target.value)}
                required
              >
                <option value="">-- Selecciona un equipo --</option>
                {equipos.map((eq) => (
                  <option key={eq.archivo} value={eq.archivo}>
                    {eq.nombre}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="password"
              placeholder="Contraseña"
              className="form-control mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirmar contraseña"
              className="form-control mb-3"
              value={passwordConf}
              onChange={(e) => setPasswordConf(e.target.value)}
            />

            <button type="submit" className="btn btn-success w-100 mb-3">
              Registrarse
            </button>
          </form>
          {mensaje && <div className="mt-3 alert alert-info">{mensaje}</div>}
        </div>
      </div>
    </main>
  );
}

export default Registro;
