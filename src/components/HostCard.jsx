import React from 'react'
import { Link } from 'react-router-dom'

function HostCard(props) {

    const {id, name, description, city,  price} = props.eachHost

  return (
    <div className="host-card">
      <Link to={`/hosts/${id}`}> <p>{name}</p> </Link>
      <p>{description}</p>
      <p>Vive en la ciudad de {city}</p>
      <p>Y su precio por dia es {price}€</p>
    </div>
  )
}

export default HostCard