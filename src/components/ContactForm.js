import React from 'react'


import {abstractForm} from './abstractForm'
import {Debug} from './Debug'

export function ContactForm (props) {
  const initialState = {...props, values: {name:'',email:'',...props.values}}
  const aForm = abstractForm(initialState)
  const values = aForm.values
  const errors = aForm.errors
  return (
      <form>
        <fieldset>
          <legend>Contact Us</legend>
          <div className={"form-field-wrapper " + (errors.name? 'problem':'')}>
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

          <div className={"form-field-wrapper " + (errors.email? 'problem':'')}>
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
      </form>)
}


/*
export class Form extends React.Component {
  render() {
    return (<form>
      <fieldset>
        <legend>Hello World Form</legend>
      </fieldset>
    </form>)
  }
}
*/

