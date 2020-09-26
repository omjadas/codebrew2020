import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from "./components/home";
import { Login } from './components/login';
import { PrivateRoute } from "./components/privateRoute";
import { Register } from './components/register';

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
          <PrivateRoute exact path="/" >
            <Home />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
