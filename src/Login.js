import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const validateForm = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return false;
    }
    if (!password || password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return false;
    }
    if (isSignUp && !fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate login / signup success
    setLoggedInUser({
      name: isSignUp ? fullName : email.split('@')[0],
      email: email
    });
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setEmail('');
    setPassword('');
    setFullName('');
    setErrorMsg('');
  };

  return (
    <section className="login-page">
      <div className="login-card-wrapper">
        {loggedInUser ? (
          <article className="login-card success-card">
            <div className="login-avatar" aria-hidden="true">👤</div>
            <h2>Welcome back, {loggedInUser.name}!</h2>
            <p className="login-email-sub">{loggedInUser.email}</p>
            <div className="user-membership-box">
              <span className="membership-badge">⭐ Little Lemon VIP Member</span>
              <p>You have <strong>120 Lemon Reward Points</strong> available for your next dining experience.</p>
            </div>
            <div className="logged-in-actions">
              <Link to="/booking" className="btn-primary" aria-label="On Click">
                Reserve a Table
              </Link>
              <Link to="/order-online" className="btn-secondary" aria-label="On Click">
                Order Delivery
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="btn-text-logout"
                aria-label="Sign Out"
              >
                Sign Out
              </button>
            </div>
          </article>
        ) : (
          <article className="login-card">
            <header className="login-header">
              <div className="login-lemon-icon" aria-hidden="true">🍋</div>
              <h2>{isSignUp ? 'Create an Account' : 'Welcome to Little Lemon'}</h2>
              <p>
                {isSignUp
                  ? 'Sign up to collect rewards points and track your table bookings.'
                  : 'Sign in to access your reservations and online orders.'}
              </p>
            </header>

            {/* Tab switch between Sign In and Sign Up */}
            <div className="login-tab-bar" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={!isSignUp}
                className={`login-tab ${!isSignUp ? 'active' : ''}`}
                onClick={() => {
                  setIsSignUp(false);
                  setErrorMsg('');
                }}
              >
                Sign In
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={isSignUp}
                className={`login-tab ${isSignUp ? 'active' : ''}`}
                onClick={() => {
                  setIsSignUp(true);
                  setErrorMsg('');
                }}
              >
                Create Account
              </button>
            </div>

            {errorMsg && (
              <div className="login-error-alert" role="alert">
                ⚠️ {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="login-form" noValidate>
              {isSignUp && (
                <div className="form-group">
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    type="text"
                    id="full-name"
                    placeholder="e.g., Alex Johnson"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="form-input"
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="login-email">Email Address</label>
                <input
                  type="email"
                  id="login-email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <div className="label-with-aside">
                  <label htmlFor="login-password">Password</label>
                  {!isSignUp && (
                    <button
                      type="button"
                      onClick={() => alert('Password reset instructions will be sent to your email address.')}
                      className="forgot-password-link"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="password-input-wrap">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="login-password"
                    placeholder="At least 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-input"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="show-password-btn"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {!isSignUp && (
                <div className="remember-me-group">
                  <label className="checkbox-label" htmlFor="remember-me">
                    <input
                      type="checkbox"
                      id="remember-me"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>Remember my device</span>
                  </label>
                </div>
              )}

              <button
                type="submit"
                className="btn-primary login-submit-btn"
                aria-label="Submit Account Form"
              >
                {isSignUp ? 'Create Little Lemon Account' : 'Sign In to Account'}
              </button>
            </form>
          </article>
        )}
      </div>
    </section>
  );
}

export default Login;

