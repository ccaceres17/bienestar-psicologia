import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Contacto() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Mensaje enviado:', data);
    toast.success('✅ Tu mensaje ha sido enviado');
    reset();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: '#003366' }}>Contacto</h2>

      {/* Sección de Psicólogas */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-5 mb-4">
          <div className="card p-4 shadow text-center">
            <img src="/img/psicologa1.jpg" alt="Dra. Mariana López" className="rounded-circle mb-3" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <h5>Dra. Mariana López</h5>
            <p className="text-muted">Psicóloga Clínica • Especialista en ansiedad y bienestar emocional</p>
            <p><strong>Teléfono:</strong> (605) 3853400 Ext. 201</p>
            <p><strong>Email:</strong> mariana.lopez@cuc.edu.co</p>
          </div>
        </div>
        <div className="col-md-5 mb-4">
          <div className="card p-4 shadow text-center">
            <img src="/img/psicologa2.jpg" alt="Dra. Valentina Ríos" className="rounded-circle mb-3" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <h5>Dra. Valentina Ríos</h5>
            <p className="text-muted">Psicóloga Educativa • Enfoque en jóvenes universitarios y orientación vocacional</p>
            <p><strong>Teléfono:</strong> (605) 3853400 Ext. 202</p>
            <p><strong>Email:</strong> valentina.rios@cuc.edu.co</p>
          </div>
        </div>
      </div>

      {/* Formulario de contacto */}
      <div className="card p-4 shadow mb-4">
        <h5 className="mb-3">¿Tienes dudas? Escríbenos aquí:</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label>Nombre</label>
            <input className="form-control" {...register('nombre', { required: true })} />
          </div>
          <div className="mb-3">
            <label>Correo</label>
            <input className="form-control" type="email" {...register('correo', { required: true })} />
          </div>
          <div className="mb-3">
            <label>Mensaje</label>
            <textarea className="form-control" rows="4" {...register('mensaje', { required: true })}></textarea>
          </div>
          <button className="btn btn-primary w-100" type="submit">Enviar mensaje</button>
        </form>
      </div>

      {/* Mapa */}
      <div className="card p-4 shadow mb-4">
        <h5 className="mb-3">Ubicación en el mapa</h5>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.658019229884!2d-74.79663872504826!3d10.99368108919459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d3e2e3f3b4d%3A0x2f1c5c5e6b3a3d3e!2sCorporaci%C3%B3n%20Universitaria%20Latinoamericana%20-%20CUL!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
            title="Mapa CUL"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Información institucional */}
      <div className="card p-4 shadow mb-4">
        <h5 className="mb-3">Información de contacto institucional</h5>
        <p><i className="bi bi-geo-alt-fill me-2"></i><strong>Dirección:</strong> Calle 58 # 55 - 24A, Barranquilla, Colombia</p>
        <p><i className="bi bi-whatsapp me-2"></i><strong>WhatsApp Admisiones:</strong> +57 314 8962734</p>
        <p><i className="bi bi-whatsapp me-2"></i><strong>WhatsApp Reintegros:</strong> +57 317 6688650</p>
        <p><i className="bi bi-envelope-fill me-2"></i><strong>Correo Promoción:</strong> <a href="mailto:promocion@ul.edu.co">promocion@ul.edu.co</a></p>
        <p><i className="bi bi-envelope-fill me-2"></i><strong>Correo Transferencias:</strong> <a href="mailto:kilarioss@ul.edu.co">kilarioss@ul.edu.co</a></p>
        <div className="mt-3">
          <a href="https://www.instagram.com/cul_barranquilla" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2">
            <i className="bi bi-instagram me-1"></i> Instagram
          </a>
          <a href="https://www.facebook.com/culbarranquilla" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary me-2">
            <i className="bi bi-facebook me-1"></i> Facebook
          </a>
          <a href="https://www.youtube.com/@CULBarranquilla" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger">
            <i className="bi bi-youtube me-1"></i> YouTube
          </a>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
