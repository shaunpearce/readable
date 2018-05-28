import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CommentForm = props => {
  const { handleSubmit, onCancel } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-fields-container">
          <Field className="field" name="body" component="textarea" type="text" placeholder="Comment" rows="2"/>
          <Field className="field" name="author" component="input" type="text" placeholder="Author"/>
      </div>
      
      <div className="form-buttons-container">
        {onCancel && <div className="button secondary" onClick={() => onCancel()}>Cancel</div>}
        <button className="button primary" type="submit">Submit</button>
      </div>
    </form>
  )
}

CommentForm = reduxForm({
  form: 'CommentForm'
})(CommentForm)


export default CommentForm