import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home, HomeWrapper } from "./components/home";
import { Login } from './components/login';
import { PrivateRoute } from "./components/privateRoute";
import { Register } from './components/register';
import { Questionnaire } from "./components/questionnaire";
import { Calendar } from './components/calendar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
                <Redirect to="/home/newsfeed" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute exact path="/" >
            <Home />
          </PrivateRoute>
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
