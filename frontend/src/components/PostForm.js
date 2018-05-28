import React from 'react'
import { Field, reduxForm } from 'redux-form'

let PostForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-fields-container">
        <Field className="field" name="title" component="input" type="text" placeholder="Title"/>
        <Field className="field" name="author" component="input" type="text" placeholder="Author"/>
        <Field className="field" name="category" component="select" type="text" >
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
        </Field>
        <Field className="field" name="body" component="textarea" type="text" placeholder="Post" rows="4"/>
      </div>
      <div className="form-buttons-container">
        <button className="button primary" type="submit">Submit</button>
      </div>
    </form>
  )
}

PostForm = reduxForm({
  form: 'postForm'
})(PostForm)


export default PostForm