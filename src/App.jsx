import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";
import Tabla from "./pages/Tabla";
import Ranking from "./pages/Ranking";
import Noticias from "./pages/Noticias";
import Seleccion from "./pages/Seleccion";
import Contacto from "./pages/Contacto";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="d-flex flex-column min-vh-100">
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/tabla" element={<Tabla />} />
            <Route path="/ranking" element={<Ranking />} />

            <Route
              path="/noticias"
              element={
                <ProtectedRoute>
                  <Noticias />
                </ProtectedRoute>
              }
            />
            <Route
              path="/seleccion"
              element={
                <ProtectedRoute>
                  <Seleccion />
                </ProtectedRoute>
              }
            />

            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="/perfil"
              element={
                <ProtectedRoute allowGuests={true}>
                  <Perfil />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
