import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <h5>Contacto Institucional</h5>
        <p>Universidad de la Costa - Bienestar Universitario</p>
        <p>Dirección: Calle 58 # 55-66, Barranquilla, Atlántico</p>
        <p>Teléfono: (605) 3853400 Ext. 123</p>
        <p>Email: bienestar@cuc.edu.co</p>
        <p>Horario de atención: Lunes a Viernes, 8:00 a.m. - 5:00 p.m.</p>

        <div className="mt-3">
          <iframe
            title="Mapa CUC"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.624471847413!2d-74.79812368523696!3d10.99301909220259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d5e7c9e4f3b%3A0x3e6e3e3e3e3e3e3e!2sUniversidad%20de%20la%20Costa!5e0!3m2!1ses!2sco!4v1630000000000"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <p className="mt-3">© 2025 Bienestar Universitario - Universidad de la Costa</p>
      </div>
    </footer>
  );
}
