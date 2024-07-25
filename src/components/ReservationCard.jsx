import { React, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import perro from "../assets/lab-puppy-silhouette.png";
import axios from "axios";

function ReservationCard(props) {
  const navigate = useNavigate();
  const params = useParams();

  //const [host, setHost] = useState(null);

  const {
    id,
    dates,
    dogName,
    dogSize,
    dogAge,
    additionalNotes,
    ownerName,
    hostId,
    host
  } = props.eachReservation;

  const deleteReservation = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/reservations/${params.reservaId}`
      );
      navigate("/reservas");
    } catch (error) {
      console.log(error);
    }
  };

  /*useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/hosts/${hostId}`)
      .then((response) => {
        setHost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);*/

  /*if (host === null) {
    return <h2>... Buscando hosts</h2>;
  }*/

  return (
    <div className="reserve-card">
      <Link to={`/reservas/${id}`}>
        <h3>{dogName}</h3>
      </Link>
      <p>{dates}</p>
      <p>{dogAge}</p>
      <p>{dogSize}</p>
      <h6>Dueño/a:</h6>
      <p>{ownerName}</p>
      <h6>Observaciones:</h6>
      <p>{additionalNotes}</p>
      <img src={perro} alt="silueta" width="100px" />
      <Link to={`/hosts/${hostId}`}>
        <button>
        {host.name}
        </button>
      </Link>
      <Button onClick={deleteReservation} variant="primary" type="button">
        Delete Reservation
      </Button>{" "}
    </div>
  );
}

export default ReservationCard;
