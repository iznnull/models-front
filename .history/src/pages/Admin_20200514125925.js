import React from "react";
import { useAuth } from "../context/auth";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import Results from './components/results';
import Details from './components/details';

function Admin(props) {

  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();    
    localStorage.removeItem("tokens");
    return <Redirect to="/"/>;
  }

  return <Container component="main" maxWidth="xs">
        <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/results" component={Results} />
                <Route path="/details/:itemId" component={Details} />
                <Redirect from="/" to="/results" />
            </Switch>
        </BrowserRouter>
    </Provider>
     <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={logOut}
    >
        Log out
    </Button>  
    
    </Container>;
}

export default Admin;