import React, { useContext, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { FirebaseContext } from "../utils/firebase";
import { Patient } from "./patient";
import { TopBar } from "./topbar";

export const Patients = () => {
  const firebase = useContext(FirebaseContext);

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    firebase.user
      .then(user => {
        return firebase.firestore.collection("users").where("isDoc", "==", false).get();
      })
      .then(querySnapshot => {
        const patientsQuery = [];

        querySnapshot.forEach(doc => {
          patientsQuery.push(doc.data())
        })

        setPatients(patientsQuery);
      })
  }, [firebase.firestore, firebase.user]);


  return (
    <>
      <TopBar isDoctor={true} />
      <h3 className="headings mt-3">Patients</h3>

      <ListGroup>
        {patients.map(p => (
          <Patient name={p.name} email={p.email} />
        ))}
      </ListGroup>
    </>
  )
};
