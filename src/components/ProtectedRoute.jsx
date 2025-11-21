import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children, allowGuests = false }) => {
  const { usuario } = useAuth();
  if (!usuario) {
    return <Navigate to="/" replace />;
  }
  if (usuario.rol === "invitado" && !allowGuests) {
    return <Navigate to="/perfil" replace />;
  }

  return children;
};

export default ProtectedRoute;
