import {Grid, Button } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import React, { useState, useEffect } from "react";
import NavigationHeader from "../components/NavigationHeader";
import CustomDialogBox from "../components/CustomDialogBox";
import { makeStyles } from "@material-ui/core/styles";
import ExtractInitials from "../utils/ExtractInitials";
import { CheckCircle } from "@material-ui/icons";
import { red } from "@mui/material/colors";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

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
      width: "230px",
    },
    "&:hover": {
      backgroundColor: red[500],
      color: "white",
    },
  },
  submitButton: {
    marginTop : "20px",
    marginBottom: "20px",
    width: "80%",
    marginLeft : "10%",
    marginRight: "10%",
    borderRadius: "10px",
    backgroundColor: red[500],
    color: "white",
  },
}));

function SelectPlayersPage() {
  const classes = useStyles();
  const [initials, setInitials] = useState([]);
  const [playersInfo, setPlayersInfo] = useState([]);
  const [playersChosen, setPlayersChosen] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const selectPlayer = (playerId) => {
    if (playersChosen.length >= 3 && !playersChosen.includes(playerId))
      alert("Only 3 players can be chosen");
    else if (playersChosen.includes(playerId)) {
      const index = playersChosen.indexOf(playerId);
      if (index > -1) {
        let new_players_chosen = [...playersChosen];
        new_players_chosen.splice(index, 1);
        setPlayersChosen(new_players_chosen);
      }
    } else {
      let new_players_chosen = [...playersChosen, playerId];
      setPlayersChosen(new_players_chosen);
    }
  };

  const submitSelectedPlayers = () => {
    axios.post(`http://localhost:4000/players/selectPlayers`,
    {
      username: "Akshay Mishra",
      date: null,
      players : playersChosen
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    let username = "Akshay Mishra";
    axios
      .get(`http://localhost:4000/players/getPlayers`)
      .then((result) => setPlayersInfo(result.data.all_players))
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:4000/players/getSelectedPlayers/${username}`)
      .then((result) => {
        setSelectedPlayers(result.data.selected_players);
      })
      .catch((err) => console.log(err));

    let new_initials_Arr = [];
    playersInfo.forEach((player) => {
      let initials = ExtractInitials(player.name);
      new_initials_Arr.push(initials);
    });
    setInitials(new_initials_Arr);
  }, []);

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
                    variant="outlined"
                    className={classes.selectButton}
                    onClick={() => selectPlayer(player.id)}
                  >
                    {playersChosen.includes(player.id) ? (
                      <CheckCircle />
                    ) : (
                      <span>Select</span>
                    )}
                  </Button>
                </div>
              </div>
            </Grid>
          </>
        ))}
      </Grid>
      {playersChosen.length >= 1 && (
        <Grid container>
          <Grid item xs={12}>
            <Button className={classes.submitButton} variant="contained" onClick={handleClickOpen}>
              Submit
            </Button>
          </Grid>
        </Grid>
      )}
      <CustomDialogBox open={open} handleClose={handleClose} submit={submitSelectedPlayers}/>
    </div>
  );
}

export default SelectPlayersPage;
