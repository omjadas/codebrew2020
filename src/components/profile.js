import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../utils/firebase";
import "../styles/profile.css";

export const Profile = (props) => {
    const firebase = useContext(FirebaseContext);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        firebase.user
            .then(user => {

                console.log(user)
                return firebase.firestore.collection("users").where("email", "==", user.email).get();
            })
            .then(querySnapshot => {
                querySnapshot.forEach( doc => {
                    console.log(doc.data())
                    setUserData(doc.data());
                })
            })
    }, [])

    if (userData == null) {
        return <></>
    }

    return (
        <>
            <h1 className="profile-name">{userData.name}</h1>

            <p>Diagnosis: {userData.diagnosis}</p>
            <p>Banging: {userData.history.banging}</p>
        </>
    )
}