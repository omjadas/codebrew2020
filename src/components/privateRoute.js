import React, { useContext, useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { FirebaseContext } from "../utils/firebase";

export const PrivateRoute = ({ children, ...rest }) => {
  const firebase = useContext(FirebaseContext)

  const [user, setUser] = useState("")

  useEffect(() => {
    firebase.user.then(setUser)
  }, [])

  if (user === "") {
    return <></>
  }

  if (user !== null) {
    return (
      <Route {...rest}>
        {children}
      </Route>
    );
  } else {
    return <Redirect to="/login" />;
  }
};
