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
    return <h2>... Searching reservation</h2>;
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
