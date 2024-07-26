import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from "react-router-dom";
import paseo from "../assets/paseo.jpg";
import veterinaria from "../assets/veterinaria.jpg";
import dogPic from "../assets/dogPic.jpg";

function HomePage() {
  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <h1>
            <b>DOGGY INN</b>
          </h1>
          <h5>
            Doggy Inn is the perfect app for dog owners looking for reliable and
            experienced caregivers. Find vetted caregivers in your area who will
            provide your pet with the best care, from daily walks to vacation
            care. Download Doggy Inn today and ensure your best friend is in
            good hands!
          </h5>
          <Link to="/buscar-hosts">
            <Button variant="outline-light">Search Host</Button>
          </Link>
        </div>
      </div>

      <div className="reserva">
        <h2>
          <b>Steps to search a place for my dog</b>
        </h2>
      </div>

      <div className="pasos">
        <div className="step-card">
          <h3>
            <b>Step 1:</b>
          </h3>
          <p>Search for a host near you</p>
        </div>
        <div className="step-card">
          <h3>
            <b>Step 2:</b>
          </h3>
          <p>
            Once you have chosen the caregiver of your choice, fill in the form
            to confirm your reservation.
          </p>
        </div>
        <div className="step-card">
          <h3>
            <b>Step 3:</b>
          </h3>
          <p>
            Relax and enjoy your trip with peace of mind knowing that your best
            friend is well cared for.
          </p>
        </div>
      </div>
      <div className="servicio-text">
        <h2>
          <b>Doggie Services</b>
        </h2>
      </div>
      <div className="servicios">
        <div className="servicio-card">
          <img src={dogPic} alt="img-dog" width="100%" />
          <p>Daily photos to make sure your doggy is doing well</p>
        </div>
        <div className="servicio-card">
          <img src={veterinaria} alt="img-dog" width="100%" />
          <p>Full veterinary coverage</p>
        </div>
        <div className="servicio-card">
          <img src={paseo} alt="img-dog" width="100%" />
          <p>Walk at least 3 times a day</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
