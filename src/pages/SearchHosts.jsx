import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

function SearchHosts() {
  const [queries, setQueries] = useSearchParams();
  const city = queries.get("city");
  console.log(city);

  const [center, setCenter] = useState([40.463667, -3.74922]); // coordenadas de vista predeterminada

  const [hosts, setHosts] = useState(null);
  //console.log(hosts)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/hosts`)
      .then((response) => {
        setHosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (hosts === null) {
    return <h2>... Buscando hosts</h2>;
  }

  const handleChangeCity = (e) => {
    if (e.target.value === "") {
      setQueries();
    } else {
      setQueries({ city: e.target.value });
    }
  };

  return (
    <div className="search-host-container">
      <h2>Search a host in your city</h2>
      <div id="search-bar">
        <Form>
          <Form.Control
            onChange={handleChangeCity}
            type="city"
            placeholder="Search..."
          />
        </Form>
      </div>
      <div className="search-host-map">
        <MapContainer center={center} zoom={6.3} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {hosts
            .filter((eachHost) => {
              if (city === null) {
                return true;
              } else {
                return eachHost.city.toLowerCase().includes(city.toLowerCase());
              }
            })
            .map((eachHost) => {
              return (
                <Marker key={eachHost.id} position={eachHost.address}>
                  <Popup>
                    <Link to={`/hosts/${eachHost.id}`}>
                      <p>
                        Name: <b>{eachHost.name}</b>
                      </p>
                    </Link>
                    <p>
                      Price: <b>{eachHost.price}€</b>
                    </p>
                    <p>
                      <b>{eachHost.city}</b>
                    </p>
                  </Popup>
                </Marker>
              );
            })}
        </MapContainer>
      </div>

      <Link to="/hosts">
        <Button variant="primary" type="submit">
          Ver lista de hosts
        </Button>
      </Link>
    </div>
  );
}

export default SearchHosts;
