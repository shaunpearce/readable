import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import { upVoteCommentAction, downVoteCommentAction, editCommentAction } from '../actions'
import CommentForm from './CommentForm'

class Comment extends Component {

  state={
    editingCommet: false
  }

  submit = values => {
    const editedComment = {
      timestamp: new Date(),
      body: values.body,
      author: values.author
    } 
    this.props.editComment(this.props.comment.id, editedComment)
    this.setState({ 
      editingCommet: false 
    })
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
  }

  onEditComment(){
    this.setState({ 
      editingCommet: true 
    })
  }

  render () {
    const { comment } = this.props

    const commentValues = {
      initialValues: {
        ...comment
      },
    }

    return (
      <div className="comment-container">
        {this.state.editingCommet ? 
          <div className="editing-comment-container">
            <CommentForm {...commentValues} form={"edit"} onSubmit={this.submit} />
          </div>
          :
            <div className="completed-comment">
              <div className="comment-body">{comment.body}</div>
              <div className="comment-author">{comment.author}</div>
              <div className="comments-vote-container votes-container">
                    <div className="vote-up-control" onClick={() => this.onClickUpVote(comment.id)}>+</div>
                    <div className="vote-score">{comment.voteScore}</div>
                    <div className="vote-down-control" onClick={() => this.onClickDownVote(comment.id)}>-</div>
              </div>
              <div className="edit-comment-button" onClick={() => this.onEditComment()}>Edit Comment</div>
            </div>
        }        
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id) => dispatch(upVoteCommentAction(id)),
    downVote: (id) => dispatch(downVoteCommentAction(id)),
    editComment: (id, comment) => dispatch(editCommentAction(id, comment)),
  }
}

export default connect(null, mapDispatchToProps)(Comment)