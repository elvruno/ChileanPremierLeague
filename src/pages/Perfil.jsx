import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuario) {
      navigate("/");
    }
  }, [usuario, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <main className="container-fluid py-5">
      <div className="card-profile">
        <img
          src={
            usuario?.equipo
              ? `/Imagenes/${usuario.equipo}`
              : "/Imagenes/default-profile.png"
          }
          alt={usuario?.equipo || "Perfil"}
          className="custom-image"
        />
        <h3 id="nombreUsuario">{usuario?.nombre}</h3>
        <p><strong>Correo:</strong> {usuario?.email}</p>
        <p><strong>Equipo Favorito:</strong> {usuario?.equipo?.replace(".png", "")}</p>
        <button id="btnCerrarSesion" className="btn btn-danger mt-3" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
    </main>
  );
};

export default Perfil;
