import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import Post from '../components/Post'
import sortBy from 'sort-by'
import 'react-select/dist/react-select.css'
import CustomSelect from '../components/ui/CustomSelect'
import { TimeIcon, StarIcon, UpArrowIcon, UpArrowOrder, DownArrowOrder } from '../components/icons';


class Posts extends Component {

	state = {
		loaded: false,
		sort: 'voteScore',
		order: '-',
	}

	componentDidMount() {
		this.props.getPosts()
		.then(() => {
				this.setState({
					loaded: true
				})
			})
	}

	onChangeSort = (sortOption) => {
			this.setState({ 
					sort: sortOption.value
			})
	}

	onChangeOrder = (orderOption) => {
		this.setState({ 
				order: orderOption.value 
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
							<CustomSelect className="sort-by-select" value={this.state.sort} onChange={this.onChangeSort} searchable={false} 
								options={[
									{ value: 'voteScore', label: 'Rating', icon: <StarIcon/> },
									{ value: 'timestamp', label: 'Post Time', icon: <TimeIcon/> },
								]}
							/>
							<CustomSelect className="order-by-select" value={this.state.order} onChange={this.onChangeOrder} searchable={false} 
								options={[
									{ value: '-', label: this.state.sort == 'timestamp' ? "Newest First": "Highest First", icon: <DownArrowOrder/> },
									{ value: '', label: this.state.sort == 'timestamp' ? "Oldest First": "Lowest First", icon: <UpArrowOrder/> },
								]}
							/>
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