import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";


function Reservation() {

  const params = useParams()

  return (
    <div>
      <h2>Reservar</h2>
      <Form>
        <Form.Group className="mb-3" controlId="dates">
          <Form.Label>Which dates?</Form.Label>
          <Form.Control type="email" placeholder="From"/>
          <Form.Control type="email" placeholder="Until"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="quantity">
         <Form.Label>How many dogs?</Form.Label>
          <Form.Control type="email" placeholder="1" />
          <Form.Control type="email" placeholder="2" />
          <Form.Control type="email" placeholder="3+" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name of your dog</Form.Label>
          <Form.Control type="email" placeholder="Brownie"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="size">
         <Form.Label>Size of your dog</Form.Label>
          <Form.Control type="email" placeholder="Small" />
          <Form.Control type="email" placeholder="Medium" />
          <Form.Control type="email" placeholder="Large" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="size">
         <Form.Label>Age of your dog</Form.Label>
          <Form.Control type="email" placeholder="0-1" />
          <Form.Control type="email" placeholder="1-3" />
          <Form.Control type="email" placeholder="3-6" />
          <Form.Control type="email" placeholder="6+" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="alergies">
        <Form.Label>Alergies?</Form.Label>
        <Form.Control as="textarea" rows={3} />
        </Form.Group>
        {['checkbox'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={"I take my dog's food"}/>
          </div>
        ))}
        <Form.Group className="mb-3" controlId="aditional-notes">
        <Form.Label>Aditional notes</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="owner-info">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="John"/>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="John@example.com"/>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="email" placeholder="+01 234-567-890"/>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Reservation;
