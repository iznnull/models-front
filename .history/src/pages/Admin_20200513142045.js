import React from "react";
import { useAuth } from "../context/auth";

function Admin(props) {

  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <button onClick={logOut}>Log out</button>
      <div>Admin Page</div>
    </div>);
}

export default Admin;