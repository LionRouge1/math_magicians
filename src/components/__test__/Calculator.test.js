import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Calculator from '../Calculator';

describe('Calculator component', () => {
  it('Check calculator container', () => {
    render(<Calculator />);
    const buttonElement = screen.getByRole('table');
    expect(buttonElement).toBeInTheDocument();
  });

  describe('Calculator button', () => {
    it('Check button 8', () => {
      render(<Calculator
        setObj={jest.fn()}
      />);
      const screencal = screen.getByTestId(/screen/i);
      const buttonElement = screen.getByText(/8/);
      fireEvent.click(buttonElement)
      expect(screencal.textContent).toBe(buttonElement.textContent);
    });

    it('Check button 4', () => {
      render(<Calculator
        setObj={jest.fn()}
      />);
      const screencal = screen.getByTestId(/screen/i);
      const buttonElement = screen.getByText(/4/);
      fireEvent.click(buttonElement)
      expect(screencal.textContent).toBe(buttonElement.textContent);
    });
  })
});
