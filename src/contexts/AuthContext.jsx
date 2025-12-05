import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const storedUsuario = sessionStorage.getItem("usuario");
    if (storedUsuario) setUsuario(JSON.parse(storedUsuario));
  }, []);

  const logout = (mostrarMensaje = null, setMensaje = null) => {
    setUsuario(null);
    sessionStorage.removeItem("usuario");
    if (mostrarMensaje && setMensaje) {
      mostrarMensaje(setMensaje, "Sesión cerrada con éxito", "success");
    }
  };

  const mostrarMensaje = (setMensaje, texto, tipo = "danger") => {
    setMensaje(
      <div className={`alert alert-${tipo}`} role="alert">
        {texto}
      </div>
    );
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        logout,
        mostrarMensaje,
        isLoggedIn: !!usuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
