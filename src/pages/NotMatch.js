import React from 'react';

const NotMatch = () => {
  const container = {
    with: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const hder = {
    fontSize: '100px',
    fontWeight: 'bold',
    marginBottom: '2rem',
    lineHeight: '1em',
    color: '#ececec',
  };
  return (
    <div style={container}>
      <h1 style={hder}>404 page</h1>
      <h3>
        <strong>Sorry!!!</strong>
        No match for this page
      </h3>
    </div>
  );
};

export default NotMatch;
