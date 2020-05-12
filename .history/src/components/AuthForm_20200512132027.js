import TextField from '@material/textfield';
import React from "react";

function AuthForm(props) {
  return <div>
    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="standard-basic" label="Standard" />
    <TextField id="filled-basic" label="Filled" variant="filled" />
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  </div>;
}

export default AuthForm;