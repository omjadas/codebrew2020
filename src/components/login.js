import { Formik } from "formik";
import { FormikControl } from "formik-react-bootstrap";
import React, { useContext } from "react";
import { Button, Dropdown, DropdownButton, Form, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { FirebaseContext } from "../utils/firebase";

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
    localStorage.removeItem("userEmail");

    firebase.auth.signInWithEmailAndPassword(email, password)
      .then(() => delay(150))
      .then(() => {
        history.push("/articles");
      })
      .catch(e => {
        console.error(e);
      });
  };

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

            <Modal.Footer>
              <DropdownButton title="Register">
                <Dropdown.Item>
                  <Link to="/register" style={{color: "#212529"}}>
                    As Caregiver
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/docregister" style={{color: "#212529"}}>
                    As Supporting Professional
                  </Link>
                </Dropdown.Item>
              </DropdownButton>
              <Button className="ml-auto" type="submit" variant="success" disabled={isSubmitting}>Sign In</Button>
            </Modal.Footer>
          </Form>
        )
      }

    </Formik>
  )
}

export default Login;