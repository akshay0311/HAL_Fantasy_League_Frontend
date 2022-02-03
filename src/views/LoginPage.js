import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Card from "../components/CustomCard";
import { FormControl, TextField, Button } from "@mui/material";
import { Redirect } from "react-router";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
  logo: {
    fontFamily: "'Bangers', cursive",
    fontSize: "20px",
  },
  login: {
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
  signupLink: {
    textDecoration: "none",
    fontSize: "18px",
    color: "#1976D2",
  },
}));

// Login Page Layout
function LoginPage() {
  const classes = useStyles();

  const { currentUser } = useAuth();

  console.log(currentUser);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

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

// Form Layout in Login Page Card
function CardContent() {
  const classes = useStyles();
  const [email, setEmail] = useState(); // for setting email state
  const [password, setPassword] = useState(); // for setting password state
  // const [loading, setLoading] = useState(); // for setting loading state

  // handling login in the Login Page
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email.trim(), password);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <Link to="/" className={classes.logo}>
        <h1>Fantasy League</h1>
      </Link>
      <h2 className={classes.login}>Login</h2>
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
          type="password"
          className={classes.textField}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <div className={classes.cardAction}>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            className={classes.cardActionButton}
          >
            Login
          </Button>
          <br />
          <br />
          <Link to="/signup" className={classes.signupLink}>
            Create an account
          </Link>
        </div>
      </FormControl>
    </div>
  );
}

export default LoginPage;
