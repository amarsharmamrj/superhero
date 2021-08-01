import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

const Apperance = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
             <Grid container spacing={3}>
                <Grid item md={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" color="primary" align="left">Name:</Typography>  
                        <Typography variant="h5" color="secondary" align="left">{props.data.name}</Typography>  
                    </Paper>
                </Grid>
                <Grid item md={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" color="primary" align="left">Gender:</Typography>  
                        <Typography variant="h5" color="secondary" align="left">{props.apperance.gender}</Typography>  
                    </Paper>
                </Grid>
                <Grid item md={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" color="primary" align="left">Height:</Typography>  
                        <Typography variant="h5" color="secondary" align="left">{props.height}</Typography>  
                    </Paper>
                </Grid>
                <Grid item md={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" color="primary" align="left">Weight:</Typography>  
                        <Typography variant="h5" color="secondary" align="left">{props.weight}</Typography>  
                    </Paper>
                </Grid>
             </Grid>
        </div>
    )
}

export default Apperance