import bsCustomFileInput from "bs-custom-file-input";
import { Formik } from "formik";
import { FormikControl } from "formik-react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { FirebaseContext } from "../utils/firebase";

const FormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  name: yup.string().required(),
  age: yup.number().min(1).required(),
  diagnosis: yup.string().required(),
});

export const Register = () => {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();

  useEffect(() => {
    bsCustomFileInput.init()
  }, [])

  const handleSubmit = ({
    email,
    password,
    name,
    age,
    diagnosis,
    behaviourManagement,
    ...rest
  }) => {
    firebase
      .doRegister(
        email,
        password,
        name,
        age,
        diagnosis,
        rest,
        behaviourManagement
      )
      .then(() => {
        history.push("/");
      })
      .catch(e => {
        console.error(e);
      });
  };

  return (
    <Formik
      initialValues={{
        age: 1,
      }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}>
      {
        ({
          isSubmitting,
          handleSubmit,
          setFieldValue,
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
              <Card className="mb-3">
                <Card.Header>Communication Style</Card.Header>
                <Card.Body>
                  <FormikControl
                    name="receptive"
                    as="select"
                    label="Receptive">
                    <option>Verbal</option>
                    <option>Non-verbal</option>
                    <option>Visual</option>
                  </FormikControl>
                  <FormikControl
                    name="expressive"
                    as="select"
                    label="Expressive">
                    <option>Verbal</option>
                    <option>Non-verbal</option>
                    <option>Visual</option>
                  </FormikControl>
                  <FormikControl
                    name="communicationTool"
                    type="text"
                    label="Uses a communication tool?" />
                  <FormikControl
                    name="yesNo"
                    type="text"
                    label="How do they say yes/no?" />
                  <FormikControl
                    name="expressPain"
                    type="text"
                    label="How do they express pain?" />
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Header>Extreme Behaviour Changes</Card.Header>
                <Card.Body>
                  <FormikControl
                    name="stressed"
                    type="text"
                    label="How do you know if they are stressed?" />
                  <FormikControl
                    name="toAvoid"
                    type="text"
                    label="Things to avoid with your child" />
                  <FormikControl
                    name="hypersensitive"
                    type="text"
                    label="Is your child hypersensitive to certain things?" />
                  <FormikControl
                    name="aggression"
                    type="text"
                    label="Does your child have a history of agitation/aggression?" />
                  <FormikControl
                    name="banging"
                    type="text"
                    label="Does your child often exhibit behaviours such as head banging, screaming, rocking, flapping, hand wringing or repetitive vocalisations?" />
                  <FormikControl
                    name="comfort"
                    type="text"
                    label="What is the best way to comfort your child?" />
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Header>Social</Card.Header>
                <Card.Body>
                  <FormikControl
                    name="interactAdults"
                    type="text"
                    label="How do they interact with adults?" />
                  <FormikControl
                    name="interactAdults"
                    type="text"
                    label="How do they interact with other children?" />
                  <FormikControl
                    name="interactChildren"
                    type="text"
                    label="How do they interact with other children?" />
                  <FormikControl
                    name="eyeContact"
                    type="text"
                    label="Does your child avoid eye contact or being close to other people?" />
                  <FormikControl
                    name="followInstructions"
                    type="text"
                    label="Can your child follow instructions?" />
                  <FormikControl
                    name="focus"
                    type="text"
                    label="How long can your child sit still or focus for?" />
                </Card.Body>
              </Card>
              <FormikControl
                name="foods"
                type="text"
                label="What are your child’s favourite foods or beverages?" />
              <FormikControl
                name="toys"
                type="text"
                label="What type of toys or activities does your child prefer?" />
              <FormikControl
                name="hospital"
                type="text"
                label="How does your child behave at the doctor's / hospital?" />
              <Form.File
                className="mb-3"
                name="behaviourManagement"
                label="Behavioural Management Plan"
                onChange={(e) => setFieldValue("behaviourManagement", e.currentTarget.files[0])}
                custom />
              <Card>
                <Card.Header>Medical Profile</Card.Header>
                <Card.Body>
                  <FormikControl
                    name="medicalConditions"
                    type="text"
                    label="Does your child have any medical conditions?" />
                  <FormikControl
                    name="medications"
                    type="text"
                    label="Does your child take any medications?" />
                  <FormikControl
                    name="allergies"
                    type="text"
                    label="Does your child have any allergies?" />
                  <FormikControl
                    name="pastSurgeries"
                    type="text"
                    label="Has your child undergone any past surgeries? If so how did they manage?" />
                  <FormikControl
                    name="vaccinations"
                    type="text"
                    label="Is your child up to date with their vaccinations?" />
                  <FormikControl
                    name="familyHistory"
                    type="text"
                    label="Does your family have a history of medical conditions?" />
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer>
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
