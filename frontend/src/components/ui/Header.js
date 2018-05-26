import React, { Component } from 'react'
import { Logo } from '../icons'
import { withRouter, Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div className="header-container">
        <div className="header-logo-container">
          <div className="header-logo-icon"><Logo/></div>
          <div className="header-logo-text">Readable</div>
        </div>
        <Link to={`/add-post`} className="header-button-container">
            <div className="button icon-button primary big">+</div>
        </Link>
      </div>
    )
  }
}

export default withRouter(Header)