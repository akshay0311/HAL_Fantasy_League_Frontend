import React from "react";
import { AppBar, Button, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@mui/material/colors";

const useStyles = makeStyles({
  header: {
    top: "0",
    opacity: "0.7",
    backgroundColor: red[500],
    width : "100%"
  },
  logo: {
    fontFamily: "'Bangers', cursive",
    fontSize: "25px",
    flexGrow: 1,
  },
  menu: {
      display: "flex",
      listStyleType: "none",
  },
  menuItem: {
      marginRight : "20px",
      textDecoration: "none",
      fontFamily: "'Alumni Sans', sans-serif",
      fontSize : "25px",
      '&:hover': {
          cursor : "pointer"
      }
  }
});

function Header() {
  const classes = useStyles();
  const menus = ["HOME", "SIGNUP"]
  return (
    <div>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <Typography className={classes.logo}>Fantasy League</Typography>
          <div>
            <ul className={classes.menu}>
                {menus.map(menu => <li className={classes.menuItem}>{menu}</li>)}
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
