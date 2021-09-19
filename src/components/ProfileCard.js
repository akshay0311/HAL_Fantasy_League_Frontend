import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import jerseyImage from "../images/j2.png";


const useStyles = makeStyles((theme) => ({
    cardContent: {
        marginBottom: theme.spacing(1)
    }
}))

export default function ProfileCard() {
  
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            A
          </Avatar>
        }
        title="Akshay Mishra"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="200"
        image= {jerseyImage}
        alt="Paella dish"
      />
      <CardContent>
          <div className={classes.cardContent}>
            <b>Favourite Team:</b>{" "}<span>Manchester United</span> 
          </div>
          <div className={classes.cardContent}>
            <b>Favourite Player:</b>{" "}<span>Neymar Jr</span> 
          </div>
          <div className={classes.cardContent}>
              <b>Your Score:</b>{" "}<span>123</span>
          </div>
      </CardContent>
    </Card>
  );
}