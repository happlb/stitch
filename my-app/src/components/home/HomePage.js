import React from "react";
import "./HomePage.css"

const HomePage = () => (
  <div className="home-container">
  <div className="left">
    Cross Stitch
    <br />
    Text Widget &nbsp;&nbsp;&nbsp;&nbsp;
  </div>
  <div className="right">S T I T C H</div>
  <div className="home-image">
    <img
      className="image"
      src={require("../../images/exfoliate.JPG")}
      alt="cross stitch"
    />
  </div>
</div>
);

export default HomePage;
