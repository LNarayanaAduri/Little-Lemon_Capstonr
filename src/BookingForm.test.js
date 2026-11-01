import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './Bookingform';

test('Render BookingForm fields and submit button', () => {
  const availableTimes = ['17:00', '18:00'];
  const mockDispatch = jest.fn();
  const mockSubmit = jest.fn();

  render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmit} />);

  // Check that inputs are rendered in the document
  const dateInput = screen.getByLabelText(/Choose date/i);
  const timeSelect = screen.getByLabelText(/Choose time/i);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  const submitButton = screen.getByRole('button', { name: /On Click|Make Your reservation/i });

  expect(dateInput).toBeInTheDocument();
  expect(timeSelect).toBeInTheDocument();
  expect(guestsInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('Submit button is disabled when required fields are empty', () => {
  const availableTimes = ['17:00', '18:00'];
  render(<BookingForm availableTimes={availableTimes} />);

  const submitButton = screen.getByRole('button', { name: /On Click|Make Your reservation/i });
  expect(submitButton).toBeDisabled();
});

test('Form submission calls submitForm when valid data is provided', () => {
  const availableTimes = ['17:00', '18:00'];
  const mockSubmit = jest.fn();

  render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmit} />);

  const dateInput = screen.getByLabelText(/Choose date/i);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  const submitButton = screen.getByRole('button', { name: /On Click|Make Your reservation/i });

  // Fill out valid data
  fireEvent.change(dateInput, { target: { value: '2026-12-31' } });
  fireEvent.change(guestsInput, { target: { value: '2' } });

  // Submit form
  fireEvent.click(submitButton);

  expect(mockSubmit).toHaveBeenCalledTimes(1);
});

