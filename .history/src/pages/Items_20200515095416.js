import React from "react";
import Container from '@material-ui/core/Container';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../redux/store';
import Results from '../components/results';
import Details from '../components/details';

function Items(props) {

  return 
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/models" component={Results} />
                    <Route path="/details/:itemId" component={Details} />                
                </Switch>
            </BrowserRouter>
        </Provider>
    ;
}
export default Items;