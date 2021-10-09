import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Card from "../components/CustomCard";
import { FormControl, TextField, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
  signup: {
    fontFamily: "'Open Sans', sans-serif",
  },
  logo: {
    fontFamily: "'Bangers', cursive",
    fontSize: "20px",
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
    fontSize: "18px",
    color: "#1976D2",
  },
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
  const [userName, setUserName] = useState(); // state for username
  const [favPlayer, setFavPlayer] = useState(); // state for favorite player
  const [favTeam, setFavTeam] = useState(); // state for favorite team
  const [email, setEmail] = useState(); // state for user email
  const [password, setPassword] = useState(); // state for user password
  const [cPassword, setCPassword] = useState(); // // state for confirm user password
  const [error, setError] = useState(); // state for error
  const [loading, setLoading] = useState(); // state for loading
  const [success, setSuccess] = useState(); // state for success

  // Handling the clicking of Sign up
  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== cPassword) return setError("Password do not match!!");

    try {
      setError("");
      setLoading(true);
      await auth.createUserWithEmailAndPassword(email, password);
      setSuccess("You are successfully signed up!! Move to login page.");
    } catch {
      setSuccess("");
      setError(`Failed to create an account`);
    }
    setLoading(false);
  }

  return (
    <div>
      <Link to="/" className={classes.logo}>
        <h1>Fantasy League</h1>
      </Link>
      <h2 className={classes.signup}>Signup</h2>
      {error && <Alert severity="warning">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <br />
      <FormControl className={classes.formField}>
        <TextField
          id="standard-basic"
          label="User Name"
          variant="standard"
          className={classes.textField}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
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
          label="Favourite Team"
          variant="standard"
          className={classes.textField}
          onChange={(e) => setFavTeam(e.target.value)}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Favourite Player"
          variant="standard"
          className={classes.textField}
          onChange={(e) => setFavPlayer(e.target.value)}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          className={classes.textField}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Confirm Password"
          variant="standard"
          className={classes.textField}
          type="password"
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
          <Link to="/login" className={classes.loginLink}>
            Already have a account?
          </Link>
        </div>
      </FormControl>
    </div>
  );
}

export default SignupPage;
