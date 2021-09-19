import React from "react";
import {Card, CardContent, CardActions} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        background: "#F7F7F7",
        minHeight : 200
    }
}))
function CustomCard({content, action}) {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>{content}</CardContent>
      <br/>
      <CardActions>{action}</CardActions>
    </Card>
  );
}

export default CustomCard;
