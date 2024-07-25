import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LocationPicker from "../components/locationHost";

function HostRegistration() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState([0, 0]);
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");

  const handleLocationChange = (location) => {
    setAddress([location.lat, location.lng]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newHost = {
      name: name,
      city: city,
      address: address,
      description: description,
      email: email,
      phone: phone,
      price: price,
    };

    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/hosts`, newHost);

      navigate("/hosts");
    } catch (error) {}
  };

  return (
    <Container>
      <h3 className="my-4">Add Host</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress">
          <Form.Label>Address (Latitude, Longitude)</Form.Label>
          <Form.Control
            type="text"
            value={`Lat: ${address[0]}, Lng: ${address[1]}`}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridLocation">
          <Form.Label>Select Location</Form.Label>
          <LocationPicker onLocationChange={handleLocationChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>{" "}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default HostRegistration;
