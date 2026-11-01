import React, { useState } from 'react';

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  // Get today's date in YYYY-MM-DD format for the min attribute on the date input
  const today = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState('');
  const [time, setTime] = useState(availableTimes && availableTimes.length > 0 ? availableTimes[0] : '');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    if (dispatch) {
      dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    }
  };

  // Check if form fields are valid
  const isFormValid = date !== '' && time !== '' && guests >= 1 && guests <= 10;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid && submitForm) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        min={today}
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes && availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isFormValid}
        style={{ opacity: isFormValid ? 1 : 0.6, cursor: isFormValid ? 'pointer' : 'not-allowed' }}
      />
    </form>
  );
}

export default BookingForm;
