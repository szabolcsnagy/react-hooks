import React from 'react'
import {abstractForm} from './abstractForm'
import {Loading} from './Loading'
import {Debug} from './Debug'

export function ContactForm (props) {

  // initial state must list default values for all fields. 
  // The initial values can be overriden by props
  const initialState = {...props, values: {name:'',email:'',...props.values},
    validate: function (state) {
      let errors = {}
      if ( (state.touched.name) && state.values.name.length === 0) {
        errors.name = 'Name is required'
      }
      if ( (state.touched.email) && state.values.email.length === 0) {
        errors.email = 'Email is required'
      }
      return errors;
    }
  }
  const aForm = abstractForm(initialState)
  const values = aForm.values
  const errors = aForm.errors
  const touched = aForm.touched
  return ( aForm.isSubmitting ? <div><Loading statusText="Simulate Submit"/>  <Debug {...aForm.debug} /></div> :
      <form onSubmit={aForm.handleSubmit}>
        <fieldset>
          <legend>Contact Us</legend>
          <div className={"form-field-wrapper " + (errors.name && touched.name? 'problem':'')}>
            <div className="field-status">{errors.name}</div>
            <div className="field-info">
              <label htmlFor="name">Name</label>
            </div>
            <div className="field-control">
              <input type="text" name="name" 
                  value={values.name} 
                  onChange={aForm.handleChange} 
                  id="name"/>
            </div>
          </div>

          <div className={"form-field-wrapper " + (errors.email && touched.email ? 'problem':'')}>
          <div className="field-status">{errors.email}</div>
            <div className="field-info">
              <label htmlFor="email">Email</label>
            </div>
            <div className="field-control">
              <input type="text" name="email" 
                  value={values.email} 
                  onChange={aForm.handleChange} 
                  id="email"/>
            </div>
          </div>

          <div className="form-field-wrapper">
            <div className="field-control">
              <input className="button" type="submit" value="Submit" />
            </div>
          </div>
        </fieldset>
        <Debug {...aForm.debug} />
      </form>
    )
}
