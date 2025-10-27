import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import Registro from "../pages/Registro";
import { AuthProvider } from "../contexts/AuthContext";

// Mock de useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Registro - pruebas unitarias básicas", () => {
  beforeEach(() => {
    sessionStorage.clear();
    localStorage.clear();
    mockNavigate.mockClear();
  });

  test("guarda en localStorage y muestra mensaje de éxito al registrarse correctamente", async () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <Registro />
        </MemoryRouter>
      </AuthProvider>
    );

    // Llenar los campos
    fireEvent.change(screen.getByPlaceholderText("Nombre completo"), {
      target: { value: "Juan Pérez" },
    });
    fireEvent.change(screen.getByPlaceholderText("Correo electrónico"), {
      target: { value: "juan@test.com" },
    });
    fireEvent.change(screen.getByLabelText("Equipo favorito"), {
      target: { value: "cobresal.png" },
    });
    fireEvent.change(screen.getByPlaceholderText("Contraseña"), {
      target: { value: "Password123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Confirmar contraseña"), {
      target: { value: "Password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Registrarse" }));

    // Esperar a que aparezca el mensaje
    await waitFor(() => {
      expect(
        screen.getByText(/¡Registro exitoso!/i)
      ).toBeInTheDocument();
    });

    // Validar navegación
    expect(mockNavigate).toHaveBeenCalledWith("/");

    // Validar almacenamiento en localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    expect(usuarios).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          nombre: "Juan Pérez",
          email: "juan@test.com",
          equipo: "cobresal.png",
        }),
      ])
    );
  });
});
