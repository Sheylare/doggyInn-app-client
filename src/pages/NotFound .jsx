import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import gif from "../assets/corgi-smirk.gif";

function NotFound() {
  return (
    <div className="not-found">
      <h2>What are you looking for?</h2>
      <p>Maybe you need some help</p>

      <img src={gif} alt="perrito" width="200px" />
      <br />
      <Link to="/">
        <Button variant="primary" type="submit">
          Home
        </Button>
      </Link>
   
    </div>
  );
}

export default NotFound;
