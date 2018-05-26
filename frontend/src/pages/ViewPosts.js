import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import Post from '../components/Post'

class Posts extends Component {

	state = {
		loaded: false,
	}

	componentDidMount() {
		this.props.getPosts()
		.then(() => {
				this.setState({
					loaded: true
				})
			})
	}

	render() {
		
		const { posts, match } = this.props
		console.log("match", match)	
		const postsList = Object.values(posts).filter(post => (match.params.category ? post.category === match.params.category : post))
		.filter(post => !post.deleted).map((post, index) => {
				return(
					<Post key={index} post={post} postSummary={true}/>
				)
		})

		return(
				<div className="page-container">
						{this.state.loaded && postsList}
				</div>
		)    
	}
}

const mapStateToProps = ({ posts }) => {
		return {
			posts: posts
		}
	}
	
const mapDispatchToProps = (dispatch) => {
		return {
			getPosts: () => dispatch(fetchPosts())
		}
}
	
export default connect(mapStateToProps, mapDispatchToProps)(Posts)