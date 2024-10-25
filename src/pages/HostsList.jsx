import React, { useEffect, useState } from "react";
import axios from "axios";
import HostCard from "../components/HostCard";

function HostsList() {

  const [hosts, setHosts] = useState(null)

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/hosts`)
      .then((response) => {
        console.log(response.data)
        setHosts(response.data);
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  if (hosts === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading Data</span>
        <h3>This is taking a bit longer than usual, hang tight…</h3>
      </Spinner>
    );
  }

  return (
    <div>
      {hosts.map((eachHost) => {
        return <HostCard key={eachHost.id} eachHost={eachHost} />;
      })}
    </div>
  );
}

export default HostsList;
