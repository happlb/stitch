import React from "react";
import store from "../../store";
import { connect } from "react-redux";
import "./TextGrid.css";
import { SVG } from "@svgdotjs/svg.js";

class TextGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: new Array(45).fill(new Array(150).fill(0)),
      line: 1,
    };
  }
  componentDidUpdate(prevProps) {
    // if (prevProps.gridText !== this.props.gridText) {
    //   this.props.gridText.forEach(function  (letter, index)) => {
    //     var group = SVG().addTo("#index");

    //     var rect = group.rect(100, 100).fill("#f09");

    //     var text = group
    //       .text(letter)
    //       .font({ size: 30, family: "Helvetica" })
    //       .center(0.5 * rect.width(), 0.5 * rect.height());
    //   });
    // }
    this.props.gridText.split("").forEach((letter, index) => {
      var draw = SVG("#parentgrid");
      if (draw.has(rect)) {
        draw.clear();
      }
      var group; // = document.getElementById("#letter_" + index.toString());
      // console.log("group", group);
      // if (group) {
      //   // group = SVG("#letter_" + index.toString()).attr("fill", "black");
      // } else {
      //  console.log("index:", index);
      group = SVG().addTo("#letter_" + index.toString());

      var rect = group.rect(100, 100).fill("white").addClass("my-group");

      group
        .text(letter)
        .font({ size: 30, family: "Helvetica" })
        .center(0.5 * rect.width(), 0.5 * rect.height());
      //  }
    });
  }

  render() {
    return (
      <div
        className="textgrid-container"
        id="parentgrid"
        style={{
          gridTemplateColumns: " repeat(5, 100px)",
          gridTemplateRows: " repeat(5, 100px)",
        }}
      >
        {this.props.gridText.split("").map((letter, index) => (
          <div
            style={{
              gridRow: `${this.state.line} /${this.state.line + 1}`,
              gridColumn: `${index + 1} /${index + 2}`,
            }}
            id={`letter_${index}`}
          ></div> //{`"letter-"${index}`}></div>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(TextGrid);

function mapStateToProps(state) {
  return { gridText: state.gridText };
}

// import React from "react";
// import store from "../../store";
// import { connect } from "react-redux";
// import "./TextGrid.css";

// class TextGrid extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       grid: new Array(45).fill(new Array(150).fill(0)),
//     };
//   }
//   componentDidUpdate(prevProps) {
//     console.log(this.props, "props");

//     if (prevProps.gridText !== this.props.gridText) {
//       var tempArray = new Array(45).fill(new Array(150).fill(0));
//       for (var i = 0; i < this.props.gridText.length; i++) {
//         tempArray[0][i] = 1;
//       }
//       this.setState({ grid: tempArray });
//       console.log(this.state.grid, "here");
//     }
//   }

//   render() {
//     console.log(this.state.grid, "testarray");
//     return (
//       <div className="textgrid-container">
//         {this.state.grid.map((row, rowIndex) =>
//           row.map((square, colIndex) => (
//             <div
//               style={{
//                 gridColumn: `${colIndex + 1} /${colIndex + 2}`,
//                 gridRow: `${rowIndex + 1} /${rowIndex + 2}`,
//                 backgroundColor: `${!square ? "#f8f8ff" : "black"}`,
//                 border: "1px solid #292e30 ",
//               }}
//             ></div>
//           ))
//         )}
//       </div>
//     );
//   }
// }

// export default connect(mapStateToProps)(TextGrid);

// function mapStateToProps(state) {
//   return { gridText: state.gridText };
// }
