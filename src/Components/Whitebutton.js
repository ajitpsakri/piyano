import React from "react";
import "./Whitebutton.css";

import coms from "../songs/,.mp3";
import semi from "../songs/;.mp3";
import col from "../songs/'.mp3";
import zer from "../songs/0.mp3";
import tw from "../songs/2.mp3";
import thre from "../songs/3.mp3";
// import fou from "../songs/4.mp3";
import fiv from "../songs/5.mp3";
import si from "../songs/6.mp3";
import seve from "../songs/7.mp3";
// import eigh from "../songs/8.mp3";
import nin from "../songs/9.mp3";
import aa from "../songs/a.mp3";
import bb from "../songs/b.mp3";
import backs from "../songs/backslash.mp3";
import cc from "../songs/c.mp3";
import dd from "../songs/d.mp3";
import ee from "../songs/e.mp3";
import ff from "../songs/f.mp3";
import fulls from "../songs/fullstop.mp3";
import hh from "../songs/h.mp3";
import ii from "../songs/i.mp3";
import jj from "../songs/j.mp3";
import ll from "../songs/l.mp3";
import mm from "../songs/m.mp3";
import nn from "../songs/n.mp3";
import oo from "../songs/o.mp3";
import pp from "../songs/p.mp3";
import qq from "../songs/q.mp3";
import rr from "../songs/r.mp3";
import ss from "../songs/s.mp3";
import tt from "../songs/t.mp3";
import uu from "../songs/u.mp3";
import vv from "../songs/v.mp3";
import ww from "../songs/w.mp3";
import xx from "../songs/x.mp3";
import yy from "../songs/y.mp3";
import zz from "../songs/z.mp3";

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
    if (e.key === "q") {
      var q = new Audio(qq);
      q.play();
    } else if (e.key === ",") {
      var comma = new Audio(coms);
      comma.play();
    } else if (e.key === ";") {
      var semicolon = new Audio(semi);
      semicolon.play();
    } else if (e.key === "'") {
      var colon = new Audio(col);
      colon.play();
    } else if (e.key === "0") {
      var zero = new Audio(zer);
      zero.play();
    } else if (e.key === "2") {
      var two = new Audio(tw);
      two.play();
    } else if (e.key === "3") {
      var three = new Audio(thre);
      three.play();
    } else if (e.key === "5") {
      var five = new Audio(fiv);
      five.play();
    } else if (e.key === "6") {
      var six = new Audio(si);
      six.play();
    } else if (e.key === "7") {
      var seven = new Audio(seve);
      seven.play();
    } else if (e.key === "9") {
      var nine = new Audio(nin);
      nine.play();
    } else if (e.key === "a") {
      var a = new Audio(aa);
      a.play();
    } else if (e.key === "b") {
      var b = new Audio(bb);
      b.play();
    } else if (e.key === "/") {
      var backslash = new Audio(backs);
      backslash.play();
    } else if (e.key === "c") {
      var c = new Audio(cc);
      c.play();
    } else if (e.key === "d") {
      var d = new Audio(dd);
      d.play();
    } else if (e.key === "e") {
      var eee = new Audio(ee);
      eee.play();
    } else if (e.key === "f") {
      var f = new Audio(ff);
      f.play();
    } else if (e.key === ".") {
      var fullstop = new Audio(fulls);
      fullstop.play();
    } else if (e.key === "h") {
      var h = new Audio(hh);
      h.play();
    } else if (e.key === "i") {
      var i = new Audio(ii);
      i.play();
    } else if (e.key === "j") {
      var j = new Audio(jj);
      j.play();
    } else if (e.key === "l") {
      var l = new Audio(ll);
      l.play();
    } else if (e.key === "m") {
      var m = new Audio(mm);
      m.play();
    } else if (e.key === "n") {
      var n = new Audio(nn);
      n.play();
    } else if (e.key === "o") {
      var o = new Audio(oo);
      o.play();
    } else if (e.key === "p") {
      var p = new Audio(pp);
      p.play();
    } else if (e.key === "r") {
      var r = new Audio(rr);
      r.play();
    } else if (e.key === "s") {
      var s = new Audio(ss);
      s.play();
    } else if (e.key === "t") {
      var t = new Audio(tt);
      t.play();
    } else if (e.key === "u") {
      var u = new Audio(uu);
      u.play();
    } else if (e.key === "v") {
      var v = new Audio(vv);
      v.play();
    } else if (e.key === "w") {
      var w = new Audio(ww);
      w.play();
    } else if (e.key === "x") {
      var x = new Audio(xx);
      x.play();
    } else if (e.key === "y") {
      var y = new Audio(yy);
      y.play();
    } else if (e.key === "z") {
      var z = new Audio(zz);
      z.play();
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
