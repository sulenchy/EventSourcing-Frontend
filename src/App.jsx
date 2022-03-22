import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Login, Register, EventList, EventView, NewEvent } from './components';
import { Routes, Route } from 'react-router-dom';

function app() {
  return (
      <>
        <Header />
        <Routes>
          <Route index element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="events" element={<EventList />} />
          <Route path="event/:id" element={<EventView />} />
          <Route path="event/new" element={<NewEvent />} />
        </Routes>
        <Footer />
      </>
  )
}

export default app