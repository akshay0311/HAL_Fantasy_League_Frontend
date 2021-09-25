import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Card from "../components/CustomCard";
import { FormControl, TextField, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import {auth} from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
  signup: {
    fontFamily: "'Open Sans', sans-serif",
  },
  formField: {
    width: "85%",
  },
  textField: {
    marginTop: theme.spacing(3),
  },
  cardActionButton: {
    width: "100%",
  },
  loginLink: {
    textDecoration: "none",
    fontSize : "18px",
    color: "#1976D2"
  }
}));

// Signup Page Layout
function SignupPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={4}></Grid>
        <Grid item sm={4} xs={12}>
          <Card content={<CardContent />} />
        </Grid>
        <Grid item sm={4}></Grid>
      </Grid>
    </div>
  );
}

// Form Layout inside card body
function CardContent() {
  const classes = useStyles();
  const [email, setEmail] = useState(); // for saving email state
  const [password, setPassword] = useState(); // for saving password state
  const [cPassword, setCPassword] = useState(); // // for saving confirm password state
  const [error, setError] = useState(); // for setting error state
  const [loading, setLoading] = useState(); // for setting load state
  const [success, setSuccess] = useState(); // for successfully signing up

  
  // Handling the clicking of Sign up 
  async function handleSubmit(e) {

    e.preventDefault();
    if (password !== cPassword)
      return setError("Password do not match!!");

    try {
      setError("");
      setLoading(true);
      await auth.createUserWithEmailAndPassword(email.trim(), password);
      setSuccess("You are successfully signed up!! Move to login page.")
    } catch {
      setSuccess("")
      setError(`Failed to create an account`);
    }
    setLoading(false);
  }

  return (
    <div>
      <h1 className={classes.signup}>Signup</h1>
      {error && <Alert severity="warning">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <br />
      <FormControl className={classes.formField}>
        <TextField
          id="standard-basic"
          label="Email Address"
          variant="standard"
          className={classes.textField}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          className={classes.textField}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Confirm Password"
          variant="standard"
          className={classes.textField}
          onChange={(e) => setCPassword(e.target.value)}
        />
        <br />
        <br />
        <div className={classes.cardAction}>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            onClick={handleSubmit}
            className={classes.cardActionButton}
          >
            Signup
          </Button>
          <br />
          <br />
          <a href = "/login" className={classes.loginLink}>Already have a account?</a>
        </div>
      </FormControl>
    </div>
  );
}

export default SignupPage;
