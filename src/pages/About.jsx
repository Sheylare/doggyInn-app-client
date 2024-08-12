import React from "react";
import dog1 from "../assets/mufasa.jpg"
import dog2 from "../assets/milka.jpg"
import dog3 from "../assets/gorda.jpg"


function About() {
  return (
    <div>
      <h2><b>Sobre Doggy Inn</b></h2>
      <br />
      <div className="about-us">
        <p>
          Doggy Inn es la app ideal para encontrar cuidadores de perros
          confiables y amorosos. Diseñada pensando en las necesidades tanto de
          los dueños de mascotas como de los cuidadores, nuestra plataforma hace
          que el cuidado de tu perro sea fácil y seguro.
        </p>
        <p>
          Creada con pasión y dedicación, Doggy Inn es el resultado del esfuerzo
          de tres talentosos desarrolladores junior: Mufasa, Milka y Gorda.
          Juntos, han construido una herramienta que conecta a los dueños de
          perros con cuidadores verificados y apasionados, asegurando que tu
          amigo peludo reciba el mejor cuidado posible mientras estás fuera.
        </p>
      </div>

      <div>
        <img src={dog1} alt=""  width="100px"/>
        <img src={dog2} alt=""  width="100px"/>
        <img src={dog3} alt=""  width="100px"/>
       
      </div>
    </div>
  );
}

export default About;
