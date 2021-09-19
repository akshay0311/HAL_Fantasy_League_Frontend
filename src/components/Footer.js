import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#262626",
    height: "100%",
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
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros.
          </p>
          <p>Address : 269 Main Street London England</p>
          <p>Call : +1800-222-3333</p>
        </Grid>
        <Grid item sm={4}>
          <h2>BET 360</h2>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros.
          </p>
        </Grid>
        <Grid item sm={4}>
          <h2>Daily Score</h2>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros.
          </p>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
