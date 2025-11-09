import React from 'react';
import Marquee from 'react-fast-marquee';
import { testimonialsData } from '../data/TestimonialsData';
import TestimonialCard from './TestimonialCard';
import SectionTitle from './SectionTitle';

export default function Testimonials() {
  // Dividimos los testimonios en dos grupos
  const mitad = Math.ceil(testimonialsData.length / 2);
  const fila1 = testimonialsData.slice(0, mitad);
  const fila2 = testimonialsData.slice(mitad);

  return (
    <div className="container my-5">
      <SectionTitle text="Testimonios de Estudiantes" />

      {/* 🧩 Fila 1: se mueve hacia la izquierda (por defecto) */}
      <div className="row justify-content-center mb-4">
        <div className="col-12">
          <Marquee gradient={true} speed={25}>
            <div className="d-flex gap-4">
              {fila1.map((testimonial, index) => (
                <div key={index} style={{ minWidth: '250px' }}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      {/* 🧩 Fila 2: se mueve hacia la derecha */}
      <div className="row justify-content-center">
        <div className="col-12">
          <Marquee gradient={true} speed={25} direction="right">
            <div className="d-flex gap-4">
              {fila2.map((testimonial, index) => (
                <div key={index} style={{ minWidth: '250px' }}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
