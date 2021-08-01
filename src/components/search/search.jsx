import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SearchForm from './searchForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '20px',
    marginBottom: '20px',
    boxShadow: '0px 2px 38px rgb(0 0 0 / 30%), 0px 1px 12px rgb(0 0 0 / 22%)'   
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item md={12}>
          <Paper className={classes.card}>
            <Typography variant="h5" color="primary">Search for Superhero or Villain</Typography>  
            <SearchForm />
          </Paper>
        </Grid>
      </Grid>
    // </div>
  );
}
