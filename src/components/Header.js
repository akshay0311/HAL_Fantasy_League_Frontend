import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  header: {
    top: "0",
    opacity: "0.7",
    backgroundColor: red[500],
    width: "100%",
  },
  logo: {
    fontFamily: "'Bangers', cursive",
    fontSize: "25px",
  },
  logoLink : {
    flexGrow: 1,
    textDecoration : "none",
    color : "white",
  },
  menu: {
    display: "flex",
    listStyleType: "none",
  },
  menuItem: {
    marginRight: "20px",
    textDecoration: "none",
    fontFamily: "'Alumni Sans', sans-serif",
    fontSize: "25px",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
    },
  },
  menuLink: {
    textDecoration: "none",
    color: "white",
  },
}));

function Header() {
  const classes = useStyles();
  const menus = [
    { name: "SIGNUP", link: "/signup" },
    { name: "LOGIN", link: "/login" },
  ];
  return (
    <div>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <Link to="/" className={classes.logoLink}>
            <Typography className={classes.logo}>Fantasy League</Typography>
          </Link>
          <div>
            <ul className={classes.menu}>
              {menus.map((menu) => (
                <Link className={classes.menuLink} to={menu.link}>
                  <li className={classes.menuItem}>{menu.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
