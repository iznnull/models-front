import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from "../../context/Auth";
import axios from 'axios';
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
function AuthForm(props) {    
       
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    const [errorMessaje, setErrorMessage] = useState();

    const classes = useStyles();

    function onLoginForm_Submit() {
      axios.post("http://localhost:5000/api/authenticate", {
        user,
        password
      }).then(result => {        
        if (result.status === 200) {
          console.log(result)
          setAuthTokens(result.data);
          return <Redirect to="/admin"/>;
        } else {          
          setErrorMessage("Error: " + result.status);
          console.log("Error: " + result.status);
        }
      }).catch(e => {
        setErrorMessage("Error" + e);
        console.log("Error" + e);
      });        
    }
           
    return <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
            Sign in
            </Typography>

            <form className={classes.form} validate="true" method="get" action="/models" onSubmit={onLoginForm_Submit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="user"
                    label="User"
                    name="user"
                    autoComplete="user"
                    autoFocus
                    onChange={(e) => setUser(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>  
                { this.state.errorMessage &&
  <h3 className="error"> { this.state.errorMessage } </h3> }
                             
            </form>           
        </div>
      </Container>;
}

export default AuthForm;