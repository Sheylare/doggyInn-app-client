import axios from "axios";
import React, { useEffect, useState } from "react";
import ReservationCard from "../components/ReservationCard";

function ReservationsList() {
  const [reservations, setReservations] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/reservations?_expand=host`)
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (reservations === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading Reservation</span>
        <h3>This is taking a bit longer than usual, hang tight…</h3>
      </Spinner>
    );
  }

  return (
    <div className="reservation-list-container">
      {reservations.map((eachReservation) => {
        return (
          <ReservationCard
            key={eachReservation.id}
            eachReservation={eachReservation}
            getData={getData}
          />
        );
      })}
    </div>
  );
}

export default ReservationsList;
