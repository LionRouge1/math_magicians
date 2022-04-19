import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const element = (
      <table>
        <tr id="screen"><td colSpan="4">0</td></tr>
        <tr>
          <td>Ac</td>
          <td>+/-</td>
          <td>%</td>
          <td>/</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>x</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>-</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>+</td>
        </tr>
        <tr>
          <td colSpan="2">0</td>
          <td>.</td>
          <td>=</td>
        </tr>
      </table>
    );
    return element;
  }
}

export default Calculator;
