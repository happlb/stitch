import React from "react";

const HomePage = () => (
  <div className="main-container">
  <div className="content-left">
    Cross Stitch
    <br />
    Text Widget &nbsp;&nbsp;&nbsp;&nbsp;
  </div>
  <div className="content-right">S T I T C H</div>
  <div className="content-image">
    <img
      className="image"
      src={require("../../images/exfoliate.JPG")}
      alt="Graduation"
    />
  </div>
</div>
);

export default HomePage;
