import React, { useState } from "react";

const Contacto = () => {
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje("Gracias por contactarnos. Te responderemos pronto.");
    e.target.reset();
  };

  return (
    <main className="container-fluid py-5">
      <h2 className="text-center mb-4">Contáctanos</h2>
      <p className="text-center mb-5">
        ¿Tienes alguna duda o sugerencia? Completa el formulario y nos pondremos en contacto contigo.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form id="contactForm" onSubmit={handleSubmit} className="form-login">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre completo</label>
              <input type="text" className="form-control" id="nombre" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="asunto" className="form-label">Asunto</label>
              <input type="text" className="form-control" id="asunto" required />
            </div>
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
              <textarea className="form-control" id="mensaje" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Enviar</button>
          </form>
          {mensaje && <div id="mensajeConfirmacion" className="mt-4 text-center">{mensaje}</div>}
        </div>
      </div>
    </main>
  );
};

export default Contacto;
