import React from 'react'
import { Link } from 'react-router-dom'
import perro from "../assets/lab-puppy-silhouette.png"


function ReservationCard(props) {

    const { id, dates, dogName, dogSize, dogAge, additionalNotes, ownerName, hostId } = props.eachReservation

  return (
    <div className='reserve-card'>
        <Link to={`/reservas/${id}`}><h3>{dogName}</h3></Link>
        <p>{dates}</p>
        <p>{dogAge}</p>
        <p>{dogSize}</p>
        <h6>Dueño/a:</h6>
        <p>{ownerName}</p>
        <h6>Observaciones:</h6>
        <p>{additionalNotes}</p>
        <img src={perro} alt="silueta" width="100px" />
        <Link to={`/hosts/${hostId}`}><button>Ver detalles de host</button></Link>
    </div>
  )
}

export default ReservationCard