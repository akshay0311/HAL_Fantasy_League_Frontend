import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavigationHeader from "../components/NavigationHeader";
import { Grid } from "@material-ui/core";
import CustomTable from "../components/CustomTable";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      paddingTop: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  },
  tableSection: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
}));

function LeaderboardPage() {
  const classes = useStyles();
  const [leaderboardData, setLeaderBoardData] = useState([]); // state for date in leaderboard table
  const columnsToSort = ["Rank"];

   // need to do get request to postgres using axios
   const dummyData = [
    {
      PlayerName: "Akshay Mishra",
      Rank: 4,
      Score: 123,
    },
    {
      PlayerName: "Gauresh",
      Rank: 2,
      Score: 115,
    },
    {
      PlayerName: "Akshat",
      Rank: 8,
      Score: 113,
    },
    {
      PlayerName: "Prashant",
      Rank: 6,
      Score: 100,
    },
    {
      PlayerName: "Ashish",
      Rank: 5,
      Score: 90,
    },
  ];
  
  useEffect(() => {
    setLeaderBoardData(dummyData);
  }, []);

  return (
    <div>
      <NavigationHeader />
      <Grid container className={classes.gridContainer}>
        <Grid item sm={1} xs={12}></Grid>
        <Grid item sm={10} xs={12} className={classes.tableSection}>
          <CustomTable
            tableData={leaderboardData}
            columnsToSort={columnsToSort}
          />
        </Grid>
        <Grid item sm={1} xs={12}></Grid>
      </Grid>
    </div>
  );
}

export default LeaderboardPage;
