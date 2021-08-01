import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    bg11: {
        height: '200px',
        width: '200px',
        backgroundColor: 'blue'
    },
    bg22: {
        height: '200px',
        width: '400px',
        backgroundColor: 'orange'
      }
  }));
  

const About = (() => {

    const classes = useStyles();

    return (
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <div className={classes.bg11}>
                    </div>                    
                </Grid>
                <Grid item md={8}>
                    <div className={classes.bg22}>
                    </div>                    
                </Grid>
            </Grid>
    )
})

export default About