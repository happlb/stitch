import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./shared/Navigation";
import HomePage from "./home/HomePage";
import CreatePage from "./CreatePage/CreatePage";
import "./App.css"

function App() {
  return (
    <div className="main-container">
      <div className="content-left">
      </div>
      <div className="content-right">
        </div>
      <div className="navigation">
        <Navigation />
      </div>
      <div className="page-container">
      <Route exact path="/" component={HomePage} /> 
      <Route path="/CreatePage" component={CreatePage} />
      </div>
    </div>
  );
}

export default App;
