import React, { useEffect, useState } from 'react'
import axios from "axios"
import HostCard from '../components/HostCard'

function HostsList() {

const [hosts, setHosts] = useState(null)

useEffect(() => {

  axios.get(`${import.meta.env.VITE_SERVER_URL}/hosts`)
  .then((response) => {
    setHosts(response.data)
  })
  .catch((error) => {

  })

},[])

if (hosts === null) {
  return <h2>... Buscando hosts</h2>
}

  return (
    <div>
{hosts.map((eachHost) => {
  return (
    <HostCard key={eachHost.id} eachHost={eachHost} />
  )
})}

    </div>
  )
}

export default HostsList