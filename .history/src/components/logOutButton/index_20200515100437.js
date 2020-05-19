import React from 'react';
import { useAuth } from "../../context/Auth";
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Hidden from '@material-ui/core/Hidden';

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
        endIcon={
            <Hidden xsUp>
            <AccountCircle/>
            </Hidden>            
        }
        onClick={logOut}>            
            Log out            
        </Button>;

}
export default LogOutButton;