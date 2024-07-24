import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function AddFormReservation(props) {
  const params = useParams();
  const navigate = useNavigate();

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
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/reservations`,
        newReservation
      );
      navigate(`/hosts/${params.hostId}/reserva-completada`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-form">
      <h2>Make your reservation</h2>
      <p>Please fill out the form below to make your reservation</p>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="dates">
            <Form.Label>Which dates?</Form.Label>
            <Form.Control
              type="text"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
            />{" "}
          </Form.Group>

          <Form.Group className="mb-3" controlId="quantityDogs">
            <Form.Label>How many dogs?</Form.Label>
            <Form.Control
              type="number"
              name="Number of dogs"
              value={quantityDogs}
              onChange={(e) => setQuantityDogs(e.target.value)}
            />{" "}
          </Form.Group>

          <Form.Group className="mb-3" controlId="dogName">
            <Form.Label>Name of your dog</Form.Label>
            <Form.Control
              type="number"
              name="Brownie"
              value={dogName}
              onChange={(e) => setDogName(e.target.value)}
            />{" "}
          </Form.Group>

          <Form.Group className="mb-3" controlId="dogSize">
            <Form.Label>Size of your dog</Form.Label>
            <Form.Control
              type="text"
              name="Small/Medium/Large"
              value={dogSize}
              onChange={(e) => setDogSize(e.target.value)}
            />{" "}
          </Form.Group>

          <Form.Group className="mb-3" controlId="dogAge">
            <Form.Label>Age of your dog</Form.Label>
            <Form.Control
              type="number"
              name="1"
              value={dogAge}
              onChange={(e) => setDogAge(e.target.value)}
            />{" "}
          </Form.Group>
     
          <div className="allergies-ownFood">
            <Form.Group className="mb-3" controlId="dogAllergies">
              <Form.Label>Any allergies?</Form.Label>
              <Form.Check
                type="checkbox"
                name="Allergies"
                value={dogAllergies}
                onChange={(e) => setDogAllergies(e.target.value)}
              />{" "}
            </Form.Group>

            <Form.Group className="mb-3" controlId="ownFood">
              <Form.Label>I take my dog's food</Form.Label>
              <Form.Check
                type="checkbox"
                name="I take my dog's food"
                value={ownFood}
                onChange={(e) => setOwnFood(e.target.value)}
              />{" "}
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="ownersName">
            <Form.Label>Owner's Name</Form.Label>
            <Form.Control
              type="text"
              name="John"
              value={ownersName}
              onChange={(e) => setOwnersName(e.target.value)}
            />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Owner's Phone</Form.Label>
            <Form.Control
              type="text"
              name="+01 234 567 890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Owner's Email Address</Form.Label>
            <Form.Control
              type="text"
              name="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
          </Form.Group>
          <Form.Group className="mb-3" controlId="additionalNotes">
            <Form.Label>Aditional notes</Form.Label>
            <Form.Control
              type="text"
              name="Aditional notes"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
            />{" "}
          </Form.Group>
    
        <Button variant="primary" type="submit">
          Reserve
        </Button>{" "}
      </Form>
    </div>
  );
}

export default AddFormReservation;
