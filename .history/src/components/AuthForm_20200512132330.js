import {MDCTextField} from '@material/textfield';
import React from "react";

function AuthForm(props) {
  return <div>
    <form>
    <MDCTextField id="standard-basic" label="Standard" />
    <MDCTextField id="filled-basic" label="Filled" variant="filled" />
    <MDCTextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  </div>;
}

export default AuthForm;