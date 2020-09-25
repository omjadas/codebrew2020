import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from "./components/home";
import { Register } from './components/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
