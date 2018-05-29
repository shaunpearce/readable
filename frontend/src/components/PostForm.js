import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { fetchCategories } from '../actions'


let PostForm = props => {
  const { handleSubmit, categories } = props

  const categorySelect = (
    <Field className="field" name="category" component="select" type="text" >
      {Object.values(categories).map((category, index) => {
          return(
            <option value={category.path} key={index}>{category.name}</option>
          )
        })
      }
    </Field>
  )

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-fields-container">
        <Field className="field" name="title" component="input" type="text" placeholder="Title"/>
        <Field className="field" name="author" component="input" type="text" placeholder="Author"/>
        {categorySelect}
        <Field className="field" name="body" component="textarea" type="text" placeholder="Post" rows="4"/>
      </div>
      <div className="form-buttons-container">
        <button className="button primary" type="submit">Submit</button>
      </div>
    </form>
  )
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchCategories())
  }
}

PostForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm)

export default reduxForm({
  form: 'postForm'
})(PostForm)