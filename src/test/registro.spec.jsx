import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import Registro from "../pages/Registro";

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
      <MemoryRouter>
        <Registro />
      </MemoryRouter>
    );

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
    await waitFor(() => {
      expect(
        screen.getByText("¡Registro exitoso! Ahora puedes iniciar sesión.")
      ).toBeInTheDocument();
    });
    expect(mockNavigate).toHaveBeenCalledWith("/");
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
