import React from 'react';
import Calculator from '../components/Calculator';
import './css/pgcal.css';

const PgCalculator = () => (
  <div className="Mcontainer">
    <h1>Lets to some math!</h1>
    <div className="math">
      <Calculator />
    </div>
  </div>
);

export default PgCalculator;
