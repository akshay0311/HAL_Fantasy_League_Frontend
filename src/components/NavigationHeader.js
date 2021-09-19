import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {Typography } from "@material-ui/core";
import { People, Home, Person } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    top: "0",
    opacity: "0.8",
    backgroundColor: red[500],
    textAlign: "center",
    flexGrow: 1,
  },
  logo: {
    fontFamily: "'Bangers', cursive",
    fontSize: "25px",
    flexGrow: 0.4,
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  navAction: {
    color: "white",
    fontSize: "20px",
    marginTop : theme.spacing(-6),
    marginRight : theme.spacing(3)
  },
  navLink: {
    display: "flex",
    flexDirection: "column",
    textDecoration : "none",
  },
  navLabel: {
    color : "white",
    marginTop : theme.spacing(-6),
    marginRight : theme.spacing(3),
    fontSize : "14px"
  },
  avatarContainer: {
    position: "relative",
    float: "right",
    marginRight: theme.spacing(2),
    bottom: "45px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function NavigationHeader() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Typography className={classes.logo}>Fantasy League</Typography>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
      >
        <Link to="/" className={classes.navLink}>
          <BottomNavigationAction
            className={classes.navAction}
            icon={<Home />}
          />
          <span className={classes.navLabel}>Home</span>
        </Link>
        <Link to="/dashboard" className={classes.navLink}>
          <BottomNavigationAction
            className={classes.navAction}
            icon={<People />}
          />
          <span className={classes.navLabel}>Dashboard</span>
        </Link>
        <Link to="/profile" className={classes.navLink}>
          <BottomNavigationAction
            className={classes.navAction}
            icon={<Person />}
          />
          <span className={classes.navLabel}>Profile</span>
        </Link>
      </BottomNavigation>
      <div className={classes.avatarContainer}>
      </div>
    </>
  );
}
