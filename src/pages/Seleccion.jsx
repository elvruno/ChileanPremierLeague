import React from "react";

const Seleccion = () => {
  return (
    <main className="container mb-5">
      <header className="seleccion-header text-center my-4">
        <h1>Selección Chilena de Fútbol</h1>
      </header>
      <section className="row mb-5">
        <div className="col-md-8">
          <h2 className="section-title">Tabla de Eliminatorias Mundial 2026</h2>
          <div className="table-responsive shadow-sm rounded">
            <table className="table table-striped table-hover align-middle text-center mb-0">
              <thead className="table-primary">
                <tr>
                  <th>#</th>
                  <th>Equipo</th>
                  <th>PJ</th>
                  <th>PG</th>
                  <th>PE</th>
                  <th>PP</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>DG</th>
                  <th>Puntos</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Argentina</td><td>17</td><td>12</td><td>2</td><td>3</td><td>31</td><td>9</td><td>22</td><td>38</td></tr>
                <tr><td>2</td><td>Brasil</td><td>17</td><td>8</td><td>4</td><td>5</td><td>24</td><td>16</td><td>8</td><td>28</td></tr>
                <tr><td>3</td><td>Uruguay</td><td>17</td><td>7</td><td>6</td><td>4</td><td>22</td><td>12</td><td>10</td><td>27</td></tr>
                <tr><td>4</td><td>Ecuador</td><td>17</td><td>7</td><td>8</td><td>2</td><td>13</td><td>5</td><td>8</td><td>26</td></tr>
                <tr><td>5</td><td>Colombia</td><td>17</td><td>7</td><td>6</td><td>4</td><td>22</td><td>15</td><td>7</td><td>25</td></tr>
                <tr><td>6</td><td>Paraguay</td><td>17</td><td>6</td><td>7</td><td>4</td><td>13</td><td>10</td><td>3</td><td>25</td></tr>
                <tr><td>7</td><td>Venezuela</td><td>17</td><td>4</td><td>6</td><td>7</td><td>15</td><td>22</td><td>-7</td><td>18</td></tr>
                <tr><td>8</td><td>Bolivia</td><td>17</td><td>5</td><td>2</td><td>10</td><td>16</td><td>35</td><td>-19</td><td>17</td></tr>
                <tr><td>9</td><td>Perú</td><td>17</td><td>2</td><td>6</td><td>9</td><td>6</td><td>20</td><td>-14</td><td>12</td></tr>
                <tr className="table-danger fw-bold"><td>10</td><td>Chile</td><td>17</td><td>2</td><td>4</td><td>11</td><td>9</td><td>27</td><td>-18</td><td>10</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-4">
          <h3 className="section-title">Últimas Noticias</h3>
          <ul className="list-group shadow-sm">
            <li className="list-group-item">
              <i className="bi bi-newspaper me-2 text-danger"></i>
              Confirman nuevo amistoso de la Selección Chilena en 2026
            </li>
            <li className="list-group-item">
              <i className="bi bi-newspaper me-2 text-danger"></i>
              Seleccionado chileno toma drástica decisión tras fracaso en Eliminatorias
            </li>
            <li className="list-group-item">
              <i className="bi bi-newspaper me-2 text-danger"></i>
              Luis Mena gana fuerza como DT de la Roja masculina
            </li>
          </ul>
        </div>
      </section>
      <section className="row mb-5">
        <h2 className="section-title text-center mb-4">Nómina Convocada por el DT</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>Nombre</th>
                <th>Club</th>
                <th>Posición</th>
              </tr>
            </thead>
            <tbody>
            <tr><td><a href="https://www.transfermarkt.es/lawrence-vigouroux/profil/spieler/243591" target="_blank">Lawrence Vigoroux</a></td><td>Swansea City</td><td>Arquero</td></tr>
            <tr><td><a href="https://www.transfermarkt.es/vicente-reyes/profil/spieler/662744" target="_blank">Vicente Reyes</a></td><td>Peterborough United</td><td>Arquero</td></tr>
            <tr><td><a href="https://www.transfermarkt.es/thomas-gillier/profil/spieler/886152" target="_blank">Thomas Gillier</a></td><td>CF Montreal</td><td>Arquero</td></tr>
            <tr><td><a href="https://www.transfermarkt.es/fabian-hormazabal/profil/spieler/371988" target="_blank">Fabián Hormazábal</a></td><td>Universidad de Chile</td><td>Defensa</td></tr>
            <tr><td><a href="https://www.transfermarkt.es/ivan-roman/profil/spieler/1101447" target="_blank">Iván Román</a></td><td>Atlético Mineiro</td><td>Defensa</td></tr>
            <tr><td><a href="https://www.transfermarkt.es/paulo-diaz/profil/spieler/271478" target="_blank">Paulo Díaz</a></td><td>River Plate</td><td>Defensa</td></tr>
            <tr><td><a href="https://www.transfermarkt.es/ian-garguez/profil/spieler/881893" target="_blank">Ian Garguez</a></td><td>Palestino</td><td>Defensa</td></tr>
            <tr><td><a href="https://www.transfermarkt.es/benjamin-kuscevic/profil/spieler/282148" target="_blank">Benjamín Kuscevic</a></td><td>Fortaleza</td><td>Defensa</td></tr>
            <tr><td><a href="https://www.transfermarkt.es/guillermo-maripan/profil/spieler/242446" target="_blank">Guillermo Maripán</a></td><td>Torino</td><td>Defensa</td></tr>
            <tr><td><a href="https://www.transfermarkt.es/gabriel-suazo/profil/spieler/372158" target="_blank">Gabriel Suazo</a></td><td>Sevilla</td><td>Defensa</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/matias-sepulveda/profil/spieler/564739" target="_blank">Matías Sepúlveda</a></td><td>Universidad de Chile</td><td>Defensa</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/esteban-matus/profil/spieler/1104719" target="_blank">Esteban Matus</a></td><td>Audax Italiano</td><td>Defensa</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/felipe-loyola/profil/spieler/888258" target="_blank">Felipe Loyola</a></td><td>Independiente</td><td>Volante</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/ignacio-saavedra/profil/spieler/511539" target="_blank">Ignacio Saavedra</a></td><td>Sochi</td><td>Volante</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/cesar-perez/profil/spieler/759580" target="_blank">César Pérez</a></td><td>Defensa y Justicia</td><td>Volante</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/rodrigo-echeverria/profil/spieler/244819" target="_blank">Rodrigo Echeverría</a></td><td>León</td><td>Volante</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/vicente-pizarro/profil/spieler/667940" target="_blank">Vicente Pizarro</a></td><td>Colo Colo</td><td>Volante</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/luciano-cabral/profil/spieler/336581" target="_blank">Luciano Cabral</a></td><td>Independiente</td><td>Volante</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/javier-altamirano/profil/spieler/628038" target="_blank">Javier Altamirano</a></td><td>Universidad de Chile</td><td>Volante</td></tr>
            <tr><td><a href="https://www.transfermarkt.es/dario-osorio/profil/spieler/881116" target="_blank">Dario Osorio</a></td><td>Midtjylland</td><td>Delantero</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/gonzalo-tapia/profil/spieler/667939" target="_blank">Gonzalo Tapia</a></td><td>Sao Paulo</td><td>Delantero</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/bruno-barticciotto/profil/spieler/501305" target="_blank">Bruno Barticciotto</a></td><td>Santos Laguna</td><td>Delantero</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/lucas-cepeda/profil/spieler/1062450" target="_blank">Lucas Cepeda</a></td><td>Colo Colo</td><td>Delantero</td></tr>
            <tr><td><a href="https://www.transfermarkt.es/lucas-assadi/profil/spieler/718213" target="_blank">Lucas Assadi</a></td><td>Universidad de Chile</td><td>Delantero</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/ben-brereton/profil/spieler/412458" target="_blank">Ben Brereton</a></td><td>Southampton</td><td>Delantero</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/emiliano-ramos/profil/spieler/1080712" target="_blank">Emiliano Ramos</a></td><td>Everton</td><td>Delantero</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/alexander-aravena/profil/spieler/667941" target="_blank">Alexander Aravena</a></td><td>Gremio</td><td>Delantero</td></tr>
            <tr><td><a href="https://www.transfermarkt.com/maximiliano-gutierrez/profil/spieler/989719" target="_blank">Maximiliano Gutiérrez</a></td><td>Huachipato</td><td>Delantero</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title mb-4">Próximos Partidos Eliminatoria Mundial 2026</h2>

        <div className="match-card d-flex flex-column flex-md-row justify-content-between align-items-center mb-3 p-3 shadow-sm rounded bg-white">
          <div className="d-flex align-items-center gap-3 mb-3 mb-md-0">
            <img src="/Imagenes/brasil.png" alt="Brasil" width="50" />
            <span className="fw-semibold fs-5">Brasil</span>
            <span className="mx-2 fs-5 fw-bold text-secondary">vs</span>
            <img src="/Imagenes/chilito.png" alt="Chile" width="50" />
            <span className="fw-semibold fs-5">Chile</span>
          </div>
          <div className="text-md-end">
            <div><i className="bi bi-calendar-event-fill"></i> 04/09/2025</div>
            <div><i className="bi bi-geo-alt-fill"></i> Maracaná</div>
            <div><i className="bi bi-clock-fill"></i> 20:30 hrs</div>
          </div>
        </div>

        <div className="match-card d-flex flex-column flex-md-row justify-content-between align-items-center p-3 shadow-sm rounded bg-white">
          <div className="d-flex align-items-center gap-3 mb-3 mb-md-0">
            <img src="/Imagenes/chilito.png" alt="Chile" width="50" />
            <span className="fw-semibold fs-5">Chile</span>
            <span className="mx-2 fs-5 fw-bold text-secondary">vs</span>
            <img src="/Imagenes/uruguay.png" alt="Uruguay" width="50" />
            <span className="fw-semibold fs-5">Uruguay</span>
          </div>
          <div className="text-md-end">
            <div><i className="bi bi-calendar-event-fill"></i> 09/09/2025</div>
            <div><i className="bi bi-geo-alt-fill"></i> Nacional</div>
            <div><i className="bi bi-clock-fill"></i> 20:30 hrs</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Seleccion;

