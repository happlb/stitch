import React from "react";
import "./TextGenerator.css";
import TextGrid from "../../components/TextGrid/TextGrid";
import Navigation from "../../components/Navigation/Navigation";

// class Square extends React.Component {
//   render() {
//     return <button className="square">{/* TODO */}</button>;
//   }
// }

class TextGenerator extends React.Component {
  //   renderSquare(i) {
  //     return <Square />;
  //   }

  render() {
    const status = "Next player: X";

    return (
      <div className="main-container">
        <div className="navigation">
          <Navigation />
        </div>
        <div className="content-left">
          Cross Stitch
          <br />
          Text Widget &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="content-right">S T I T C H</div>
        <div className="content-image">
          {/* <img className="image" src="../testidk.jpg" /> */}
          <img
            className="image"
            src={require("../../images/exfoliate.JPG")}
            alt="Graduation"
          />
        </div>

        {/* <div className="main-content">
          <div className="text-input">
            <textarea placeholder="Type Something!"></textarea>
          </div>
          <div className="settings">Settings</div>
          <div className="text-grid">
            <TextGrid />
          </div>
        </div> */}
      </div>
    );
  }
}

// ========================================

export default TextGenerator;
