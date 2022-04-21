import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [obj, setObj] = useState({ total: '0', next: null, operation: null });
  const { next, operation, total } = obj;

  const handleEvent = (e) => {
    setObj(calculate(obj, e.target.textContent));
  };

  const element = (
    <table>
      <tbody>
        <tr id="screen">
          <td colSpan="4">
            {total}
            {operation}
            {next}
          </td>
        </tr>
        <tr>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">AC</td>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">+/-</td>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">%</td>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">÷</td>
        </tr>
        <tr>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">7</td>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">8</td>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">9</td>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">x</td>
        </tr>
        <tr>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">4</td>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">5</td>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">6</td>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">-</td>
        </tr>
        <tr>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">1</td>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">2</td>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">3</td>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">+</td>
        </tr>
        <tr>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true" colSpan="2">0</td>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">.</td>
          <td onClick={(event) => handleEvent(event)} aria-hidden="true">=</td>
        </tr>
      </tbody>
    </table>
  );
  return element;
}

export default Calculator;
