import React, {useEffect, useState} from 'react'
import NavigationHeader from "../components/NavigationHeader";
import { makeStyles } from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import ProfileCard from '../components/ProfileCard';
import CustomTable from '../components/CustomTable';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1),
            paddingTop: theme.spacing(2)
        }
    },
    tableSection: {
        [theme.breakpoints.down("sm")]: {
            marginTop : theme.spacing(2)
        }
    }
}))


function ProfilePage() {
    const classes = useStyles();

    const [tableData, setTableData] = useState([]);

    useEffect(()=> {
        axios.get("http://:4000/scores/getAllScores")
        .then(result => {
            setTableData(result.data.all_scores)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
        <div>
            <NavigationHeader/>
            <Grid container spacing={3} className={classes.gridContainer}>
                <Grid item sm={4} xs={12}>
                    <ProfileCard/>
                </Grid>        
                <Grid item sm={8} xs={12} className={classes.tableSection}>
                    <CustomTable tableData={tableData}/>
                </Grid>
            </Grid> 
        </div>
    )
}

export default ProfilePage
