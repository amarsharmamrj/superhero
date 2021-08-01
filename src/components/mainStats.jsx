import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Progress from './progress';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderLeft: '2px solid #3f51b5',
      borderTop: '2px solid #3f51b5',
      borderRight: '2px solid #f50057',
      borderBottom: '2px solid #f50057',
      borderRadius: '10px',
      boxShadow: '1px 5px 10px 2px rgb(0 0 0 / 20%)',
    },
    h6: {
        fontSize: '12px'
    },
    paddingTop10: {
        padding: '5px 0px 0px 0px !important'
    } 
  }));

const MainStats = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
             <Grid container spacing={3}>
                <Grid item md={3} className={classes.paddingTop10}>
                    <Typography variant="h6" color="primary" align="left" className={classes.h6}>Intelligence:</Typography> 
                </Grid>
                <Grid item md={9} className={classes.paddingTop10}>
                    <Progress progress={props.powerstats.intelligence} />  
                </Grid>

                <Grid item md={3} className={classes.paddingTop10}>
                    <Typography variant="h6" color="primary" align="left" className={classes.h6}>Power:</Typography>  
                </Grid>
                <Grid item md={9} className={classes.paddingTop10}>
                    <Progress progress={props.powerstats.power} />
                </Grid>

                <Grid item md={3} className={classes.paddingTop10}>
                    <Typography variant="h6" color="primary" align="left" className={classes.h6}>Combat:</Typography> 
                </Grid>
                <Grid item md={9} className={classes.paddingTop10}>
                    <Progress progress={props.powerstats.combat} /> 
                </Grid>

                <Grid item md={3} className={classes.paddingTop10}>
                    <Typography variant="h6" color="primary" align="left" className={classes.h6}>Durability:</Typography>  
                </Grid>
                <Grid item md={9} className={classes.paddingTop10}>
                    <Progress progress={props.powerstats.durability} />  
                </Grid>

                <Grid item md={3} className={classes.paddingTop10}>
                    <Typography variant="h6" color="primary" align="left" className={classes.h6}>Speed:</Typography>  
                </Grid>
                <Grid item md={9} className={classes.paddingTop10}>
                    <Progress progress={props.powerstats.speed} /> 
                </Grid>

                <Grid item md={3} className={classes.paddingTop10}>
                    <Typography variant="h6" color="primary" align="left" className={classes.h6}>Strength:</Typography> 
                </Grid>
                <Grid item md={9} className={classes.paddingTop10}>
                    <Progress progress={props.powerstats.strength} /> 
                </Grid>
             </Grid>
        </div>
    )
}

export default MainStats