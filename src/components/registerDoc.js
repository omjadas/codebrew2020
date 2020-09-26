import bsCustomFileInput from "bs-custom-file-input";
import { Formik } from "formik";
import { FormikControl } from "formik-react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { FirebaseContext } from "../utils/firebase";

export const RegisterDoc = () => {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();

  useEffect(() => {
    bsCustomFileInput.init()
  }, [])

  const handleSubmit = ({
    email,
    password,
    name
  }) => {
    firebase
      .doRegisterDoc(
        email,
        password,
        name
      )
      .then(() => {
        history.push("/patients");
      })
      .catch(e => {
        console.error(e);
      });
  };

  return (
    <Formik
      initialValues={{
      }}
      onSubmit={handleSubmit}>
      {
        ({
          isSubmitting,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header><h1>Awesome Profile</h1></Modal.Header>
            <Modal.Body>
              <FormikControl
                name="email"
                type="email"
                label="Email" /> 
              <FormikControl
                name="password"
                type="password"
                label="Password" /> 
              <FormikControl
                name="name"
                type="text"
                label="Full Name:" />
              <FormikControl
                name="institution"
                type="text"
                label="Institution:" />
            </Modal.Body>
            <Modal.Footer>
              <Link className="mr-auto" to="/login">
                <Button>Sign In</Button>
              </Link>
              <Button
                type="submit"
                variant="success"
                disabled={isSubmitting}>
                Register
              </Button>
            </Modal.Footer> 
          </Form>
        )
      }
    </Formik>
  );
}
