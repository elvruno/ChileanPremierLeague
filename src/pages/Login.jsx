import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("usuario", JSON.stringify(data.usuario));

        setMensaje("Login exitoso");
        setTimeout(() => navigate("/tabla"), 1000);
        return;
      }
    } catch (err) {
      console.error("Backend no responde");
    }

    try {
      const res = await fetch("https://demo3526643.mockable.io/usuarios");
      const usuarios = await res.json();
      const user = usuarios.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        sessionStorage.setItem("usuario", JSON.stringify(user));
        setMensaje("Login admin (mockable)");
        setTimeout(() => navigate("/admin"), 1000);
        return;
      }
    } catch (err) {
      console.error("Mockable falló");
    }

    setMensaje("Credenciales inválidas ");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100">Entrar</button>
      </form>

      {mensaje && <div className="alert alert-info mt-3">{mensaje}</div>}

      <p className="mt-3 text-center">
        ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
      </p>
    </div>
  );
}
