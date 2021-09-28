import React, { useState, useEffect } from "react";
import Carousel from "../components/CustomCarousel";
import Card from "../components/CustomCard";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import jerseyImage from "../images/j2.png";
import CustomTable from "../components/CustomTable";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    fontSize: "40px",
  },
  subContent: {
    fontSize: "20px",
    marginTop: theme.spacing(1),
  },
  gridContainer: {
    padding: theme.spacing(2),
  },
  bet: {
    color: "#AC4542",
    fontFamily: "'PT Serif', serif",
  },
  link : {
    textDecoration : "none",
    color : "grey",
    marginLeft : theme.spacing(2),
    fontSize : "18px"
  }
}));

function HomePage() {
  const classes = useStyles();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get("http://172.105.37.155:4000/players/getPlayers")
      .then((result) => {
        let all_players = result.data.all_players;
        let filtered_all_players = [];

        all_players.forEach((player) => {
          filtered_all_players.push({ Name: player.name, Goals: player.goal });
        });

        setTableData(filtered_all_players);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <section>
        <Carousel />
      </section>
      <br />
      <section>
        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid item sm={4} xs={12}>
            <Card
              content={<CardContent />}
              action={<CardAction link = "/" />}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card
              content={<CardContent1 />}
              action={<CardAction link = "/dashboard"/>}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <CustomTable tableData={tableData} />
          </Grid>
        </Grid>
      </section>
      <br />
      <section>
        <Footer />
      </section>
    </div>
  );
}

function CardContent() {
  const classes = useStyles();
  return (
    <div className={classes.cardContent}>
      <div>
        <b>BET</b>&nbsp;<b className={classes.bet}>360</b>
      </div>
      <div className={classes.subContent}>
        <span>Choose your player and get 100 points</span>
      </div>
    </div>
  );
}

function CardContent1() {
  const classes = useStyles();
  return (
    <Grid container spacing={0}>
      <Grid item xs={4}>
        <img src={jerseyImage} width="90%" alt="players" />
      </Grid>
      <Grid item xs={8}>
        <div className={classes.cardContent}>
          <div>
            <span>See Players</span>
          </div>
          <div className={classes.subContent}>
            <span>Check out all the players</span>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

function CardAction(props) {
  const classes = useStyles();
  return <Link to={props.link} className={classes.link}>Learn More</Link>;
}

export default HomePage;
