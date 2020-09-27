import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import { AddArticle } from "./components/addArticle";
import { Articles } from "./components/articles";
import { Calendar } from "./components/calendar";
import { Entry } from "./components/entry";
import { HomeWrapper } from "./components/homeWrapper";
import { Login } from "./components/login";
import { Patients } from "./components/patients";
import { PrivateRoute } from "./components/privateRoute";
import { Profile } from "./components/profile";
import { Register } from "./components/register";
import { RegisterDoc } from "./components/registerDoc";
import { Splash } from "./components/splash";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          mapStyles={styles => {
            return {
              position: (styles.foo <= 1) ? 'relative': 'absolute',
              width: '100%',
              height: '100%',
              opacity: styles.opacity
            }
          }}>
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
          <Route exact path="/splash">
            <Splash />
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
        </AnimatedSwitch>
      </BrowserRouter>
    </div>
  );
}

export default App;
