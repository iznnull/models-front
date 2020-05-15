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
        fullWidth
        variant="contained"
        color="primary"
        onClick={logOut}>
            <AccountCircle/>
        </Button>;

}
export default LogOutButton;