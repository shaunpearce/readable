import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'
import Post from '../components/Post'
import { Link } from 'react-router-dom'

class ViewPost extends Component {
  
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
    console.log()
  }

	render() {
    const {post} = this.props

		return(
				<div className="page-container">
          {post.id ? 	<Post post={post}/> : <div><span style={{fontSize: "48px" }}>404</span><br/>Post Not found<br/> <Link to={`/`} style={{ color : "#2c88e5"}}>Back to Dashboard</Link></div> }
				</div>
		)    
	}
}

const mapStateToProps = ({ posts }, ownProps) => {
  const { id } = ownProps.match.params
  return {
    post: {
      ...posts[id]
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPost)