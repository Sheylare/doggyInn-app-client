import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import axios from "axios";

function SearchHosts(props) {

  const [center, setCenter] = useState([40.463667, -3.74922]); // coordenadas de vista predeterminada


  const {hosts, setHosts} = props
  // console.log(hosts)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/hosts`)
      .then((response) => {
        setHosts(response.data);
      })
      .catch((error) => {});
  }, []);

  if (hosts === null) {
    return <h2>... Buscando hosts</h2>;
  }

  return (
    <>
      <h2>Search a host in your city</h2>
      <div id="search-bar">
        <Form>
          {/* <Form.Control type="city" placeholder="Search..." /> */}
          <Link to="/hosts">
            <Button variant="primary" type="submit">
            Ver lista de hosts
          </Button>
          </Link>
        </Form>
      </div>
      <div id="map">
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
          integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
          crossOrigin=""
        />
        <MapContainer center={center} zoom={6} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {hosts.map((eachHost) => {
            return (
          <Marker key={eachHost.id} position={eachHost.adress}> 
           <Popup>
           <Link to={`/hosts/${eachHost.id}`}> 
          <p>Name: <b>{eachHost.name}</b></p>
           </Link>
          <p>Price: <b>{eachHost.price}€</b></p>
           </Popup>
           </Marker>
              );
            })
          }

        </MapContainer>
      </div>
    </>
  );
}

export default SearchHosts;
