import Button from 'react-bootstrap/Button';
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="intro">
        <div className="home-text">
          <h1>
            <b>DOGGY INN</b>
          </h1>
          <p>
            Doggy Inn es la app perfecta para dueños de perros que buscan
            cuidadores confiables y experimentados. Encuentra cuidadores
            seleccionados en tu área que brindarán a tu mascota la mejor
            atención, desde paseos diarios hasta cuidados durante las
            vacaciones. ¡Descarga Doggy Inn hoy y asegúrate de que tu mejor
            amigo esté en buenas manos!
          </p>
          <Link to="/buscar-hosts">
            <Button variant="outline-light">Search Host</Button>
          </Link>
        </div>
      </div>

      <div className="reserva">
        <h2>
          <b>¿CÓMO RESERVAR?</b>
        </h2>
      </div>

      <div className="pasos">
        <div className="step-card">
          <h3>
            <b>PASO 1:</b>
          </h3>
          <p>Busca un host cerca de tu localización</p>
        </div>
        <div className="step-card">
          <h3>
            <b>PASO 2:</b>
          </h3>
          <p>
            Una vez que elijas al cuidador de tu confianza, completa el
            formulario para confirmar tu reserva
          </p>
        </div>
        <div className="step-card">
          <h3>
            <b>PASO 3:</b>
          </h3>
          <p>
            Relajate y disfruta de tu viaje con la tranquilidad de saber que tu
            mejor amigo está bien cuidado
          </p>
        </div>
      </div>
      <div className='servicio-text'>
        <h2>Servicios para tus Perritos</h2>
        </div>
      <div className='servicios'>
      <div className='servicio-card'>
        <p>fotos diarias para asegurarte de que tu  perrito esta bien</p>
      </div>
      <div className='servicio-card'>
        <p>cobertura total en veterinaria</p>
      </div>
      <div className='servicio-card'>
        <p>paseos minimo 3 veces al día</p>
      </div>
      </div>
     
    </div>
  );
}

export default HomePage;
