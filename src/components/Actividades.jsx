import React from 'react';

const actividades = [
  {
    titulo: 'Semana de Bienestar 2025-1',
    descripcion: 'Del 8 al 10 de abril celebramos con cultura, deporte, inclusión y salud integral.',
    enlace: 'https://www.ul.edu.co/uleduco/component/k2/item/418-semana-de-bienestar-2025-1.html'
  },
  {
    titulo: 'Ciudadanía Global',
    descripcion: 'Charlas sobre paz, inclusión y conciencia social para cerrar brechas.',
    enlace: 'https://www.ul.edu.co/uleduco/component/k2/item/409-ciudadan%C3%ADa-global-para-la-construcci%C3%B3n-de-paz,-inclusi%C3%B3n,-cierre-de-brechas-y-consciencia-social.html'
  }
];

export default function Actividades() {
  return (
    <div className="container my-5">
      <h3 className="text-center mb-4" style={{ color: '#003366' }}>Actividades Destacadas</h3>
      <div className="row justify-content-center">
        {actividades.map((a, index) => (
          <div key={index} className="col-md-5 mb-4">
            <div className="card p-4 shadow">
              <h5>{a.titulo}</h5>
              <p className="text-muted">{a.descripcion}</p>
              <a href={a.enlace} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                Ver más
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
