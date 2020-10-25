import React from "react";
import "./TextGrid.css";

class TextGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testArray: new Array(45).fill(new Array(150).fill(0)),
    };
  }
  //   renderSquare(i) {
  //     return <Square />;
  //   }

  

  render() {
   //  const testArray = new Array(168).fill(new Array(168).fill(0));
    return (
        <div className="textgrid-container">
           {this.state.testArray.map((letter, index) => (
              // letter.length > index &&  (
            //  <div className="row" key={index} >
              letter.map((m, j) => (
                  <div style={{
                    gridColumn: `${j+1} /${j+2}`,
                    gridRow:  `${(index+1)} /${(index+2)}`,
                    backgroundColor: `${(m===0 ? "#f8f8ff" : "black")}`,
                    border: "1px solid #292e30 "
                    }}>
               </div>
              ))))}
               </div>
                );
              }
            }

export default TextGrid;
