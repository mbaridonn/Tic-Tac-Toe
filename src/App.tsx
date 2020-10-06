import React, { useState } from 'react';
import './App.css';

interface SquareProps {
  value: number
}

const Square = (props: SquareProps) => {
  const [value, setValue] = useState('');

  return (
    <button className="square" onClick={() => setValue('X')}>
      {value}
    </button>
  )
};

const Board = () => {
  const status: string = 'Next player: X';

  const renderSquare = (i: number) => {
    return <Square value={i} />;
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

const Game = () => (
  <div className="game">
    <div className="game-board">
      <Board />
    </div>
    <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>
);

const App = () =>
  <Game />;

export default App;