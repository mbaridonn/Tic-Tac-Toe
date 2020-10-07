import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
    const [history, setHistory] = useState<Array<Array<string>>>([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [stepNumber, setStepNumber] = useState<number>(0);

    const currentSquares = history[stepNumber]; //last element of history
    const winner = calculateWinner(currentSquares);
    let status;

    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    const jumpTo = (step: number) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    };

    const handleClick = (i: number) => {
        let currentHistory = history.slice(0, stepNumber + 1);
        const currentSquares = currentHistory[currentHistory.length - 1];
        const squares = currentSquares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';

        setHistory(currentHistory.concat([squares]));
        setStepNumber(currentHistory.length);
        setXIsNext(!xIsNext);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={currentSquares} onClick={(i) => handleClick(i)} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

function calculateWinner(squares: Array<string>) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game;