import axios from 'axios'
import React, { useEffect, useState, navigate } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams, Link } from 'react-router-dom'

function ReservationDetails() {
  const params = useParams()
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

  useEffect(() => {
    getReservation()
  }, [])

  const getReservation = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/reservations/${params.reservaId}`)
      console.log(response.data)
      setDates(response.data.dates)
      setQuantityDogs(response.data.quantityDogs)
      setDogName(response.data.dogName)
      setDogSize(response.data.dogSize)
      setDogAge(response.data.dogAge)
      setDogAllergies(response.data.dogAllergies)
      setOwnFood(response.data.dogAllergies)
      setAdditionalNotes(response.data.additionalNotes)
      setOwnersName(response.data.ownersName)
      setEmail(response.data.email)
      setPhone(response.data.phone)

    } catch (error) {
      console.log(error)
    }
  }


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const updatedReservation = {
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
      hostId: Number(params.hostId)
    }
    try {
      await axios.put(`${import.meta.env.VITE_SERVER_URL}/reservations/${params.reservaId}`, updatedReservation)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteReservation = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/reservations/${params.reservaId}`)
      navigate("/reservas")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Reservation Details</h2>
      <form onSubmit={handleFormSubmit}>
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

        <Link to={"/reservas"}><Button variant="primary" type="submit">Update Reservation</Button>{" "}</Link>
        </form>
        <Button onClick={deleteReservation} variant="primary" type="delete">Delete Reservation</Button>{" "}
    </div>
  )
}

export default ReservationDetails