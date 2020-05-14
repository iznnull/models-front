import React from "react";
import { useAuth } from "../context/auth";

function Admin(props) {

  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return <Container component="main" maxWidth="xs">
    
    
    </Container>;
}

export default Admin;