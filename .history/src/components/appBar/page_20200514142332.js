import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Autocomplete from '../autocomplete';
import { useAuth } from "../context/Auth";
import './style.css';

function Page(props) {
    const {
        text,
        suggestions,
        onChangeText,
        onChangeSelection,
        setAuthTokens = useAuth()
    } = props;

    function logOut() {
        setAuthTokens();    
        localStorage.removeItem("tokens");
        return <Redirect to="/"/>;
      }

    return (
        <AppBar position="static">
            <Toolbar className="appbar">
                <Typography variant="h6" color="inherit">
                    Ateam
                </Typography>

                <Autocomplete
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
                    onChangeSelection={onChangeSelection}
                />

                <AccountCircle>
                <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={logOut}
    >
        Log out
    </Button>  
                </AccountCircle>
            </Toolbar>
        </AppBar>
    );
}

export default Page;
