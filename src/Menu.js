import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bruschettaImg from './images/bruchetta.svg';
import greekSaladImg from './images/greek salad.jpg';
import lemonDessertImg from './images/lemon dessert.jpg';
import chickenImg from './images/restaurant chef B.jpg';
import salmonImg from './images/restauranfood.jpg';
import moussakaImg from './images/restaurant.jpg';

const menuData = [
  // Starters
  {
    id: 's1',
    name: 'Bruschetta',
    category: 'Starters',
    price: 7.99,
    description: 'Grilled artisanal bread rubbed with garlic, topped with vine-ripened tomatoes, fresh basil, and extra virgin olive oil.',
    image: bruschettaImg,
    badge: 'Popular',
    dietary: 'Vegetarian'
  },
  {
    id: 's2',
    name: 'Greek Salad',
    category: 'Starters',
    price: 12.99,
    description: 'Crisp romaine lettuce, vine tomatoes, cucumbers, Kalamata olives, and authentic feta cheese dressed with oregano vinaigrette.',
    image: greekSaladImg,
    badge: "Chef's Special",
    dietary: 'Vegetarian'
  },
  {
    id: 's3',
    name: 'Mediterranean Mezze Dip Trio',
    category: 'Starters',
    price: 9.50,
    description: 'House-made hummus, smoky baba ganoush, and cool tzatziki served with warm, hearth-baked pita bread.',
    image: salmonImg,
    badge: 'New',
    dietary: 'Vegetarian'
  },

  // Mains
  {
    id: 'm1',
    name: 'Lemon Herb Roasted Chicken',
    category: 'Mains',
    price: 18.50,
    description: 'Free-range half chicken marinated in Greek herbs, garlic, and freshly squeezed lemon, served with roasted potatoes.',
    image: chickenImg,
    badge: "Chef's Special",
    dietary: 'Gluten-Free'
  },
  {
    id: 'm2',
    name: 'Mediterranean Grilled Salmon',
    category: 'Mains',
    price: 22.00,
    description: 'Fresh wild salmon fillet char-grilled with olive oil, sea salt, and caper dill emulsion, paired with asparagus.',
    image: salmonImg,
    badge: 'Popular',
    dietary: 'Gluten-Free'
  },
  {
    id: 'm3',
    name: 'Traditional Greek Moussaka',
    category: 'Mains',
    price: 16.50,
    description: 'Layers of roasted eggplant, spiced minced lamb and beef, golden potatoes, topped with a velvety browned béchamel sauce.',
    image: moussakaImg,
    badge: 'Traditional',
    dietary: ''
  },

  // Desserts
  {
    id: 'd1',
    name: 'Little Lemon Citrus Cake',
    category: 'Desserts',
    price: 5.00,
    description: "Grandma's secret lemon chiffon sponge with zesty citrus glaze, whipped mascarpone, and fresh garden mint.",
    image: lemonDessertImg,
    badge: 'House Specialty',
    dietary: 'Vegetarian'
  },
  {
    id: 'd2',
    name: 'Artisanal Walnut Baklava',
    category: 'Desserts',
    price: 6.50,
    description: 'Crisp layers of golden phyllo pastry filled with chopped walnuts, cinnamon, and bathed in Greek blossom honey syrup.',
    image: lemonDessertImg,
    badge: 'Traditional',
    dietary: 'Vegetarian'
  },

  // Drinks
  {
    id: 'b1',
    name: 'Fresh Mint & Lemon Spritzer',
    category: 'Drinks',
    price: 4.50,
    description: 'Freshly squeezed lemons, crushed spearmint, organic agave, and chilled sparkling Mediterranean water.',
    image: bruschettaImg,
    badge: 'Refreshing',
    dietary: 'Vegan'
  },
  {
    id: 'b2',
    name: 'Greek Frappé Iced Coffee',
    category: 'Drinks',
    price: 4.00,
    description: 'Classic whipped iced Greek coffee served with a splash of evaporated milk and natural cane sugar.',
    image: greekSaladImg,
    badge: 'Classic',
    dietary: 'Vegetarian'
  }
];

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? menuData
    : menuData.filter((item) => item.category === activeCategory);

  return (
    <section className="menu-page">
      <header className="menu-header">
        <h1>Little Lemon Menu</h1>
        <p className="menu-intro">
          Explore our Mediterranean culinary creations made daily with fresh, high-quality ingredients and cherished family recipes.
        </p>

        {/* Category Filters */}
        <div className="category-filter-bar" role="tablist" aria-label="Menu Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              aria-label={`Filter by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Menu Grid */}
      <div className="menu-grid">
        {filteredItems.map((item) => (
          <article key={item.id} className="menu-card">
            <div className="menu-card-image-wrap">
              <img src={item.image} alt={item.name} className="menu-card-img" />
              {item.badge && <span className="menu-card-badge">{item.badge}</span>}
            </div>
            <div className="menu-card-body">
              <div className="menu-card-header">
                <h3>{item.name}</h3>
                <span className="menu-card-price">${item.price.toFixed(2)}</span>
              </div>
              {item.dietary && <span className="menu-dietary-tag">{item.dietary}</span>}
              <p className="menu-card-desc">{item.description}</p>
              <div className="menu-card-footer">
                <Link to="/order-online" className="btn-primary btn-sm" aria-label={`Order ${item.name}`}>
                  Order Online
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="menu-cta-banner">
        <h2>Planning a special dinner or group celebration?</h2>
        <p>Reserve a table in advance to guarantee your preferred seating time.</p>
        <Link to="/booking" className="btn-reserve" aria-label="On Click">
          Reserve a Table
        </Link>
      </div>
    </section>
  );
}

export default Menu;

