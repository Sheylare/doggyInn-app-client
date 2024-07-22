import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

function HostDetails() {

  const params = useParams()

  const [host, setHost] = useState(null)

  useEffect(() => {

    getHost()

  },[])

  const getHost = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/hosts/${params.hostId}`)
      console.log(response.data)
      setHost(response.data)
    } catch (error) {
      
    }

  }

  if (host === null) {
    return <h2>... Buscando Host</h2>
  }

  return (
    <div>

      <h3>Detalles del Host Seleccionado</h3>

      <p>{host.name}</p>
      <p>{host.description}</p>
      <p>{host.city}</p>
      <p>{host.adress}</p>
      <p>{host.email}</p>
      <p>{host.mobile}</p>
      <p>{host.price}</p>

      <button>Reservar</button>


    </div>
  )
}

export default HostDetails