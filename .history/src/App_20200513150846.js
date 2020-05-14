
import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './routes/PrivateRoute';
import Admin from "./pages/Admin";
import AuthForm from "./components/AuthForm"
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
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
          </ul>
          <Route exact path="/" component={AuthForm} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;