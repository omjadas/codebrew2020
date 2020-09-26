import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home, HomeWrapper } from "./components/home";
import { Login } from './components/login';
import { PrivateRoute } from "./components/privateRoute";
import { Register } from './components/register';
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
          <HomeWrapper>
            <PrivateRoute exact path="/home/newsfeed" >
              <Login />
            </PrivateRoute>
            <PrivateRoute exact path="/home/tracker" >
              <Calendar />
            </PrivateRoute>
            <PrivateRoute exact path="/home/appointments" >
              <Login />
            </PrivateRoute>
          </HomeWrapper>         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
