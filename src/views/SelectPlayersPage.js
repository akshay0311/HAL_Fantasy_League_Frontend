import { Grid, Button } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import React, { useState, useEffect } from "react";
import NavigationHeader from "../components/NavigationHeader";
import { makeStyles } from "@material-ui/core/styles";
import ExtractInitials from "../utils/ExtractInitials";
import { CheckCircle } from "@material-ui/icons";
import { red } from "@mui/material/colors";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingLeft: theme.spacing(4),
    fontFamily: "'Open Sans', sans-serif",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  avatar: {
    height: theme.spacing(6),
    width: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(8),
      width: theme.spacing(8),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(-1),
    },
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "15px",
  },
  playerContainer: {
    display: "flex",
  },
  selectButton: {
    color: red[500],
    marginTop: theme.spacing(1),
    width: "300px",
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
      width : "230px"
    },
    "&:hover": {
      backgroundColor: red[500],
      color: "white",
    },
  },
}));

function SelectPlayersPage() {
  const classes = useStyles();
  const [initials, setInitials] = useState([]);
  const [playersInfo, setPlayersInfo] = useState([]);

  const selectPlayer = (index) => {
    const new_players = [...playersInfo];
    if (new_players[index]["selected"]) new_players[index]["selected"] = false;
    else new_players[index]["selected"] = true;

    setPlayersInfo(new_players);
  };

  useEffect(() => {
    axios
      .get(`http://172.105.37.155:4000/players/getPlayers`)
      .then((result) => setPlayersInfo(result.data.all_players))
      .catch((err) => console.log(err));

    let new_initials_Arr = [];
    playersInfo.forEach((player) => {
      let initials = ExtractInitials(player.name);
      new_initials_Arr.push(initials);
    });
    setInitials(new_initials_Arr);
  }, [playersInfo]);

  return (
    <div>
      <NavigationHeader />
      <Grid container spacing={6} className={classes.gridContainer}>
        {playersInfo.map((player, index) => (
          <>
            <Grid item sm={4} xs={12}>
              <div className={classes.playerContainer}>
                <Avatar className={classes.avatar} sx={{ bgcolor: red[500] }}>
                  {initials[index]}
                </Avatar>
                <div className={classes.infoContainer}>
                  <span>
                    <b>Name:</b>&nbsp;&nbsp;<span>{player.name}</span>
                  </span>
                  <span>
                    <b>Age:</b>&nbsp;&nbsp;<span>{player.age}</span>
                  </span>
                  <span>
                    <b>Position:</b>&nbsp;&nbsp;<span>{player.position}</span>
                  </span>
                  <span>
                    <b>Goals:</b>&nbsp;&nbsp;<span>{player.goals}</span>
                  </span>
                  <span>
                    <b>Favourite Team:</b>&nbsp;&nbsp;
                    <span>{player.favourite_team}</span>
                  </span>
                  <Button
                    onClick={() => selectPlayer(index)}
                    variant="outlined"
                    className={classes.selectButton}
                  >
                    {player.selected ? <CheckCircle /> : <span>Select</span>}
                  </Button>
                </div>
              </div>
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
}

export default SelectPlayersPage;
