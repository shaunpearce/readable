import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import PostForm from './PostForm'
import { fetchPost, editPostAction } from '../actions'

class EditPost extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
    this.setState({
      id,
    })
  }
  
  submit = values => {
    const editedPost = {
      id: this.state.id,
      title: values.title,
      category: values.category,
      author: values.author,
      body: values.body
    } 

    this.props.editPost(this.state.id, editedPost)
  }

  render () {
    const { post } = this.props

    const postValues = {
      initialValues: {
        id: post.id,
        timestamp: post.timestamp,
        title: post.title,
        category: post.category,
        author: post.author,
        body: post.body
      },
      enableReinitialize: true,
    }

    return (
      <div>
          <PostForm {...postValues} onSubmit={this.submit} />
      </div>
    )
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  //RECHECK: Is it crazy or should it map to state in componentDidMount after getPost?
  const { id } = ownProps.match.params
  return {
    post: {
      ...posts[id]
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id)),
    editPost: (id, post) => dispatch(editPostAction(id, post)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)

