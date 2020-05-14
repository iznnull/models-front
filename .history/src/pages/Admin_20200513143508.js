import React from "react";
import { useAuth } from "../context/auth";
import Container from '@material-ui/core/Container';

function Admin(props) {

  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return <Container component="main" maxWidth="xs">
     <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Log out
                </Button>  
    
    </Container>;
}

export default Admin;