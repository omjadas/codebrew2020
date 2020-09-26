import React, { useContext } from "react";
import { Formik } from "formik";
import { FormikControl } from "formik-react-bootstrap";
import * as yup from "yup";
import { Button, Form, Modal } from "react-bootstrap";
import { FirebaseContext } from "../utils/firebase";
import { Question } from "./question";
import { useHistory } from "react-router-dom";

const FormSchema = yup.object().shape({
  environmentalInfo: yup.string().required("This is a required field."),
});

export const Questionnaire = () => {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();

  const onSubmit = (values) => {
    firebase.submitEntry(values)
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
        environmentalInfo: "",
      }}
      validationSchema={FormSchema}
      onSubmit={onSubmit}>
      {
        ({
          isSubmitting,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header>Questionnaire</Modal.Header>
            <Modal.Body>
              <FormikControl
                as="textarea"
                name="environmentalInfo"
                label="What did your child do today?" />
              <Question
                onSelect={(i) => setFieldValue("socialInteraction", i)}
                question="Social Interaction"
                info="How well did they get on with friends / family / strangers?" />
              <Question
                onSelect={(i) => setFieldValue("socialInteraction", i)}
                question="Communication"
                info="How well did they express themselves today? How well did they listen?" />
              <Question
                onSelect={(i) => setFieldValue("socialInteraction", i)}
                question="Difficult Behaviour"
                info="Was their behaviour disruptive and difficult to manage?" />
              <Question
                onSelect={(i) => setFieldValue("socialInteraction", i)}
                question="Attention"
                info="How well did they pay attention?" />
              <Question
                onSelect={(i) => setFieldValue("socialInteraction", i)}
                question="Sleep Quality"
                info="How well did they sleep?" />
              <Question
                onSelect={(i) => setFieldValue("socialInteraction", i)}
                question="Overall Mood"
                info="Overall, did they have a happy day?" />
              <FormikControl
                as="textarea"
                name="otherComments"
                label="Any other comments?" />
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" variant="success" disabled={isSubmitting}>
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        )
      }
    </Formik>
  );
};
