import React, { useState } from "react";
import { Anchor } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

function SearchHosts() {
  const [center, setCenter] = useState([41.39, 2.16]); // coordenadas de vista predeterminada

  return (
    <>
      <h2>Search a host in your city</h2>
      <div id="search-bar">
        <Form>
          <Form.Control type="city" placeholder="Search..." />
          <Link to="/hosts">
            <Button variant="primary" type="submit">
            Search
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
        <MapContainer center={center} zoom={8} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* {{
          listOfDocuments.map((eachElement) => {
          return (
          <Marker position={eachElement.coordinates}>
           <Popup>
          <p>Name: <b>{eachElement.name}</b></p>
           </Popup>
           </Marker>
              );
            })
          }} */}

        </MapContainer>
      </div>
    </>
  );
}

export default SearchHosts;
