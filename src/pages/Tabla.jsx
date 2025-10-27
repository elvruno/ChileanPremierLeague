import React from "react";

const Tabla = () => {
  const partidos = [
    { local: "Palestino", logoLocal: "/Imagenes/Palestino.png", visita: "Everton", logoVisita: "/Imagenes/eBerton.png", hora: "17:00", estadio: "La Cisterna" },
    { local: "La Serena", logoLocal: "/Imagenes/serena.png", visita: "Audax Italiano", logoVisita: "/Imagenes/Audax_Italiano_Escudo.png", hora: "15:00", estadio: "La Portada" },
    { local: "Huachipato", logoLocal: "/Imagenes/huachipato.png", visita: "Iquique", logoVisita: "/Imagenes/Iquique.png", hora: "17:30", estadio: "CAP Acero" },
    { local: "Universidad Católica", logoLocal: "/Imagenes/hijo.png", visita: "Universidad de Chile", logoVisita: "/Imagenes/Universidad_de_Chile.png", hora: "12:30", estadio: "Claro Arena" },
    { local: "Cobresal", logoLocal: "/Imagenes/cobresal.png", visita: "Unión Española", logoVisita: "/Imagenes/panaderos.png", hora: "16:00", estadio: "El Salvador" },
    { local: "Unión La Calera", logoLocal: "/Imagenes/lacalera.png", visita: "Ñublense", logoVisita: "/Imagenes/nublense.png", hora: "18:30", estadio: "Nicolás Chahuán" },
    { local: "O'Higgins", logoLocal: "/Imagenes/Ohiggins.png", visita: "Coquimbo Unido", logoVisita: "/Imagenes/Coquimbo_Unido.png", hora: "20:30", estadio: "El Teniente" },
    { local: "Colo Colo", logoLocal: "/Imagenes/corrocorro.png", visita: "Deportes Limache", logoVisita: "/Imagenes/limache.png", hora: "18:00", estadio: "Estadio Monumental" },
  ];

  return (
    <main className="container-fluid py-5">
      <section className="mb-5">
        <h2 className="section-title text-center mb-4">Tabla de Posiciones - Campeonato Chileno 2025</h2>
        <div className="table-responsive">
          <table className="table table-hover align-middle text-center rounded-3 overflow-hidden">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th className="text-start">Equipo</th>
                <th>PJ</th>
                <th>G</th>
                <th>E</th>
                <th>P</th>
                <th>GF</th>
                <th>GC</th>
                <th>DG</th>
                <th>Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td className="text-start"><img src="/Imagenes/Coquimbo_Unido.png" className="team-logo" /> Coquimbo Unido</td><td>24</td><td>18</td><td>5</td><td>1</td><td>37</td><td>12</td><td>25</td><td>59</td></tr>
              <tr><td>2</td><td className="text-start"><img src="/Imagenes/hijo.png" className="team-logo" /> Universidad Católica</td><td>24</td><td>13</td><td>6</td><td>5</td><td>38</td><td>22</td><td>16</td><td>45</td></tr>
              <tr><td>3</td><td className="text-start"><img src="/Imagenes/Ohiggins.png" className="team-logo" /> O'Higgins</td><td>24</td><td>12</td><td>8</td><td>4</td><td>32</td><td>28</td><td>4</td><td>44</td></tr>
              <tr><td>4</td><td className="text-start"><img src="/Imagenes/Audax_Italiano_Escudo.png" className="team-logo" /> Audax Italiano</td><td>24</td><td>13</td><td>4</td><td>7</td><td>43</td><td>36</td><td>7</td><td>43</td></tr>
              <tr><td>5</td><td className="text-start"><img src="/Imagenes/Universidad_de_Chile.png" className="team-logo" /> Universidad de Chile</td><td>23</td><td>13</td><td>3</td><td>7</td><td>47</td><td>24</td><td>23</td><td>42</td></tr>
              <tr><td>6</td><td className="text-start"><img src="/Imagenes/Palestino.png" className="team-logo" /> Palestino</td><td>24</td><td>11</td><td>6</td><td>7</td><td>31</td><td>23</td><td>8</td><td>39</td></tr>
              <tr><td>7</td><td className="text-start"><img src="/Imagenes/cobresal.png" className="team-logo" /> Cobresal</td><td>24</td><td>11</td><td>5</td><td>8</td><td>30</td><td>28</td><td>2</td><td>38</td></tr>
              <tr><td>8</td><td className="text-start"><img src="/Imagenes/corrocorro.png" className="team-logo" /> Colo Colo</td><td>24</td><td>9</td><td>7</td><td>8</td><td>36</td><td>27</td><td>9</td><td>34</td></tr>
              <tr><td>9</td><td className="text-start"><img src="/Imagenes/huachipato.png" className="team-logo" /> Huachipato</td><td>24</td><td>9</td><td>4</td><td>11</td><td>36</td><td>38</td><td>-2</td><td>31</td></tr>
              <tr><td>10</td><td className="text-start"><img src="/Imagenes/nublense.png" className="team-logo" /> Ñublense</td><td>24</td><td>7</td><td>9</td><td>8</td><td>30</td><td>36</td><td>-6</td><td>30</td></tr>
              <tr><td>11</td><td className="text-start"><img src="/Imagenes/lacalera.png" className="team-logo" /> Unión La Calera</td><td>24</td><td>7</td><td>5</td><td>12</td><td>22</td><td>28</td><td>-6</td><td>26</td></tr>
              <tr><td>12</td><td className="text-start"><img src="/Imagenes/eBerton.png" className="team-logo" /> Everton</td><td>23</td><td>5</td><td>7</td><td>11</td><td>24</td><td>35</td><td>-11</td><td>22</td></tr>
              <tr><td>13</td><td className="text-start"><img src="/Imagenes/limache.png" className="team-logo" /> Deportes Limache</td><td>24</td><td>5</td><td>6</td><td>13</td><td>27</td><td>35</td><td>-8</td><td>21</td></tr>
              <tr><td>14</td><td className="text-start"><img src="/Imagenes/serena.png" className="team-logo" /> La Serena</td><td>24</td><td>5</td><td>6</td><td>13</td><td>27</td><td>43</td><td>-16</td><td>21</td></tr>
              <tr><td>15</td><td className="text-start"><img src="/Imagenes/panaderos.png" className="team-logo" /> Unión Española</td><td>24</td><td>6</td><td>2</td><td>16</td><td>28</td><td>46</td><td>-18</td><td>20</td></tr>
              <tr><td>16</td><td className="text-start"><img src="/Imagenes/Iquique.png" className="team-logo" /> Iquique</td><td>24</td><td>3</td><td>5</td><td>16</td><td>25</td><td>52</td><td>-27</td><td>14</td></tr>
            </tbody>
          </table>
        </div>
      </section>


      <section>
        <h2 className="section-title text-center mb-4">Jornada 25 de 30</h2>
        <div className="row g-4">
          {partidos.map((p, i) => (
            <div key={i} className="col-md-6">
              <div className="match-card d-flex align-items-center justify-content-between p-3 shadow-sm rounded bg-white">
                <div className="d-flex align-items-center">
                  <img src={p.logoLocal} alt={p.local} className="team-logo me-2" />
                  <span className="fw-bold">{p.local}</span>
                  <span className="mx-2">vs</span>
                  <span className="fw-bold">{p.visita}</span>
                  <img src={p.logoVisita} alt={p.visita} className="team-logo ms-2" />
                </div>
                <div className="text-end">
                  <p className="mb-0 fw-bold text-primary">{p.hora}</p>
                  <small className="text-muted">{p.estadio}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Tabla;
