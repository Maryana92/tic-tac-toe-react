import React, { Component } from 'react';

let origBoard;
const huPlayer = 'X';
const aiPlayer = 'O';
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadGame: false,
      turn: true,
      counter: 0,
      cells: Array(9).fill(null),
    };

    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    this.setState( {loadGame: true} );
  }

  cellBorder(index) {
    switch(index) {
      case 0:
        return "container__cell container__cell--top container__cell--left";
      case 1:
        return "container__cell container__cell--top";
      case 2:
        return "container__cell container__cell--top container__cell--right";
      case 3:
        return "container__cell container__cell--left";
      case 4:
        return "container__cell";
      case 5:
        return "container__cell container__cell--right";
      case 6:
        return "container__cell container__cell--bottom container__cell--left";
      case 7:
        return "container__cell container__cell--bottom";
      case 8:
        return "container__cell container__cell--bottom container__cell--right";
    }
  }

  render() {
    const  cellArray = this.state.cells.map((cell, index) => {
      return (<cell key={index} className={this.cellBorder(index)} onClick={() => this.handleClick}></cell>);
    });

    return (
      <div className="container">
        <div className="container__play-field">
          {cellArray}
        </div>
        <div className="container__message">
          <div className="text"></div>
        </div>
        <button className="container__btn">restart game</button>
      </div>
    );
  }
}

export default TicTacToe;