import React from 'react'
import Grid from '@material-ui/core/Grid';  
import { makeStyles } from '@material-ui/core/styles';
import MainStats from './mainStats'

    
const useStyles = makeStyles( () => ({
    image: {
        height: '280px',
        width: '85%',
        borderRadius: '10px',
        textAlign: 'left'
    },
    div: {
        display: 'inline-block'
    },
    div2: {
        padding: '10px 0px 20px 0px !important',
        margin: '0px 20px 0px 0px',
        borderRadius: '10px',
        boxShadow: '0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%)'
    },
    div4: {
        width: '85%'
    },
    alignItems: {
        alignItems: 'flex-start'
    },
    plr: {
        padding: '0px 20px 0px 0px'
    }
}));

const Image  = (props) => {

    const classes = useStyles();

    return (
        <Grid item md={3} xs={12} sm={12} className={`${classes.div} ${classes.div2} ${classes.plr}`}>
            <img src={props.image} alt={props.name} className={classes.image} />
            <Grid item md={12} className={`${classes.div} ${classes.div4}`}>
                <MainStats powerstats={props.powerstats} />
            </Grid>
        </Grid>
    )
} 

export default Image