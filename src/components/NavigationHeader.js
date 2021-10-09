import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Typography } from "@material-ui/core";
import { People, Home, Person, ExitToApp } from "@material-ui/icons";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
import { auth } from "../firebase";

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
  logoLink : {
    textDecoration : "none"
  },
  navAction: {
    color: "white",
    fontSize: "20px",
    marginTop: theme.spacing(-6),
    marginRight: theme.spacing(3),
  },
  activeNavLink: {
    display: "flex",
    flexDirection: "column",
    textDecoration: "underline 4px solid blue",
  },
  navLink: {
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
  },
  navLabel: {
    color: "white",
    marginTop: theme.spacing(-6),
    marginRight: theme.spacing(3),
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
      fontSize: "13px",
    },
  },
  navIcon: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
    },
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

export default function NavigationHeader(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [pathName, setPathName] = useState();

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setPathName(window.location.href.split("/").at(-1));
  }, [pathName]);

  return (
    <>
      <Link to="/" className={classes.logoLink}>
        <Typography className={classes.logo}>Fantasy League</Typography>
      </Link>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
      >
        {/*<Link to="/" className={classes.navLink}>
          <BottomNavigationAction
            className={classes.navAction}
            icon={<Home />}
          />
          <span className={classes.navLabel}>Home</span>
      </Link>*/}
        <Link
          to="/dashboard"
          className={
            pathName === "dashboard" ? classes.activeNavLink : classes.navLink
          }
        >
          <BottomNavigationAction
            className={classes.navAction}
            icon={<People className={classes.navIcon} />}
          />
          <span className={classes.navLabel}>Dashboard</span>
        </Link>
        <Link
          to="/profile"
          className={
            pathName === "profile" ? classes.activeNavLink : classes.navLink
          }
        >
          <BottomNavigationAction
            className={classes.navAction}
            icon={<Person className={classes.navIcon} />}
          />
          <span className={classes.navLabel}>Profile</span>
        </Link>
        <Link
          to="/leaderboard"
          className={
            pathName === "leaderboard" ? classes.activeNavLink : classes.navLink
          }
        >
          <BottomNavigationAction
            className={classes.navAction}
            icon={<LeaderboardIcon className={classes.navIcon} />}
          />
          <span className={classes.navLabel}>Leaderboard</span>
        </Link>
        <Link to="#" className={classes.navLink} onClick={signOut}>
          <BottomNavigationAction
            className={classes.navAction}
            icon={<ExitToApp className={classes.navIcon} />}
          />
          <span className={classes.navLabel}>Log out</span>
        </Link>
      </BottomNavigation>
    </>
  );
}
