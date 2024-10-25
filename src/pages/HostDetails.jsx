import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Reservation from "./Reservation ";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Spinner } from "react-bootstrap";

function HostDetails() {
  const params = useParams();
  const [host, setHost] = useState(null);

  useEffect(() => {
    getHost();
  }, []);

  const getHost = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/hosts/${params.hostId}`
      );
      
      setHost(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (host === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading Data</span>
        <h3>This is taking a bit longer than usual, hang tight…</h3>
      </Spinner>
    );
  }

  return (
      <div className="host-details-container">
        <div className="host-info-details">
          <h3>Details of the selected Host</h3>
          <br />
          <p><b>Name: </b>{host.name}</p>
          <p><b>Description: </b> {host.description}</p>
          <p><b>City: </b>{host.city}</p>
          <p><b>Email: </b>{host.email}</p>
          <p><b>Phone: </b>{host.mobile}</p>
          <p><b>Price: </b>{host.price}€</p>
          <Link to={`/hosts/${host.id}/reserva`} element={<Reservation />}>
            <button>Reserve</button>
          </Link>
        </div>
        <div className="host-details-map">
          <MapContainer center={host.address} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={host.address}></Marker>
          </MapContainer>

        </div>
      </div>
  );
}

export default HostDetails;
