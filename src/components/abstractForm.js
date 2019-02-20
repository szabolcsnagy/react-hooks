import React from 'react'

export function abstractForm (initialState) {
  const [state, setState] = React.useState({validatingBeforeSubmit: false, isSubmitting: false, touched: {}, errors: {}, ...initialState})

  // Event handlers simply set a new state and the validation is performed as a side effect
  // validation as a side effect; runs only when state.values change
  React.useEffect( () => {
    const errors = validateForm()
    // no errors and validating before submit 
    if (Object.keys(errors).length === 0 && state.validatingBeforeSubmit) {
      setState({...state,isSubmitting:true})
      // simulate API call
      setTimeout(submitComplete,2000)
    } 
  },[state.values, state.validatingBeforeSubmit])

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

  const validateForm = () => {
    // validate the form if it provides such function
    if (initialState.validate) {
      const errors = initialState.validate(state)
      // new state
      const newState = {...state,errors:errors,validatingBeforeSubmit:false}
      setState(newState)
      return errors
    }
    return {}
  }

  // simulate a call to an API service
  const submitComplete = () => {
    setState({...state,errors:{},touched:{},isSubmitting:false,validatingBeforeSubmit:false})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // mark all fields to be touched so the validation runs on them.
    // TODO: abstract away validation
    const touchedAll = {}
    const fields = Object.keys(state.values)
    for (var i in fields) {
      touchedAll[fields[i]] =true
    }
    setState({...state,touched:touchedAll,validatingBeforeSubmit:true})
  }

  // return what you want to expose in your form
  return { handleChange, handleSubmit, getValue, getErrors, debug: {...state}, ...state }

}