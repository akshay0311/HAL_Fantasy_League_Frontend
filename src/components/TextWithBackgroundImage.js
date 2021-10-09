/**
 * Author : Akshay Misra  (akshaycoding123@gmail.com)
 * 
 */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import carouselImage1 from "../images/carousel1.jpg";

import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    position: "relative",
  },
  carouselImage: {
    height: "80%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "500px",
    },
  },
  carouselImageInBet360: {
    height: "80%",
    width: "100%",
    opacity: "0.4",
    [theme.breakpoints.down("sm")]: {
      height: "1000px",
    },
  },
  text1: {
    color: "white",
    position: "absolute",
    top: "20%",
    left: "40%",
    transform: "translate(-50%, -50%)",
    fontSize: "60px",
    wordSpacing: "0.1em",
    fontFamily: "'Anton', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      top: "40%",
      left: "40%",
    },
  },

  text2: {
    color: "#AB5554",
    position: "absolute",
    top: "30%",
    left: "43%",
    transform: "translate(-50%, -50%)",
    fontSize: "60px",
    fontFamily: "'Anton', sans-serif",
    wordSpacing: "0.1em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      top: "50%",
      left: "45%",
    },
  },
  
  bet360: {
    color: "#AB5554",
    position: "absolute",
    top: "25%",
    left: "45%",
    transform: "translate(-50%, -50%)",
    fontSize: "60px",
    wordSpacing: "0.1em",
    fontFamily: "'Anton', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      top: "10%",
      left: "40%",
    },
  },
  aboutBet360: {
    color: "#AB5554",
    position: "absolute",
    top: "40%",
    left: "43%",
    transform: "translate(-50%, -50%)",
    fontSize: "20px",
    fontFamily: "'Anton', sans-serif",
    wordSpacing: "0.1em",
    [theme.breakpoints.down("sm")]: {
      top: "35%",
      left: "45%",
      width : "80%"
    },
  },
}));


/**
 * 
 * @param {*} props -
 * props { aboutBet360 } Description rendered on aboutBet360 page 
 * 
 * @returns Background Image with Text on it on Home Page and About Bet360 page  
 */

function TextWithBackgroundImage(props) {
  const HomePageItems = [
    {
      image: carouselImage1,
      text1: "WELCOME TO",
      text2: "FANTASY LEAGUE",
    },
  ];

  const AboutBet360PageItems = [
    {
      image: carouselImage1,
      text1: "BET 360",
    },
  ];

  return (
    <div>
      {props.aboutBet360
        ? AboutBet360PageItems.map((item, i) => (
            <Item key={i} item={item} aboutBet360={props.aboutBet360} />
          ))
        : HomePageItems.map((item, i) => <Item key={i} item={item} />)}
    </div>
  );
}

/**
 * 
 * @param {*}  
 * @returns Items to be rendered on the the image and Image to be rendered
 */

function Item(props) {
  const classes = useStyles();
  let carouselImageClass;

  if (props.aboutBet360) carouselImageClass = classes.carouselImageInBet360;
  else carouselImageClass = classes.carouselImage;

  return (
    <div className={classes.carouselContainer}>
      <Header />
      {props.aboutBet360 ? (
        <div>
          <span className={classes.bet360}>{props.item.text1}</span>
          <span className={classes.aboutBet360}>{props.aboutBet360}</span>
        </div>
      ) : (
        <div>
          <span className={classes.text1}>{props.item.text1}</span>
          <span className={classes.text2}>{props.item.text2}</span>
        </div>
      )}
      <img
        src={props.item.image}
        alt="carousel1"
        className={carouselImageClass}
      />
    </div>
  );
}

export default TextWithBackgroundImage;
