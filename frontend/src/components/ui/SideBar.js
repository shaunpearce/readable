import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCategories } from '../../actions'
import classNames from 'classnames'
import { PostsIcon } from '../icons'

class SideBar extends Component {
  
  componentDidMount() {  
    this.props.getCategories()
  }

  render () {

    const { categories } = this.props

    const categoryLinks = Object.values(categories).map((category, index) => {
      const linkClasses = classNames('sidebar-secondary-link-icon category', category.name)
      
      return (
        <Link to={`/${category.path}`} key={index}>
          <div className="sidebar-link-container sidebar-secondary-link-container">
            <div className={linkClasses}></div>
            <div className="sidebar-secondary-link-text">{category.name}</div>
          </div>
        </Link>
      )
    })

    return (
      <div className="sidebar-container">
         <Link to={`/`}>
          <div className="sidebar-link-container sidebar-primary-link-container">
            <div className="sidebar-primary-link-icon"><PostsIcon/></div>
            <div className="sidebar-primary-link-text">All Posts</div>
          </div>
        </Link>
        {categoryLinks}
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
