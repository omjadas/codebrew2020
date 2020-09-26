import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../utils/firebase";
import { Link, useHistory, useLocation } from "react-router-dom";
import {TopBar} from "./topbar.js"
import { ListGroup, ListGroupItem } from "react-bootstrap";

export const Patients = () => {
    const firebase = useContext(FirebaseContext);
    const location = useLocation();
    const history = useHistory();
    
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        firebase.user
        .then(user => {
            return firebase.firestore.collection("users").where("isDoc", "==", false).get();
        })
        .then(querySnapshot => {
            const patientsQuery = [];
            
            querySnapshot.forEach( doc => {
                patientsQuery.push(doc.data())
            })

            setPatients(patientsQuery);
        })
    }, [firebase.firestore, firebase.user]);


    return (
        <>
            <TopBar isDoctor={true}/>
            <h3 className="headings mt-3">Patients</h3>

            <ListGroup>
                { patients.map( p => (
                    <Patient name={p.name} email={p.email}/>
                ))}
            </ListGroup>
        </>
    )
}

const Patient = ({name, email}) => {
    return (
        <ListGroup.Item onClick={() => {
            localStorage.setItem('userEmail', email);
            window.location.href = "/tracker";
        }}>{name}</ListGroup.Item>
    )
}