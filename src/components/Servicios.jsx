import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const servicios = [
  { icono: 'bi-heart-pulse', titulo: 'Citas Psicológicas', descripcion: 'Atención personalizada para tu bienestar emocional.' },
  { icono: 'bi-chat-dots', titulo: 'Charlas y Talleres', descripcion: 'Espacios educativos sobre salud mental y desarrollo personal.' },
  { icono: 'bi-people', titulo: 'Actividades Grupales', descripcion: 'Eventos que promueven la inclusión, cultura y comunidad.' },
];

export default function Servicios() {
  return (
    <div className="container my-5">
      <h3 className="text-center mb-4" style={{ color: '#003366' }}>Nuestros Servicios</h3>
      <div className="row justify-content-center">
        {servicios.map((s, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card p-4 text-center shadow">
              <i className={`bi ${s.icono} mb-3`} style={{ fontSize: '2rem', color: '#003366' }}></i>
              <h5>{s.titulo}</h5>
              <p className="text-muted">{s.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
