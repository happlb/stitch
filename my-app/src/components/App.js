import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./shared/Navigation";
import HomePage from "./home/HomePage";
import CreatePage from "./CreatePage/CreatePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={HomePage} /> 
      <Route path="/CreatePage" component={CreatePage} />
    </div>
  );
}

export default App;
