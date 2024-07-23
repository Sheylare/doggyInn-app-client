import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function AddFormReservation(props) {

  const params = useParams()

  const [dates, setDates] = useState("")
  const [quantityDogs, setQuantityDogs] = useState("")
  const [dogName, setDogName] = useState("")
  const [dogSize, setDogSize] = useState("")
  const [dogAge, setDogAge] = useState("")
  const [dogAllergies, setDogAllergies] = useState(false)
  const [ownFood, setOwnFood] = useState(false)
  const [additionalNotes, setAdditionalNotes] = useState("")
  const [ownersName, setOwnersName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleInputDates = (event) => setDates(event.target.value);
  const handleInputQuantity = (event) => setQuantityDogs(event.target.value);
  const handleInputDogName = (event) => setDogName(event.target.value);
  const handleInputDogSize = (event) => setDogSize(event.target.value);
  const handleInputDogAge = (event) => setDogAge(event.target.value);
  const handleInputDogAllergies = (event) => setDogAllergies(event.target.value);
  const handleInputOwnFood = (event) => setOwnFood(event.target.value);
  const handleInputAdditionalNotes = (event) => setAdditionalNotes(event.target.value);
  const handleInputOwnersName = (event) => setOwnersName(event.target.value);
  const handleInputEmail = (event) => setEmail(event.target.value);
  const handleInputPhone = (event) => setPhone(event.target.value);
 
  


const handleSubmit = async (e) => {
  e.preventDefault();

  const newReservation ={
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
  
props.setReservation([newReservation, ...props.reservation])
console.log([newReservation])
setDates("")
setQuantityDogs("")
setDogAge("")
setDogAllergies(false)
setOwnFood(false)
setAdditionalNotes("")
setOwnersName("")
setEmail("")
setPhone("")




}

  return (
    <div>

<h2>Reservar</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="dates">
          <Form.Label onChange={handleInputDates}>Which dates?</Form.Label>
          <Form.Control type="dates" placeholder="From"/>
          <Form.Control type="dates" placeholder="Until"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="quantity">
         <Form.Label onChange={handleInputQuantity}>How many dogs?</Form.Label>
          <Form.Control type="number" placeholder="1" />
          <Form.Control type="number" placeholder="2" />
          <Form.Control type="number" placeholder="3+" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label onChange={handleInputDogName}>Name of your dog</Form.Label>
          <Form.Control type="text" placeholder="Brownie"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="size">
         <Form.Label onChange={handleInputDogSize}>Size of your dog</Form.Label>
          <Form.Control type="text" placeholder="Small" />
          <Form.Control type="text" placeholder="Medium" />
          <Form.Control type="text" placeholder="Large" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="size">
         <Form.Label onChange={handleInputDogAge}>Age of your dog</Form.Label>
          <Form.Control type="number" placeholder="0-1" />
          <Form.Control type="number" placeholder="1-3" />
          <Form.Control type="number" placeholder="3-6" />
          <Form.Control type="number" placeholder="6+" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="alergies">
        <Form.Label onChange={handleInputDogAllergies}>Alergies?</Form.Label>
        <Form.Control as="textarea" rows={3} />
        </Form.Group>
        {['checkbox'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={"I take my dog's food"}
            onChange={handleInputOwnFood}/>
          </div>
        ))}
        <Form.Group className="mb-3" controlId="aditional-notes">
        <Form.Label onChange={handleInputAdditionalNotes}>Aditional notes</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="owner-info">
          <Form.Label onChange={handleInputOwnersName}>Name</Form.Label>
          <Form.Control type="text" placeholder="John"/>
          <Form.Label onChange={handleInputEmail}>Email address</Form.Label>
          <Form.Control type="email" placeholder="John@example.com"/>
          <Form.Label onChange={handleInputPhone}>Phone</Form.Label>
          <Form.Control type="text" placeholder="+01 234-567-890"/>
        </Form.Group>
        <Button variant="primary">Reserve</Button>{' '}
      </Form>


    </div>
  )
}

export default AddFormReservation