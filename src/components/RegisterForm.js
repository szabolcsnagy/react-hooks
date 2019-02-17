import React from 'react'
import {Debug} from './Debug'

import {abstractForm} from './abstractForm'

export function RegisterForm (props) {
  const aForm = abstractForm({values: {name:'',email:'',email_again:''},...props})
  const values = aForm.values
  const errors = aForm.errors
  return (
      <form>
        <fieldset>
          <legend>Sign Up</legend>
          <div className={"form-field-wrapper " + (errors.name? 'problem':'')}>
            <div className="field-status">
              {errors.name}
            </div>
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

          <div className="form-field-wrapper">
            <div className="field-status">
              {errors.email}
            </div>
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
            <div className="field-status">
              {errors.email_again}
            </div>
            <div className="field-info">
              <label htmlFor="emailAgain">Email Again</label>
            </div>
            <div className="field-control">
              <input type="text" name="email_again" 
                  value={values.email_again} 
                  onChange={aForm.handleChange}
                  id="emailAgain"/>
            </div>
          </div>

          <div className="form-field-wrapper">
            <div className="field-control">
              <input className="button" type="submit" value="Register" />
            </div>
          </div>
         
        </fieldset>
        <Debug {...aForm.debug}/>
      </form>)
}
