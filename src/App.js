import React from 'react';
import Button from '@material-ui/core/Button';

import logo from './logo.svg';
import './App.css';

function TestButton() {
  return (
    <Button variant="contained"
      color="primary"
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
    Learn React
    </Button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>
        <TestButton />
        </p>
      </header>
    </div>
  );
}

export default App;
