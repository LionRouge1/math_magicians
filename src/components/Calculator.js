import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent = (e) => {
    this.setState((prev) => calculate(prev, e.target.textContent));
  }

  render() {
    const { next, operation, total } = this.state;
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
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">AC</td>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">+/-</td>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">%</td>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">÷</td>
          </tr>
          <tr>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">7</td>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">8</td>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">9</td>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">x</td>
          </tr>
          <tr>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">4</td>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">5</td>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">6</td>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">-</td>
          </tr>
          <tr>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">1</td>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">2</td>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">3</td>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">+</td>
          </tr>
          <tr>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true" colSpan="2">0</td>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">.</td>
            <td onClick={(event) => this.handleEvent(event)} aria-hidden="true">=</td>
          </tr>
        </tbody>
      </table>
    );
    return element;
  }
}
