
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PrivateRoute from './routes/PrivateRoute';
import Items from "./pages/Items";
import AuthForm from "./pages/AuthForm"
import { AuthContext } from "./context/Auth";

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("token"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("token", JSON.stringify(data));
    setAuthTokens(data);
  }
  
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
        {authTokens === null &&
          <ul>         
            <li>
              <Link to="/models">Models</Link>
            </li>
          </ul>
        }          
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