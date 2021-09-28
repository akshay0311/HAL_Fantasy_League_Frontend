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
  text1: {
    color: "white",
    position: "absolute",
    top: "20%",
    left: "40%",
    transform: "translate(-50%, -50%)",
    fontSize: "60px",
    wordSpacing: "0.1em",
    fontFamily: "'Anton', sans-serif",
    [theme.breakpoints.down("sm")]:{
        fontSize: "30px",
        top: "40%",
        left : "40%"
    }
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
    [theme.breakpoints.down("sm")]:{
        fontSize: "30px",
        top: "50%",
        left : "45%"
    }
  }
}));

function CustomCarousel() {
  const items = [
    {
      image: carouselImage1,
      text1: "WELCOME TO",
      text2 : "FANTASY LEAGUE"
    }
  ];

  return (
    <div>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
    </div>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <div className={classes.carouselContainer}>
      <Header />
      <span className={classes.text1}>{props.item.text1}</span>
      <span className={classes.text2}>{props.item.text2}</span>
      <img
        src={props.item.image}
        alt="carousel1"
        className={classes.carouselImage}
      />
    </div>
  );
}

export default CustomCarousel;
