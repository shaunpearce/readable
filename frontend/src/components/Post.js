import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'
import PostSummary from './PostSummary'

class Post extends Component {

	state = {

  }
  
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

	render() {
    const {post} = this.props
    console.log(post)
		return(
				<div className="page-container">
						<PostSummary post={post}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Post)