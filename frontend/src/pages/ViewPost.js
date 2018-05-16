import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'
import Post from '../components/Post'

class ViewPost extends Component {

	state = {

  }
  
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

	render() {
    const {post} = this.props
		return(
				<div className="page-container">
						<Post post={post}/>
				</div>
		)    
	}
}

const mapStateToProps = ({ posts }, ownProps) => {
  //RECHECK: Is it crazy?
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