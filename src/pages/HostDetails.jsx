import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Reservation from "./Reservation ";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

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
      console.log(response.data);
      setHost(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (host === null) {
    return <h2>... Buscando Host</h2>;
  }

  return (
    <div>
      <h3>Detalles del Host Seleccionado</h3>
      <p>{host.name}</p>
      <p>{host.description}</p>
      <p>{host.city}</p>
      <p>{host.email}</p>
      <p>{host.mobile}</p>
      <p>{host.price}</p>
      <MapContainer center={host.address} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={host.address}></Marker>
      </MapContainer>

      <Link to={`/hosts/${host.id}/reserva`} element={<Reservation />}>
        <button>Reservar</button>
      </Link>
    </div>
  );
}

export default HostDetails;
