import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navigation.css";

const Navigation = () => {
  const activeStyle = { color: '' }
  return (
    <div className="nav-container">
      <div className="navigation-left">
    <NavLink
        className="nav-tab"
        activeStyle={activeStyle}
        exact
        to='/'
      >
        Main
      </NavLink>
      <NavLink         
        className="nav-tab"
        activeStyle={activeStyle} to='/CreatePage'>
        Create
      </NavLink>
      </div>
      <div className="navigation-right">
      <NavLink         
      className="nav-tab"
      activeStyle={activeStyle} to='/'>
        Explore
      </NavLink>
      <NavLink         
      className="nav-tab"
      activeStyle={activeStyle} to='/'>
        About
      </NavLink>
      </div>
    </div>
  )
}

export default Navigation
