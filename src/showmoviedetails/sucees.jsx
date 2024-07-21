import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import './BookingSuccess.css';

export function BookingSuccess() {
  const Navigate = useNavigate();
  const location = useLocation()

  const handleBackToHome = () => {
    Navigate ('/',);
  };

  console.log(location, 'LOCATION')
  return (
    <div className="booking-success-container">
      <div className="booking-success-card">
        <h1>Booking Successful!</h1>
        <p>Thank you for your purchase. Your booking is confirmed.</p>
        <p>We hope you enjoy your movie experience!</p>
        <p> Price:{location?.state}</p>
        <button className="back-home-button" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
}