import React from 'react';
import { Link } from 'react-router-dom';

function PlaceholderPage({ title, description }) {
  return (
    <section className="placeholder-page" style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <span style={{ fontSize: '3.5rem' }} role="img" aria-label="Lemon">
        🍋
      </span>
      <h1 style={{ marginTop: '1rem' }}>{title}</h1>
      <p style={{ fontSize: '1.2rem', margin: '1rem 0 2rem', color: '#555' }}>
        {description || 'This section is currently under development. Please check back soon or book a table with us today!'}
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/booking" className="btn-primary" aria-label="On Click">
          Reserve a Table
        </Link>
        <Link to="/" className="btn-secondary" aria-label="On Click">
          Return to Home
        </Link>
      </div>
    </section>
  );
}

export default PlaceholderPage;

