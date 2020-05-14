import React from "react";
import { useAuth } from "../context/auth";
import Container from '@material-ui/core/Container';

function Admin(props) {

  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return <Container component="main" maxWidth="xs">
    
    
    </Container>;
}

export default Admin;