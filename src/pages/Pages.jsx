import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Signup from "./Signup";
import Signin from "./Signin";
import Payment from "./Payment";
import Homepage from "./Homepage";
import Main from"./Main";
import Booking from './Booking';
import Mansions from './Mansions';
import Search from "./Search";
import CancelBooking from "./CancelBooking"
import AdminPage from './Admin';
import Sidebar from './Sidebar';
import Dashboard from './Dashbored';
import Thanks from './Thanks';
import MapContainer from './MapContainer';
import Mansion from './Mansions';
import Farmhouses from "./Farm-houses";
import Marquees from "./Marquee";
function Pages() {
  return (
    <div>
      <Routes>
      {/* <Route path="/" element={<Admin/>} /> */}
      <Route path="/Mansion" element={<Mansions/>} />
      <Route path="/CancelBooking" element={<CancelBooking/>} />
      <Route path="/Search" element={<Search/>} />
      <Route path="/admin" element={<AdminPage/>} />
      <Route path="/" element={<Main/>} />
      <Route path="/sidebar" element={<Sidebar/>} />
      <Route path="/Map" element={<MapContainer/>} />
      <Route path="/dashboared" element={<Dashboard/>} />
      <Route path="/Booking" element={<Booking/>} />
      <Route path="/HomePage" element={<Homepage/>} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Mansion" element={<Mansion/>} />
        <Route path="/Farmhouses" element={<Farmhouses/>} />
        <Route path="/Marquees" element={<Marquees/>} />
        <Route path="/Thanks" element={<Thanks/>} />
       
      </Routes>
    </div>
  )
}

export default Pages
