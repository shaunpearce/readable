import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { upVotePostAction, downVotePostAction } from '../actions'

class PostSummary extends Component {

  onClickUpVote = (id) => {
    this.props.upVote(id)
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
  }

  render() {
    
    const { post } = this.props

    const comments = post.comments && Object.values(post.comments)

    return(
        <div className="post-container">
            <div className="post-title">{post.title}</div>
            <div className="post-author">{post.author}</div>
            {
              post.comments ? 
                <div className="post-comments-meta">{comments.length} {comments.length == 1 ? "Comment": "Comments" }</div>:
                <div className="post-comments-meta">0 Comments</div>
            }
            <div className="post-votes-container">
              <div className="post-vote-up-control" onClick={() => this.onClickUpVote(post.id)}>+</div>
              <div className="post-vote-score">{post.voteScore}</div>
              <div className="post-vote-down-control" onClick={() => this.onClickDownVote(post.id)}>-</div>
            </div>
            <Link to={`/${post.category}/${post.id}`}>Go</Link>  
            <Link to={`/edit-post/${post.id}`}>Edit</Link>  
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

export default connect(null, mapDispatchToProps)(PostSummary)