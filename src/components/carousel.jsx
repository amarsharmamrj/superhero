import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
      height: '410px',
      borderRadius: '10px'
    },
    center: {
        textAlign: 'center'
    }
  }));

function Carousel2(props)
{

    var items = [
        {
            url:"https://www.superherodb.com/pictures2/portraits/10/100/727.jpg"
        },
        {
            url: "https://www.superherodb.com//pictures2/portraits/10/100/85.jpg"
        },
        {
            url: "https://www.superherodb.com/pictures2/portraits/10/100/667.jpg"
        },
        {
            url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"
        }
    ]

    return (
        <Carousel interval={1000} navButtonsAlwaysVisible={true}>
            {
                items.map( (item, i) => <Item key={i} url={item.url} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    const classes = useStyles();
    
    return (
            <Grid container justifyContent="center">
                <Grid item md={12}>
                    <div  className={classes.center}>
                        <img className={classes.image} src={props.url} alt={props.key} />
                    </div>
                </Grid>
            </Grid>
    )
}

export default Carousel2