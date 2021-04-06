import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/play">Play</Link></li>
          <li><Link to="/">MyCollection</Link></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
