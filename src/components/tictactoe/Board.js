import React from "react";
import Cell from "./Cell";
// import { calculateWinner } from "../../helper";

export default function Board(props) {
  //   const show = () => {
  //     const cells = [null, null, null, "X", "X", "X", null, null, null];

  //     console.log(calculateWinner(cells));
  //   };
  //Array (9).fill() => [undefined]
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === 0 ? "is-o" : ""}
        ></Cell>
      ))}
    </div>
  );
}
