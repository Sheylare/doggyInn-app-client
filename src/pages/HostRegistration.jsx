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
    <div>
      <h3>Add Host</h3>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>Address (Latitud, Longiyud):</label>{" "}
        <input
          type="text"
          name="address"
          value={address.join(",")}
          onChange={(e) => setAddress(e.target.value)}
          readOnly
        />{" "}
        
        <div>
          <label>Select Location:</label>{" "}
          <LocationPicker onLocationChange={handleLocationChange} />
        </div>

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HostRegistration;
