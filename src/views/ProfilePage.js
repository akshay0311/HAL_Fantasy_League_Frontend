import React from "react";
import NavigationHeader from "../components/NavigationHeader";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import ProfileCard from "../components/ProfileCard";
import CustomTable from "../components/CustomTable";
import tableData from "./../jsons/scoreData.json";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingLeft: theme.spacing(8),
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
  },
  tableSection: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
}));

function ProfilePage() {
  const classes = useStyles();

  return (
    <div>
      <NavigationHeader />
      <Grid container className={classes.gridContainer}>
        <Grid item sm={4} xs={12}>
          <ProfileCard />
        </Grid>
        <Grid item sm={8} xs={12} className={classes.tableSection}>
          <CustomTable tableData={tableData} />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfilePage;
