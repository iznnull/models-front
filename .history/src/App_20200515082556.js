
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PrivateRoute from './routes/PrivateRoute';
import Items from "./pages/Items";
import AuthForm from "./components/singIn/AuthForm"
import { AuthContext } from "./context/Auth";

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  function goTo(e) {
    props.history.push("/models")
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <ul>         
          <li>
            <Link onClick={goTo.bind(this)}>Models</Link>
          </li>
          </ul>
          <Switch>
            <Route exact path="/" component={AuthForm} />
            <PrivateRoute path="/models" component={Items} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;