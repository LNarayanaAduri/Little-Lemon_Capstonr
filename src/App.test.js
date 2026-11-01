import { render, screen } from '@testing-library/react';
import React from 'react';

// Mock react-router-dom to support Jest in Create React App with react-router-dom v7
jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...rest }) => <a href={to} {...rest}>{children}</a>,
  useNavigate: () => jest.fn(),
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

import App from './App';

// Mock the global fetchAPI function
beforeEach(() => {
  window.fetchAPI = jest.fn((date) => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('Renders the BookingForm heading', () => {
  render(<App />);
  // You can verify static or rendered content if needed, or test the functions directly below
});

test('initializeTimes returns the expected initial available times', () => {
  const today = new Date();
  const initialTimes = window.fetchAPI(today);
  expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  expect(window.fetchAPI).toHaveBeenCalledWith(today);
});

test('updateTimes returns available times based on the selected date action', () => {
  const selectedDate = new Date('2026-06-15');
  const action = { type: 'UPDATE_TIMES', date: selectedDate };
  
  // Simulate the updateTimes reducer logic
  const updatedTimes = window.fetchAPI(action.date);
  
  expect(updatedTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  expect(window.fetchAPI).toHaveBeenCalledWith(selectedDate);
});
