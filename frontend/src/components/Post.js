import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { upVotePostAction, downVotePostAction } from '../actions'
import Comment from './Comment'
import AddComment from './AddComment'

class Post extends Component {

  onClickUpVote = (id) => {
    this.props.upVote(id)
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
  }

  render() {
    
    const { post, postSummary } = this.props
    const comments = post.comments && Object.values(post.comments)

    return(
        <div className="post-container">
            <div className="post-title">{post.title}</div>
            <div className="post-author">{post.author}</div>
            {post.comments ? 
                <div className="post-comments-meta">{comments.length} {comments.length == 1 ? "Comment": "Comments" }</div>:
                <div className="post-comments-meta">0 Comments</div>
            }
            <div className="post-vote-container votes-container">
              <div className="vote-up-control" onClick={() => this.onClickUpVote(post.id)}>+</div>
              <div className="vote-score">{post.voteScore}</div>
              <div className="vote-down-control" onClick={() => this.onClickDownVote(post.id)}>-</div>
            </div>
            
            {postSummary && 
              <Link to={`/${post.category}/${post.id}`}>Go</Link> 
            }

            <Link to={`/edit-post/${post.id}`}>Edit</Link> 

            {!postSummary && comments &&
              comments.map( (comment, index) => {
                return <Comment key={index} comment={comment}/>
              })
            }

            {!postSummary && 
              <AddComment parentId={post.id} />
            }
            
        </div>
    )    
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id) => dispatch(upVotePostAction(id)),
    downVote: (id) => dispatch(downVotePostAction(id)),
  }
}

Post.defaultProps = {
  postSummary: false,
}

export default connect(null, mapDispatchToProps)(Post)