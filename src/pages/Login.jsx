import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { login, mostrarMensaje } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await login({ email, password });

    if (result.success) {
      mostrarMensaje(setMensaje, "Inicio de sesión exitoso", "success");
      setTimeout(() => navigate("/tabla"), 1500); // ✅ redirige después de 1.5s
    } else {
      mostrarMensaje(setMensaje, result.message, "danger");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Inicio de sesión</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
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
      </form>

      <div className="d-grid gap-2 mt-3">
        <button
          className="btn btn-secondary"
          onClick={() => {
            navigate("/"); // 🔹 invitado directo
          }}
        >
          Entrar como Invitado
        </button>
      </div>

      <div className="mt-3">{mensaje}</div>

      <p className="mt-3 text-center">
        ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
      </p>
    </div>
  );
}
