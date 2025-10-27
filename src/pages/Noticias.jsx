import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Noticias() {
  const [modalData, setModalData] = useState(null);

  const noticias = [
    {
      titulo: "¡Se viene el Súperclásico 198!",
      imagen: "/Imagenes/superclasico.jpg",
      fecha: "Viernes 29 de Agosto",
      texto:
        "Estamos a sólo días de vivir una nueva edición del súperclásico de nuestro balompié nacional y en Campeonato Chileno te traemos todos los datos que debes saber de este histórico enfrentamiento entre Universidad de Chile y Colo-Colo.",
    },
    {
      titulo: "Otro hito para Zampedri en el Fútbol Chileno",
      imagen: "/Imagenes/zampedri.jpg",
      fecha: "Viernes 15 Septiembre",
      texto:
        "En el día del clásico 188 entre Colo-Colo y Universidad Católica, Fernando Zampedri logró cortar su mala racha en el Estadio Monumental al marcar un gol.",
    },
    {
      titulo: "67 años de pasión aurinegra: Aniversario de Coquimbo Unido",
      imagen: "/Imagenes/coquimbotonto.jpg",
      fecha: "Martes 30 Agosto",
      texto:
        "Coquimbo Unido es el segundo equipo con más campeonatos de Primera B, con cuatro títulos, un puesto que comparte con su clásico rival, Deportes La Serena.",
    },
    {
      titulo:
        "La U ganó ante Conmebol: Independiente descalificado por barbarie y azules avanzan en Sudamericana",
      imagen: "/Imagenes/bullita.jpg",
      fecha: "Jueves 4 Septiembre",
      texto:
        "Universidad de Chile lo ganó en cancha y lo ganó en los tribunales. El Tribunal de Disciplina de la Conmebol descalificó a Independiente, tras los incidentes ocurridos en el partido de vuelta por los cuartos de final. Los azules enfrentaran a Alianza Lima",
    },
  ];

  return (
    <main className="container py-4">
      <h1 className="text-center mb-4">Últimas Noticias</h1>

      <div className="row">
        {noticias.map((noticia, index) => (
          <div
            key={index}
            className="col-md-6 mb-4"
            role="button"
            onClick={() => setModalData(noticia)}
          >
            <div className="card shadow-sm h-100 news-card">
              <img
                src={noticia.imagen}
                alt={noticia.titulo}
                className="card-img-top"
              />
              <div className="card-body">
                <h2 className="card-title h5">{noticia.titulo}</h2>
                <time className="text-muted">{noticia.fecha}</time>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalData && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.7)" }}
          role="dialog"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">{modalData.titulo}</h2>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setModalData(null)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={modalData.imagen}
                  alt={modalData.titulo}
                  className="img-fluid mb-3"
                />
                <p>{modalData.texto}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setModalData(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Noticias;
