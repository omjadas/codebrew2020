import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { FirebaseContext } from "../utils/firebase";

export const PrivateRoute = ({ children, ...rest }) => {
  const firebase = useContext(FirebaseContext)

  console.log(rest);

  if (firebase.auth.currentUser !== null) {
    return (
      <Route {...rest}>
        {children}
      </Route>
    );
  } else {
    return <Redirect to={'/login'} />;
  }
};
