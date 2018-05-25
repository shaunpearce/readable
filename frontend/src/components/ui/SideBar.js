import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import _ from 'lodash'
import { fetchCategories } from '../../actions'
import classNames from 'classnames';
import { PostsIcon } from '../icons'

const CATEGORY_COLORS = { 
  "react": "blue",
  "redux": "purple",
  "udacity": "green",
}

class SideBar extends Component {
  
  componentDidMount() {  
    this.props.getCategories()
  }

  render () {

    const { categories } = this.props

    const categoryLinks = Object.values(categories).map((category, index) => {

      // let categoryColor = _.get(CATEGORY_COLORS, category.name, "blue")
      let categoryColor = "blue"
      const linkClasses = classNames('sidebar-secondary-link-icon', categoryColor)
      
      return (
        <div className="sidebar-link-container sidebar-secondary-link-container" key={index}>
          <div className={linkClasses}></div>
          <div className="sidebar-secondary-link-text">{category.name}</div>
        </div>
      )
    })

    return (
      <div className="sidebar-container">
        <div className="sidebar-link-container sidebar-primary-link-container">
          <div className="sidebar-primary-link-icon"><PostsIcon/></div>
          <div className="sidebar-primary-link-text">All Posts</div>
        </div>
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
