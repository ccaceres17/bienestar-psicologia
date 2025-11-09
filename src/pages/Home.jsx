import React from 'react';
import { Link } from 'react-router-dom';

// Importamos los componentes que se mostrarán en la página principal
import Testimonials from '../components/Testimonials';         
import Servicios from '../components/Servicios';               
import Actividades from '../components/Actividades';           
import NoticiasPsicologia from '../components/NoticiasPsicologia'; 

export default function Home() {
  return (
    <div className="container text-center mt-4">

      {/* 🖼️ Carrusel motivacional con imágenes y frases */}
      <div id="bannerCarrusel" className="carousel slide mb-5" data-bs-ride="carousel">
        {/* Indicadores (circulitos) */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#bannerCarrusel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Imagen 1"></button>
          <button type="button" data-bs-target="#bannerCarrusel" data-bs-slide-to="1" aria-label="Imagen 2"></button>
          <button type="button" data-bs-target="#bannerCarrusel" data-bs-slide-to="2" aria-label="Imagen 3"></button>
        </div>

        {/* Slides del carrusel */}
        <div className="carousel-inner rounded shadow">
          <div className="carousel-item active">
            <img src="/img/motivacional1.jpg" className="d-block w-100" alt="Motivación 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>“La educación es el arma más poderosa para cambiar el mundo.”</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/motivacional2.jpg" className="d-block w-100" alt="Motivación 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>“No cuentes los días, haz que los días cuenten.” – Muhammad Ali</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/motivacional3.jpg" className="d-block w-100" alt="Motivación 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>“Tu mente es una herramienta poderosa. Úsala para construir, no para limitar.”</h5>
            </div>
          </div>
        </div>

        {/* Controles de navegación */}
        <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarrusel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bannerCarrusel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* 🧠 Título principal de la página */}
      <h1 style={{ color: '#003366' }}>Bienestar Psicológico Universitario</h1>

      {/* 📝 Descripción introductoria */}
      <p className="lead mt-3">
        En Bienestar Universitario, creemos que la salud mental es esencial para el desarrollo académico y personal.
        Nuestro equipo de profesionales está aquí para escucharte, orientarte y acompañarte.
      </p>

      {/* 💬 Frase institucional */}
      <p><strong>Bienestar, más cerca de la salud de nuestros estudiantes.</strong></p>

      {/* 📅 Botón para agendar cita */}
      <Link to="/citas" className="btn btn-primary mt-4">
        Agendar tu cita
      </Link>

      {/* 💬 Testimonios de estudiantes */}
      <Testimonials />

      {/* 🧩 Servicios ofrecidos */}
      <Servicios />

      {/* 🎉 Actividades destacadas */}
      <Actividades />

      {/* 📚 Noticias y artículos científicos */}
      <NoticiasPsicologia />

      {/* 🖼️ Tarjetas visuales con pilares del programa */}
      <div className="container my-5">
        <h3 className="text-center mb-4" style={{ color: '#003366' }}>¿Qué Promovemos?</h3>
        <div className="row justify-content-center">
          {/* Tarjeta 1 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img src="/img/salud-mental.jpg" className="card-img-top" alt="Salud Mental" />
              <div className="card-body text-center">
                <h5 className="card-title">Salud Mental</h5>
                <p className="card-text text-muted">Espacios seguros para hablar, sanar y crecer emocionalmente.</p>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img src="/img/comunidad.jpg" className="card-img-top" alt="Comunidad" />
              <div className="card-body text-center">
                <h5 className="card-title">Comunidad</h5>
                <p className="card-text text-muted">Fomentamos la empatía, la inclusión y el sentido de pertenencia.</p>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img src="/img/actividades.jpg" className="card-img-top" alt="Actividades" />
              <div className="card-body text-center">
                <h5 className="card-title">Actividades</h5>
                <p className="card-text text-muted">Charlas, talleres y eventos que fortalecen tu bienestar integral.</p>
              </div>
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
              <img src="/img/apoyo.jpg" className="card-img-top" alt="Apoyo Profesional" />
              <div className="card-body text-center">
                <h5 className="card-title">Apoyo Profesional</h5>
                <p className="card-text text-muted">Atención psicológica con especialistas comprometidos con tu proceso.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
