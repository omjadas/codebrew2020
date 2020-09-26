import bsCustomFileInput from "bs-custom-file-input";
import { Formik } from "formik";
import { FormikControl } from "formik-react-bootstrap";
import React, { useContext, useEffect } from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import * as yup from "yup";
import { FirebaseContext } from "../utils/firebase";

const FormSchema = yup.object().shape({
  name: yup.string().required(),
  url: yup.string().url().required(),
  category: yup.object().shape({
    value: yup.string().required(),
    label: yup.string().required(),
  }).required(),
});

const selectOptions = [
  { value: "about", label: "About Autism" },
  { value: "school", label: "School" },
  { value: "socialisation", label: "Socialisation and Communication" },
  { value: "behaviour", label: "Behaviour" },
  { value: "health", label: "Your Child's Health" },
  { value: "family", label: "Family and Carers" },
  { value: "support", label: "Support" },
  { value: "books", label: "Books" },
  { value: "contact", label: "Get in Contact" },
];

export const AddArticle = () => {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();

  useEffect(() => {
    bsCustomFileInput.init()
  }, [])

  const handleSubmit = (values) => {
    return firebase.submitArticle(values)
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
        name: "",
        url: "",
        category: selectOptions[0],
      }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}>
      {
        ({
          isSubmitting,
          handleSubmit,
          setFieldValue,
          values,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header>Add Article</Modal.Header>
            <Modal.Body>
              <FormikControl
                name="name"
                type="text"
                label="Article Name" />
              <FormikControl
                name="url"
                type="text"
                label="Article URL" />
              <Form.File
                className="mb-3"
                name="image"
                label="Article Image"
                onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}
                custom />
              <Select
                options={selectOptions}
                value={values.category}
                onChange={option => setFieldValue("category", option)} />
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" variant="success" disabled={isSubmitting}>Add Article</Button>
            </Modal.Footer>
          </Form>
        )
      }
    </Formik>
  )
};
