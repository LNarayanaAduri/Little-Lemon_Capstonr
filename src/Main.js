import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './Homepage';
import BookingPage from './Bookingpage';
import ConfirmedBooking from './ConfirmedBooking';
import Menu from './Menu';
import OrderOnline from './OrderOnline';
import Login from './Login';
import PlaceholderPage from './PlaceholderPage';

const initializeTimes = () => {
  const today = new Date();
  return window.fetchAPI ? window.fetchAPI(today) : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      const selectedDate = new Date(action.date);
      return window.fetchAPI ? window.fetchAPI(selectedDate) : state;
    }
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (window.submitAPI && window.submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/booking" 
          element={
            <BookingPage 
              availableTimes={availableTimes} 
              dispatch={dispatch} 
              submitForm={submitForm} 
            />
          } 
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/about" 
          element={
            <PlaceholderPage 
              title="About Little Lemon" 
              description="Learn about our rich culinary heritage, authentic Mediterranean recipes, and our Chicago founders, Mario and Adrian." 
            />
          } 
        />
        <Route 
          path="*" 
          element={
            <PlaceholderPage 
              title="Page Not Found" 
              description="The page you requested could not be found. Please check the URL or return to our homepage." 
            />
          } 
        />
      </Routes>
    </main>
  );
}

export { initializeTimes, updateTimes };
export default Main;
