import React from 'react'
import { Field, reduxForm } from 'redux-form'

let PostForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <Field name="author" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <Field name="body" component="textarea" type="text" />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <Field name="category" component="select" type="text">
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
        </Field>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

PostForm = reduxForm({
  form: 'postForm'
})(PostForm)


export default PostForm