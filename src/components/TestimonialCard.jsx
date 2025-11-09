import React from 'react';

export default function TestimonialCard({ nombre, cargo, fecha, mensaje, imagen }) {
  return (
    <div className="card m-3 p-3 shadow" style={{ minWidth: '250px' }}>
      <img src={imagen} alt={nombre} className="rounded-circle mb-2" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
      <h5>{nombre}</h5>
      <small className="text-muted">{cargo} • {fecha}</small>
      <p className="mt-2">{mensaje}</p>
    </div>
  );
}