import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../utils/firebase";
import "../styles/profile.css";
import { Register } from "./register";

export const Profile = () => {
  const firebase = useContext(FirebaseContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    firebase.user
      .then(user => {
        let localStorageResult = localStorage.getItem("userEmail");
        let email = localStorageResult === null ? user.email : localStorageResult;

        return firebase.firestore.collection("users").where("email", "==", email).get();
      })
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          setUserData(doc.data());
        })
      })
  }, [firebase.firestore, firebase.user]);

  if (userData == null) {
    return <></>;
  }

  return (
    <Register profileData={userData} />
  );
};
