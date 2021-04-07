import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div>
        <p><Link to="/play">Play</Link></p>
        <p><Link to="/">MyCollection</Link></p>
      </div>
    )
  }
}

export default NavBar
