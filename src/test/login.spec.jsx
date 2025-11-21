import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Login from "../pages/Login";
import { vi } from "vitest";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Login - pruebas unitarias", () => {
  beforeEach(() => {
    sessionStorage.clear();
    localStorage.clear();
    mockNavigate.mockClear();
  });

  it("renderiza los campos principales", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(
      screen.getByPlaceholderText(/Correo electrónico/i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Contraseña/i)).toBeInTheDocument();
  });

  it("no navega si los campos están vacíos", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /Iniciar sesión/i }));
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it("permite entrar como invitado", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole("button", { name: /Entrar como Invitado/i })
    );
    expect(mockNavigate).toHaveBeenCalledWith("/tabla");
  });
});
