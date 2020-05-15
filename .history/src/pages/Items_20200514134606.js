import React from "react";
import { useAuth } from "../context/Auth";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from '../redux/store';
import Results from '../components/results';
import Details from '../components/details';

function Items(props) {

  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();    
    localStorage.removeItem("tokens");
    return <Redirect to="/"/>;
  }

  return <Container component="main" maxWidth="m">
        <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/models" component={Results} />
                <Route path="/details/:itemId" component={Details} />                
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

export default Items;