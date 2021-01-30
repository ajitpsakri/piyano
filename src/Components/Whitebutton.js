import React from "react";
import "./Whitebutton.css";

import sound from "../Components/C-Sound.mp3";

//import useSound from "use-sound";

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
  let playIt = (e) => {
    if (e.key === "W") {
      var audio = new Audio(sound);
      audio.play();
    } else {
      console.log("it did not play");
    }
  };

  return (
    <div>
      <div className="whitebutton">
        {whiteNames.map((letter) => (
          <button
            // eslint-disable-next-line
            onKeyPress={playIt}
            className="white"
            key={letter}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="blackbutton">
        {blackNames.map((letter, index) => (
          // eslint-disable-next-line
          <div onKeyPress={playIt} className={`_${index}`}>
            <button className="black" key={letter}>
              {letter}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whitebutton;
