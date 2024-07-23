import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function AddFormReservation() {

  const params = useParams()

  const [dates, setDates] = useState("")
  const [quantityDogs, setQuantityDogs] = useState("")
  const [dogsName, setDogsName] = useState("")
  const [dogsSize, setDogsSize] = useState("")
  const [dogsAge, setDogsAge] = useState("")
  const [dogsAlergies, setDogsAlergies] = useState(true)
  const [ownFood, setOwnFood] = useState(true)
  const [aditionalNotes, setAditionalNotes] = useState("")
  const [ownersName, setOwnersName] = useState("")
  const [email, SetEmail] = useState("")
  const [phone, setPhone] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault();

  const newReservation ={
    dates: dates,
    quantityDogs: quantityDogs,
    dogName: dogsName,
    dogSize: dogsSize,
    dogAge: dogsAge,
    dogAlergies: dogsAlergies,
    ownFood: ownFood,
    aditionalNotes: aditionalNotes,
    ownersName: ownersName,
    email: email,
    phone: phone,
    hostId: Number(params.hostId)
  }
  



}

  return (
    <div>

      add..


    </div>
  )
}

export default AddFormReservation