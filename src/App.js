import React, { Component } from 'react';
import './App.css';
import {ContactForm,RegisterForm} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Hooks with Forms</h1>
          <p>With hooks common functionality can be abstracted away from the concrete component.
            In this example the diffrent forms use the same logic for handling state.
          </p>
        </header>
        <section aria-label="Forms">
          <div className="form-wrapper">
            <ContactForm name="John" />
          </div>

          <div className="form-wrapper">
            <RegisterForm/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
