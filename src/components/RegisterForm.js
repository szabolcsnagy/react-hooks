import React from "react";
import { Debug } from "./Debug";
import { Loading } from "./Loading";
import { useAbstractForm } from "./useAbstractForm";

export function RegisterForm(props) {
  const aForm = useAbstractForm({
    values: { name: "", email: "", email_again: "" },
    ...props,
    validate: function (values, touched) {
      let errors = {};
      if (touched.name && values.name.length === 0) {
        errors.name = "Name is required";
      }
      if (touched.email && values.email.length === 0) {
        errors.email = "Email is required";
      }
      if (touched.email_again && values.email !== values.email_again) {
        errors.email_again = "The 2 email address has to match";
      }
      return errors;
    },
  });
  const values = aForm.values;
  const errors = aForm.errors;
  const touched = aForm.touched;
  return aForm.isSubmitting ? (
    <div>
      <Loading statusText="Simulate Submit" /> <Debug {...aForm.debug} />
    </div>
  ) : (
    <form onSubmit={aForm.handleSubmit}>
      <fieldset>
        <legend>Sign Up</legend>
        <div
          className={
            "form-field-wrapper " +
            (errors.name && touched.name ? "problem" : "")
          }
        >
          <div className="field-status">{errors.name}</div>
          <div className="field-info">
            <label htmlFor="name">Name</label>
          </div>
          <div className="field-control">
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={aForm.handleChange}
              id="name"
            />
          </div>
        </div>

        <div
          className={
            "form-field-wrapper " +
            (errors.email && touched.email ? "problem" : "")
          }
        >
          <div className="field-status">{errors.email}</div>
          <div className="field-info">
            <label htmlFor="email">Email</label>
          </div>
          <div className="field-control">
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={aForm.handleChange}
              id="email"
            />
          </div>
        </div>

        <div
          className={
            "form-field-wrapper " +
            (errors.email_again && touched.email_again ? "problem" : "")
          }
        >
          <div className="field-status">{errors.email_again}</div>
          <div className="field-info">
            <label htmlFor="emailAgain">Email Again</label>
          </div>
          <div className="field-control">
            <input
              type="text"
              name="email_again"
              value={values.email_again}
              onChange={aForm.handleChange}
              id="emailAgain"
            />
          </div>
        </div>

        <div className="form-field-wrapper">
          <div className="field-control">
            <input className="button" type="submit" value="Register" />
          </div>
        </div>
      </fieldset>
      <Debug {...aForm.debug} />
    </form>
  );
}
