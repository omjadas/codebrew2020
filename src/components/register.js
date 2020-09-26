import bsCustomFileInput from "bs-custom-file-input";
import { Formik } from "formik";
import { FormikControl } from "formik-react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { FirebaseContext } from "../utils/firebase";

const FormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  name: yup.string().required(),
  age: yup.number().min(1).required(),
  diagnosis: yup.string().required(),
});

export const Register = ({profileData}) => {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();
  const [registration, setRegistration] = useState(profileData === undefined)
  const [profileDataState, setProfileData] = useState(profileData)


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
        history.push("/articles");
      })
      .catch(e => {
        console.error(e);
      });
  };

  return (
    <Formik
      initialValues={{
        age: profileData !== undefined ? profileData.age : "",
        email: profileData !== undefined ? profileData.email : ""
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
            {registration && <Modal.Header><h1>Awesome Profile</h1></Modal.Header>}
            <Modal.Body>
              <FormikControl
                name="email"
                type="email"
                label="Email" /> 
              { registration && <FormikControl
                name="password"
                type="password"
                label="Password" /> }
              <FormikControl
                name="name"
                type="text"
                label="Your child's name:" />
              <FormikControl
                name="age"
                type="number"
                label="Your child's age:"/>
              <FormikControl
                name="diagnosis"
                type="text"
                label="Date of Diagnosis: " />
              <FormikControl
                name="NOK"
                type="text"
                label="Name and contact of Parent(s) / Carer(s) / Next of Kin(s) in case of emergency: " />
              <FormikControl
                name="GP"
                type="text"
                label="Name and contact of GP / other health practitioner(s): " />
              <h3>
                Autism History
              </h3>
              <Card className="mb-3">
                <Card.Header><b>Communication Style</b></Card.Header>
                <Card.Body>
                  <FormikControl
                    name="receptive"
                    as="select"
                    label="What is their receptive communication style?">
                    <option>Verbal</option>
                    <option>Non-verbal</option>
                    <option>Visual</option>
                  </FormikControl>
                  <FormikControl
                    name="expressive"
                    as="select"
                    label="What is their expressive communication style?">
                    <option>Verbal</option>
                    <option>Non-verbal</option>
                    <option>Visual</option>
                  </FormikControl>
                  <FormikControl
                    name="communicationTool"
                    type="text"
                    label="Does your child use a communication tool? (eg PECS) If so, provide details: " />
                  <FormikControl
                    name="yesNo"
                    type="text"
                    label="How do they say yes/no?" />
                  <FormikControl
                    name="expressPain"
                    type="text"
                    label="How do they express pain?" />
                  <FormikControl
                    name="tipsComm"
                    type="text"
                    label="What are some good approaches for communicating with your child?" />
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Header><b>Behaviour</b></Card.Header>
                <Card.Body>
                  <FormikControl
                    name="stressed"
                    type="text"
                    label="How do you know if they are stressed?" />
                  <FormikControl
                    name="toAvoid"
                    type="text"
                    label="What things trigger or upset your child?" />
                  <FormikControl
                    name="hypersensitive"
                    type="text"
                    label="Does your child have increased or decreased sensitivity to certain stimuli?" />
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
                  <FormikControl
                  name="hospital"
                  type="text"
                  label="How does your child behave at the doctor's / hospital?" />
                  <p>If they have a Behavioural Management Plan, upload below: </p>
                  <Form.File
                   className="mb-3"
                    name="behaviourManagement"
                    label="Behavioural Management Plan"
                    onChange={(e) => setFieldValue("behaviourManagement", e.currentTarget.files[0])}
                    custom />
                  <FormikControl
                  name="foods"
                  type="text"
                  label="What are your child’s favourite foods and beverages?" />
                  <FormikControl
                    name="toys"
                    type="text"
                    label="What type of toys or activities does your child prefer?" />
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Header><b>Social Interaction</b></Card.Header>
                <Card.Body>
                  <FormikControl
                    name="interactAdults"
                    type="text"
                    label="How does your child interact with adults?" />
                  <FormikControl
                    name="interactAdults"
                    type="text"
                    label="How does your child interact with other children?" />
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
              <h3>
                Other Medical History
              </h3>
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
                    label="Any previous surgeries or procedures? If so, how did they manage?" />
                  <FormikControl
                    name="vaccinations"
                    type="text"
                    label="Is your child up to date with their vaccinations?" />
                  <FormikControl
                    name="familyHistory"
                    type="text"
                    label="Does your family have a history of medical conditions?" />
            </Modal.Body>
            { registration && <Modal.Footer>
              <Link className="mr-auto" to="/login">
                <Button>Sign In</Button>
              </Link>
              <Button
                type="submit"
                variant="success"
                disabled={isSubmitting}>
                Register
              </Button>
            </Modal.Footer> }
          </Form>
        )
      }
    </Formik>
  );
}
