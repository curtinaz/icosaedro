import React from 'react';
import './App.css';

import Loading from './components/loading';
import Container from './components/container';
import Header from './components/header';

const App = () => (
  <div className="App">
    <Loading />
    <Container />
    <Header />
  </div>
);

export default App;

// Neste dia, aprendi arrow functions
// Porém