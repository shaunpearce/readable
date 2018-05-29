import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import PostForm from '../components/PostForm'
import { addNewPostAction } from '../actions'
import { WriteIcon } from '../components/icons';

class AddPost extends Component {

  submit = values => {
    const newPost = {
      id: uuidv1(),
      timestamp: new Date().getTime(),
      title: values.title,
      category: values.category,
      author: values.author,
      body: values.body
    } 
    this.props.addPost(newPost)
    this.props.history.push(`/`)
  }

  render () {

    return (
      <div className="page-container">
        <div className="post-form-container card medium">
          <div className="form-description-container">
            <div className="form-title-container">
              <div className="form-title-icon"><WriteIcon/></div>
              <div className="form-title-text">Add Post</div>
            </div>
            <div className="form-subtitle">Add a new blog post for people to read, rank and comment on</div>
          </div>
          <PostForm onSubmit={this.submit} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addNewPostAction(post)),
  }
}

export default connect(null, mapDispatchToProps)(AddPost)
