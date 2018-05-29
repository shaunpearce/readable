import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import Post from '../components/Post'
import sortBy from 'sort-by'

class Posts extends Component {

	state = {
		loaded: false,
		sort: 'voteScore',
		order: '-'
	}

	componentDidMount() {
		this.props.getPosts()
		.then(() => {
				this.setState({
					loaded: true
				})
			})
	}

	onChangeSort(sortOption) {
			this.setState({ 
					sort: sortOption
			})
	}

	onChangeOrder(orderOption) {
		this.setState({ 
				order: orderOption 
		})
}

	render() {
		
		const { posts, match } = this.props

		const sortedPostsList = Object.values(posts).sort(sortBy(this.state.order + this.state.sort))
		
		const postsList = sortedPostsList.filter(post => (match.params.category ? post.category === match.params.category : post))
		.filter(post => !post.deleted).map((post, index) => {
				return(
					<Post key={index} post={post} postSummary={true}/>
				)
		})

		return(
				<div className="page-container">
						<div className="sort-container">
							<select value={this.state.sort} onChange={(e) => this.onChangeSort(e.target.value)}>
									<option value="timestamp">Timestamp</option>
									<option value="voteScore">Rating</option>
							</select>
							<select value={this.state.order} onChange={(e) => this.onChangeOrder(e.target.value)}>
									<option value="-">{this.state.sort == 'timestamp' ? "Newest First": "Highest First"}</option>
									<option value="">{this.state.sort == 'timestamp' ? "Oldest First": "Lowest First"}</option>
							</select>
						</div>
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