import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
  const { usuario } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-uppercase" to="/tabla">
          Chilean Premier League
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {usuario ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/tabla">Tabla</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ranking">Ranking</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/noticias">Noticias</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/seleccion">Selección</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">Contacto</Link>
                </li>
                <li className="text-light me-3 d-flex align-items-center">
                  {usuario.equipo && (
                    <img
                      src={`/Imagenes/${usuario.equipo}`}
                      alt={usuario.equipo}
                      style={{ width: "40px", height: "40px", marginRight: "0px" }}
                    />
                  )}
                  <Link className="nav-link" to="/perfil">
                    {usuario.nombre}
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">Contacto</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-light ms-2" to="/">
                    Iniciar Sesión
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
