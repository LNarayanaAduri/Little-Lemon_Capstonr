import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from './images/restauranfood.jpg';
import greekSalad from './images/greek salad.jpg';
import bruschetta from './images/bruchetta.svg';
import lemonDessert from './images/lemon dessert.jpg';

function HomePage() {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          <article className="hero-article">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="hero-desc">
              We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
              Join us for fresh ingredients, warm Mediterranean hospitality, and memorable flavors.
            </p>
            <div className="hero-cta-group">
              <Link to="/booking" className="btn-reserve" aria-label="On Click">
                Reserve a Table
              </Link>
              <Link to="/menu" className="btn-secondary" aria-label="On Click">
                View Online Menu
              </Link>
            </div>
          </article>
          <div className="hero-image-container">
            <img 
              src={heroImage} 
              alt="Mediterranean dishes served at Little Lemon" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Highlights / Specials Section */}
      <section className="specials-section">
        <div className="specials-header">
          <h2>This Week's Specials!</h2>
          <Link to="/menu" className="btn-primary" aria-label="On Click">
            Online Menu
          </Link>
        </div>
        <div className="specials-grid">
          <article className="special-card">
            <img src={greekSalad} alt="Fresh Greek Salad" className="special-img" />
            <div className="special-content">
              <div className="special-title-price">
                <h3>Greek Salad</h3>
                <span className="price">$12.99</span>
              </div>
              <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese.</p>
              <Link to="/order-online" className="order-link" aria-label="On Click">
                Order a delivery 🛵
              </Link>
            </div>
          </article>

          <article className="special-card">
            <img src={bruschetta} alt="Delicious Bruschetta" className="special-img" />
            <div className="special-content">
              <div className="special-title-price">
                <h3>Bruschetta</h3>
                <span className="price">$7.99</span>
              </div>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with olive oil.</p>
              <Link to="/order-online" className="order-link" aria-label="On Click">
                Order a delivery 🛵
              </Link>
            </div>
          </article>

          <article className="special-card">
            <img src={lemonDessert} alt="Homemade Lemon Dessert" className="special-img" />
            <div className="special-content">
              <div className="special-title-price">
                <h3>Lemon Dessert</h3>
                <span className="price">$5.00</span>
              </div>
              <p>This comes straight from grandma's recipe book, every last ingredient sourced authentically.</p>
              <Link to="/order-online" className="order-link" aria-label="On Click">
                Order a delivery 🛵
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
