import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';

describe('Navigation page', () => {
  it('rNavigation container', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const navBar = screen.getByRole('navigation');
    expect(navBar).toBeInTheDocument();
  });

  it('Number of links', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const linkElement = screen.getAllByRole('link');
    expect(linkElement.length).toBe(3);
  });
});
