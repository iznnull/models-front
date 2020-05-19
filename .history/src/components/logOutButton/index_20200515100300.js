import React from 'react';
import { useAuth } from "../../context/Auth";
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';

function LogOutButton(props) {    
    const { setAuthTokens } = useAuth();

    function logOut() {
        setAuthTokens();    
        localStorage.removeItem("tokens");
        return <Redirect to="/"/>;
    }

    return <Button
        type="submit"        
        variant="contained"
        color="secondary"
        endIcon={<AccountCircle/>}
        onClick={logOut}>
            <Hidden xsUp>
            Log out
            </Hidden>
            
        </Button>;

}
export default LogOutButton;