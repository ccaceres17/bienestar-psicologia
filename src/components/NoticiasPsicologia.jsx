import React from 'react';

const articulos = [
  {
    titulo: 'Autoestima: Actualización y Mantenimiento',
    resumen: 'Un modelo teórico con aplicaciones en terapia para fortalecer la autoestima.',
    enlace: 'https://www.psicok.es/artculos-cientificos'
  },
  {
    titulo: 'Abuso sexual infantil durante la pandemia',
    resumen: 'Análisis del impacto psicológico en niños durante el confinamiento.',
    enlace: 'https://www.nucleodoconhecimento.com.br/psicologia-es'
  },
  {
    titulo: 'Psicología de la Salud y del Comportamiento',
    resumen: 'Investigaciones recientes sobre bienestar, hábitos y salud mental.',
    enlace: 'https://psicologiacientifica.com/'
  }
];

export default function NoticiasPsicologia() {
  return (
    <div className="container my-5">
      <h3 className="text-center mb-4" style={{ color: '#003366' }}>Noticias y Artículos Científicos</h3>
      <div className="row justify-content-center">
        {articulos.map((a, index) => (
          <div key={index} className="col-md-5 mb-4">
            <div className="card p-4 shadow">
              <h5>{a.titulo}</h5>
              <p className="text-muted">{a.resumen}</p>
              <a href={a.enlace} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                Leer artículo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
