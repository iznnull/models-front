import React from "react";
import { useAuth } from "../context/auth";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";

function Admin(props) {

  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();    
    return <Redirect to="/"/>;
  }

  return <Container component="main" maxWidth="xs">
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