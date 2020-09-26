import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../utils/firebase";
import "../styles/profile.css";
import { Register } from "./register";

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
        <Register profileData={userData} />
    )
}