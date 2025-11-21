import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    try {
      const storedUsuario = sessionStorage.getItem("usuario");
      const storedUsuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

      if (storedUsuario) {
        setUsuario(JSON.parse(storedUsuario));
      }
      setUsuarios(storedUsuarios);
    } catch (error) {
      console.error("Error cargando datos de almacenamiento:", error);
      sessionStorage.clear();
      localStorage.clear();
    }
  }, []);

  const login = async ({ email, password }) => {
    try {
      const response = await fetch("https://demo3526643.mockable.io/usuarios");
      const usuariosMock = await response.json();
      const userMock = usuariosMock.find(
        (u) => u.email === email && u.password === password
      );

      if (userMock) {
        const userData = { ...userMock, rol: "usuario" };
        setUsuario(userData);
        sessionStorage.setItem("usuario", JSON.stringify(userData));
        return { success: true, source: "mockable" };
      }
      const userLocal = usuarios.find(
        (u) => u.email === email && u.password === password
      );

      if (userLocal) {
        const userData = { ...userLocal, rol: "usuario" };
        setUsuario(userData);
        sessionStorage.setItem("usuario", JSON.stringify(userData));
        return { success: true, source: "local" };
      }

      return { success: false, message: "Correo o contraseña incorrectos" };
    } catch (error) {
      console.error("Error al conectar con Mockable.io:", error);
      return { success: false, message: "Error de conexión con el servidor" };
    }
  };

  const register = (nuevoUsuario) => {
    const emailExists = usuarios.some((u) => u.email === nuevoUsuario.email);

    if (emailExists) {
      return { success: false, message: "El correo ya está registrado." };
    }

    const userWithRole = { ...nuevoUsuario, rol: "usuario" };
    const updatedUsuarios = [...usuarios, userWithRole];
    setUsuarios(updatedUsuarios);
    localStorage.setItem("usuarios", JSON.stringify(updatedUsuarios));
    return { success: true };
  };

  const logout = (mostrarMensaje = null, setMensaje = null) => {
    setUsuario(null);
    sessionStorage.removeItem("usuario");

    if (mostrarMensaje && setMensaje) {
      mostrarMensaje(setMensaje, "Sesión cerrada con éxito", "success");
    }
  };

  const isLoggedIn = !!usuario;

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validarPassword = (password) =>
    password.length >= 6 && /[A-Za-z]/.test(password) && /\d/.test(password);

  const validarRegistro = (data) => {
    if (!data.nombre || !data.email || !data.equipo || !data.password || !data.passwordConf) {
      return "Por favor, completa todos los campos.";
    }
    if (!validarEmail(data.email)) {
      return "Correo electrónico inválido.";
    }
    if (data.password !== data.passwordConf) {
      return "Las contraseñas no coinciden.";
    }
    if (!validarPassword(data.password)) {
      return "La contraseña debe tener al menos 6 caracteres y contener letras y números.";
    }
    return null;
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
        usuarios,
        login,
        register,
        logout,
        isLoggedIn,
        validarEmail,
        validarPassword,
        validarRegistro,
        mostrarMensaje,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
