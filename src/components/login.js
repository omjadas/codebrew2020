import React, { useContext } from 'react';
import { FirebaseContext } from "../utils/firebase";
import { Formik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import { FormikControl } from "formik-react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";

function delay(t, v) {
  return new Promise(resolve => {
      setTimeout(resolve.bind(null, v), t)
  });
}

const FormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const Login = () => {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();

  const handleSubmit = ({ email, password }) => {
    localStorage.removeItem('userEmail');

    firebase.auth.signInWithEmailAndPassword(email, password)
      .then(() => delay(150))
      .then(() => {
        history.push("/articles");
      })
      .catch(e => {
        console.error(e);
      });
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
            <Modal.Header>Project Awesome</Modal.Header>
            <Modal.Body>
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
            </Modal.Body>

            <div className="text-center">
              <Button type="submit" variant="success" disabled={isSubmitting}>Sign In</Button>
              <br></br>
              <br></br>
              or
              <br></br>
              <br></br>
              <Link to="/register">
                <Button>
                  Register as Caregiver
                </Button>
              </Link>
              <br></br>
              <br></br>
              <Link to="/docregister">
                <Button>
                  Register as Supporting Professional
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