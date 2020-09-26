import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AddArticle } from "./components/addArticle";
import { Articles } from "./components/articles";
import { Calendar } from "./components/calendar";
import { Entry } from "./components/entry";
import { HomeWrapper } from "./components/homeWrapper";
import { Login } from "./components/login";
import { Profile } from "./components/profile";
import { PrivateRoute } from "./components/privateRoute";
import { Register } from "./components/register";
import { RegisterDoc } from "./components/registerDoc";
import { Patients } from "./components/patients";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/articles" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/docregister">
            <RegisterDoc />
          </Route>
          <PrivateRoute exact path="/patients" >
            <Patients />
          </PrivateRoute>
          <HomeWrapper>
            <PrivateRoute exact path="/articles" >
              <Articles />
            </PrivateRoute>
            <PrivateRoute exact path="/tracker" >
              <Calendar />
            </PrivateRoute>
            <PrivateRoute exact path="/profile" >
              <Profile />
            </PrivateRoute>
            <PrivateRoute exact path="/entry">
              <Entry />
            </PrivateRoute>
            <PrivateRoute exact path="/article">
              <AddArticle />
            </PrivateRoute>
          </HomeWrapper>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
