import React from "react";
import { useAuth } from "../context/auth";

function Admin(props) {

  const { setAuthTokens } = useAuth();


  return (<div>
    <button onClick={logOut}>Log out</button>
    Admin Page
    </div>);
}

export default Admin;