import React, { Component } from 'react'
import { Logo } from '../icons'

class Header extends Component {
  render () {
    return (
      <div className="header-container">
        <div className="header-logo-container">
          <div className="header-logo-icon"><Logo/></div>
          <div className="header-logo-text">Readable</div>
        </div>
        <div className="header-button-container">
          <div className="button icon-button primary big">+</div>
        </div>
      </div>
    )
  }
}

export default Header