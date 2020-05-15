
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PrivateRoute from './routes/PrivateRoute';
import Admin from "./pages/Admin";
import AuthForm from "./components/singIn/authForm"
import { AuthContext } from "./context/auth";

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <ul>         
          <li>
            <Link to="/models">Modles</Link>
          </li>
          </ul>
          <Switch>
            <Route exact path="/" component={AuthForm} />
            <PrivateRoute path="/models" component={Admin} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;