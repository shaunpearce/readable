import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import PostForm from '../components/PostForm'
import { addNewPostAction } from '../actions'

class AddPost extends Component {

  submit = values => {
    const newPost = {
      id: uuidv1(),
      timestamp: new Date(),
      title: values.title,
      category: values.category,
      author: values.author,
      body: values.body
    } 
    this.props.addPost(newPost)
    this.props.history.goBack()
  }

  render () {

    return (
      <div>
          <PostForm onSubmit={this.submit} />
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
