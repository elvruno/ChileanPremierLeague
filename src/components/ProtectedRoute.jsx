import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children, allowGuests = false }) => {
  const { usuario } = useAuth();

  // Si no hay usuario logueado → redirige al login
  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  // Si el rol es invitado y la ruta no permite invitados → redirige al perfil
  if (usuario.rol === "invitado" && !allowGuests) {
    return <Navigate to="/perfil" replace />;
  }

  return children;
};

export default ProtectedRoute;
