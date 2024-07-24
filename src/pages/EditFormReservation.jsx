import axios from 'axios'
import React, { useEffect, useState, navigate } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';



function EditFormReservation() {
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
    <div className='edit-form'>
    <h2>Reservation Details</h2>
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="dates">
        <Form.Label>Which dates?</Form.Label>
        <Form.Control
          type="text"
          name="From"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="quantityDogs">
        <Form.Label>How many dogs?</Form.Label>
        <Form.Control
          type="number"
          name="Number of dogs"
          value={quantityDogs}
          onChange={(e) => setQuantityDogs(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dogName">
        <Form.Label>Name of your dog</Form.Label>
        <Form.Control
          type="text"
          name="Brownie"
          value={dogName}
          onChange={(e) => setDogName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dogSize">
        <Form.Label>Size of your dog</Form.Label>
        <Form.Control
          type="text"
          name="Small/Medium/Large"
          value={dogSize}
          onChange={(e) => setDogSize(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dogAge">
        <Form.Label>Age of your dog</Form.Label>
        <Form.Control
          type="number"
          name="1"
          value={dogAge}
          onChange={(e) => setDogAge(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="dogAllergies">
        <Form.Label>Allergies?</Form.Label>
        <Form.Check
          type="checkbox"
          name="Allergies"
          checked={dogAllergies}
          onChange={(e) => setDogAllergies(e.target.checked)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="ownFood">
        <Form.Label>I take my dog's food</Form.Label>
        <Form.Check
          type="checkbox"
          name="I take my dog's food"
          checked={ownFood}
          onChange={(e) => setOwnFood(e.target.checked)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="additionalNotes">
        <Form.Label>Aditional notes</Form.Label>
        <Form.Control
          type="text"
          name="Aditional notes"
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="ownersName">
        <Form.Label>Owner's Name</Form.Label>
        <Form.Control
          type="text"
          name="John"
          value={ownersName}
          onChange={(e) => setOwnersName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Owner's Phone</Form.Label>
        <Form.Control
          type="text"
          name="+01 234 567 890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Owner's Email Address</Form.Label>
        <Form.Control
          type="email"
          name="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">Update Reservation</Button>{' '}
    </Form>
    <Button onClick={deleteReservation} variant="primary" type="button">Delete Reservation</Button>{' '}
  </div>
  )
}

export default EditFormReservation