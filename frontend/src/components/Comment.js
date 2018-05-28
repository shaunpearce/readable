import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upVoteCommentAction, downVoteCommentAction, editCommentAction, deleteCommentAction } from '../actions'
import CommentForm from './CommentForm'
import VoteControl from './VoteControl';
import { EditIcon, TrashIcon } from './icons';

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

  onCancel(){
    this.setState({ 
      editingCommet: false 
    })
  }

  onDeleteComment(comment){
    this.props.deleteComment(comment)
  }

  render () {
    const { comment } = this.props

    const commentValues = {
      initialValues: {
        ...comment
      },
    }

    const editComment = (
      <div className="editing-comment-container">
        <CommentForm {...commentValues} form={"edit"} onSubmit={this.submit} onCancel={() => this.onCancel()} />
      </div>
    )

    const postedComment = (
      <div className="posted-comment-container">
        <div className="posted-comment-top-container">
          <div className="posted-comment-data-container">
            <div className="comment-body">{comment.body}</div>
            <div className="comment-author">{comment.author}</div>
          </div>
          <div className="posted-comment-vote-container votes-container">
            <VoteControl score={comment.voteScore} upVoteClick={() => this.onClickUpVote(comment.id)} downVoteClick={() => this.onClickDownVote(comment.id)}/>
          </div>
        </div>
       <div className="posted-comment-bottom-container">
          <div className="button secondary" onClick={() => this.onEditComment()}><EditIcon/> Edit</div> 
          <div className="button secondary" onClick={() => this.onDeleteComment(comment)}><TrashIcon/>Delete</div>
       </div>
        
        
      </div>
    )

    return (
      <div className="comment-container card medium">
        {this.state.editingCommet ? editComment : postedComment}        
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id) => dispatch(upVoteCommentAction(id)),
    downVote: (id) => dispatch(downVoteCommentAction(id)),
    editComment: (id, comment) => dispatch(editCommentAction(id, comment)),
    deleteComment: (comment) => dispatch(deleteCommentAction(comment)),
  }
}

export default connect(null, mapDispatchToProps)(Comment)