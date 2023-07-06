import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../helper";

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNetx] = useState(true);

  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  });
  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    const boardCoppy = [...state.board];
    if (winner || boardCoppy[index]) return;
    boardCoppy[index] = state.xIsNext ? "X" : "O";

    setState({
      board: boardCoppy,
      xIsNext: !state.xIsNext,
    });
    // setBoard(boardCoppy);
    // setXIsNetx((xIsNext) => !xIsNext);
  };

  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      <button onClick={handleResetGame}>Reset game</button>
    </div>
  );
};

export default Game;
