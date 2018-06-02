import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import moment from 'moment'
import classNames from 'classnames'
import { upVotePostAction, downVotePostAction, deletePostAction } from '../actions'
import Comment from './Comment'
import AddComment from './AddComment'
import { CommentsIcon, TimeIcon, EditIcon, TrashIcon, RightArrowIcon } from './icons'
import VoteControl from './VoteControl'

class Post extends Component {

  onClickUpVote = (id) => {
    this.props.upVote(id)
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
  }

  onDeletePost(id){
    this.props.deletePost(id)
    if(this.props.match.params.id){
      this.props.history.push('/')
    }
  }

  render() {
    
    const { post, postSummary } = this.props
    const comments = post.comments && Object.values(post.comments).filter(comment => !comment.deleted)
    const postStrip = classNames('card-color-strip category react', post.category)
    
    return(
      <div>
        <div className="post-container card medium">
            <div className={postStrip}></div>
            <div className="post-content-container">
              <div className="post-top-container">
                <div className="post-data-container">
                  {postSummary ? 
                    <Link className="post-title" to={`/${post.category}/${post.id}`}>{post.title}</Link>: 
                    <div className="post-title">{post.title}</div>
                  }
                  <div className="post-author">{post.author}</div>
                  <div className="post-body">{post.body}</div>
                  
                  <div className="post-meta-container">
                    <div className="post-meta-comments post-meta">
                      <div className="post-meta-icon-container"><CommentsIcon/></div>
                      <div className="post-meta-data">{comments ? comments.length : "0"}</div>
                      <div className="post-meta-desc">{comments && comments.length === 1 ? "Comment": "Comments" }</div>
                    </div>

                    <div className="post-meta-time post-meta">
                      <div className="post-meta-icon-container"><TimeIcon/></div>
                      <div className="post-meta-data">{moment(post.timestamp).fromNow()}</div>
                    </div>
                  </div>
                </div>

                <div className="post-vote-container votes-container">
                  <VoteControl score={post.voteScore} upVoteClick={() => this.onClickUpVote(post.id)} downVoteClick={() => this.onClickDownVote(post.id)}/>
                </div>
              </div>

              <div className="post-bottom-container">
                <div className="post-controls-container">
                  <Link className="button secondary" to={`/edit-post/${post.id}`} ><EditIcon/> Edit</Link> 
                  <div className="button secondary" onClick={() => this.onDeletePost(post.id)}><TrashIcon/>Delete</div>
                </div>
                {postSummary && <Link className="post-go-button" to={`/${post.category}/${post.id}`}><RightArrowIcon/></Link> }
              </div>
            </div>
        </div>

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
    deletePost: (id) => dispatch(deletePostAction(id)),
  }
}

Post.defaultProps = {
  postSummary: false,
}

export default withRouter(connect(null, mapDispatchToProps)(Post))