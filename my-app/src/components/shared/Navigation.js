import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  const activeStyle = { color: '#F15B2A' }
  return (
    <div>
      <NavLink
        style={{ paddingRight: '15px' }}
        activeStyle={activeStyle}
        exact
        to='/'
      >
        Main
      </NavLink>
      <NavLink activeStyle={activeStyle} to='/CreatePage'>
        Create
      </NavLink>
      <NavLink activeStyle={activeStyle} to='/'>
        Explore
      </NavLink>
      <NavLink activeStyle={activeStyle} to='/'>
        About
      </NavLink>
    </div>
  )
}

export default Navigation
