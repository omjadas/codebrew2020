import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { delay } from "../utils/delay";

export const Splash = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    delay(2000)
      .then(() => {
        setRedirect(true);
      });
  });

  if (redirect) {
    return <Redirect to="/articles" />
  } else {
    return (
      <div className="d-flex">
        <img className="w-100 m-auto" src="/ProjectAwesome.png" alt="logo" />
      </div>
    );
  }
};
