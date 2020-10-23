import React from "react";
import ReactDOM from "react-dom";
import TextGenerator from "./containers/TextGenerator/TextGenerator";

class App extends React.Component {
  render() {
    return (
      <div>
        <TextGenerator />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
