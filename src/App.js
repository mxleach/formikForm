import React from "react";
import { Formik, Field, Form } from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Field Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Username should be an email';
    }
    return error;
  }
  function validatePsw(value) {
    let error;
    if (!value) {
      error = 'Field Required';
    }
    return error;
  }
  
  return (
    <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert('Login Successful');
      }}

    >
     {({ errors, touched, isValidating }) => (
      <Form>
        
        <label htmlFor="email">Email</label>
        <Field
          id="emailField"
          name="email"
          validate={validateEmail}
          placeholder="email@example.com"
          type="email"
        />
        {<div id="emailError">{errors.email}</div>}
        
        <label htmlFor="password">Password</label>
        <Field
          id="pswField"
          name="password"
          validate={validatePsw}
          placeholder="**********"
          type="password"
        />
        {<div id="pswError">{errors.password}</div>}
        <button id="submitBtn" type="submit">Submit</button>
      
      </Form>
     )}
    </Formik>
  </div>
  );
}

export default App;
