import React from 'react';
import logo from './logo.svg';
import './App.css';
import Usertext from './components/usertext/usertext';
import NumOutput from './components/usertext/numOutput/numOutput'

function App() {
  return (
    <div>
      <Usertext text='Type something' />
      <NumOutput />
    </div>
  );
}

export default App;
