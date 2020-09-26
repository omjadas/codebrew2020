import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Calendar } from './components/calendar';
import { HomeWrapper } from "./components/homeWrapper";
import { Login } from './components/login';
import { PrivateRoute } from "./components/privateRoute";
import { Questionnaire } from "./components/questionnaire";
import { Register } from './components/register';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/newsfeed" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <HomeWrapper>
            <PrivateRoute exact path="/newsfeed" >
              <Login />
            </PrivateRoute>
            <PrivateRoute exact path="/tracker" >
              <Calendar />
            </PrivateRoute>
            <PrivateRoute exact path="/appointments" >
              <Login />
            </PrivateRoute>
            <PrivateRoute exact path="/questions">
              <Questionnaire />
            </PrivateRoute>
          </HomeWrapper>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
