import React from 'react'

export function abstractForm (initialValues) {
  const [state, setState] = React.useState({touched: {}, errors: {}, ...initialValues})

  const handleChange = (event) => {
    // generic change handler
    // takes the name and the value of the field and updates the state with it.
    const name = event.target.name
    const value = event.target.value
    const newState = {
      ...state, 
      values: {...state.values, [name]:value},
      touched: {...state.touched, [name]:true}
    }
    setState(newState)
  }

  const getValue = (name) => {
    return state.values[name]
  }
  const getErrors = (name) => {
    return state.errors[name]
  }

  // return what you want to expose in your form
  return { handleChange, getValue, getErrors, debug: {...state}, ...state }

}