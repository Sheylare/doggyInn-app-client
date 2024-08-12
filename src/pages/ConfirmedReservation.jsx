import React from "react";
import { Link } from "react-router-dom";

function ConfirmedReservation() {
  return (
    <div className="confirmation">
      <h2>The reserve is completed!</h2>
      <br />
      <Link to={"/reservas"}>
        <button>All reservations</button>
      </Link>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
}

export default ConfirmedReservation;
