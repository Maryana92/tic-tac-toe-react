import React, { Component } from 'react';
import TicTacToe from "./TicTacToe";
import './App.css';

function App() {
  return (
    <div>
      <header className="container__header">TicTacToe Game</header>
      <TicTacToe />
    </div>
  );
}

export default App;
