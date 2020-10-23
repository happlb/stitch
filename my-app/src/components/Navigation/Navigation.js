import React from "react";
import "./Navigation.css";

class Navigation extends React.Component {
  render() {
    const testArray = ["K", "i", "t", "t", "y", "S", "m", "a", "l", "l", "s"];

    return (
      <div className="nav-container">
        <div className="navigation-left">
          <nav>
            <a href="#">Main</a>
            <a href="#">Create</a>
          </nav>
        </div>
        <div className="navigation-right">
          <nav>
            <a href="#">Saved</a>
            <a href="#">About</a>
          </nav>
        </div>
      </div>
    );
  }
}

// ========================================

export default Navigation;
