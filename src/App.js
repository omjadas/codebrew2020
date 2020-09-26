import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from "./components/home";
import { Login } from './components/login';
import { PrivateRoute } from "./components/privateRoute";
import { Register } from './components/register';
import { Questionnaire } from "./components/questionnaire";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/questions">
            <Questionnaire />
          </Route>
          <PrivateRoute exact path="/" >
            <Home />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
