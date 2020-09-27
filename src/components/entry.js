import React, { useContext, useEffect, useState } from "react";
import { Formik } from "formik";
import { FormikControl } from "formik-react-bootstrap";
import * as yup from "yup";
import { Button, Form, Modal } from "react-bootstrap";
import { FirebaseContext } from "../utils/firebase";
import { Question } from "./question";
import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const FormSchema = yup.object().shape({
  environmentalInfo: yup.string().required("This is a required field."),
  socialInteraction: yup.number().min(1).max(5).required(),
  communication: yup.number().min(1).max(5).required(),
  difficultBehaviour: yup.number().min(1).max(5).required(),
  attention: yup.number().min(1).max(5).required(),
  sleepQuality: yup.number().min(1).max(5).required(),
  overallMood: yup.number().min(1).max(5).required(),
  otherComments: yup.string(),
});

export const Entry = () => {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();
  const location = useLocation();
  const [data, setData] = useState(null);

  const date = location.hash.substring(1);

  useEffect(() => {
    firebase.user
      .then(user => {
        let localStorageResult = localStorage.getItem("userEmail");
        let email  = localStorageResult === null ? user.email : localStorageResult;

        return firebase.firestore.collection("entries").where("time", "==", date).where("user", "==", email).get();
      })
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setData(doc.data());
        });
      })
  }, [firebase.firestore, firebase.user, date]);

  const onSubmit = (values) => {
    var submittedDate = date !== "" ? date : new Date().toISOString().substr(0,10)

    firebase.submitEntry( submittedDate, values)
      .then(() => {
        history.push("/tracker");
      })
      .catch(e => {
        console.error(e);
      });
  };


  if (date !== ""  && data === null) {
    return <></>;
  }

  return (
    <Formik
      initialValues={{
        environmentalInfo: data == null ? "" : data.environmentalInfo,
        otherComments: data == null ? "" : (data.otherComments === undefined ? "" : data.otherComments),
        difficultBehaviour: data == null ? "" : data.difficultBehaviour,
        attention: data == null ? "" : data.attention,
        socialInteraction: data == null ? "" : data.socialInteraction,
        communication: data == null ? "" : data.communication,
        sleepQuality: data == null ? "" : data.sleepQuality,
        overallMood: data == null ? "" : data.overallMood,
      }}
      validationSchema={FormSchema}
      onSubmit={onSubmit}>
      {
        ({
          isSubmitting,
          handleSubmit,
          setFieldValue,
          values,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header>
              <FontAwesomeIcon className="mr-auto" icon={faLongArrowAltLeft} size="lg" onClick={() => history.goBack()}/>
              <span className="text-center">Date: {date !== "" ? date : new Date().toISOString().substr(0,10)}</span>
            </Modal.Header>
            <Modal.Body>
              <FormikControl
                as="textarea"
                name="environmentalInfo"
                label="What did your child do today?" />
              <Question
                onSelect={(i) => setFieldValue("socialInteraction", i)}
                question="Social Interaction"
                info="How well did they get on with friends / family / strangers?"
                value={values.socialInteraction} />
              <Question
                onSelect={(i) => setFieldValue("communication", i)}
                question="Communication"
                info="How well did they express themselves today? How well did they listen?"
                value={values.communication} />
              <Question
                onSelect={(i) => setFieldValue("difficultBehaviour", i)}
                question="Difficult Behaviour"
                info="Was their behaviour disruptive and difficult to manage?"
                value={values.difficultBehaviour}/>
              <Question
                onSelect={(i) => setFieldValue("attention", i)}
                question="Attention"
                info="How well did they pay attention?"
                value={values.attention} />
              <Question
                onSelect={(i) => setFieldValue("sleepQuality", i)}
                question="Sleep Quality"
                info="How well did they sleep?"
                value={values.sleepQuality} />
              <Question
                onSelect={(i) => setFieldValue("overallMood", i)}
                question="Overall Mood"
                info="Overall, did they have a happy day?"
                value={values.overallMood} />
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
