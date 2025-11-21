import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { mostrarMensaje } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usuariosLocal = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioLocal = usuariosLocal.find(
      (u) => u.email === email && u.password === password
    );

    if (usuarioLocal) {
      sessionStorage.setItem("usuario", JSON.stringify(usuarioLocal));
      mostrarMensaje(setMensaje, "Inicio de sesión exitoso", "success");
      setTimeout(() => {
        if (usuarioLocal.email === "admin@test.com") {
          navigate("/admin");
        } else {
          navigate("/tabla");
        }
        window.location.reload();
      }, 1500);
      return;
    }
    try {
      const res = await fetch("http://demo3526643.mockable.io/usuarios");
      if (!res.ok) throw new Error("Error en el servidor remoto");

      const usuariosMock = await res.json();
      const usuarioMock = usuariosMock.find(
        (u) => u.email === email && u.password === password
      );

      if (usuarioMock) {
        sessionStorage.setItem("usuario", JSON.stringify(usuarioMock));
        mostrarMensaje(setMensaje, "Inicio de sesión exitoso", "success");
        setTimeout(() => {
          if (usuarioMock.email === "admin@test.com") {
            navigate("/admin");
          } else {
            navigate("/tabla");
          }
          window.location.reload();
        }, 1500);
      } else {
        mostrarMensaje(setMensaje, "Correo o contraseña incorrectos", "danger");
      }
    } catch (error) {
      console.error("Error al conectar con Mockable:", error);
      mostrarMensaje(setMensaje, "Error al conectar con el servidor.", "danger");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Inicio de sesión</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "550px" }}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Contraseña"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Iniciar sesión
        </button>
        <div className="d-grid gap-2 mt-4">
          <button
            type="button"
            className="btn-invitado"
            onClick={() => navigate("/tabla")}
          >
            Entrar como Invitado
          </button>
        </div>
      </form>

      <div className="mt-3">{mensaje}</div>

      <p className="mt-3 text-center">
        ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
      </p>
    </div>
  );
}
