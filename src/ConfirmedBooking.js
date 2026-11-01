import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking" style={{ padding: '3rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <div className="confirmation-badge" style={{ fontSize: '3.5rem', color: '#495e57', marginBottom: '1rem' }} aria-hidden="true">
        ✓
      </div>
      <h1>Booking Confirmed!</h1>
      <p style={{ fontSize: '1.2rem', margin: '1rem 0 2.5rem', color: '#333333' }}>
        Your table has been successfully reserved. A confirmation receipt has been recorded. We look forward to seeing you at Little Lemon!
      </p>
      <div className="confirmation-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn-primary" aria-label="On Click">
          Return to Home
        </Link>
        <Link to="/booking" className="btn-secondary" aria-label="On Click">
          Reserve Another Table
        </Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
