import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#262626",
    height: "100%",
    wordSpacing : "0.2em"
  },
  gridContainer: {
    padding: theme.spacing(4),
    color: "white",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item sm={4}>
          <h2>ABOUT US</h2>
          <p>
            We are a team of 3 computer science engineers/hobbyists who recently came up with the idea to design a web application named Fantasy LEAGUE
            for players and their friends who play football every evening around 8:30 pm to spice up the game a little bit.
          </p>
          <p>Indira Nagar, Lucknow</p>
          <p>Call : +1800-222-3333</p>
        </Grid>
        <Grid item sm={4}>
          <h2>BET 360</h2>
          <p>
            BET 360 is the name of the core feature of the Fantasy League App. It allows a user to choose his favourite 
            players (max 3 including himself) and if any of them scores a goal that day then he will be rewarded with
            points. 
          </p>
        </Grid>
        <Grid item sm={4}>
          <h2>Daily Score</h2>
          <p>
            Keep a track of daily score, hit by an indiviual player. Here you will also find who has been the top goal scorer
            till date
          </p>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
