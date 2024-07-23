import React from 'react'
import { Link } from 'react-router-dom'

function ReservationCard(props) {

    const { id, dates, dogName, dogSize, dogAge, additionalNotes, ownerName, hostId } = props.eachReservation

  return (
    <div>
        <Link to={`/reservas/${id}`}><h3>{dogName}</h3></Link>
        <p>{dates}</p>
        <p>{dogAge}</p>
        <p>{dogSize}</p>
        <p>{additionalNotes}</p>
        <p>{ownerName}</p>
        <Link to={`/hosts/${hostId}`}><button>Ver detalles de host</button></Link>
    </div>
  )
}

export default ReservationCard