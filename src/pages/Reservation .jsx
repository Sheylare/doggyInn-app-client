import React, { useState } from "react";
import AddFormReservation from "../components/AddFormReservation";


function Reservation() {

 const {reservation, setReservation} = useState("")

  return (
    <div>
      <AddFormReservation reservation={reservation} setReservation={setReservation}/>
    </div>
  );
}

export default Reservation;
