import axios from 'axios'
import React, { useEffect } from 'react'
import ReservationCard from '../components/ReservationCard'
import { useParams } from 'react-router-dom';

function ReservationsList(props) {
  const {reservations, setReservations} = props
  console.log (reservations)

  useEffect(() => {
    axios
    .get(`${import.meta.env.VITE_SERVER_URL}/reservations`)
    .then((response) => {
      setReservations(response.data)
    })
    .catch((error) => {console.log(error)})
  }, [])

  if (reservations === null){
    return <h2>... Searching reservation</h2>;
  }

  return (
    <div>
      {reservations.map((eachReservation) => {
        return <ReservationCard key={eachReservation.id} eachReservation={eachReservation}/>
      })}
    </div>
  )
}

export default ReservationsList