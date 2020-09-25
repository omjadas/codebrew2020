import React,  { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home } from "./components/home";
import { Register } from './components/register';
import { Login } from './components/login';
import { FirebaseContext } from "./utils/firebase";

function App() {
  const firebase = useContext(FirebaseContext);

  function PrivateRoute ({component: Component, ...rest}) {
    let authed = false;
    
    console.log(firebase.auth.currentUser);

    return (
      <Route
        {...rest}
        // Authed with firebase
        render={(props) => firebase.auth.currentUser != null
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
