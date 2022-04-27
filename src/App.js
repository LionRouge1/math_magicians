import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PgCalculator from './pages/Calculator';
import Home from './pages/Home';
import NotMatch from './pages/NotMatch';
import Quote from './pages/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<PgCalculator />} />
          <Route path="quote" element={<Quote />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </>
    );
  }
}

export default App;
