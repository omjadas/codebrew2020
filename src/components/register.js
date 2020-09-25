import { Formik } from "formik";
import { FormikControl } from "formik-react-bootstrap";
import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import * as yup from "yup";
import { FirebaseContext } from "../utils/firebase";

const FormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  name: yup.string().required(),
  age: yup.number().min(1).required(),
  triggers: yup.array().of(yup.string().required()),
  routines: yup.array().of(yup.string().required()),
  diagnosis: yup.string().required(),
});

export const Register = ({ show, onHide }) => {
  const firebase = useContext(FirebaseContext);
  const [triggers, setTriggers] = useState(0);
  const [routines, setRoutines] = useState(0);

  const handleSubmit = (values) => {
    console.log(values);
    firebase.doRegister(
      values.email,
      values.password,
      values.name,
      values.age,
      values.triggers,
      values.routines,
      values.diagnosis
    );
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
        age: 1,
        triggers: [],
        routines: [],
        diagnosis: "",
      }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}>
      {
        ({
          isSubmitting,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
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
                label="Name" />
              <FormikControl
                name="age"
                type="number"
                label="Age" />
              <FormikControl
                name="diagnosis"
                type="text"
                label="Diagnosis" />
              {
                [...Array(triggers).keys()].map(i => (
                  <FormikControl
                    key={i}
                    type="text"
                    label={`Trigger ${i + 1}`}
                    name={`triggers[${i}]`} />
                ))
              }
              {
                [...Array(routines).keys()].map(i => (
                  <FormikControl
                    key={i}
                    type="text"
                    label={`Routine ${i + 1}`}
                    name={`routine[${i}]`} />
                ))
              }
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="mr-2"
                disabled={isSubmitting}
                onClick={() => setTriggers(triggers + 1)}>
                Add Trigger
              </Button>
              <Button
                className="mr-auto"
                disabled={isSubmitting}
                onClick={() => setRoutines(routines + 1)}>
                Add Routine
              </Button>
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
