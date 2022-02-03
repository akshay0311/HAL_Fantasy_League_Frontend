import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import jerseyImage from "../images/j2.png";
import ExtractInitials from "../utils/ExtractInitials";

const useStyles = makeStyles((theme) => ({
    cardContent: {
        marginBottom: theme.spacing(1)
    }
}))

export default function ProfileCard(props) {
  
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props?.userInfo[0]?.name && ExtractInitials(props?.userInfo[0]?.name)}
          </Avatar>
        }
        title={props?.userInfo[0]?.name}
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
            <b>Favourite Team:</b>{" "}<span>{props?.userInfo[0]?.favourite_team}</span> 
          </div>
          <div className={classes.cardContent}>
            <b>Favourite Player:</b>{" "}<span>{props?.userInfo[0]?.favourite_player}</span> 
          </div>
          <div className={classes.cardContent}>
              <b>Your Score:</b>{" "}<span>{props?.userInfo[0]?.points}</span>
          </div>
      </CardContent>
    </Card>
  );
}