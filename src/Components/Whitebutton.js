import React from "react";
import "./Whitebutton.css";
import useSound from 'use-sound'
import sound from './277608__spidervis__piyanogizem-c'
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
const handleClick = useSound(sound)
const Whitebutton = () => {
  return (
    <div>
      <div className="whitebutton">
        {whiteNames.map((letter) => (
          <button className="white" key={letter.toString()}>
            {letter}
          </button>
        ))}
      </div>

      <div className="blackbutton">
        {blackNames.map((letter, index) => (
          <div onClick={handleClick} className={`_${index}`}>
            <button className="black" key={letter.toString()}>
              {letter}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whitebutton;
