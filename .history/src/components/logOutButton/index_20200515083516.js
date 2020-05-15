import React from 'react';
import { useAuth } from "../context/Auth";
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

function logOutButton(props) {
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
  onClick={logOut}
>
  Log out
</Button> 

}
export default logOutButton