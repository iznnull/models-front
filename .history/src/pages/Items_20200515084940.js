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

  return <Container component="main" maxWidth="m">
        <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/models" component={Results} />
                <Route path="/details/:itemId" component={Details} />                
            </Switch>
        </BrowserRouter>
    </Provider>
    </Container>;
}

export default Items;