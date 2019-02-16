import React from 'react'

export function abstractForm (initialValues) {
  const [state, setState] = React.useState(initialValues)

  const handleChange = (event) => {
    // generic change handler
    // takes the name and the value of the field and updates the state with it.
    const name = event.target.name
    const value = event.target.value
    const newState = {...state, [name]:value}
    setState(newState)
  }

  const getValue = (name) => {
    return state[name]
  }

  // return what you want to expose in your form
  return { handleChange, getValue }

}