import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bruschettaImg from './images/bruchetta.svg';
import greekSaladImg from './images/greek salad.jpg';
import lemonDessertImg from './images/lemon dessert.jpg';
import chickenImg from './images/restaurant chef B.jpg';
import salmonImg from './images/restauranfood.jpg';
import moussakaImg from './images/restaurant.jpg';

const orderableItems = [
  {
    id: 'ord-1',
    name: 'Greek Salad',
    price: 12.99,
    category: 'Salads & Starters',
    description: 'Crisp romaine, tomatoes, cucumber, Kalamata olives, authentic Greek feta.',
    image: greekSaladImg
  },
  {
    id: 'ord-2',
    name: 'Bruschetta',
    price: 7.99,
    category: 'Salads & Starters',
    description: 'Grilled artisanal bread with vine tomatoes, garlic, basil, and olive oil.',
    image: bruschettaImg
  },
  {
    id: 'ord-3',
    name: 'Lemon Herb Roasted Chicken',
    price: 18.50,
    category: 'Mains',
    description: 'Marinated half chicken with roasted herbs, garlic, and Greek lemon potatoes.',
    image: chickenImg
  },
  {
    id: 'ord-4',
    name: 'Grilled Salmon Fillet',
    price: 22.00,
    category: 'Mains',
    description: 'Wild salmon grilled with olive oil, sea salt, capers, and seasonal greens.',
    image: salmonImg
  },
  {
    id: 'ord-5',
    name: 'Traditional Greek Moussaka',
    price: 16.50,
    category: 'Mains',
    description: 'Roasted eggplant, spiced minced meat, layered potatoes, baked béchamel.',
    image: moussakaImg
  },
  {
    id: 'ord-6',
    name: 'Little Lemon Citrus Cake',
    price: 5.00,
    category: 'Desserts',
    description: 'Grandma’s recipe lemon sponge with citrus glaze and fresh garden mint.',
    image: lemonDessertImg
  }
];

function OrderOnline() {
  const [cart, setCart] = useState({});
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNotes, setDeliveryNotes] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  const addToCart = (item) => {
    setCart((prev) => {
      const currentQty = prev[item.id] ? prev[item.id].quantity : 0;
      return {
        ...prev,
        [item.id]: {
          ...item,
          quantity: currentQty + 1
        }
      };
    });
  };

  const updateQuantity = (itemId, change) => {
    setCart((prev) => {
      const existing = prev[itemId];
      if (!existing) return prev;
      const newQty = existing.quantity + change;
      if (newQty <= 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return {
        ...prev,
        [itemId]: {
          ...existing,
          quantity: newQty
        }
      };
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const cartItems = Object.values(cart);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 3.99 : 0;
  const tax = subtotal * 0.0825;
  const total = subtotal + deliveryFee + tax;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0 || !deliveryAddress.trim()) return;

    const randomId = 'LL-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);
    setOrderConfirmed(true);
  };

  return (
    <section className="order-online-page">
      <header className="order-header">
        <h1>Order Online for Delivery</h1>
        <p>Enjoy Little Lemon’s Mediterranean flavors from the comfort of your home. Freshly prepared and delivered hot in Chicago.</p>
      </header>

      {orderConfirmed ? (
        <article className="order-confirmation-card">
          <div className="confirmation-icon" aria-hidden="true">🛵</div>
          <h2>Order Received!</h2>
          <p className="order-number">Order Confirmation #: <strong>{orderId}</strong></p>
          <p className="order-msg">
            Thank you! Your delicious meal is being freshly prepared and will be delivered to <strong>{deliveryAddress}</strong> in approximately <strong>35–45 minutes</strong>.
          </p>
          <div className="order-summary-box">
            <h4>Ordered Items:</h4>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.quantity}x {item.name} — ${(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <p className="order-total-line"><strong>Total Charged: ${total.toFixed(2)}</strong></p>
          </div>
          <div className="confirmation-actions" style={{ marginTop: '2rem' }}>
            <button
              onClick={() => {
                setOrderConfirmed(false);
                clearCart();
                setDeliveryAddress('');
                setDeliveryNotes('');
              }}
              className="btn-primary"
              aria-label="Order Again"
            >
              Order Again
            </button>
            <Link to="/" className="btn-secondary" aria-label="On Click">
              Return to Home
            </Link>
          </div>
        </article>
      ) : (
        <div className="order-layout">
          {/* Menu Items List */}
          <div className="order-items-column">
            <h2>Select Your Dishes</h2>
            <div className="order-items-grid">
              {orderableItems.map((item) => (
                <article key={item.id} className="order-item-card">
                  <img src={item.image} alt={item.name} className="order-item-img" />
                  <div className="order-item-info">
                    <div className="order-item-header">
                      <h3>{item.name}</h3>
                      <span className="order-item-price">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="order-item-desc">{item.description}</p>
                    <button
                      type="button"
                      onClick={() => addToCart(item)}
                      className="btn-primary btn-sm add-btn"
                      aria-label={`Add ${item.name} to order`}
                    >
                      + Add to Order
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Checkout & Cart Summary Sidebar */}
          <aside className="order-cart-column" aria-label="Order Summary">
            <div className="cart-card">
              <h3>Your Order Summary</h3>
              {cartItems.length === 0 ? (
                <div className="empty-cart-state">
                  <p>Your delivery bag is empty.</p>
                  <small>Click "+ Add to Order" on any dish to begin your order.</small>
                </div>
              ) : (
                <>
                  <ul className="cart-items-list">
                    {cartItems.map((item) => (
                      <li key={item.id} className="cart-item-row">
                        <div className="cart-item-info">
                          <strong>{item.name}</strong>
                          <span className="cart-item-unit-price">${item.price.toFixed(2)} each</span>
                        </div>
                        <div className="cart-quantity-controls">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="qty-btn"
                            aria-label={`Decrease ${item.name}`}
                          >
                            –
                          </button>
                          <span className="qty-count">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="qty-btn"
                            aria-label={`Increase ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                        <span className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Calculations */}
                  <div className="cart-totals-breakdown">
                    <div className="totals-row">
                      <span>Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="totals-row">
                      <span>Delivery Fee:</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="totals-row">
                      <span>Estimated Tax (8.25%):</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="totals-row total-highlight">
                      <strong>Total:</strong>
                      <strong>${total.toFixed(2)}</strong>
                    </div>
                  </div>

                  {/* Delivery Details Form */}
                  <form onSubmit={handlePlaceOrder} className="checkout-form">
                    <div className="form-group">
                      <label htmlFor="delivery-address">
                        Delivery Street Address <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="delivery-address"
                        placeholder="e.g., 456 Michigan Ave, Apt 3B"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="delivery-notes">Delivery Instructions (optional)</label>
                      <input
                        type="text"
                        id="delivery-notes"
                        placeholder="e.g., Leave at front door or gate code"
                        value={deliveryNotes}
                        onChange={(e) => setDeliveryNotes(e.target.value)}
                        className="form-input"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={cartItems.length === 0 || !deliveryAddress.trim()}
                      className="btn-primary place-order-btn"
                      aria-label="Place Delivery Order"
                    >
                      Place Delivery Order (${total.toFixed(2)})
                    </button>
                  </form>
                </>
              )}
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}

export default OrderOnline;

