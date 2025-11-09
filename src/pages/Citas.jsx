import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Citas() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    try {
      const citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
      citasGuardadas.push(data);
      localStorage.setItem('citas', JSON.stringify(citasGuardadas));
      toast.success('✅ Cita agendada con éxito');
      reset();
    } catch (error) {
      toast.error('❌ Error al agendar la cita');
      console.error('Error al guardar cita:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="mb-3 text-center" style={{ color: '#003366' }}>Agendar Cita</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label>Nombre</label>
            <input className="form-control" {...register('nombre', { required: true })} />
          </div>
          <div className="mb-3">
            <label>Correo institucional</label>
            <input className="form-control" type="email" {...register('correo', { required: true })} />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Fecha</label>
              <input className="form-control" type="date" {...register('fecha', { required: true })} />
            </div>
            <div className="col-md-6 mb-3">
              <label>Hora</label>
              <input className="form-control" type="time" {...register('hora', { required: true })} />
            </div>
          </div>
          <button className="btn btn-primary w-100" type="submit">Agendar</button>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
