import React from 'react';
import { Link } from 'react-router-dom';
import BookingForm from './Bookingform';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <nav className="booking-breadcrumb" aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
        <Link to="/" className="back-link" aria-label="On Click" style={{ color: 'var(--primary-green)', textDecoration: 'none', fontWeight: 600 }}>
          ← Back to Home
        </Link>
      </nav>
      <header className="booking-header" style={{ marginBottom: '2rem' }}>
        <h1>Reserve a Table</h1>
        <p>Please select your preferred date, time, and party size below. We look forward to welcoming you to Little Lemon!</p>
      </header>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
