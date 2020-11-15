import React from "react";
import store from "../../store";
import { connect } from "react-redux";
import "./TextGrid.css";
import { SVG } from "@svgdotjs/svg.js";

class TextGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      colCount: 0,
      rowCount: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.gridText !== this.props.gridText) {
      let fillerArray = [];
      let line = 0;
      let maxRows = 0;
      this.props.gridText.split("").forEach((letter, index) => {
        maxRows++;
        if (letter === "\n") {
          if (this.state.rowCount < maxRows) {
            this.setState({ rowCount: maxRows });
          }
          maxRows = 0;
          line++;
          //this.setState({ line: this.state.line + 1 });
        } else {
          fillerArray[index] = {
            svgLetter: (
              <svg
                // style={{ width: "100%", height: "100%" }}
                width="100%"
                height="100%"
              >
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  stroke="black"
                  strokeWidth="1px"
                  fill="white"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                >
                  {letter}
                </text>
              </svg>
            ),
            line: line,
          };
          //fillerArray[index].line = line;
        }
      });
      this.setState({ grid: fillerArray });
    }
    // var node = document.getElementById("#parentgrid");
    // node && node.querySelectorAll("*").forEach((n) => n.remove());
    // this.props.gridText.split("").forEach((letter, index) => {
    //   if (letter !== "\n") {
    //     var node = document.getElementById("#letter_" + index.toString());
    //     node && node.querySelectorAll("*").forEach((n) => n.remove());
    //     // prevProps.gridText.charAt(index) !== letter && letter
    //     var group;
    //     group = SVG().addTo("#letter_" + index.toString());
    //     var rect = group.rect(75, 75).fill("white");
    //     group
    //       .text(letter)
    //       .font({ size: 25, family: "Helvetica" })
    //       .center(0.5 * rect.width(), 0.5 * rect.height());
    //   }
    // });
  }

  render() {
    return (
      <div
        className="textgrid-container"
        id="parentgrid"
        style={{
          gridTemplateColumns: " repeat(25, 4vw)",
          gridTemplateRows: " repeat(25, 4vw)",
        }}
      >
        {this.state.grid.map(
          (letter, index) => (
            // index < this.state.rowCount &&
            // this.state.grid.length > index + 1 &&
            // this.state.grid[index + 1].line !== letter.line ? (
            //   console.log("idk")
            // ) : (
            <div
              key={index}
              style={{
                gridRow: `${letter.line + 1} /${letter.line + 2}`,
                // gridColumn: `${index + 1} /${index + 2}`,
              }}
              id={`letter_${index}`}
            >
              {letter.svgLetter}
            </div>
          )
          //)
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(TextGrid);

function mapStateToProps(state) {
  return { gridText: state.gridText };
}
