import React, { useContext } from 'react';
import { FirebaseContext } from "../utils/firebase";
import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import { FormikControl } from "formik-react-bootstrap";
import '../styles/login.css';
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";

const FormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const Login = () => {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();

  const handleSubmit = ({ email, password }) => {
    firebase
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch(e => {
        console.error(e);
      }
    );

    console.log(firebase.auth.currentUser)
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}>
      {
        ({
          isSubmitting,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="text-center form-signin">
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <FormikControl
                name="email"
                type="email"
                label="Email Address"
                id="inputEmail"
                placeholder="Email Address" />
              <FormikControl
                name="password"
                type="password"
                label="Password"
                placeholder="Password" />

              <Button type="submit" variant="primary" disabled={isSubmitting}>Sign In</Button>

              <br />
              <p>or</p>

              <Link to="/register">
                <Button>
                  Register
                </Button>
              </Link>
            </div>
          </Form>
        )
      }

    </Formik>
  )
}

export default Login;