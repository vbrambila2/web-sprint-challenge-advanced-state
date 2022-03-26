import React from 'react';
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

export function Wheel(props) {
  const { wheel, moveClockwise, moveCounterClockwise } = props;
  //const letter = 'B';

  console.log(wheel, "state");

  const counterClock = () => {
    moveCounterClockwise()
    console.log(wheel, "counter")
  }

  const clockWise = () => {
    moveClockwise()
    console.log(wheel, "clock")
  }
  
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={wheel === 0 ? "cog active" : "cog"} style={{ "--i": 0 }}>{wheel === 0 ? 'B' : ""}</div>
        <div className={wheel === 1 ? "cog active" : "cog"} style={{ "--i": 1 }}>{wheel === 1 ? 'B' : ""}</div>
        <div className={wheel === 2 ? "cog active" : "cog"} style={{ "--i": 2 }}>{wheel === 2 ? 'B' : ""}</div>
        <div className={wheel === 3 ? "cog active" : "cog"} style={{ "--i": 3 }}>{wheel === 3 ? 'B' : ""}</div>
        <div className={wheel === 4 ? "cog active" : "cog"} style={{ "--i": 4 }}>{wheel === 4 ? 'B' : ""}</div>
        <div className={wheel === 5 ? "cog active" : "cog"} style={{ "--i": 5 }}>{wheel === 5 ? 'B' : ""}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={counterClock} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={clockWise} >Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    wheel: state.wheel
  }
}

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise })(Wheel);

// const counter = () => {
//   const zero = document.querySelector(".zero");
//   const one = document.querySelector(".one");
//   const two = document.querySelector(".two");
//   const three = document.querySelector(".three");
//   const four = document.querySelector(".four");
//   const five = document.querySelector(".five");

//   if (zero.classList.contains("active")) {
//     zero.classList.remove("active");
//     five.classList.add("active");
//     five.innerHTML = letter;
//     zero.innerHTML = "";
//   } else if (one.classList.contains("active")) {
//     one.classList.remove("active");
//     zero.classList.add("active");
//     zero.innerHTML = letter;
//     one.innerHTML = "";
//   } else if (two.classList.contains("active")) {
//     two.classList.remove("active");
//     one.classList.add("active");
//     one.innerHTML = letter;
//     two.innerHTML = "";
//   } else if (three.classList.contains("active")) {
//     three.classList.remove("active");
//     two.classList.add("active");
//     two.innerHTML = letter;
//     three.innerHTML = "";
//   } else if (four.classList.contains("active")) {
//     four.classList.remove("active");
//     three.classList.add("active");
//     three.innerHTML = letter;
//     four.innerHTML = "";
//   } else if (five.classList.contains("active")) {
//     five.classList.remove("active");
//     four.classList.add("active");
//     four.innerHTML = letter;
//     five.innerHTML = "";
//   }
// }

// const clock = () => {
//   const zero = document.querySelector(".zero");
//   const one = document.querySelector(".one");
//   const two = document.querySelector(".two");
//   const three = document.querySelector(".three");
//   const four = document.querySelector(".four");
//   const five = document.querySelector(".five");

//   if (zero.classList.contains("active")) {
//     zero.classList.remove("active");
//     one.classList.add("active");
//     one.innerHTML = letter;
//     zero.innerHTML = "";
//   } else if (one.classList.contains("active")) {
//     one.classList.remove("active");
//     two.classList.add("active");
//     two.innerHTML = letter;
//     one.innerHTML = "";
//   } else if (two.classList.contains("active")) {
//     two.classList.remove("active");
//     three.classList.add("active");
//     three.innerHTML = letter;
//     two.innerHTML = "";
//   } else if (three.classList.contains("active")) {
//     three.classList.remove("active");
//     four.classList.add("active");
//     four.innerHTML = letter;
//     three.innerHTML = "";
//   } else if (four.classList.contains("active")) {
//     four.classList.remove("active");
//     five.classList.add("active");
//     five.innerHTML = letter;
//     four.innerHTML = "";
//   } else if (five.classList.contains("active")) {
//     five.classList.remove("active");
//     zero.classList.add("active");
//     zero.innerHTML = letter;
//     five.innerHTML = "";
//   }
// }