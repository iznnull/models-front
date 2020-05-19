import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../redux/store';
import Results from '../components/results';
import Details from '../components/details';

function Items(props) {

  return <div>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/models" component={Results} />
                    <Route path="/details/:itemId" component={Details} />                
                </Switch>
            </BrowserRouter>
        </Provider>
        </div>;
}
export default Items;