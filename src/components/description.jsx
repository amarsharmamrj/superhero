import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';  

import Apperance from './apperance';
import Biography from './biography';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  div: {
    display: 'inline-block'
  },
  boxShadow: {
    borderRadius: '10px !important',
    boxShadow: '0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%)'
  }
}));

export default function Description(props) {
  const classes = useStyles();

  return (
    <Grid item md={9} xs={12} sm={12} className={classes.div}>
    <div className={classes.root}>
      <Accordion defaultExpanded={true} className={classes.boxShadow}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" color="secondary">Appearance</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Apperance data={props.data} apperance={props.apperance} biogrphy={props.biogrphy} height={props.height} weight={props.weight} />
        </AccordionDetails>
        
      </Accordion>

      <Accordion defaultExpanded={true} className={classes.boxShadow}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" color="secondary">Powerstats</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Biography powerstats={props.powerstats} />
        </AccordionDetails>

      </Accordion>

    </div>
    </Grid>
  );
}
