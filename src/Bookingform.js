import React, { useState } from 'react';

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  // Get today's date in YYYY-MM-DD format for the min attribute on the date input
  const today = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes && availableTimes.length > 0 ? availableTimes[0] : '');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [touched, setTouched] = useState({ date: false, guests: false });

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTouched((prev) => ({ ...prev, date: true }));
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    }
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
    setTouched((prev) => ({ ...prev, guests: true }));
  };

  const handleReset = () => {
    setDate('');
    setTime(availableTimes && availableTimes.length > 0 ? availableTimes[0] : '');
    setGuests(1);
    setOccasion('Birthday');
    setTouched({ date: false, guests: false });
  };

  const isDateInvalid = touched.date && !date;
  const isGuestsInvalid = touched.guests && (Number(guests) < 1 || Number(guests) > 10);
  const isFormValid = date !== '' && time !== '' && Number(guests) >= 1 && Number(guests) <= 10;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid && submitForm) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <div className="booking-card-wrapper">
      <form onSubmit={handleSubmit} className="booking-form-card" noValidate>
        <div className="form-group">
          <label htmlFor="res-date" className="form-label">
            Choose date <span className="required-star">*</span>
          </label>
          <input
            type="date"
            id="res-date"
            min={today}
            value={date}
            onChange={handleDateChange}
            onBlur={() => setTouched((prev) => ({ ...prev, date: true }))}
            className={`form-input ${isDateInvalid ? 'input-error' : ''}`}
            required
            aria-invalid={isDateInvalid}
            aria-describedby={isDateInvalid ? 'date-error' : undefined}
          />
          {isDateInvalid && (
            <small id="date-error" className="error-text" role="alert">
              Please select a valid reservation date.
            </small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="res-time" className="form-label">
            Choose time <span className="required-star">*</span>
          </label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="form-select"
            required
          >
            {availableTimes && availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests" className="form-label">
            Number of guests <span className="required-star">*</span>
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={handleGuestsChange}
            onBlur={() => setTouched((prev) => ({ ...prev, guests: true }))}
            className={`form-input ${isGuestsInvalid ? 'input-error' : ''}`}
            required
            aria-invalid={isGuestsInvalid}
            aria-describedby={isGuestsInvalid ? 'guests-error' : undefined}
          />
          {isGuestsInvalid && (
            <small id="guests-error" className="error-text" role="alert">
              Number of guests must be between 1 and 10.
            </small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="occasion" className="form-label">
            Occasion <span className="required-star">*</span>
          </label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="form-select"
            required
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
            <option value="Casual Dining">Casual Dining</option>
          </select>
        </div>

        <div className="form-status-container">
          {!isFormValid ? (
            <p className="form-status-hint">Please complete all fields to reserve your table.</p>
          ) : (
            <p className="form-status-valid">✓ All details are ready for reservation!</p>
          )}
        </div>

        <div className="form-actions">
          <input
            type="submit"
            value="Make Your Reservation"
            aria-label="On Click"
            disabled={!isFormValid}
            className="btn-primary submit-btn"
          />
          <button
            type="button"
            onClick={handleReset}
            className="btn-secondary reset-btn"
            aria-label="Reset Form"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
