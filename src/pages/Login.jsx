import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const navigate = useNavigate();
  const { login, mostrarMensaje } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (correo.trim() === "" || password.trim() === "") {
      mostrarMensaje(setMensaje, "Por favor completa todos los campos.", "warning");
      return;
    }

    const result = login({ email: correo, password });
    if (result.success) {
      mostrarMensaje(setMensaje, "Inicio de sesión exitoso", "success");
      navigate("/perfil");
    } else {
      mostrarMensaje(setMensaje, result.message || "Error en el inicio de sesión", "danger");
    }
  };

  const handleInvitado = () => {
    const invitado = { nombre: "Invitado", rol: "invitado" };
    sessionStorage.setItem("usuario", JSON.stringify(invitado));
    mostrarMensaje(setMensaje, "Entraste como invitado (acceso limitado).", "info");
    navigate("/tabla");
  };

  return (
    <main className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Inicio de sesión</h2>
          <form onSubmit={handleSubmit} className="form-login">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="form-control mb-3"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="form-control mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Iniciar sesión
            </button>
          </form>

          <button onClick={handleInvitado} className="btn btn-secondary w-100 mb-2">
            Entrar como Invitado
          </button>

          {mensaje && <div className="mt-3">{mensaje}</div>}

          <p className="text-center mt-3">
            ¿No tienes cuenta?{" "}
            <Link to="/registro" className="fw-bold text-decoration-none">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
