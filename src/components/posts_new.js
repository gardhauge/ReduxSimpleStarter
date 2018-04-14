import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  // Wiring up the JSX of the field
  renderField(field) {
    //takes field.meta.touched and assign it to touched (and the same for error)
    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (

      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Post Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>

    );
  }
}

function validate(values) {
  const errors = {};

  //validate thee inputs from 'values'
  if (!values.title || values.title.length < 3) {
    //'title' refers to the input name
    errors.title = "enter a title with at least 3 characters!";
  }

  if (!values.categories) {
    errors.categories = "enter a category!";
  }

  if (!values.content) {
    errors.content = "enter content!";
  }

  //if errors is empty, the form is fine to submit
  //but if there are errors, reduxForm won't submit it.
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
