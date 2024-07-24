import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MyNavbar from "./components/myNavbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import SearchHosts from "./pages/SearchHosts";
import HostsList from "./pages/HostsList";
import HostDetails from "./pages/HostDetails";
import Reservation from "./pages/Reservation ";
import ConfirmedReservation from "./pages/ConfirmedReservation";
import ReservationDetails from "./pages/ReservationDetails";
import ReservationsList from "./pages/ReservationsList";
import HostRegistration from "./pages/HostRegistration";
import NotFound from "./pages/NotFound ";





function App() {

  const [reservations, setReservations] = useState(null)

  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/buscar-hosts" element={<SearchHosts/>} />
        <Route path="/hosts" element={<HostsList />} />
        <Route path="/hosts/:hostId" element={<HostDetails />} />
        <Route path="/hosts/:hostId/reserva" element={<Reservation />} />
        <Route path="/hosts/:hostId/reserva-completada" element={<ConfirmedReservation />}/>
        <Route path="/reservas/:reservaId" element={<ReservationDetails reservations={reservations} setReservations={setReservations}/>}/>
        <Route path="/reservas" element={<ReservationsList reservations={reservations} setReservations={setReservations} />} />
        <Route path="/registrar-host" element={<HostRegistration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
