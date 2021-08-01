import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
}));

const Biography = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>     
            <Grid container spacing={3}>
                <Grid item md={4}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" color="primary" align="left">Intelligence:</Typography> 
                        <Progress progress={props.powerstats.intelligence} />
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" color="primary" align="left">Power:</Typography>  
                        <Progress progress={props.powerstats.power} />
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" color="primary" align="left">Combat:</Typography> 
                        <Progress progress={props.powerstats.combat} /> 
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" color="primary" align="left">Durability:</Typography>  
                        <Progress progress={props.powerstats.durability} /> 
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" color="primary" align="left">Speed:</Typography>  
                        <Progress progress={props.powerstats.speed} /> 
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" color="primary" align="left">Strength:</Typography> 
                        <Progress progress={props.powerstats.strength} /> 
                    </Paper>
                </Grid>
             </Grid> 
        </div>
    )
}

export default Biography