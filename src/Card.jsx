// src/Card.jsx
import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="icon">
        <img src="https://img.icons8.com/ios-filled/50/000000/visible.png" alt="Eye Icon" />
      </div>
      <h2>Name: P.karthick</h2>
      <p>Registration No: 212221040072</p>
      <button>Show Details</button>
    </div>
  );
};

export default Card;