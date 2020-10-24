import React from "react";
import "./TextGrid.css";

// class Square extends React.Component {
//   render() {
//     return <button className="square">{/* TODO */}</button>;
//   }
// }

class TextGrid extends React.Component {
  //   renderSquare(i) {
  //     return <Square />;
  //   }

  render() {
    const testArray = ["K", "i", "t", "t", "y", "S", "m", "a", "l", "l", "s"];

    return (
      <div>
        <div className="container">
          {testArray.map((letter, index) => (
            <div key={index} >{letter}</div>
          ))}
        </div>
      </div>
    );
  }
}

// ========================================

export default TextGrid;
