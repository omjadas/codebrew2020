import React, { useContext } from 'react';
import { FirebaseContext } from "../utils/firebase";
import { Formik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import { FormikControl } from "formik-react-bootstrap";
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
            <Modal.Header>Sign In</Modal.Header>
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
            <Modal.Footer>
              <Link className="mr-auto" to="/register">
                <Button>
                  Register
                </Button>
              </Link>
              <Button type="submit" variant="success" disabled={isSubmitting}>Sign In</Button>
            </Modal.Footer>
          </Form>
        )
      }

    </Formik>
  )
}

export default Login;