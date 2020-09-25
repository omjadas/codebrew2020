import React, { useContext } from 'react';
import { FirebaseContext } from "../utils/firebase";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import { FormikControl } from "formik-react-bootstrap";
import '../styles/login.css';

export const Login = () => {
  const firebase = useContext(FirebaseContext);

  function handleSubmit({ email, password }) {
    firebase.auth.signInWithEmailAndPassword(email, password).catch(e => {
      // Handle Errors here.
      var errorCode = e.code;
      var errorMessage = e.message;
      console.error(e);
    });

    console.log(firebase.auth.currentUser)
  }


  return (
    <Formik
      initialValues={{
        age: 1,
      }}
      onSubmit={handleSubmit}>
      {
        ({
          isSubmitting,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div class="text-center form-signin">
              <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
              <label for="inputEmail" class="sr-only">Email address</label>
              <FormikControl
                name="email"
                type="email"
                label="Email Address" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" />
              <FormikControl
                name="password"
                type="password"
                label="Password" class="sr-only" placeholder="Password" />
              <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

              <br />
              <p>or</p>

              <button class="btn btn-lg btn-primary btn-block" onClick={() => window.location.href = '/register'}>Register</button>
            </div>
          </Form>
        )
      }

    </Formik>
  )
}

export default Login;