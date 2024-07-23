import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function AddFormReservation(props) {
  const params = useParams();
  const navigate = useNavigate()

  const [dates, setDates] = useState("");
  const [quantityDogs, setQuantityDogs] = useState("");
  const [dogName, setDogName] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [dogAge, setDogAge] = useState("");
  const [dogAllergies, setDogAllergies] = useState(false);
  const [ownFood, setOwnFood] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [ownersName, setOwnersName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReservation = {
      dates,
      quantityDogs,
      dogName,
      dogSize,
      dogAge,
      dogAllergies,
      ownFood,
      additionalNotes,
      ownersName,
      email,
      phone,
      hostId: Number(params.hostId),
    };
    console.log(newReservation);
    
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/reservations`, newReservation)
      navigate(`/hosts/${params.hostId}/reserva-completada`)
    } catch(error) {
      console.log(error)
    }

  };

  return (
    <div>
      <h2>Reservar</h2>
      <form onSubmit={handleSubmit}>
        <label>Which dates?</label>
        <input
        type="text"
        name="From"
        value={dates}
        onChange={(e) => setDates(e.target.value)}>
        </input>

        <label>How many dogs?</label>
        <input
        type="number"
        name="Number of dogs"
        value={quantityDogs}
        onChange={(e) => setQuantityDogs(e.target.value)}>
        </input>

        <label>Name of your dog</label>
        <input
        type="number"
        name="Brownie"
        value={dogName}
        onChange={(e) => setDogName(e.target.value)}>
        </input>

        <label>Size of your dog</label>
        <input
        type="text"
        name="Small/Medium/Large"
        value={dogSize}
        onChange={(e) => setDogSize(e.target.value)}>
        </input>

        <label>Age of your dog</label>
        <input
        type="number"
        name="1"
        value={dogAge}
        onChange={(e) => setDogAge(e.target.value)}>
        </input>

        <label>Allergies?</label>
        <input
        type="checkbox"
        name="Allergies"
        value={dogAllergies}
        onChange={(e) => setDogAllergies(e.target.value)}>
        </input>

        <label>I take my dog's food</label>
        <input
        type="checkbox"
        name="I take my dog's food"
        value={ownFood}
        onChange={(e) => setOwnFood(e.target.value)}>
        </input>

        <label>Aditional notes</label>
        <input
        type="text"
        name="Aditional notes"
        value={additionalNotes}
        onChange={(e) => setAdditionalNotes(e.target.value)}>
        </input>

        <label>Owner's Name</label>
        <input
        type="text"
        name="John"
        value={ownersName}
        onChange={(e) => setOwnersName(e.target.value)}>
        </input>

        <label>Owner's Phone</label>
        <input
        type="text"
        name="+01 234 567 890"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}>
        </input>

        <label>Owner's Email Address</label>
        <input
        type="text"
        name="john@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}>
        </input>

        <Button variant="primary" type="submit">Reserve</Button>{" "}
      </form>
    </div>
  );
}

export default AddFormReservation;
