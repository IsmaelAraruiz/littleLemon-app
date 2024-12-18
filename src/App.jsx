import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Booking from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { ReservationProvider } from "./context/ReservationContext";


function App() {

  return (
    <>
      <ReservationProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/confirmed" element={<ConfirmedBooking />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ReservationProvider>
    </>
  )
}

export default App
