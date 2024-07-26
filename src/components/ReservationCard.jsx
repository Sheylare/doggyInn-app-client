import { React } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import perro from "../assets/lab-puppy-silhouette.png";
import axios from "axios";

function ReservationCard(props) {

 

  const {
    id,
    dates,
    dogName,
    dogSize,
    dogAge,
    additionalNotes,
    ownersName,
    hostId,
    host
  } = props.eachReservation;


  const deleteReservation = async () => {
    console.log("tratando de borrar")
    try {
      await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/reservations/${id}`
      )
      props.getData()
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="reserve-card">
      <Link to={`/reservas/${id}`}>
        <h3>{dogName}</h3>
      </Link>
      <h6>Dates:</h6>
      <p>{dates}</p>
      <h6>Dog's Age:</h6>
      <p>{dogAge}</p>
      <h6>Dog Size:</h6>
      <p>{dogSize}</p>
      <h6>Owner's Name:</h6>
      <p>{ownersName}</p>
      <h6>Additional Notes:</h6>
      <p>{additionalNotes}</p>
      <img src={perro} alt="silueta" width="100px" />
      <Link to={`/hosts/${hostId}`}>
        <button>
        Host Name: {host.name}
        </button>
      </Link>
      <br />
      <Button onClick={deleteReservation} variant="primary" type="button">
        Delete Reservation
      </Button>{" "}
    </div>
  );
}

export default ReservationCard;
