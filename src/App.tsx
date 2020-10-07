import React, { useState } from 'react';
import './App.css';

interface SquareProps {
  value: string,
  onClick: () => void;
}

const Square = (props: SquareProps) => (
  <button className="square" onClick={() => props.onClick()}>
    {props.value}
  </button>
);

const Board = () => {
  const status: string = 'Next player: X';
  const [squares, setSquares] = useState<Array<string>>([]);

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const handleClick = (i: number) => {
    const clonedSquares = squares.slice();
    clonedSquares[i] = 'X';
    setSquares(clonedSquares);
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