import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

let CommentForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="body">Body</label>
        <Field name="body" component="textarea" type="text" />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <Field name="author" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

CommentForm = reduxForm({
  form: 'CommentForm'
})(CommentForm)


export default CommentForm