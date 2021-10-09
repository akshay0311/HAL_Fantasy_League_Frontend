import React from "react";
import Carousel from "../components/TextWithBackgroundImage";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bet: {
    color: "#AC4542",
    fontFamily: "'PT Serif', serif",
  },
}));

function Bet360Page() {
  const classes = useStyles();
  
  const aboutBet360 = `Login into the app and choose your favourite player each day. If you
  player scores a goal on that particular day then you will earn 100
  points. If you are the player on the field who has chosen himself then
  you will earn 200 points. You can choose maximum of 3 players each day
  before the game starts. If at the end of this month you are at the top
  of the leaderboard then you will get Rs.500 as a cash reward.`;


  return (
    <div>
      <section>
        <Carousel aboutBet360={aboutBet360}/>
      </section>
      <br />
    </div>
  );
}

export default Bet360Page;
