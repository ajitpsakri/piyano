import React from "react";
import "./Whitebutton.css";
const whiteNames = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  ",",
  ".",
  "/",
  "A",
];
const blackNames = [
  2,
  3,
  5,
  6,
  7,
  9,
  0,
  "S",
  "D",
  "F",
  "H",
  "J",
  "L",
  ";",
  "'",
];

const Whitebutton = () => {
  return (
    <div className="whitebutton">
      {whiteNames.map((letter) => (
        <button className="white" key={letter.toString()}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Whitebutton;
