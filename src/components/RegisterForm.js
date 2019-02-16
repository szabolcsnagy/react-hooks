import React from 'react'


import {abstractForm} from './abstractForm'

export function RegisterForm (props) {
  const aForm = abstractForm({name:'',email:'',email_again:'',...props})
  return (
      <form>
        <fieldset>
          <legend>Sign Up</legend>
          <div className="form-field-wrapper">
            <div className="field-info">
              <label htmlFor="name">Name</label>
            </div>
            <div className="field-control">
              <input type="text" name="name" 
                  value={aForm.getValue('name')} 
                  onChange={aForm.handleChange} 
                  id="name"/>
            </div>
          </div>

          <div className="form-field-wrapper">
            <div className="field-info">
              <label htmlFor="email">Email</label>
            </div>
            <div className="field-control">
              <input type="text" name="email" 
                  value={aForm.getValue('email')} 
                  onChange={aForm.handleChange} 
                  id="email"/>
            </div>
          </div>

          <div className="form-field-wrapper">
            <div className="field-info">
              <label htmlFor="emailAgain">Email Again</label>
            </div>
            <div className="field-control">
              <input type="text" name="email_again" 
                  value={aForm.getValue('email_again')} 
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

