import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="booking-page" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Reserve a Table</h1>
      <p>Please fill out the form below to reserve your table at Little Lemon.</p>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default BookingPage;